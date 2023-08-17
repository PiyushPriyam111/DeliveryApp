import { View, Text ,Image} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {

const navigation= useNavigation()

useEffect(()=>{
setTimeout(()=>{
  navigation.navigate("Delivery")
},4000)
},[])

  return (
    <SafeAreaView style={{backgroundColor:'#00CCBB',flex:1,flexDirection:'column',alignItems:'center'}}>
   
    <Animatable.Image
      source={require('../TwuB.gif')}
      animation={'slideInUp'}
      iterationCount={1}
      style={{height:250,width:300,borderRadius:50,marginTop:200}}
    />
   <Animatable.Text
    animation="slideInUp"
    iterationCount={1}
    style={{color:'white',fontSize:15,marginTop:25,fontWeight:'bold'}}
    >
      Waiting  for Restaurant to accept your order...
    </Animatable.Text>
       
    <Progress.Bar progress={0.3} width={300} color='white' style={{marginTop:30}} indeterminate={true}/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen