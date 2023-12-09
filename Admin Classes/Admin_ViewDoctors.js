import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

function Admin_ViewDoctors() {
  return (
    <View style={styles.Patients}>
      <View style={styles.Patient1}>
        <View>
          <Image
            style={styles.stretch}
            source={require('../assets/Doc1.png')}
          />
        </View>
        <View style={styles.Patient1Text}>
        <TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: 'bold', color:'black'}}>Dr. Ahmed Ali</Text>
          </TouchableOpacity>
        <View style = {styles.PMDCandCopy}>
          <Text style={{marginLeft: 8, fontSize: 15, color:'black'}}> PMDC Reg #:1234567891011 </Text>
           <TouchableOpacity>
            <Icon name = 'copy' size = {15} color = 'black'/>
            </TouchableOpacity>
        </View>
          <View style={styles.Removebtn}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                  paddingTop: 5,
                }}>
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </View>
  );
}


export default Admin_ViewDoctors;

const styles = StyleSheet.create({
  Patients: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex:1
  },
  Patient1: {
    flexDirection: 'row',
    height: 104,
    width:341 ,
    backgroundColor: '#DCD8D8',
    marginTop: 40,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
  },
  stretch: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 10,
    borderColor: 'black',
    borderWidth: 0.2,
  },
  Patient1Text: {
marginTop:5, 
marginLeft:10
  
  },
  Removebtn: {
    backgroundColor: 'black',
    borderRadius: 14,
    width: 100,
    height: 38,
    marginLeft: 155,
    marginTop: 14,
    borderRadius:14
  },
  PMDCandCopy:{
    flexDirection:'row'
  }
});
