import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import HomeScreen from './screens/HomeScreen'
import { StyleSheet, Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import NewDeck from './NewDeck'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons'

const Tab = createBottomTabNavigator()

export default function App() {
  const store = createStore(reducers)
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Deck View') {
                iconName = focused ? "cards-playing-outline" : "cards-outline"
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              }
              if (route.name === 'Hand View') {
                iconName = "cards"
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Deck View" component={NewDeck}/>
          <Tab.Screen name="Hand View" component={HomeScreen} />
        
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
