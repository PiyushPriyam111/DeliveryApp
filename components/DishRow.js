import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {urlFor} from '../sanity';
import {} from 'react-native-heroicons/outline';
import {MinusCircleIcon, PlusCircleIcon} from 'react-native-heroicons/solid';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from '../features/BasketSlice';

const DishRow = ({id, name, description, price, image}) => {
  const [isPressed, setPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(state => selectBasketItemsWithId(state, id));

  const addItemToBasket = () => {
    dispatch(addToBasket({id, name, description, price, image}));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) {
      return;
    }
    dispatch(removeFromBasket({id}));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setPressed(!isPressed)}
        style={
          isPressed
            ? {
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                padding: 10,
                borderColor: '#CFD4D1',
                borderBottomWidth: 0,
              }
            : {
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                padding: 10,
                borderColor: '#CFD4D1',
                borderBottomWidth: 2,
              }
        }>
        <View style={{flex: 1}}>
          <Text style={{color: 'black', fontSize: 19,fontWeight:'700'}}>{name}</Text>
          <Text style={{color: 'gray', fontSize: 16}}>{description}</Text>
          <Text style={{color: 'gray', fontSize: 16}}>₹{price}</Text>
        </View>
        <View>
          <Image
            source={{uri: urlFor(image).url()}}
            style={{height: 75, width: 75, backgroundColor: 'gray', padding: 8}}
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 270,
            marginTop: 0,
            marginBottom: 5,
            paddingBottom: 5,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity onPress={removeItemFromBasket}>
            <MinusCircleIcon 
            color={items.length>0?"#00CCBB":'gray' }
            size={35} />
          </TouchableOpacity>
          <Text style={{color: 'gray', fontSize: 20}}>{items.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon color="#00CCBB" size={35} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;
