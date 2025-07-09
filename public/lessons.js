const lessons = [
  {
    id: 1,
    title: "Count Apples",
    description: "Count the apples on the screen",
    thumbnail: "/assets/thumbnails/apple.png",
    status: "unlocked",
    gameType: "countObjects",
    gameContent: {
      instructions: "How many apples do you see?",
      levels: [
        {
          id: "1-1",
          objectImage: "/assets/game/apple.png",
          count: 3,
          options: [1, 2, 3, 4],
          correctAnswer: 3,
          audioPrompt: "/audio/count-apples.mp3"
        }
      ],
      feedback: {
        correct: ["Great Job!", "You Got It!"],
        incorrect: ["Try Again!", "Almost!"]
      }
    }
  },
  {
    id: 2,
    title: "Count Bananas",
    description: "Count the bananas on the screen",
    thumbnail: "/assets/thumbnails/banana.png",
    status: "locked",
    gameType: "countObjects",
    gameContent: {
      instructions: "How many bananas do you see?",
      levels: [
        {
          id: "2-1",
          objectImage: "/assets/game/banana.png",
          count: 5,
          options: [5, 6, 7, 8],
          correctAnswer: 5,
          audioPrompt: "/audio/count-bananas.mp3"
        }
      ],
      feedback: {
        correct: ["Great Job!", "You Got It!"],
        incorrect: ["Try Again!", "Almost!"]
      }
    }
  },
  {
    id: 3,
    title: "Count Cats",
    description: "Count the cats on the screen",
    thumbnail: "/assets/thumbnails/cat.png",
    status: "locked",
    gameType: "countObjects",
    gameContent: {
      instructions: "How many cats do you see?",
      levels: [
        {
          id: "3-1",
          objectImage: "/assets/game/cat.png",
          count: 2,
          options: [1, 2, 3, 4],
          correctAnswer: 2,
          audioPrompt: "/audio/count-cats.mp3"
        }
      ],
      feedback: {
        correct: ["Great Job!", "You Got It!"],
        incorrect: ["Try Again!", "Almost!"]
      }
    }
  }
];
