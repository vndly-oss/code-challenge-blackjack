# Make Blackjack

You are tasked with making the Blackjack card game.

## Development

- Run `npm install` to install the dependencies.
- Run `npm start` to open the app for development. It uses Parcel.

## Requirements

- A Dealer (subsisting of a very basic AI) and a Player (the user)
- A Deal Button - when clicked deals a new game.
- New game deals two cards to the Dealer and two cards to the Player. Both players have one card face up and one face down
- Display visibleScore for both players at all times
- A Hit Button - when clicked adds another card to the Player's hand
  - If Player's hand score reaches 21, game is over and they win, move to the END OF THE GAME
  - If Player's hand score exceeds 21, game is over and they lose/bust, move to the END OF THE GAME
- A Stand Button - when clicked Player chooses to be done receiving cards. Play out the Dealers hand based on the following AI
  - Dealer will hit if their hand is a score of 17 or below, otherwise they will stand.
  - If Dealers's hand score exceeds 21, game is over and they lose/bust, move to the END OF THE GAME
- Once Dealer stands it is the END OF THE GAME:
  - Turn all cards face up.
  - If either player busts, the other player automatically wins.
  - Calculate and display final scores of both players.
  - Announce the winner.
  - In case of tie, Player wins.
- You _must_ use the included utilities, documentation is below.
- You may modify or extend the utilities.
- You may use any npm modules you like.
- Make as many files, folders as you like.
- Styling is optional.
- Testing is optional.

---

## Utilities

### `newShuffledPokerDeck()`

Create a deck of 52 shuffled cards.

```js
import { newShuffledDeck } from "./utils";

const deck = newShuffledDeck();
```

Here I've mapped the deck to just the `face` property of each card.

```js
deck.map((card) => card.face);
// Outputs: ??,Q♦,2♠,5♦,10♦,10♠,3♦,Q♥,3♣,K♠,A♥,J♠,6♠,
//          K♦,7♣,10♥,A♣,8♦,9♣,5♥,J♦,8♥,3♠,8♣,4♣,5♠,4♠,
//          8♠,6♦,2♣,K♣,4♥,J♥,3♥,7♦,J♣,Q♣,Q♠,K♥,9♥,A♦,
//          9♦,2♦,6♥,7♥,5♣,6♣,9♠,10♣,2♥,4♦,A♠
```

> Note: The first card is `facedown` so it shows `??`

### The `card` object

A single card has more properties though:

- `face` - the value and suit together. If `faceDown` shows `'??'`.
- `value` - one of `[2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]`
- `suit` - one of `["♣", "♦", "♥", "♠"]`
- `color` - `'black'` or `'red'`
- `score` - calculates the blackjack value of the card `2–11`.
- `visibleScore` - `0` if card is `faceDown`, otherwise works like `score`.
- `faceDown` - `boolean`

Here's the first card from our deck:

```js
deck[0];
/* 
Outputs: 
{
    "face": "??",
    "value": 7,
    "suit": "♠",
    "color": "black",
    "visibleScore": 0,
    "score": 7,
    "faceDown": true
}
*/
```

### `calculateHandScore(arrOfCards: cards[], visibleOnly: boolean = false)`

Calculates the `score` or `visibleScore` for an array of cards (a hand)

```js
import { calculateHandScore } from "./utils";

const firstThreeCards = deck.slick(0, 3);

const trueHandScore = calculateHandScore(firstThreeCards);
const visibleHandScore = calculateHandScore(firstThreeCards, true);
```

> Note: Handles Aces properly, treating them as 11 or 1 correctly.
> Note: Does not score `facedown` cards.

So if our hand was the first three cards in the `deck`: `??,Q♦,2♠`. The facedown card is a 7.

Then our hand's `score` would be `19`.

And our hand's `visibleScore` would be `12`.

## That's it!

### Now go make a Blackjack Game
