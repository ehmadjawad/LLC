import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import Auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';

export default function App(props) {
  useEffect(() => {
    setTimeout(async () => {
      const unsubscribe = await Auth().onAuthStateChanged(users => {
        if (users == null) {
          props.navigation.dispatch(StackActions.replace('splash'));
        } else if (users.email !== 'admin123@gmail.com') {
          props.navigation.dispatch(StackActions.replace('Dashboard'));
        } else {
          props.navigation.dispatch(StackActions.replace('Admin'));
        }
      });
      unsubscribe();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.loader}>
        <LottieView source={require('../assets/loader.json')} autoPlay loop />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 375,
    height: 144,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 140,
  },
  container: {
    marginTop: 100,
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    marginLeft: 110,
    height: 180,
    width: 160,
  },
});
