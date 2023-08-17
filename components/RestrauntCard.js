import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'


const RestrauntCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    sort_description,
    dishes,
    long,
    lat
}) => {

const navigation = useNavigation()

  return (
    <TouchableOpacity 
    style={{backgroundColor:'white',paddingBottom:10,borderRadius:10,marginRight:10}}
    onPress={()=>{navigation.navigate('Restraunt',{
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    sort_description,
    dishes,
    long,
    lat
    })}}
    >
      <Image source={{uri:urlFor(imgUrl).url()}} style={{height:150,width:240}}/>
      <View style={{paddingTop:8}}>
        <Text style={{color:'black',fontWeight:'bold',paddingTop:0,paddingLeft:15,fontSize:17}}>{title}</Text>
        <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10,paddingTop:0,paddingBottom:0,marginBottom:0}}>
            <StarIcon color='#82C3A3' opacity={0.8} size={22}/>
            <Text style={{color:'gray',marginLeft:6,fontSize:12}}>
                <Text  style={{color:'green',opacity:0.9}}>{rating}</Text> . {genre}
            </Text>
        </View>
      </View>
      <View style={{paddingLeft:10,paddingTop:0,marginTop:0,flexDirection:'row',alignItems:'center'}}>
        <MapPinIcon color="gray" opacity={0.4} size={22} style={{paddingTop:0,marginTop:0}}/>
        <Text style={{color:'gray',}}>Nearby . {address}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RestrauntCard