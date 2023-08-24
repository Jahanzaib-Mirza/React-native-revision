import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  // useEffect(() => {
  //   axios
  //     .get('https://annovate-backend-production.up.railway.app/api/users/')
  //     .then(res => {
  //       console.log(res.data);
  //       setData(res.data);
  //     });
  // }, []);
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Text style={styles.button}>Fuck Me</Text>
      </TouchableHighlight>
      <TouchableOpacity onPress={()=>setSelected(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selected === 1 ? <View style={styles.radioBG}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelected(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selected === 2 ? <View style={styles.radioBG}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
  },
  radioText: {
    fontSize: 25,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBG: {
    backgroundColor: '#000',
    height: 22,
    width: 22,
    borderRadius: 11,
    margin: 2,
  },
  container: {
    flex: 1,
    // alignItems:"center",
    justifyContent: 'center',
    backgroundColor: 'aqua',
  },
  button: {
    backgroundColor: '#f9c2ff',
    textAlign: 'center',
    padding: 10,
    margin: 20,
    fontSize: 25,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 10,
    shadowOpacity: 1,
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default App;
