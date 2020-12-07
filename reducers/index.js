import { combineReducers } from 'redux'

import playingCardsReducer from './playingCardsReducer'

export default combineReducers({
    playingCards : playingCardsReducer,
})