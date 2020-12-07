// Build a deck of cards
class Card {
    constructor(suite, card) {
        this.suite = suite
        this.card = card
    }
}

function buildDeck() {
    const suites = ["♣", "♦", "♥", "♠"]
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"]

    let deck = []
    suites.forEach((suite) => {cards.forEach((card) => {
        deck.push(new Card(suite, card))
    })})
    
    return deck
}


// Shuffle deck
function shuffleDeck(deck) {
    let shuffledDeck = deck.sort(() => Math.random() - 0.5)

    return shuffledDeck
}


// Draw card add to hand and Remove card from deck
function drawCard(deck, hand) {
    let index = Math.floor(Math.random()*deck.length);
    let card = deck[index];
    deck.splice(index, 1);
    hand.push(card)

    return card
}

function removeCard(hand, index) {
}

let deck = buildDeck()
console.log(deck)

deck = shuffleDeck(deck)
console.log(deck)

let hand = []
console.log(deck.length)
let card = drawCard(deck, hand)
console.log(deck.length, hand, card)
