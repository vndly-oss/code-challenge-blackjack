import shuffle from "shuffle-array";

const suits = ["♣", "♦", "♥", "♠"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const colors = { "♣": "black", "♦": "red", "♥": "red", "♠": "black" };

const card = (value, suit) => ({
  get face() {
    if (this.faceDown) return "??";
    return value + suit;
  },
  value,
  suit,
  color: colors[suit],
  get visibleScore() {
    if (this.faceDown) return 0;
    return this.score;
  },
  get score() {
    switch (this.value) {
      case "A":
        return 11;
      case "K":
      case "Q":
      case "J":
        return 10;
      default:
        return this.value;
    }
  },
  faceDown: false
});

export const newShuffledDeck = () =>
  shuffle(
    suits.reduce(
      (cards, suit) => [...cards, ...values.map((value) => card(value, suit))],
      []
    )
  );

export const calculateHandScore = (cards, visibleOnly) => {
  // Sum all cards naively
  let score = cards.reduce(
    (score, card) => score + (visibleOnly ? card.visibleScore : card.score),
    0
  );

  // Now reduce each A from 11 to 1 if necessary
  cards
    .filter((c) => c.value === "A")
    .forEach((c) => {
      if (score > 21) {
        score -= 10;
      }
    });

  return score;
};
