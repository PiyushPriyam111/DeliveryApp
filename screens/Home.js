import {
  View,
  Text,
  StyleSheet,
 
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';
import sanityClient from '../sanity';
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="featured"]{
    ...,
    restaurant[]->{
      ...,
      dishes->
    }
  }`,
      )
      .then(data => {
        setFeaturedCategories(data);
      })
      .catch(err => {
        console.log('oop');
      });
  }, []);
 

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={{uri: 'https://links.papareact.com/wru'}}
          style={{
            width: 45,
            height: 45,
            borderRadius: 50,
            backgroundColor: '#B2B8C1',
            marginTop: 5,
          }}
        />
        <View style={{marginLeft: 10, flex: 1}}>
          <Text style={{color: '#B2B8C1', fontSize: 15, fontWeight: 'bold'}}>
            Deliver Now
          </Text>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Current Location
            <ChevronDownIcon
              size={15}
              color="#00CCBB"
              style={{paddingTop: 20}}
            />
          </Text>
        </View>

        <UserIcon color="#00CCBB" size={35} />
      </View>
      <View
        style={{
          paddingLeft: 15,
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 0,
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#D1D6D3',
            height: 43,
            borderRadius: 3,
            padding: 3,
            flex: 1,
          }}>
          <MagnifyingGlassIcon size={30} color="#00CCBB" />
          <TextInput
            placeholder="Restaurants and cuisines"
            style={{color: 'black'}}
          />
        </View>
        <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: 130}}>
        <Categories />

        {featuredCategories?.map(category => (
          <FeatureRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 7,
    paddingTop: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
});

export default HomeScreen;
