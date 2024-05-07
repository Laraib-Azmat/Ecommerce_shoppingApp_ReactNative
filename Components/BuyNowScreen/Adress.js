import React, { useState, useCallback } from 'react'
import { BackView } from '../../UI/BackView'
import { Header } from '../Header/Header'
import { KeyboardAvoidingView, ScrollView, Text,TextInput,View, Platform } from 'react-native'
import Button from '../../UI/Button'
import buyStyle from './BuyStyle'
import { useNavigation } from '@react-navigation/native'

export const Adress = () => {

    const [HouseNo, setHouseNo] = useState('jdkjdk');
    const [StreetNo, setStreetNo] = useState('');
    const [Landmark, setLandmark] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [place, setPlace] = useState('');
    const navigation = useNavigation();


        const addAddressHandler = ()=>{

            if(HouseNo===''|| StreetNo===''||city===''){
                    setError("Inputs can't be empty");
                    return;
            }
    
            setPlace(`${HouseNo}_${StreetNo}_${city}`);
              
       
        }
  return (
    
    <BackView>

    <Header />

    <ScrollView >

        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={buyStyle.addressfield}>

        <Text style={buyStyle.modelHeading}>Your Address</Text>

        <View style={buyStyle.adressInputFields}>
            <TextInput 
            value={HouseNo}
            onChangeText={(text)=>setHouseNo(text)}
            placeholder='Enter House number'
            style={buyStyle.input} 
            onFocus={()=>setError('')}/>
            <Text style={buyStyle.text}>Flat,House No,Building,Company</Text>
        </View>

        <View style={buyStyle.adressInputFields}>
            <TextInput  
             value={StreetNo}
             onChangeText={(text)=>setStreetNo(text)}
            placeholder='Enter Street/Area'
            style={buyStyle.input}
             onFocus={()=>setError('')}/>
            <Text style={buyStyle.text}>Street,Area,Sector,Village</Text>
        </View>

        <View style={buyStyle.adressInputFields}>
            <TextInput 
             value={Landmark}
             onChangeText={(text)=>setLandmark(text)}
            placeholder='Eg. opposite to hill'
            style={buyStyle.input} 
            onFocus={()=>setError('')} />
            <Text style={buyStyle.text}>Landmark(Optional)</Text>
        </View>

        <View style={buyStyle.adressInputFields}>
            <TextInput 
            value={city}
            onChangeText={(text)=>setCity(text)}
            placeholder='Enter your city'
            style={buyStyle.input} 
            onFocus={()=>setError('')}
            />
            <Text style={buyStyle.text}>City</Text>
        </View>


        </KeyboardAvoidingView>

        {error!=='' ? <Text style={{textAlign:'center',color:'red', fontSize:16}}>{error}</Text>:<Text></Text>}
    </ScrollView>

   <View style={buyStyle.addBtn}>
   <Button onPress={addAddressHandler} >Add Address</Button>
   </View>

    </BackView>
  )
}
