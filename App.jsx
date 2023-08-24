import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Button, Modal, Text} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container} >
      <Modal transparent={true} visible={show}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Fuck U Hard</Text>
            <Button title="Close" onPress={()=>setShow(false)}/>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonWrapper}>
        <Button title="Open" onPress={()=>setShow(true)} />
      </View>
    </View>
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
    paddingVertical:20,
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
