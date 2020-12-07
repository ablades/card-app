import { DRAW_CARD, DELETE_CARD, SELECT_CARD, SHUFFLE_DECK, NEW_DECK} from '../actions'

import { buildDeck, shuffleDeck, drawCard, removeCard } from '../CardFunctions.js'



const cardReducer = ( state = [], action) => {
    switch(action.type) {
        case NEW_DECK:
            // Creates a new deck
            newDeck = buildDeck()
            return newDeck

        case SHUFFLE_DECK:
            // Shuffle the deck
            shuffDeck = shuffleDeck(action.payload.deck)
            return shuffDeck

        case DRAW_CARD:
            deck = action.payload.deck
            hand = action.payload.hand
            card = drawCard(action.payload.deck, action.payload.hand)
            return { card, deck, hand }
        
        default:
            return state
    }
}

export default cardReducer