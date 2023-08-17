import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectRestaurantItems} from '../features/RestaurantSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import {XCircleIcon} from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';


const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurantItems);

  return (
    <View style={{backgroundColor: '#00CCBB', flex: 1, padding: 20}}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
            }}
            style={{}}>
            <XCircleIcon size={45} color={'white'} />
          </TouchableOpacity>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
            Order Help
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 160,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop:70,
            position:'absolute'
            
          }}>
          <View>
            <Text style={{color: 'gray', fontSize: 20, fontWeight: '600'}}>
              Arriving In
            </Text>
            <Text style={{color: 'black', fontSize: 30, fontWeight: '800'}}>
              30-35 Minutes
            </Text>
            <Progress.Bar
              progress={0.3}
              width={200}
              color="#00CCBB"
              style={{marginTop: 10}}
              indeterminate={true}
            />
            <Text style={{color: 'gray', marginTop: 10}}>
              Order from {restaurant.title} is arrriving!{' '}
            </Text>
          </View>
          <Image
            source={require('../fast-delivery.png')}
            style={{height: 60, width: 60}}
          />
        </View>
      </SafeAreaView>
 
    </View>
  );
};

export default DeliveryScreen;
