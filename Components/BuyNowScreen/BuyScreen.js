import React,{useState} from 'react'
import { Platform, View, Text, ScrollView, Alert,Pressable, KeyboardAvoidingView } from 'react-native'
import { Header } from '../Header/Header'
import { Buynow } from './Buynow';
import { BottomModal, SlideAnimation, ModalContent, ModalPortal  } from "react-native-modals";
import buyStyle from './BuyStyle';
import Button from '../../UI/Button';
import BottomModel from '../../UI/BottomModel';
import * as Location from "expo-location";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const BuyScreen = ({navigation, route}) => {

//   const API_KEY = "AIzaSyB46CuxR8scW3JvKhglnleCww1D3JKjNHw";
// const URL = `https://maps.google.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const {total} = route.params ?? null;
    const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
    const [address, setAddress] = useState("");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
   


    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
    
        if (!enabled) {
          Alert.alert(
            "Location Services not enabled",
            "Please enable your location services to continue",
            [{ text: "OK" }],
            { cancelable: false }
          );
        } else {
          setLocationServicesEnabled(true);
        }
      };


      const GetCurrentLocation =async ()=>{
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          Alert.alert(
            "Permission not granted",
            "Allow the app to use the location service",
            [{ text: "OK" }],
            { cancelable: false }
          );
        }

        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
          });

          console.log(location);
          setPosition(location);

      }

      const setPosition = async ({ coords: { latitude, longitude } })=>{
       setLatitude(latitude);
       setLongitude(longitude);
     
      //   fetch(`${URL}${latitude},${longitude}`)
      //   .then((resp) => resp.json())
      //   .then(({ results }) => {
      //     if (results.length > 0) {
      //       setAddress(results[0].formatted_address);
      //       console.log(results);
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error.message);
      //   });

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      console.log(response)


      for (let item of response) {
        setAddress(item.formattedAddress);
      }
   

      }


    const currentLocatinoHandler = ()=>{
        CheckIfLocationEnabled();
        GetCurrentLocation();
        setIsModalVisible(false);
        
    }

    const toggleModel = ()=>{
        setIsModalVisible(!isModalVisible);
        
    }

    const confirmOrderHandler = ()=>{

        navigation.navigate("Thankyou", {type:'buy'});
    }

    const setaddress = (place)=>{
      setAddress(place);
    }

    const mapHandler =  ()=>{
      CheckIfLocationEnabled();
        GetCurrentLocation();
     setIsModalVisible(false),
      navigation.navigate("Map",{
       latitude,longitude,
       adres:setaddress});

    }

  return (
    <View style={{flex:1}}>

   

       <Header />
        

     <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}} >

     <Buynow toggleModel={toggleModel} total={total} address={address} />

   

        <View style={{
                marginTop:10,
                backgroundColor:'#F9A5AE',
                elevation:5,
                height:60,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Button onPress={confirmOrderHandler}>Confirm Order</Button>
            </View>
            </KeyboardAvoidingView>
    
            <BottomModel toggleModel={toggleModel} visible={isModalVisible}>


            <ModalContent style={{ width: "100%", height: 400, backgroundColor:'pink' }}>
                        <View style={buyStyle.modelView}>
                            <Text style={buyStyle.modelHeading}>Choose Your Location</Text>
                            <ScrollView >
                               <Button onPress={()=>{navigation.navigate("Adress"), setIsModalVisible(false), setAddress(place)}} >
                                    <Text>Add Adress or Pickup point</Text>
                                    </Button>
                            </ScrollView>
                            <View style={{
                              alignSelf:'flex-start',
                              gap:20
                            }}>
                                <Pressable onPress={currentLocatinoHandler} style={{flexDirection:'row', alignItems:'center', gap:5}}>
                                <Entypo name="location-pin" size={24} color="black" />
                                  <Text style={{fontFamily:'PoppinsMedium', fontSize:15, color:'blue', textDecorationLine:'underline'}}>Use my current location</Text></Pressable>
                                <Pressable onPress={mapHandler} style={{flexDirection:'row', alignItems:'center', gap:5}}>
                                <MaterialCommunityIcons name="map-marker-radius" size={24} color="black" />
                                  <Text style={{fontFamily:'PoppinsMedium', fontSize:15, color:'blue', textDecorationLine:'underline'}}>Use map for address</Text></Pressable>
                               
                            </View>
                        </View>
                    </ModalContent>
            </BottomModel>

    </View>
  )
}
