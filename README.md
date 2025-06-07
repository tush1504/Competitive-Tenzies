# 🎲 Tenzies Game - React.js

A simple and fun dice game built using **React.js**, featuring:
- Roll counter
- Live timer ⏱️
- Best time tracking (stored in `localStorage`)
- Confetti animation on win 🎉
- Keyboard focus for accessibility

## 🚀 Demo

![Tenzies Game Demo](https://github.com/tush1504/Competitive-Tenzies/blob/main/public/Screenshot%202025-06-07%20181319.png)

## 📜 Rules

1. Click "Roll" to roll 10 dice.
2. Click on dice to "hold" them at their current value.
3. Keep rolling until **all dice are the same and held**.
4. Win the game with the **lowest number of rolls** and **fastest time**!

---

## 🧠 Technologies Used

- ⚛️ React.js (Functional Components + Hooks)
- 🎉 [react-confetti](https://www.npmjs.com/package/react-confetti)
- 🔑 [nanoid](https://www.npmjs.com/package/nanoid) for unique dice IDs
- 🧠 useEffect, useState, useRef for game logic and timing
- 🧠 Local storage to store the best time

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tenzies-game.git
cd tenzies-game

# Install dependencies
npm install

# Start the development server
npm start
```

---

## 🗂️ Project Structure

```
📁 src/
│
├── 📄 App.js         # Main game logic and timer
├── 📄 Die.js         # Single die component
├── 📄 index.js       # ReactDOM entry point
├── 📄 style.css      # Game styles
└── 📄 ...            # Other files
```

---

## 🖼️ Screenshots

### ✅ Game In Progress
![Starting](https://github.com/tush1504/Competitive-Tenzies/blob/main/public/Screenshot%202025-06-07%20173534.png)

### 🎉 Winning Screen with Confetti
![Win Screen](https://github.com/tush1504/Competitive-Tenzies/blob/main/public/Screenshot%202025-06-07%20173513.png)

---

## 🧪 Features

- 🎲 Dynamic dice roll logic
- 🕒 Real-time timer using `setInterval` and `useEffect`
- 💾 Best time saved in browser via `localStorage`
- 🧮 Roll count tracking
- 🚀 Restart with one button click
- ✅ Accessibility support with focus

---

## 📌 LocalStorage Key Used

- `"bestTime"`: stores the best time in milliseconds

---

## 🧑‍💻 Author

**Tushar Kant Sahu**  
[GitHub Profile](https://github.com/tush1504)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## ⭐️ Support

If you like this project, leave a ⭐️ on [GitHub](https://github.com/tush1504/Competitive-Tenzies) to support it!

