// Build a deck of cards
class Card {
    constructor(suite, card) {
        this.suite = suite
        this.card = card
    }
}

function BuildDeck() {
    const suites = ["♣", "♦", "♥", "♠"]
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"]

    let deck = []
    suites.forEach((suite) => {cards.forEach((card) => {
        deck.push(new Card(suite, card))
    })})

    return deck
}


// Shuffle deck
function ShuffleDeck(deck) {
    let shuffledDeck = deck.sort(() => Math.random() - 0.5)

    return shuffledDeck
}


// Draw card add to hand and Remove card from deck
function DrawCard(deck, hand) {
    let index = Math.floor(Math.random()*deck.length);
    let card = deck[index];
    deck.splice(index, 1);
    hand.push(card)

    return card
}

// Discard card from hand
// function DiscardCard(hand, id) {

// }

let deck = BuildDeck()
console.log(deck)

deck = ShuffleDeck(deck)
console.log(deck)

let hand = []
console.log(deck.length)
let card = DrawCard(deck, hand)
console.log(deck.length, hand, card)
