import {View, Text, TouchableOpacity, Image, ScrollView,FlatList} from 'react-native';
import React, {useState, useMemo, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurantItems} from '../features/RestaurantSlice';
import {removeFromBasket, selecBasketTotal, selectBasketItems} from '../features/BasketSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import {T} from '../sanity/dist/static/sanity-e7776182';
import {XCircleIcon} from 'react-native-heroicons/solid';
import {urlFor} from '../sanity';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurantItems);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedInBasket] = useState();
  const basketTotal = useSelector((state)=>selecBasketTotal(state))
  
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedInBasket(groupedItems);
  }, [items]);

  console.log(groupedItemsInBasket);

  return (
    <SafeAreaView style={{flex:1}}>
     
     <ScrollView >
      <View style={{paddingBottom:200 }}>
        <View >
          <View style={{backgroundColor: 'white', padding: 30,}}>
            <Text
              style={{
                color: 'black',
                fontSize: 23,
                fontWeight: '700',
                alignSelf: 'center',
              }}>
              Basket
            </Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 18,
                fontWeight: '700',
                alignSelf: 'center',
              }}>
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              position: 'absolute',
              right: 28,
              top: 30,
            }}>
            <XCircleIcon size={45} color={'#00CCBB'} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 25,
            paddingVertical: 11,
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom:25
          }}>
          <Image
            source={{uri: 'https://links.papareact.com/wru'}}
            style={{
              width: 45,
              height: 45,
              borderRadius: 50,
              backgroundColor: '#B2B8C1',
            }}
          />
          <Text style={{fontSize: 15, color: 'black', marginLeft: 15}}>
            Deiver in 25-40 min
          </Text>
          <Text style={{fontSize: 15, color: '#00CCBB', marginLeft: 85}}>
            Change
          </Text>
        </View>
      
        
          {groupedItemsInBasket &&
            Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <View
                key={key}
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'white',
                 paddingHorizontal:20,
                  alignItems: 'center',
                  paddingVertical:7,
                  marginBottom: 3,
                  justifyContent:'space-between'
                  
                }}>
     
                <Text style={{color: 'black', fontWeight: '600'}}>
                  {items.length}x
                </Text>
                <Image
                  source={{uri: urlFor(items[0]?.image).url()}}
                  style={{height: 70, width: 70, borderRadius: 50,marginRight:10}}
                />
                <Text
                  style={{color: 'black', fontWeight: '600', marginRight: 40}}>
                  {items[0]?.name}
                </Text>
                
                <Text style={{color: 'gray'}}>₹{items[0]?.price}</Text>
                <TouchableOpacity>
                  <Text
                    style={{color: '#00CCBB', fontSize: 16}}
                    onPress={() => dispatch(removeFromBasket({id: key}))}>
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          


      </View>
  </ScrollView>    
     
   <View style={{backgroundColor:'white',position:'absolute',bottom:0,left:0,right:0,flexDirection:'column',padding:20,justifyContent:"space-evenly",height:200}}>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <Text style={{color:'gray'}}>Subtotal</Text>
        <Text style={{color:'gray'}}>₹{basketTotal}</Text> 
    </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{color:'gray'}}>Delivery Fee</Text>
        <Text style={{color:'gray'}}>₹45</Text> 
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{color:'black',fontWeight:'600'}}>Order Total</Text>
        <Text style={{color:'black',fontWeight:'600'}}>₹{basketTotal+45}</Text> 
      </View>
    <TouchableOpacity style={{
        backgroundColor: '#00CCBB',
        borderRadius: 10,
        paddingHorizontal:13,
        justifyContent:'space-evenly',
        paddingVertical:15,
        height:56,

      }} onPress={()=>{navigation.navigate("PreparingOrderScreen")}}>
        <Text style={{fontSize:18,color:'white',fontWeight:'700',paddingLeft:120}}>Place Order</Text>
    </TouchableOpacity>
   </View>  
  


    </SafeAreaView>
  );
};

export default BasketScreen;
