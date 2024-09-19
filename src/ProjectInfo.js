// Desc: Contains information about projects that I have worked on

const ProjectInfo = [
    {
        id: 1,
        name: 'HelloFit',
        type: 'App',
        date: '2021.08 - 2023.05',
        role: 'Software Developer & UI/UX Designer',
        description: 'Program that helps you to exercise at the gym with AI personal trainer. It uses Pytorch and OpenCV to detect your body and give you feedback on your posture and movement. It also has a mobile app that you can use to track your progress and get personalized workout plans. It is a project that I worked on with a team of 4 people for a Engineering Design And Development.',
        image: `${process.env.PUBLIC_URL}/assets/HelloFitCover.png`,
        skills: ['Python', 'AI', 'Android Studio']
    },
    {
        id: 2,
        name: 'Gesture Remote',
        type: 'App & Hardware',
        date: '2023.09 - 2023.011',
        role: 'Software Developer',
        description: 'Program that helps you to control your computer with hand gestures. It uses AI to detect your hand gestures and Arduino to send signals to your computer. It is a project that I worked on with one other person who designed the hardware.',
        image: `${process.env.PUBLIC_URL}/assets/GestureRemoteCover.png`,
        skills: ['Python', 'AI', 'Arduino']
    },
    {
        id: 3,
        name: 'Flappy Bird AI',
        type: 'Program',
        date: '2024.01 - 2024.02',
        role: 'Software Developer',
        description: 'Program that plays Flappy Bird game using AI. It uses a genetic algorithm to train the AI to play the game. It is a project that I worked on to learn more about AI and game development.',
        image: `${process.env.PUBLIC_URL}/assets/FlappyBirdAiCover.png`,
        skills: ['Javascript', 'AI', 'HTML']
    },
    {
        id: 4,
        name: 'Pixel Fire',
        type: 'Game',
        date: '2021.07 - 2023.03',
        role: 'Game Developer',
        description: 'Game that I made using Unity. It is a 2D platformer game where you try to avoid enemy attacks and survive waves. It is a project that I worked on to learn about Unity.',
        image: `${process.env.PUBLIC_URL}/assets/PixelFireCover.png`,
        skills: ['Unity', 'C#']
    },
    {
        id: 5,
        name: 'Perfect Keyboard',
        type: 'Program',
        date: '2024.02 - 2023.03',
        role: 'Software Developer',
        description: 'Program that finds the fastest keyboard layout to type based on most popular phrases used in SMS. It uses genetic algorithm to find layout that minimizes the distance when typing. It is a project that I worked on to learn more about genetic algorithms and optimization.',
        image: `${process.env.PUBLIC_URL}/assets/PerfectKeyboardCover.png`,
        skills: ['Python', 'AI', 'OpenCV']
    },
    {
        id: 6,
        name: 'LSTM Stock Prediction',
        type: 'Program',
        date: '2024.02 - 2023.04',
        role: 'Software Developer',
        description: 'Program that predicts stock prices using LSTM neural network. It uses historical stock data to train the model and predict future stock prices. It is a project that I worked on to learn more about AI and stock market.',
        image: `${process.env.PUBLIC_URL}/assets/LSTMStockPredictionCover.png`,
        skills: ['Python', 'Sci-Kit Learn', 'AI']
    },
    {
        id: 7,
        name: 'Coin Detection',
        type: 'Program',
        date: '2023.06 - 2023.07',
        role: 'Software Developer',
        description: 'Program that detects coins in an image using OpenCV. It uses image processing techniques to detect coins and calculate the total number of the coins. It is a project that I worked on to learn more about image processing and computer vision.',
        image: `${process.env.PUBLIC_URL}/assets/CoinDetectionCover.png`,
        skills: ['Python', 'OpenCV']
    },
    {
        id: 9,
        name: 'CIFAR-10 Image Classification',
        type: 'Program',
        date: '2023.08 - 2023.09',
        role: 'Software Developer',
        description: 'Program that classifies images in CIFAR-10 dataset using Convolutional Neural Network. It uses Tensorflow to train the model and classify the images. It is a project that I worked on to learn more about AI and image classification.',
        image: `${process.env.PUBLIC_URL}/assets/CIFAR10ClassificationCover.png`,
        skills: ['Python', 'AI', 'Tensorflow']
    }
];

export default ProjectInfo;