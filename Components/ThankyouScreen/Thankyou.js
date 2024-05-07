import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BackView } from '../../UI/BackView';
import Logo from '../../assets/Images/Logo.png';
import thankStyle from './ThankyouStyle';
import Button from '../../UI/Button';
import { Ionicons } from '@expo/vector-icons';

export default function Thankyou({navigation, route}) {

  const {type} = route.params ?? null;
  const [msg, setMsg] = useState("");

  useEffect(()=>{
      if(type=='contact'){
        setMsg("Message sent")
      }
      if(type=='signup'){
        setMsg("Account created!")
      }
      if(type=='buy'){
        setMsg("Payment successful")
      }
  },[type])

  return (
    <BackView>

     <View style={thankStyle.thankView}>

     <Image source={Logo} style={{width:200, height:150}} />

     <Text style={thankStyle.thankheading}>Thank you</Text>

    <View style={{flexDirection:'row', alignItems:'center', gap:10}}>
    <Text style={thankStyle.thankText}>
      {msg}
      </Text>
     <Ionicons name="checkmark-circle-sharp" size={34} color="green" />
    </View>

     <Button onPress={()=>navigation.navigate(type=='signup'?"first":"Home")}>
     {type=='signup'? 'start shopping' : 'Back to Home'}
     </Button>

     </View>

      

    </BackView>
  )
}