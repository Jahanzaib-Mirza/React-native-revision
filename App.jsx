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
  SectionList
} from 'react-native';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];
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
    <View>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
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
