import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';




export const Patient_Signup = (props) => {

  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [dob, setDOB] = useState(null);
  const [gender, setGender] = useState(null);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [patientlist, setPatientList] = useState(null);

  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});


  useEffect(() => {
    getData();

  }, [])

  const getData = async () => {
    try {
      const data = await database().ref("Patients").on('value', tempdata => {
        // console.log(data)
        setPatientList(tempdata.val())
      });

    }
    catch (err) {
      console.log(err)
    }
  };

  const handleSignup = async () => {
    if(password.length<6){
      Alert.alert("Password Length must be greater than 6")
    }
    else if (!/\S+@\S+\.\S+/.test(email)){
      Alert.alert("Invalid Email")
    }
    else if (password!==confirmPassword){
      Alert.alert("Passwords do not match")
    }
    else if (gender==null){
      Alert.alert("Please enter gender")
    }
    else if (dob==null){
      Alert.alert("Please enter Date of birth")
    }
    else {
      try {
        const isUserCreated = await auth().createUserWithEmailAndPassword(email, password);

        await auth().currentUser.sendEmailVerification();

        Alert.alert('Please verify your email through verification link sent to your email');

        await auth().signOut();

        props.navigation.navigate('login');

        addPatients();

      } catch (error) {
        console.log(error);
      }
    }
  };

  const addPatients = async () => {
    try {

      const index = patientlist.length;

      await database().ref(`Patients/${index}`).set({
        Full_Name: fullName,
        Email: email,
        DOB: dob,
        Gender: gender,
        Disease: 'disease',
        Phone_Number: 'phone',
        image: 'null'
      });

    }
    catch (err) {
      console.log(err)
    }
  };

  return (
    <View style={styles.containerSignup}>

      <Text style={styles.mainHeading}>PATIENT</Text>
      <ScrollView showsVerticalScrollIndicator={false}>

      {/* <View style={styles.inputContainer}> */}
        <View style={styles.box1}>
          <Text>{Object.values(errors)[0]}</Text>
          <TextInput style={styles.input2} placeholder="Full Name" onChangeText={(value) => setFullName(value)} value={fullName} />
        </View>
        <View style={styles.box1}>
          <TextInput style={styles.input2} placeholder="E-mail" onChangeText={(value) => setEmail(value)} value={email} />
        </View>
        <View style={styles.box1}>
          <TextInput style={styles.input2} placeholder="Date Of Birth" onChangeText={(value) => setDOB(value)} value={dob} />
        </View>

        <View style={styles.box1}>
          <TextInput style={styles.input2} placeholder="Gender" onChangeText={(value) => setGender(value)} value={gender} />
        </View>
        <View style={styles.box1}>
          <TextInput secureTextEntry={true} style={styles.input2} placeholder=" Password" onChangeText={(value) => setPassword(value)} value={password} />
        </View>
        <View style={styles.box1}>
          <TextInput secureTextEntry={true} style={styles.input2} placeholder="Confirm Password" onChangeText={(value) => setConfirmPassword(value)} value={confirmPassword} />
        </View>
      {/* </View> */}
      </ScrollView>
      <View style={styles.Continue}>
        {(password == null || confirmPassword == null || fullName == null || password.length < 6 || password != confirmPassword) ?
          <TouchableOpacity onPress={() => Alert.alert("Please Enter data in all fields")} style={styles.btn} >
            <Text style={[styles.text, { color: '#fff' }]}>SIGN UP</Text>
          </TouchableOpacity> :

          <TouchableOpacity
            onPress={() => handleSignup()}
            style={styles.btn}>
            <Text style={{ color: 'white', fontSize: 16 }}>SIGN UP</Text>

          </TouchableOpacity>
        }

      </View>
      <View >
        <TouchableOpacity
          onPress={() => handleNavigation('')}
          style={styles.option}>
          <Text style={{ color: '#D34B4B' }}>Are you a doctor?</Text>
        </TouchableOpacity>
      </View>

      {/* {Object.values(errors).map((error, index) => ( 
                <Text key={index} style={styles.error}> 
                    {error} 
                </Text> 
            ))}  */}

    </View>
  );
}

const styles = StyleSheet.create({
  mainHeading: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -80,
    color: '#2B2B2B',
    fontSize: 25
  },
  input2: {

    height: 54,
    width: 304,
    borderRadius: 14,
    marginTop: 15,
    backgroundColor: '#ECE0E0',
    // placeholderTextColor: 'black',
    textAlign: 'center',
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  Continue: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 16,

  },
  option: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  containerSignup: {
    paddingTop: 100,
    flex: 1,
    alignItems: 'center',

  },
  // inputContainer: {
  //   paddingTop: 16,
  //   flex: 1,

  // },
  errorText: {
    marginBottom: 0.5,
    marginLeft: 200,
    color: 'red'
  },
  error: {
    color: 'red',
    fontSize: 20,
    marginBottom: 12,
  },
});
