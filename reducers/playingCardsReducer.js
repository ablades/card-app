import { DRAW_CARD, DELETE_CARD, SELECT_CARD, SHUFFLE_DECK, NEW_DECK} from '../actions'

import {buildDeck, shuffleDeck, drawCard, removeCard } from '../CardFunctions.js'

class Card {
    constructor(suite, card) {
        this.suite = suite
        this.card = card
    }
}


const defaultState = {
    deck: [],
    hand: []
}

const playingCardsReducer = ( state = defaultState, action) => {
    // Deconstruction
    const {deck, hand} = state

    switch(action.type) {
        case NEW_DECK:
            let newDeck = buildDeck()

            return {...state, deck: newDeck}

        case SHUFFLE_DECK:
            // Shuffle the deck
            shuffDeck = shuffleDeck(deck)
            return {...state, deck:shuffDeck}

        case DRAW_CARD:

        const {card, updatedDeck, updatedHand} = drawCard(deck, hand)
            return {...state, deck:updatedDeck, hand:updatedHand, card}
        
        default:
            return state
    }
}

export default playingCardsReducer