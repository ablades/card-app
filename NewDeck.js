import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList, Button } from 'react-native'
import { buildDeck } from './actions'

/*
function Card({ card }) {
	return (
        <View>
            <Text >{card.suite} {card.card}</Text>
        </View>
	);
}

class CardClass {
    constructor(suite, card) {
        this.suite = suite
        this.card = card
    }
}

*/

// playingCards = name of reducer
// state.playingCards.deck
export default function NewDeck() {


    /* const dispatch = useDispatch()

    let deck = []
    // Creates a new deck
    const suites = ["♣", "♦", "♥", "♠"]
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"]
    suites.forEach((suite) => {cards.forEach((card) => {
        deck.push(new CardClass(suite, card))
    })})

    return (
        <SafeAreaView>
            <Text>Test</Text>
            <View>
                <Text>{console.log(deck)}</Text>
                <Button title="testbutton" onPress={() => {
                        dispatch(buildDeck(deck));
                    }}/>
                <FlatList 
                    numColumns={4}
                    data={deck}
                    renderItem={({ item }) => {
                        return <Card card={item} />
                    }}
                    keyExtractor={item => `${item.suite}${item.card}`}
                >
                </FlatList>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      width: "100%",
    },
    buttonContainer: {
      marginTop: 50,
      elevation: 8,
      backgroundColor: "#60BD68",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    button: {
      fontSize: 18,
      color: "#000",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
  });
*/
}