export const DRAW_CARD = 'DRAW_CARD'
export const DELETE_CARD = 'DELETE_CARD'
export const NEW_DECK = 'NEW_DECK'
export const SHUFFLE_DECK = 'SHUFFLE_DECK'
export const SELECT_CARD = 'SELECT_CARD'

export const buildDeck = (deck) => {
    return {
        type: NEW_DECK,
        payload: { deck }
    }

}

export const shuffleDeck = (deck) => {
    return {
        type: SHUFFLE_DECK,
        payload: { deck }, 
    }
}

export const selectCard = (hand, index) => {
    return {
        type: SELECT_CARD,
        payload: { hand, index },
    }
}

export const drawCard = (deck, hand) => {
    return {
        type: DRAW_CARD,
        payload: { deck, hand },
    }
}

export const deleteCard = (hand, index) => {
    return {
        type: DELETE_CARD,
        payload: { hand, index },
    }
}

