# TypeHour Frontend

Welcome to **TypeHour**, a fast-paced multiplayer typing racing game built for a take-home assessment for PlayHour.ai. This repository contains the frontend code for the game, showcasing a combination of cutting-edge web technologies and delightful animations.

## 🎮 About the Game

TypeHour is a multiplayer game where players compete to type through a given paragraph as quickly and accurately as possible. The first player to complete the paragraph wins!

### How to Play
1. **Join or Create a Game**:
    - Enter an existing game ID or create a new game.
2. **Race to Type**:
    - Type the provided paragraph as quickly and accurately as possible.
    - Progress is displayed in real-time for all players.
3. **Win**:
    - The first player to complete the paragraph is the winner, but all players can see their scores and rankings at the end.

## 🛠️ Technologies Used

- **[RxJS](https://rxjs.dev/)**: For reactive state management and handling real-time updates efficiently.
- **[Storybook](https://storybook.js.org/)**: For building and testing UI components in isolation.
    - **Storybook Documentation**: [View Storybook Components](https://678d43a05beaf5b2705b8134-mtyslrykwi.chromatic.com)
- **[Framer Motion](https://www.framer.com/motion/)**: For smooth animations and transitions.
- **[Vite](https://vitejs.dev/)**: A fast and modern frontend build tool.
- **[Socket.IO](https://socket.io/)**: For real-time communication between the client and server.

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or later)
- **npm** or **yarn**

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ore-codes/typehour-webapp.git
   cd typehour-webapp
   ```  

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```  

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory with the following content:
   ```env
   VITE_SERVER_URL=http://localhost:3000
   ```  
   Replace `http://localhost:3000` with your backend server URL if it's running elsewhere.

4. **Run the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```  
   Open your browser and navigate to `http://localhost:5173` to play the game locally.

### Run Storybook

To view and interact with the UI components used in the game:
```bash
npm run storybook
# or
yarn storybook
```  
Storybook will be accessible at `http://localhost:6006`.

## 🌟 Features

- **Real-Time Multiplayer**: Powered by Socket.IO for seamless interactions between players.
- **Reactive UI**: Built using RxJS to handle live updates in player progress and game states.
- **Interactive Animations**: Framer Motion makes the game visually engaging and smooth.
- **Component Isolation**: Storybook ensures high-quality, reusable UI components.
- **Modern Build Tooling**: Vite enables lightning-fast development and builds.

## 🖼️ Storybook Documentation

Explore the complete UI documentation for TypeHour components:  
[View Storybook](https://678d43a05beaf5b2705b8134-mtyslrykwi.chromatic.com)

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---  

Thank you for checking out **TypeHour**! 🎉  
