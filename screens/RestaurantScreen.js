import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import urlBuilder from '@sanity/image-url';
import {urlFor} from '../sanity';
import {ArrowDownLeftIcon, ArrowLeftIcon, ChevronRightIcon} from 'react-native-heroicons/outline';
import {MapPinIcon, QuestionMarkCircleIcon, StarIcon} from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';
import BasketIcons from '../components/BasketIcons';
import { useDispatch   } from 'react-redux';
import { setRestaurant } from '../features/RestaurantSlice';
import { SafeAreaView } from 'react-native-safe-area-context';


const RestaurantScreen = () => {
const navigation = useNavigation();
const dispatch = useDispatch()
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      sort_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,

    });
  }, []);

useEffect(()=>{
  dispatch(setRestaurant({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    sort_description,
    dishes,
    long,
    lat,
  }))
},[dispatch])

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={{position: 'relative'}}>
        <Image source={{uri: urlFor(imgUrl).url()}} style={{height: 250}} />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            position: 'absolute',
            top: 50,
            left: 30,
            borderRadius: 50,
            backgroundColor: 'white',
            padding: 5,
          }}>
          <ArrowLeftIcon size={30} color={'#00CCBB'} />
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <View style={{paddingHorizontal: 15, paddingTop: 10, paddingBottom: 8}}>
          <Text style={{color: 'black', fontSize: 33, fontWeight: 'bold'}}>
            {title}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text
                style={{
                  color: 'gray',
                  marginLeft: 6,
                  fontSize: 12,
                  marginRight: 10,
                }}>
                <Text style={{color: 'green', opacity: 0.9}}>{rating}</Text> .{' '}
                {genre}
              </Text>
              <MapPinIcon color="green" opacity={0.5} size={22} />
              <Text style={{color: 'gray', marginLeft: 6, fontSize: 12}}>
             Nearby . {address}
             </Text>
            </View>
          </View>
          <Text style={{color:'gray',marginTop:10}}>{sort_description}</Text>
        </View>
        <TouchableOpacity style={{padding:10,flexDirection:'row',alignItems:'center',borderColor:'#CFD4D1',borderTopWidth:2}}>
          <QuestionMarkCircleIcon color='gray' opacity={0.6} size={20} style={{marginRight:10}}/>
          <Text style={{color:'black',flex:1,fontWeight:'bold'}}>Have a Food alergy?</Text>
          <ChevronRightIcon  color='#00CCBB'/>
        </TouchableOpacity>
      </View>
      <View style={{paddingBottom:75}}>
        <Text style={{color:'black',fontSize:23,fontWeight:'bold',padding:10}}> Menu</Text>
        {dishes.map(dish=>(
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
            
          />
        ))}
      </View>

    </ScrollView>
    <BasketIcons/>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
