import { useState , useEffect , useRef} from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice())
    const [cnt , setCnt] = useState(0)
    const refBtn = useRef(null)

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    // State for Best Time
    const [bestTime, setBestTime] = useState(23450);

    // useEffect Hook that gets bestTime from localStorage
    useEffect(() => {
        const bestTime = JSON.parse(localStorage.getItem("bestTime"));
        if (bestTime) {
            setBestTime(bestTime);
        }
    }, []);

    // Calculate time using useEffect Hook & setInterval() method
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    useEffect(() => {
        if (gameWon) {
            setRunning(false);  // ⏹️ Stop timer
            if (time < bestTime || bestTime === 0) {
                setBestTime(time);
                localStorage.setItem("bestTime", JSON.stringify(time));
            }
        }
    }, [gameWon]);

        
    useEffect(() =>{
        if(gameWon){
            refBtn.current?.focus()
        }
    },[gameWon])

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                // value: Math.ceil(Math.random() * 6),
                value: Math.ceil(Math.random()*6),
                isHeld: false,
                id: nanoid()
            }))
    }
    
    function rollDice() {
    if (!gameWon) {
        if (cnt === 0) {
            setRunning(true); 
        }

        setDice(oldDice => oldDice.map(die =>
            die.isHeld ?
                die :
                { ...die, value: Math.ceil(Math.random() * 6) }
        ))
        setCnt(cnt + 1)
    } else {
        setDice(generateAllNewDice())
        setCnt(0)
        setTime(0)
        setRunning(false) // ⏹️ Stop timer on reset
    }
}


    function hold(id) {
        setDice(oldDice => oldDice.map(die =>
            die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        ))
    }

    const diceElements = dice.map(dieObj => (
        <Die
            key={dieObj.id}
            value={dieObj.value}
            isHeld={dieObj.isHeld}
            hold={() => hold(dieObj.id)}
        />
    ))

    return (
        <main>
            {gameWon && <Confetti
            numberOfPieces={1000}
            initialVelocityY={{min:2 , max:10}}
            width={window.innerWidth}
            height={window.innerHeight}
             />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="timer">
                    <div className="current-time">
                        <h3 className="current">Current</h3>
                        <div>
                            <span>
                                {("0" + Math.floor((time / 60000) % 60)).slice(
                                    -2
                                )}
                                :
                            </span>
                            <span>
                                {("0" + Math.floor((time / 1000) % 60)).slice(
                                    -2
                                )}
                                :
                            </span>
                            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                        </div>
                    </div>
                    <div className="best-time">
                        <h3 className="best">Best</h3>
                        <div>
                            <span>
                                {(
                                    "0" + Math.floor((bestTime / 60000) % 60)
                                ).slice(-2)}
                                :
                            </span>
                            <span>
                                {(
                                    "0" + Math.floor((bestTime / 1000) % 60)
                                ).slice(-2)}
                                :
                            </span>
                            <span>
                                {("0" + ((bestTime / 10) % 100)).slice(-2)}
                            </span>
                        </div>
                    </div>
                </div>

            {cnt>0 && <h3 onClick={rollDice} id="counting" >Total Rolls:{cnt}</h3>}

            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice} ref={refBtn}>
                {gameWon ? "New Game" : "Roll"}
            </button>
            
        </main>
    )
}