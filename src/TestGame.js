const Game = {
  table: {
    spots: 9,
    pot: 18050,
    communityCards: [
      {
        suit: "CLUBS",
        number: 11,
      },
      {
        suit: "SPADES",
        number: 12,
      },
      {
        suit: "SPADES",
        number: 1,
      },
      {
        suit: "DIAMONDS",
        number: 4,
      },
      {
        suit: "CLUBS",
        number: 2,
      },
    ],

    players: [
      {
        name: "Rick Dolo",
        position: 0,
        stack: 323,
        hand: {
          cards: [
            {
              suit: "CLUBS",
              number: 11,
            },
            {
              suit: "CLUBS",
              number: 10,
            },
          ],
        },
      },
      {
        name: "Marty Shakus",
        toAct: true,
        position: 1,
        stack: 425323,
        hand: {
          cards: [
            {
              suit: "HEARTS",
              number: 4,
            },
            {
              suit: "CLUBS",
              number: 2,
            },
          ],
        },
      },
      {
        name: "Dean Markus",
        position: 2,
        stack: 323,
        hand: {
          cards: [
            {
              suit: "DIAMONDS",
              number: 11,
            },
            {
              suit: "CLUBS",
              number: 12,
            },
          ],
        },
      },
      {
        name: "Tommy Bones",
        position: 3,
        stack: 323,
        hand: {
          cards: [
            {
              suit: "DIAMONDS",
              number: 1,
            },
            {
              suit: "DIAMONDS",
              number: 2,
            },
          ],
        },
      },
      {
        name: "Langus Yanger",
        position: 4,
        stack: 323,
        hand: {
          cards: [
            {
              suit: "HEARTS",
              number: 6,
            },
            {
              suit: "HEARTS",
              number: 1,
            },
          ],
        },
      },
      {
        name: "Don Chiko",
        position: 5,
        stack: 923423,
        hand: {
          cards: [
            {
              suit: "SPADES",
              number: 3,
            },
            {
              suit: "SPADES",
              number: 12,
            },
          ],
        },
      },
      {
        name: "Jimmy Dean",
        position: 6,
        stack: 1342,
        hand: {
          cards: [
            {
              suit: "DIAMONDS",
              number: 1,
            },
            {
              suit: "CLUBS",
              number: 6,
            },
          ],
        },
      },
      {
        hero: true,
        name: "Nicki Lam",
        stack: 9175423,
        position: 7,
        hand: {
          cards: [
            {
              suit: "HEARTS",
              number: 11,
            },
            {
              suit: "HEARTS",
              number: 12,
            },
          ],
        },
      },
      {
        hero: true,
        name: "Mhumngus",
        stack: 9175423,
        position: 8,
        hand: {
          cards: [
            {
              suit: "HEARTS",
              number: 11,
            },
            {
              suit: "HEARTS",
              number: 12,
            },
          ],
        },
      },
    ],
  },
};

export default Game;
