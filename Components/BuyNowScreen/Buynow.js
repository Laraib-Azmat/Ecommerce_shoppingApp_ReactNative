import React, {useState} from 'react'
import { ScrollView, View,Text , TextInput, Pressable, } from 'react-native'
import buyStyle from './BuyStyle';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BuyCheckBox } from './BuyCheckBox';
import Button from '../../UI/Button';


export const Buynow = (props) => {

    const [contact, setContact] = useState('');
    
  return (
    <ScrollView>

        <View style={buyStyle.modelView}>

            <Text style={buyStyle.modelHeading}>BUY NOW</Text>

            <View  style={buyStyle.addressfield}>

            <View style={buyStyle.inputField}>

            <MaterialIcons name="drive-file-rename-outline" size={24} color="black" style={buyStyle.buyIcon} />
                    <TextInput
                    style={buyStyle.input}
                    placeholder="You name"
                    value={contact}
                    onChangeText={(text) => setContact(text)}
                    />
                    </View>

                
                    <View style={buyStyle.inputField}>
                    <MaterialIcons name="call" size={24} color="black" style={buyStyle.buyIcon} />
                    <TextInput
                    style={buyStyle.input}
                    placeholder="You contact number"
                    value={contact}
                    onChangeText={(text) => setContact(text)}
        />
                    </View>

                    <View style={buyStyle.inputField}>
                <Entypo name="location" size={24} color="black" style={buyStyle.buyIcon} />

                    <Pressable onPress={()=>props.toggleModel()}  style={buyStyle.buyLocPress}>
                        <Text style={{margin:5}}>{props.address==="" ? "Select Your Location":props.address}</Text>
                        <Entypo name="chevron-down" size={24} color="black" />
                    </Pressable>

                </View>



            </View>

            <BuyCheckBox />


            <View style={{alignItems:'center', gap:20}} >
                <Text style={{fontSize:18, fontFamily:'InikaBold'}}>Account Info</Text>

                <View style={{flexDirection:'row', alignItems:'center',width:'80%', justifyContent:'space-between', gap:10}}>
                    <Text style={buyStyle.text}>Account No:</Text>
                    <TextInput
                    style={[buyStyle.input, {width:180}]}
                    placeholder="000 111 222 333"
                    value={contact}
                    onChangeText={(text) => setContact(text)}
        />

                </View>

                <View style={{flexDirection:'row', alignItems:'center',width:'80%', justifyContent:'space-between', gap:10}}>
                    <Text style={buyStyle.text}>Account Holder:</Text>
                    <TextInput
                    style={[buyStyle.input, {width:180}]}
                    placeholder="eg. Laraib Azmat"
                    value={contact}
                    onChangeText={(text) => setContact(text)}
        />

                </View>

                
            </View>

            <View style={{  gap:10, alignItems:'center'}}>
            <Text style={{fontSize:18, fontFamily:'InikaBold'}}>Your Bill</Text>
<View style={buyStyle.totalPay}>
    <Text style={buyStyle.text}>Payment</Text>
    <Text style={buyStyle.text}>Rs {props.total}</Text>
</View>
<View style={buyStyle.totalPay}>
    <Text style={buyStyle.text}>Delivery Charges</Text>
    <Text style={buyStyle.text}>Rs 250/-</Text>
</View>
<View style={buyStyle.totalPay}>
    <Text style={buyStyle.text}>Total Bill</Text>
    <Text style={{fontFamily:"InikaBold", fontSize:18, color:'#D53624'}}>Rs {props.total+250}/-</Text>
</View>
               
</View>

      

        </View>

        
    </ScrollView>
  )
}
