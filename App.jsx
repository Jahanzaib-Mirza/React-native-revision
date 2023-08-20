/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState('');
  const [pass, setpass] = useState('');
  const [email, setemail] = useState('');
  const [show,setShow]=useState(false);
  const updateNum = () => {
    setNum(num + 1);
  };
  
  return (
    <ScrollView>
      <Text style={{fontSize: 60}}>
        fuck u {name} {num} times
      </Text>
      <Button title="press me" style={styles.btn} onPress={updateNum} />
      <TextInput
        placeholder="Enter Name"
        value={name}
        style={styles.input}
        onChangeText={e => setName(e)}
      />
      <TextInput
        placeholder="Enter Password"
        value={pass}
        secureTextEntry={true}
        style={styles.input}
        onChangeText={e =>setpass(e)}
      />
      <TextInput
        placeholder="Enter email"
        value={email}
        style={styles.input}
        onChangeText={e =>setemail(e)}
      />
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Button style={styles.btn} title="Print" onPress={() => setShow(true)} />
        <Button style={styles.btn} title="Press" />
      </View>
      {show&&<View>
        <Text>Name : {name}</Text>
        <Text>Email : {email}</Text>
      </View>}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'green',
    color: '#fff',
    borderRadius: 5,
    margin: 4,
  },
  input: {
    backgroundColor:"pink",
    borderColor: 'black',
    margin: 5,
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default App;
