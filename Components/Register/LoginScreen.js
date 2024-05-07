import { View, Text, Pressable, Image, TextInput, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BackView } from '../../UI/BackView'
import Button from '../../UI/Button';
import CloudLogo from '../../assets/Images/CloudLogo2.png';
import signinStyle from './SigninStyle';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../../supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>{

        const checkLogin =  async ()=>{
                try{
        setLoading(true);
                        const token = await AsyncStorage.getItem("authToken");
                        if(token){
                            navigation.navigate("first");
    setLoading(false);
                        }
                }catch(err){
                        console.log(err)
                }
        }
        checkLogin();
    },[])

    const loginHandler = async ()=>{
        setLoading(true);

        if(email===''|| pass===''){
                setError("Inputs can't be empty");
                setLoading(false);
                return;
        }
try{
        const {data, error} = await supabase.auth.signInWithPassword({
            email:email,
            password:pass
        })

        if (error) {
            throw error; 
          }
      

       if(data){
            const token = data.session.access_token;
            AsyncStorage.setItem("authToken", token);
            navigation.navigate("first");
            setLoading(false);
            setEmail("");
            setPass('');
        }}
        catch (error) {
    
            setError(error.message); 
            setLoading(false);
          }

    }

  return (
    <BackView>
        
        <KeyboardAvoidingView style={signinStyle.signinView}>
        <View style={signinStyle.CloudLogo}>
            <Image source={CloudLogo} style={{width:'100%', height:'100%'}} />
        </View>

        <Text style={signinStyle.signinHeading}>Welcome Back!</Text>

       {error==''?  <Text style={{color:'white', fontSize:20, fontFamily:'Mogra'}}>
            {loading ? <ActivityIndicator color="#000" size={34} /> : "Signin"}
            </Text>:
       <Text style={{color:'red', fontSize:16, fontFamily:'PoppinsMedium'}}>{error}</Text>
       }

        <View style={signinStyle.inputView}>
            <TextInput 
            style={signinStyle.input}
            placeholder='Email'
            value={email}
            onChangeText={(text)=>setEmail(text)}
            onFocus={()=>setError('')}
            
            />
         
            <View style={signinStyle.passView}>
                
            <TextInput 
            style={signinStyle.input}
            placeholder='Password'
            value={pass}
            onChangeText={(text)=>setPass(text)}
            secureTextEntry={!showPassword}
            onFocus={()=>setError('')}
            />
       
            <Pressable style={signinStyle.eye} onPress={()=>setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye":"eye-off"} size={24} color="black" />
            </Pressable>

            </View>

        </View>

        <Button onPress={loginHandler}>Login</Button>

        <Pressable>
            <Text style={{textDecorationLine:'underline',fontWeight:'bold'}}>Forgot Password?</Text></Pressable>

        <View style={signinStyle.dontAccount}>
            <Text style={[signinStyle.text, {color:'#fff'}]}>Do not have an account?</Text>
            <Pressable style={signinStyle.swichBtn} onPress={()=>navigation.navigate("Signup")}>
                <Text style={signinStyle.text}>Signup</Text>
            </Pressable>
        </View>

        </KeyboardAvoidingView>


    </BackView>
  )
}