import { newShuffledDeck, calculateHandScore } from "./utils";

// We don't really expect you to keep any of this code around.
const deck = newShuffledDeck();
const firstThreeCards = deck.slice(0, 3);

// I'm setting the first card to be face down
deck[0].faceDown = true;

document.getElementById("app").innerHTML = `

<p>Here's our deck</p>
<pre>${deck.map((c) => c.face)}</pre>

<p>Here's the first card from our deck</p>
<pre>
  ${JSON.stringify(deck[0])}
</pre>

<p>So if our hand was the first three cards in the deck <code>${firstThreeCards.map(
  (c) => c.face
)}</code></p>
<p>Then our score would be ${calculateHandScore(firstThreeCards)}</p>
<p>And our visibleScore would be ${calculateHandScore(
  firstThreeCards,
  true
)}</p>
`;
