// MedicationScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import database from '@react-native-firebase/database';
import { scheduleNotification } from './NotificationService';
import Med from './Med';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MedicationScreen = () => {
    
  let Email = null;
  let medi =null;

    useEffect(() => {

        getAsyncData();
    
      }, [])
    
      const getAsyncData = async () => {
        Email = await AsyncStorage.getItem('email')
        medi = await AsyncStorage.getItem('medication')
        
      }
      // const setasyncData = async () => {
      //   await AsyncStorage.setItem('medication', med)
    
      // }

  // const saveMedication = async (medicationData) => {
  //   console.log(medicationData)
  //   // Save data to Firebase
  //   await AsyncStorage.setItem('medicineName', medicationData.medicineName)
  //   await AsyncStorage.setItem('medicineTime', medicationData.medicineTime)
  //   database().ref('medications').push( medicationData);

  //   // Schedule notification
  //   scheduleNotification(medicationData.medicineName, medicationData.medicineTime);
  // };

  return (
    <View>
      <Med onSave={saveMedication} />

      {/* <TouchableOpacity
            onPress={() => getAsyncData().then(console.log(Email,medi))}
            style={styles.btn}>
            <Text style={{ color: 'white', fontSize: 16 }}>SIGN UP</Text>

          </TouchableOpacity> */}
    </View>
  );
};
export default MedicationScreen;
const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#d34b4b',
    width: 304,
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 100,
    marginBottom: 10,
  },
})