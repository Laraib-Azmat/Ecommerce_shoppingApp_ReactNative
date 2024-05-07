import { View, Text } from 'react-native'
import React from 'react'
import contactStyle from './ContactStyle'
import Contact from './Contact';
import { Entypo } from '@expo/vector-icons';

export default function ContactScreen() {
  return (
    <View style={contactStyle.contactView}>
      <Text style={{fontFamily:'Mogra',fontSize:32, color:'#D53624'}}>Contact</Text>

      <View style={contactStyle.inputView}>
        <Contact />
      </View>

      <View style={contactStyle.socialmediaView}>

      <Entypo name="instagram-with-circle" size={34} color="#D53624" />
      <Entypo name="linkedin-with-circle" size={34} color="#D53624" />
      <Entypo name="facebook-with-circle" size={34} color="#D53624" />
      <Entypo name="mail-with-circle" size={34} color="#000" />

      </View>


    </View>
  )
}