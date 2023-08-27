import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Button, Modal, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen(props) {
  console.warn(props.route.params);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>Email : {props.route.params.email}</Text>
    </View>
  );
}
function Login(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Enter secret Key</Text>
      <Button
        title="Login"
        onPress={() =>
          props.navigation.navigate('Home', {email: 'jahanzaibm29@gmail.com'})
        }
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: ()=><Button title='hola'/>,
            headerRight:()=> <Button title='lola'/>,
            headerStyle: {
              backgroundColor: 'gold',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {flex: 1, justifyContent: 'center'},
  modalView: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 7,
  },
  modalText: {
    fontSize: 25,
    marginBottom: 10,
  },
});

export default App;
