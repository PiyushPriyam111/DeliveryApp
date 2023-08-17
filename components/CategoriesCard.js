import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoriesCard = ({imgUrl,title}) => {
 


  return (
<TouchableOpacity style={{margin:5 ,position:'relative'}}>
<Image source={{uri:urlFor(imgUrl).url()}} style={{height:95,width:95,borderRadius:9}}/>
    <Text style={{color:'white',position:'absolute',top:45,left:20,fontWeight:'bold'}}>{title}</Text>
</TouchableOpacity>
      
    
  )
}  

export default CategoriesCard