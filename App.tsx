import React, { useState } from 'react';
import { Text, View, Button,TextComponent, FlatList, StyleSheet,SectionList, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

const App = () => {

  const handleLogin = async()=>{
    try{
      const isUserCreated = await auth().createUserWithEmailAndPassword(email,password,);
      console.log(isUserCreated);
    }catch(err){
      console.log(err);
    }
  }

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  return (
    <View>
     <Text>Create User with Email/Pasword.</Text>
    <View style={styles.input_E}>
      <TextInput
      placeholder='Enter email'
      value={email}
      onChangeText={(val)=>setEmail(val)}
      />
    </View>
    <View style={styles.input_E}>
      <TextInput
      placeholder='Enter password'
      value={password}
      onChangeText={(val)=>setPassword(val)}
      secureTextEntry = {true}
      />
    </View>
    <View style={styles.botton_L}>
      <Button
      title='Login' onPress={()=>handleLogin()}
      />
    </View>
    
    </View>
  )
}


const styles = StyleSheet.create({
  input_E:{
   borderColor: "grey",
   borderWidth: 2,
   marginLeft: 20,
   marginRight: 20,
   marginTop: 20
  },
  botton_L:{
    marginLeft: 20,
   marginRight: 20,
   marginTop: 20
  }
})



export default App;
