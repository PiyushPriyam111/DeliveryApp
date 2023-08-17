import {View, Text, ActivityIndicatorComponent, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux'
import { selecBasketTotal, selectBasketItems } from '../features/BasketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketIcons = () => {
const items = useSelector(selectBasketItems);
const navigation = useNavigation()
const basketTotal = useSelector((state)=>selecBasketTotal(state))
 

if(items.length === 0)return null;

  return (
    <TouchableOpacity  onPress={()=>navigation.navigate('Basket')}>
            <View
      style={{
        backgroundColor: '#00CCBB',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center'
        ,paddingHorizontal:13,
        justifyContent:'space-evenly'
      }}>
      <Text style={{color:'white',marginRight:10,fontWeight:'bold',fontSize:20,backgroundColor:'#4BA998',paddingHorizontal:7}}>{items.length}</Text>
      <Text style={{color:'white',marginRight:10,fontWeight:'bold',fontSize:15}}>View Basket</Text>
      <Text style={{fontWeight: 'bold',fontSize:20,color:'white'}}>₹{basketTotal}</Text>
    </View>
    </TouchableOpacity>

  );
};

export default BasketIcons;
