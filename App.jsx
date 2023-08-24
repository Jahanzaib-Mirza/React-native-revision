import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Box = props => (
  // <View style={styles.box}>
  <Text style={styles.box}>{props.title}</Text>
  // </View>
);

const App = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState('');
  const [pass, setpass] = useState('');
  const [email, setemail] = useState('');
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const updateNum = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    axios
      .get('https://annovate-backend-production.up.railway.app/api/users/')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <ScrollView>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map((item) => {
          <Box title={item.userName} />;
        })}
      </View>
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
        onChangeText={e => setpass(e)}
      />
      <TextInput
        placeholder="Enter email"
        value={email}
        style={styles.input}
        onChangeText={e => setemail(e)}
      />
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          style={styles.btn}
          title="Print"
          onPress={() => setShow(true)}
        />
        <Button style={styles.btn} title="Press" />
      </View>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({item}) => <Box title={item.userName} />}
        />
      </SafeAreaView>
      {show && (
        <View>
          <Text>Name : {name}</Text>
          <Text>Email : {email}</Text>
        </View>
      )}
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
    backgroundColor: '#f9c2ff',
    borderColor: 'black',
    margin: 5,
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    marginTop: 10,
    marginHorizontal: 5,
    padding: 3,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',

    // alignItems:"center"
  },
  title: {
    fontSize: 32,
  },
  boxTitle: {
    fontSize: 15,
  },
});

export default App;
