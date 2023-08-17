

import React from 'react';

import {
  StyleSheet,
  Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DefaultTheme from '@react-navigation/native';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();

function App(){
 return (

<NavigationContainer>
  <Provider store={store}>
<Stack.Navigator>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Restraunt" component={RestaurantScreen} />
  <Stack.Screen name="Basket" component={BasketScreen} options={{
    headerShown:false,
     presentation:'fullScreenModal'
    
  }} />
  <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{
    headerShown:false
  }}/>
  <Stack.Screen name="Delivery" component={DeliveryScreen} options={{
    headerShown:false,
     presentation:'fullScreenModal'
    
  }} />
  </Stack.Navigator>
</Provider>
</NavigationContainer>

)}


export default App;
