import {View, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import CategoriesCard from './CategoriesCard';
import sanityClient, { urlFor } from '../sanity';


const Categories = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
  *[_type=="category"]
  `,
      )
      .then(data => setcategories(data))
      .catch(err => {
        console.log('ooppss');
      });
  }, []);


  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      
      {categories?.map((category)=>(
        <CategoriesCard
        key={category._id}
        ba={category.image}
        imgUrl={category.image}
        title={category.name} />
      ))}

    </ScrollView>
  );
};

export default Categories;
