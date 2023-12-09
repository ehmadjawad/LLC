import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';


const EditProfile = () => {

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [dob, setDOB] = useState(null);
  const [disease, setDisease] = useState(null);
  const [phone, setPhone] = useState(null);

  let Email = null;

  const [patientlist, setPatientList] = useState(null);

  const [editable, setEditable] = useState(false);
  const [btn, setBtn] = useState('U');


 useEffect(() => {

    getAsyncData();
    getData();

  }, [])

  const getAsyncData = async () => {
    Email = await AsyncStorage.getItem('email')
  } 

  const getData = async () => {

    const data = await database().ref('Patients').orderByChild('email').equalTo(Email).once('value')
      .then(snapshot => {
        if (snapshot.exists()) {

          const patientData = snapshot.val();
          patientData.forEach(obj => {

            if (obj.Email == Email) {
              setPatientList(obj)

            }
          })
        } else {
          console.log('No data found for the specified email.');
        }
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
      });

    // const data = await database().ref("Patients").orderByChild('email').equalTo(Email).limitToFirst(1).once('value');

    // console.log(data)
    // setPatientList(data.val());
    // console.log('ooooo',patientlist);
    // console.warn('kkkk')

    // const dataPatient = await database().ref("Patients/2").on('value', tempdata => {
    //   console.log(dataPatient)
    //   console.warn('hhhh')
    //   setPatientList(tempdata.val())
    //   console.log(patientlist);

    // });

  };





  const handleUpdateProfile = () => {

    setBtn('S');
    setEditable(true);


  }

  const handleSaveandUpdate = async () => {
    try {
      setBtn('U');
      setEditable(false);


      const snapshot = await database().ref('Patients').orderByChild('email').equalTo(Email).once('value');

      if (snapshot.exists()) {

        const patientData = snapshot.val();
        let key = 0;
        let i = -1;
        patientData.forEach(obj => {
          i++;
          if (obj.Email == Email) {
            setPatientList(obj)
          }
          key = i;
        })

        if (email) {
          database().ref(`Patients/${key}`).update({
            Email: email
          });
        }
        if (name) {
          database().ref(`Patients/${key}`).update({
            Full_Name: name
          });
        }
        if (disease) {
          database().ref(`Patients/${key}`).update({
            Disease: disease
          });
        }

        if (dob) {
          database().ref(`Patients/${key}`).update({
            DOB: dob
          });
        }

        if (phone) {
          database().ref(`Patients/${key}`).update({
            Phone_Number: phone
          });
        }



      }
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.containerEditProfile}>

      <View style={styles.imageupload}>
        <TouchableOpacity>
          <AntDesign name='addfile' size={25} color='black' />
        </TouchableOpacity>
      </View>



      <View style={styles.inputContainer}>

      <Text style = {{marginRight:220, fontSize:16, color:'black'}}>Full Name</Text>
        <View style={styles.box2}>
          <TextInput style={styles.input2} placeholder={patientlist ? patientlist.Full_Name : null} placeholderTextColor="black" editable={editable} onChangeText={(value) => setName(value)} value={name} />
        </View>
        
        <Text style = {{marginRight:260, fontSize:16, color:'black', marginTop:8}}>Email</Text>
        <View style={styles.box2}>
          <TextInput style={styles.input2} placeholder={patientlist ? patientlist.Email : null} placeholderTextColor="black" editable={editable} onChangeText={(value) => setEmail(value)} value={email} />
        </View>
        <Text style = {{marginRight:260, fontSize:16, color:'black', marginTop:8}}>DOB</Text>
        <View style={styles.box2}>
          <TextInput style={styles.input2} placeholder={patientlist ? patientlist.DOB : null} placeholderTextColor="black" editable={editable} onChangeText={(value) => setDOB(value)} value={dob} />
        </View>
        <Text style = {{marginRight:235, fontSize:16, color:'black', marginTop:8}}>Disease</Text>
        <View style={styles.box2}>
          <TextInput style={styles.input2} placeholder={patientlist ? patientlist.Disease : null} placeholderTextColor="black" editable={editable} onChangeText={(value) => setDisease(value)} value={disease} />
        </View>
        <Text style = {{marginRight:190, fontSize:16, color:'black', marginTop:8}}>Phone Number</Text>
        <View style={styles.box2}>
          <TextInput style={styles.input2} placeholder={patientlist ? patientlist.Phone_Number : null} placeholderTextColor="black" editable={editable} onChangeText={(value) => setPhone(value)} value={phone} />
        </View>
      </View>



      {btn == 'U' ? <View style={styles.Update}>
        <TouchableOpacity style={styles.btn} onPress={() => handleUpdateProfile()}>
          <Text style={styles.Text}>Update</Text>
        </TouchableOpacity>
      </View> :

        <View style={styles.OK}>
          <TouchableOpacity style={styles.btn} onPress={() => handleSaveandUpdate()}>
            <Text style={styles.Text}>Save</Text>
          </TouchableOpacity>
        </View>}



    </View>
  );
}

export default EditProfile;

const styles = StyleSheet.create({

  imageupload: {
    height: 83,
    width: 83,
    borderRadius: 41.5,
    backgroundColor: '#ECE0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
    marginLeft: 140

  },
  txt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16

  },

  input2: {
    color: 'black',
    textAlign: 'center',
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 54,
    width: 304,
    borderRadius: 14,
    marginTop: 12,
    backgroundColor: '#ECE0E0',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#d34b4b',
    width: 304,
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 10,
  },
  Update: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    marginTop:-60
  },
  OK: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    marginTop:-60
  },
  containerEditProfile: {
    flex:1,
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 10,
    alignItems: 'center'
  },
  List: {
    marginTop: 10,
    alignItems: 'center'
  },
  stretch: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 150,
    marginBottom: 25,
  },
  Text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
