import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React,{useEffect,useState} from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import RestrauntCard from './RestrauntCard';
import sanityClient from '../sanity';
const FeatureRow = ({id, title, description}) => {
const [restaurants,setRestaurants]=useState([])

useEffect(()=>{
sanityClient.fetch(`
*[_type=="featured" && _id == $id]{
  ...,
  restaurants[]->{
    ...,
    dishes[]->,
    type->{
      name
    }
  },
}[0]`,{id:id}).then(data=>setRestaurants(data?.restaurants)).catch(err=>console.log("oops2"))
},[id])


  return (
    <View sty>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 9,
          paddingLeft:20
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
          {title}
        </Text>
        <ArrowRightIcon style={{color: '#00CCBB'}} />
      </View>
      <Text style={{color: 'gray', marginTop: 0, paddingLeft: 20}}>
        {description}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={{padding: 4}}>
        
        {restaurants?.map(restaurant=>(
          <RestrauntCard
          key={restaurant._id}
          id={restaurant.id}
          imgUrl={restaurant.image}
          title={restaurant.title}
          rating={restaurant.rating}
          genre={restaurant.type?.name}
          address={restaurant.address}
          sort_description={restaurant.short_description}
          dishes={restaurant.dishes}
          long={restaurant.long}
          lat={restaurant.lat}
        />
        ))}
        
        {/* <RestrauntCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo!Shushi"
          rating={4.5}
          genre="japanese"
          address="123 Main St"
          sort_description="This is a short description"
          dishes={[]}
          long={20}
          lat={12}
        />
          <RestrauntCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo!Shushi"
          rating={4.5}
          genre="japanese"
          address="123 Main St"
          sort_description="This is a short description"
          dishes={[]}
          long={20}
          lat={12}
        />
          <RestrauntCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo!Shushi"
          rating={4.5}
          genre="japanese"
          address="123 Main St"
          sort_description="This is a short description"
          dishes={[]}
          long={20}
          lat={12}
        /> */}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;

const styles = StyleSheet.create({});
