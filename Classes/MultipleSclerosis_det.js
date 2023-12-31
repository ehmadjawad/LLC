import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Check({ navigation }) {
  const handleNavigation = screenname => {
    console.log(screenname);
    navigation.navigate(screenname);
  };
  return (
    <View style={styles.container}>
      <View style={styles.InsertImageContainer}>
        <View style={styles.border}>
        <TouchableOpacity>
          <AntDesign name='addfile' size={65} color='black' />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.png}>
        <Image source={require('../assets/pnglogo.png')} style={styles.img} />
        <Text style={styles.mri}>MRI Scan</Text>
        <View style={styles.tube}></View>
        <Text style={styles.percent}>100%</Text>
      </View>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.pre}>
          <Text style={{ color: 'white' }}>Preview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.del}>
          <Text style={{ color: 'white' }}>Delete</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.end}>
        <Text style={{ color: '#D34B4B', fontSize: 20, fontFamily: 'Abel' }}>
          MRI Scan Date{' '}
        </Text>
        <View style={styles.date}>
          <Text style={styles.txt}>00</Text>
          <Image
            source={require('../assets/dropdown.png')}
            style={styles.img2}
          />
          <Text style={styles.txt}>00</Text>
          <Image
            source={require('../assets/dropdown.png')}
            style={styles.img2}
          />
          <Text style={styles.txt}>00</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleNavigation('Report')}
        style={{
          backgroundColor: '#d34b4b',
          width: 90,
          padding: 10,
          borderRadius: 15,
          marginTop: 25,
          left: 280,
          borderColor: 'black',
        }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  InsertImageContainer: {
    alignSelf: 'center',
    padding: 8,
    height: 300,
    width: 250,
    backgroundColor: '#d34b4b',
    marginTop: 40,
    position: 'relative',
    borderRadius: 8,

  },

  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    top: 30,
  },
  border: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
    height: '100%',
    marginBottom: 2,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 2,
    justifyContent: 'center',
    alignItems:'center'
  },
  img: {
    height: 60,
    width: 57,
    top: 40,
    right: 60,
  },
  mri: {
    color: '#825841',
    fontSize: 20,
    bottom: 15,
    fontFamily: 'Abel',
  },
  tube: {
    backgroundColor: '#717EF0',
    height: 11,
    width: 260,
    borderRadius: 7.5,
    bottom: 15,
  },
  percent: {
    bottom: 50,
    left: 220,
    fontSize: 17,
    color: '#AA9292',
    fontWeight: '50',
  },
  btns: {
    flexDirection: 'row',
    marginLeft: 200,
    marginTop: -20,
    left: 20,
    bottom: 15,
  },
  pre: {
    backgroundColor: '#60A15F',
    borderRadius: 5,
    marginRight: 2,
    padding: 5,
  },
  del: {
    backgroundColor: '#C80D0D',
    borderRadius: 5,
    padding: 5,
  },
  png: {
    alignSelf: 'center',
  },
  txt: {
    color: 'white',
  },
  img2: {
    height: 10,
    width: 15,
    top: 5,
  },
  date: {
    flexDirection: 'row',
    backgroundColor: '#d34b4b',
    height: 22,
    borderRadius: 3,
    padding: 3,
    top: 2,
  },
  end: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
});
