import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Book_Appointment() {
  return (
    <View style={styles.Doctors}>
      <View style={styles.Doc1}>
        <View>
          <Image
            style={styles.stretch}
            source={require('../assets/Doc1.png')}
          />
        </View>
        <View style={styles.doc1Text}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}> Dr. Waseem </Text>
          <Text style={{marginLeft: 8}}>
            -------------------------------------
          </Text>
          <Text style={{marginLeft: 8, fontSize: 16}}>Neurologist | 4.7 </Text>
          <View style={styles.BookAppointmentViewbtn}>
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
                BookAppointment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.Doc1}>
        <View>
          <Image
            style={styles.stretch}
            source={require('../assets/Doc2.png')}
          />
        </View>
        <View style={styles.doc1Text}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}> Dr. Sherazi </Text>
          <Text style={{marginLeft: 8}}>
            -------------------------------------
          </Text>
          <Text style={{marginLeft: 8, fontSize: 16}}>Neurologist | 4.7 </Text>
          <View style={styles.BookAppointmentViewbtn}>
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
                BookAppointment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.Doc1}>
        <View>
          {/* <Image
            style={styles.stretch}
            source={require('../assets/Doc3.jpeg')}
          /> */}
        </View>
        <View style={styles.doc1Text}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}> Dr. Ahad </Text>
          <Text style={{marginLeft: 8}}>
            -------------------------------------
          </Text>
          <Text style={{marginLeft: 8, fontSize: 16}}>Neurologist | 4.2 </Text>
          <View style={styles.BookAppointmentViewbtn}>
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
                BookAppointment
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}


export default Book_Appointment;

const styles = StyleSheet.create({
  Doctors: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  Doc1: {
    flexDirection: 'row',
    height: 160,
    backgroundColor: 'lightgrey',
    marginTop: 40,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
  },
  stretch: {
    width: 88.73,
    height: 90,
    borderRadius: 25,
    marginTop: 30,
    marginLeft: 10,
    borderColor: 'black',
    borderWidth: 0.2,
  },
  doc1Text: {
    marginTop: 30,
    height: 160,
    fontWeight: 'bold',
    fontSize: 20,
  },
  BookAppointmentViewbtn: {
    backgroundColor: '#d34b4b',
    borderRadius: 14,
    width: 185,
    height: 38,
    marginLeft: 30,
    marginTop: 10,
  },
});
