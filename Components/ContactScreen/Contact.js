import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import Button from '../../UI/Button';
import contactStyle from './ContactStyle';
import { useNavigation } from '@react-navigation/native';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleClear = () => {
    setName('');
    setEmail('');
    setTextarea('');
    setError('');
  };

  const handleSubmit = () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Handle form submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', textarea);
    // Clear form fields after submission
    handleClear();
    navigation.navigate("Thankyou", {type:'contact'})
  };

  return (
    <ScrollView>
         
         <KeyboardAvoidingView style={contactStyle.contactFields}>

         <TextInput
        value={textarea}
        label="Your Message"
        multiline={true}
        numberOfLines={5}
        style={[contactStyle.input, { width: '90%' }]}
        onChangeText={setTextarea}
        />

        <TextInput
       value={name}
        label="Your name"
        style={ { width: '60%', alignSelf: 'flex-end', marginRight: 20 }}
      onChangeText={setName}
  />

          
  <TextInput
    value={email}
    label="Your email"
    style={{
        width: '60%',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 0,
      }}
    onChangeText={setEmail}
  />
  {error ? <Text style={contactStyle.error}>{error}</Text> : null}

         </KeyboardAvoidingView>

         <View style={contactStyle.contactBtn}>
        <Button onPress={handleClear}>Clear</Button>
       <Button onPress={handleSubmit}>Send</Button>
      </View>
    </ScrollView>
  );
}



