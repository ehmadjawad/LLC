import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Check({navigation}) {
  const handleNavigation = screenname => {
    console.log(screenname);
    navigation.navigate(screenname);
  };
  return (
    <View style={styles.report}>
      <View style={styles.icons}>
        <Text style = {{fontSize:25, color:'black', fontWeight:'bold'}}>Diagnosis Report</Text>
      </View>
      <View style ={styles.Reportlabels}>
      <View style={styles.row}>
        <Text style={styles.time}>Time:</Text>
        <Text style={styles.date}>Date:</Text>
      </View>
      <Text style={styles.time}>Report ID:</Text>
      <Text style={styles.time}>Patient Name:</Text>
      
      <Text style={styles.time}>Description:</Text>
      </View>

      <View style = {styles.iconContainer}>
     <View style={styles.downloadicon}>
      <TouchableOpacity  underlayColor="#E2D4D4">
        <Image
          style={styles.photo2}
          source={require('../assets/icondonload.png')}
        />
      </TouchableOpacity>
      </View>

    <View style = {styles.shareIcon}>
      <TouchableOpacity>
        <Icon name = 'share' size = {24} color = 'black'/>
      </TouchableOpacity>

    </View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  report: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    padding: 8,
    height: 560,
    width: 374,
    backgroundColor: '#E2D4D4',
    marginTop: 20,
    position: 'relative',
    borderRadius: 15,
    flex:1
  },
  icons: {
    alignSelf: 'center',
    position: 'absolute',
    top: 25,
  },
  photo: {
    height: 30,
    width: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:40
  },
  time: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    fontSize: 20,
    marginTop: 35,
  },
  date: {
    marginRight: 105,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    fontSize: 20,
    marginTop: 35,
  },
  downloadicon: {
    backgroundColor: '#D34B4B',
    borderRadius: 190,
    width: 55,
    height: 55,
  
  },
  photo2: {
    alignSelf: 'center',
    alignItems: 'center',
    height: 30,
    width: 40,
    top: 7,
  },
shareIcon:{
  backgroundColor:'#D34B4B',
  borderRadius: 190,
  width: 55,
  height: 55,
  padding:13
},
iconContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:250,
},
Reportlabels:{
  marginTop:40
}
});
