import { image } from "framer-motion/client";

const ProjectInfo = [
    {
        id: 1,
        name: 'HelloFit',
        type: 'App',
        date: '2021.08 - 2023.05',
        role: 'Software Developer & UI/UX Designer',
        description: 'App that helps you track your fitness progress and improve your weightlifting form through AI camera analysis.',
        skills: ['PYTHON', 'AI', 'KOTLIN', 'FIREBASE', 'FIGMA'],
        image: `${process.env.PUBLIC_URL}/assets/HelloFit/HelloFitCover.png`,
        imagesList: [
            { caption: 'Design 1 Home', src: `${process.env.PUBLIC_URL}/assets/HelloFit/HelloFit6.png` },
            { caption: 'Design 1 Analysis', src: `${process.env.PUBLIC_URL}/assets/HelloFit/HelloFit7.png` },
            { caption: 'Design 2 Home', src: `${process.env.PUBLIC_URL}/assets/HelloFit/HelloFit8.png` },
            { caption: 'Design 2 Analysis', src: `${process.env.PUBLIC_URL}/assets/HelloFit/HelloFit9.png` },
            { caption: 'Design Final Home', src: `${process.env.PUBLIC_URL}/assets/HelloFit/HelloFit10.png` },
            { caption: 'Training Graphs', src: `${process.env.PUBLIC_URL}/assets/HelloFit/HelloFit1.png` },
            { caption: 'Confusion Matrix', src: `${process.env.PUBLIC_URL}/assets/HelloFit/HelloFit2.png` },
            { caption: 'Back Contour Estimation', src: `${process.env.PUBLIC_URL}/assets/HelloFit/HelloFit3.png` },
            { caption: 'Bar Path Tracking', src: `${process.env.PUBLIC_URL}/assets/HelloFit/HelloFit4.png` },
            { caption: 'Face Direction Analysis', src: `${process.env.PUBLIC_URL}/assets/HelloFit/HelloFit5.png` }
        ],
        development: [
            {
                title: 'AI Camera Analysis',
                descriptions: [
                    'Used MediaPipe to detect and track key body keypoints for pose detection',
                    'Evaluated curvature of the back contour during the weightlfiting exercise',
                    'Utilized YOLO for bar path tracking and to visualize the bar path in the app',
                    'Calculated joint angles for knees, elbows, and heel',
                    'Analyzed looking direction of the face during the exercise'
                ],
            },
            {
                title: 'App Development',
                descriptions: [
                    'Designed the app using Figma and Canva to create prototypes',
                    'Developed the app using Android Studio and Firebase for the backend',
                    'Implemented the logging system and user authentication',
                    'Needed to integrate the AI camera analysis into the app',
                ],
            }
        ]
    },

    {
        id: 2,
        name: 'Gesture Remote',
        type: 'App & Hardware',
        date: '2023.09 - 2023.11',
        role: 'Software Developer',
        description: 'Program that helps you to control your computer with hand gestures. It uses AI to detect your hand gestures and Arduino to send signals to your computer.',
        image: `${process.env.PUBLIC_URL}/assets/GestureRemote/GestureRemoteCover.png`,
        skills: ['PYTHON', 'AI', 'ARDUINO'],
        imagesList: [
            { caption: 'Hand Keypoints', src: `${process.env.PUBLIC_URL}/assets/GestureRemote/GestureRemote1.png` },
            { caption: 'Model Layers', src: `${process.env.PUBLIC_URL}/assets/GestureRemote/GestureRemote2.png` },
            { caption: 'Training Loss', src: `${process.env.PUBLIC_URL}/assets/GestureRemote/GestureRemote3.png` },
            { caption: 'Test Loss', src: `${process.env.PUBLIC_URL}/assets/GestureRemote/GestureRemote4.png` },
            { caption: 'Confusion Matrix', src: `${process.env.PUBLIC_URL}/assets/GestureRemote/GestureRemote5.png` }
        ],
        development: [
            {
                title: 'Hand Detection',
                descriptions: [
                    'Used MediaPipe to detect and track hand keypoints for gesture detection',
                    'Trained a model to recognize hand gestures using the keypoints',
                    'Calculated the angle of the hand to determine the gesture',
                    'Implemented the gesture recognition system to control the computer'
                ]
            }
        ]
    },

    {
        id: 3,
        name: 'Flappy Bird AI',
        type: 'Program',
        date: '2024.01 - 2024.02',
        role: 'Software Developer',
        description: 'Program that trains Flappy Bird using neural network and genetic algorithm to play the game automatically.',
        skills: ['JS', 'AI', 'HTML', 'CSS', 'GENETIC ALGORITHM'],
        image: `${process.env.PUBLIC_URL}/assets/FlappyBirdAi/FlappyBirdAiCover.png`,
        imagesList: [
            { caption: 'Neural Network', src: `${process.env.PUBLIC_URL}/assets/FlappyBirdAi/FlappyBirdAi1.png` },
            { caption: 'Initial Training', src: `${process.env.PUBLIC_URL}/assets/FlappyBirdAi/FlappyBirdAi2.png` },
            { caption: 'AI Training', src: `${process.env.PUBLIC_URL}/assets/FlappyBirdAi/FlappyBirdAi3.png` },
            { caption: 'AI Playing', src: `${process.env.PUBLIC_URL}/assets/FlappyBirdAi/FlappyBirdAi4.png` }
        ],
        development: [
            {
                title: 'AI Training',
                descriptions: [
                    'Used genetic algorithm and neural network to train the AI to play the game',
                    'Evaluated the fitness of the AI based on the distance it traveled',
                    'Implemented the AI to play the game in real-time'
                ]
            }
        ]
    },

    {
        id: 4,
        name: 'Pixel Fire',
        type: 'Game',
        date: '2021.07 - 2023.03',
        role: 'Game Developer',
        description: 'Game that was created through Unity. It is a 2D platformer game where you try to avoid enemy attacks and survive waves.',
        skills: ['UNITY', 'C#', 'PHOTOSHOP'],
        image: `${process.env.PUBLIC_URL}/assets/PixelFire/PixelFireCover.png`,
        imagesList: [
            { caption: 'Gameplay', src: `${process.env.PUBLIC_URL}/assets/PixelFire/PixelFire1.png` },
            { caption: 'Boss Fight', src: `${process.env.PUBLIC_URL}/assets/PixelFire/PixelFire2.png` },
            { caption: 'Game Over Screen', src: `${process.env.PUBLIC_URL}/assets/PixelFire/PixelFire3.png` }
        ],
        development: [
            {
                title: 'Game Development',
                descriptions: [
                    'Designed the game using Unity and Photoshop for the assets',
                    'Developed the game using C# and Unity Engine',
                    'Implemented the player movement and enemy AI',
                    'Created the level design and game mechanics'
                ]
            }
        ]
    },

    {
        id: 5,
        name: 'Perfect Keyboard',
        type: 'Program',
        date: '2024.02 - 2023.03',
        role: 'Software Developer',
        description: 'Program that finds the fastest keyboard layout to type based on most popular phrases used in SMS. It uses genetic algorithm to find layout that minimizes the distance when typing.',
        skills: ['PYTHON', 'AI', 'OPENCV'],
        image: `${process.env.PUBLIC_URL}/assets/PerfectKeyboard/PerfectKeyboardCover.png`,
        imagesList: [
            { caption: 'Optimized Layout', src: `${process.env.PUBLIC_URL}/assets/PerfectKeyboard/Keyboard1.png` },
            { caption: 'Optimized Layout Json Save', src: `${process.env.PUBLIC_URL}/assets/PerfectKeyboard/Keyboard2.png` }
        ],
        development: [
            {
                title: 'Genetic Algorithm',
                descriptions: [
                    'Used genetic algorithm to find the fastest keyboard layout',
                    'Evaluated the fitness of the layout based on the distance when typing',
                    'Visualized the layout using OpenCV',
                    'Tested the layout using most popular phrases in SMS'
                ]
            }
        ]
    },

    {
        id: 6,
        name: 'LSTM Stock Prediction',
        type: 'Program',
        date: '2024.02 - 2023.04',
        role: 'Software Developer',
        description: 'Program that predicts stock prices using LSTM neural network. It uses historical stock data to train the model and predict future stock prices.',
        skills: ['PYTHON', 'SCI-KIT LEARN', 'AI'],
        image: `${process.env.PUBLIC_URL}/assets/LSTMPrediction/LSTMStockPredictionCover.png`,
        imagesList: [
            { caption: 'Stock Prediction : NVIDIA', src: `${process.env.PUBLIC_URL}/assets/LSTMPrediction/LSTMPrediction1.png` },
            { caption: 'Stock Prediction : SAMSUNG', src: `${process.env.PUBLIC_URL}/assets/LSTMPrediction/LSTMPrediction4.png` },
            { caption: 'Training Log', src: `${process.env.PUBLIC_URL}/assets/LSTMPrediction/LSTMPrediction2.png` },
            { caption: 'Dataset : SAMSUNG', src: `${process.env.PUBLIC_URL}/assets/LSTMPrediction/LSTMPrediction3.png` }
        ],
        development: [
            {
                title: 'Stock Prediction',
                descriptions: [
                    'Used LSTM neural network to predict stock prices',
                    'Trained the model using historical stock data with each window size of 50',
                    'Evaluated the model using test data',
                    'Visualized the prediction using matplotlib'
                ]
            }
        ]
    },

    {
        id: 7,
        name: 'Coin Detection',
        type: 'Program',
        date: '2023.06 - 2023.07',
        role: 'Software Developer',
        description: 'Program that detects coins in an image using OpenCV. It uses image processing techniques to detect coins and calculate the total number of the coins.',
        skills: ['PYTHON', 'OPENCV'],
        image: `${process.env.PUBLIC_URL}/assets/CoinDetection/CoinDetectionCover.png`,
        imagesList: [
            { caption: 'Original Image', src: `${process.env.PUBLIC_URL}/assets/CoinDetection/CoinDetection1.png` },
            { caption: 'Thresholded Image', src: `${process.env.PUBLIC_URL}/assets/CoinDetection/CoinDetection2.png` },
            { caption: 'Detected Image', src: `${process.env.PUBLIC_URL}/assets/CoinDetection/CoinDetection3.png` },
        ],
        development: [
            {
                title: 'Coin Detection',
                descriptions: [
                    'Used OpenCV to detect coins in an image',
                    'Implemented image processing techniques to detect coins',
                    'Calculated the total number of coins in the image',
                    'Thresholded the image to detect the coins',
                    'Eroded and dilated the image to remove noise'
                ]
            }
        ]
    },

    {
        id: 8,
        name: 'CIFAR-10 Image Classification',
        type: 'Program',
        date: '2023.08 - 2023.09',
        role: 'Software Developer',
        description: 'Program that classifies images in CIFAR-10 dataset using Convolutional Neural Network. It uses Tensorflow to train the model and classify the images. It is a project that I worked on to learn more about AI and image classification.',
        skills: ['PYTHON', 'AI', 'TENSORFLOW', 'KERAS'],
        image: `${process.env.PUBLIC_URL}/assets/CIFAR/CIFAR10ClassificationCover.png`,
        imagesList: [
            { caption: 'Training Log', src: `${process.env.PUBLIC_URL}/assets/CIFAR/CIFAR1.png` },
            { caption: 'Training Loss and Accuracy', src: `${process.env.PUBLIC_URL}/assets/CIFAR/CIFAR2.png` },
            { caption: 'Model', src: `${process.env.PUBLIC_URL}/assets/CIFAR/CIFAR3.png` },
            { caption: 'Output Predictions', src: `${process.env.PUBLIC_URL}/assets/CIFAR/CIFAR4.png` }
        ],
        development: [
            {
                title: 'Image Classification',
                descriptions: [
                    'Used Convolutional Neural Network to classify images in CIFAR-10 dataset',
                    'Trained the model using Tensorflow and Keras',
                    'Evaluated the model using test data',
                    'Visualized the training loss and accuracy'
                ]
            }
        ]

    }
];

export default ProjectInfo;