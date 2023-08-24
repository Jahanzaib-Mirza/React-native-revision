import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, ActivityIndicator, StyleSheet, Button} from 'react-native';

const App = () => {
  const [animated, setAnimated] = useState(false);
  const fetchData = () => {
    setAnimated(true)
    axios
      .get('https://annovate-backend-production.up.railway.app/api/users/')
      .then(res => {
        console.warn("Data Fetched Successfully");
        setAnimated(false)
        // setData(res.data);
      });
  };
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'gold'} size={150} animating={animated} />
      <Button color={"purple"} title="Fetch Data" onPress={fetchData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aqua',
  },
});

export default App;
