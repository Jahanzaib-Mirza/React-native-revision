import React ,{useState}from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  const [name,setName]=useState("");
  const saveData = async()=>{
    await AsyncStorage.setItem("name",name);
    setName("");
  }
  const getData = async()=>{
    let n = await AsyncStorage.getItem("name");
    setName(n);
  }
  return (
    <View style={{flex:1,justifyContent:"center"}}>
      <TextInput value={name} style={{backgroundColor:"#2ffd",borderWidth:2,borderColor:"#000",margin:5}}
       onChangeText={(text)=>setName(text)} placeholder='Enter Name'/>
      <Button onPress={saveData} title='Save'/>
      <Button onPress={getData} title='Get Data'/>
    </View>
  );
};


export default App;
