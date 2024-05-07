import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Header } from '../Header/Header';
import Button from '../../UI/Button';
import { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function MapScreen({navigation, route}) {

 
    const {  latitude,   longitude, adres} = route.params ?? null;
    const [regionLat, setRegionLat] = useState(latitude);
    const [regionLong, setRegionLong] = useState(longitude);

    console.log(adres)

    const mapRef = useRef(MapView);


    const initialRegion = {
      latitude,
      longitude,
           latitudeDelta: 0.1,
           longitudeDelta: 0.1,

    }

    const [region, setRegion] = useState({initialRegion  });
    const [adress, setAddress] = useState();

    const focusHandler=()=>{
        mapRef.current.animateToRegion(initialRegion);
    }
  
    useEffect(()=>{
      const getLocation = async ()=>{

        let response = await Location.reverseGeocodeAsync({
          latitude:regionLat,
         longitude: regionLong,
        });
  
       
        for (let item of response) {
          setAddress(item.formattedAddress);
        }

     
      }

      getLocation();
    },[region])

    const doneHandler = ()=>{
      adres(adress);
      navigation.goBack();
    }
    
  return (
    <View>
        <Header />

        <Text style={{textAlign:'center',color:'#560C42',fontFamily:'PoppinsMedium'}}>{adress}</Text>

       <MapView style={{width:"100%",height:550}} 
        provider={PROVIDER_GOOGLE} 
        showsMyLocationButton 
         showsUserLocation
         ref={mapRef}
         onRegionChangeComplete={(region) => {setRegion(region), setRegionLat(region.latitude), setRegionLong(region.longitude)}}
        
         >
 
 <Marker
coordinate={{
  latitude: latitude,
  longitude: longitude,
} }
/> 

 
<Marker
    coordinate={{
    latitude: regionLat,
    longitude: regionLong,
    } }
    pinColor="green"
/> 
      


         </MapView>


       <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', gap:20, marginVertical:10,}}>
        <Button onPress={focusHandler}>Focus</Button>
        <Button onPress={doneHandler}>Done</Button>
        <Button onPress={()=>navigation.goBack()}>Go Back</Button>
       </View>
    </View>
  )
}




  
 