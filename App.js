import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


import first from './Classes/first';
import splash from './Classes/splash';
import Book_Appointment from './Classes/Book_Appointment';
import Detector from './Classes/Detector';
import EditProfile from './Classes/EditProfile';
import Forgetpass from './Classes/Forgetpass';
import Med from './Classes/Med';
import messeging from './Classes/messeging';
import Report from './Classes/Report';
import Tumor_det from './Classes/Tumor_det';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import PredictStroke from './Classes/PredictStroke';
import Alzheimer_det from './Classes/Alzheimer_det';
import MultipleSclerosis_det from './Classes/MultipleSclerosis_det';
import { Login } from './Classes/login';
import { Patient_Signup } from './Classes/Patient_Signup';
import Admin_ViewDoctors from './Admin Classes/Admin_ViewDoctors';
import Admin_ViewPatients from './Admin Classes/Admin_ViewPatients';
import { Dashboard } from './Classes/Dashboard';
import { Profile } from './Classes/Profile';
import MedicationScreen from './Classes/MedicationScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabt = createMaterialTopTabNavigator();

function AdminScreens () {

  return(

  <Tabt.Navigator 
screenOptions={{
    tabBarInactiveTintColor: 'black',
    tabBarActiveTintColor: 'white',
    tabBarStyle: {
      backgroundColor: '#D34B4B',
      height: 58,
    },
    
      // tabBarIcon: ({ focused }) => (
      //   <View>
      //     <Image
      //       source={require('./assets/ProfileImage.png')}
      //       resizeMode="contain"
      //       style={{
      //         width: 48,
      //         height: 48,
      //       }}
      //     />
      //   </View>
      // ),
  }}>
  
  <Tabt.Screen name = "Pateints" component = {Admin_ViewPatients} />
  <Tabt.Screen name = "Doctors" component = {Admin_ViewDoctors} />

</Tabt.Navigator>

);
}



function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#D34B4B',
          height: 58,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#d34b4b',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('./assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 33,
                  height: 29,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MedicationScreen"
        component={MedicationScreen}
        options={{
          title: 'Medication',
          headerStyle: {
            backgroundColor: '#d34b4b',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            position: 'relative',
            fontWeight: 'bold',
            fontFamily: 'inter',
            fontSize: 24,
          },
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('./assets/management.png')}
                resizeMode="contain"
                style={{
                  width: 33,
                  height: 29,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="messeging"
        component={messeging}
        options={{
          title: 'Chat',
          headerStyle: {
            backgroundColor: '#d34b4b',
          },

          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'inter',
            fontSize: 24,
          },
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('./assets/messege.png')}
                resizeMode="contain"
                style={{
                  width: 33,
                  height: 29,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Book_Appointment}
        options={{
          title: 'Booking',
          headerStyle: {
            backgroundColor: '#d34b4b',
          },
          headerTitleStyle: {
            color: 'white',
          },
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('./assets/booking.png')}
                resizeMode="contain"
                style={{
                  width: 33,
                  height: 29,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#d34b4b',
          },
          headerTitleStyle: {
            color: 'white',
          },
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('./assets/Profile.png')}
                resizeMode="contain"
                style={{
                  width: 33,
                  height: 29,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


function App() {

  return (
    <NavigationContainer>
        
      <Stack.Navigator>
        <Stack.Screen
          name="first"
          component={first}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="splash"
          component={splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Patient_Signup}
          options={{
            title: 'Signup',
            headerStyle: {
              backgroundColor: '#d34b4b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Forgetpass"
          component={Forgetpass}
          options={{
            title: 'Forget Password',
            headerStyle: {
              backgroundColor: '#d34b4b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Home}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="Admin"
          component={AdminScreens}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="Detector"
          component={Detector}
          options={{
            title: 'Detector',
            headerStyle: {
              backgroundColor: '#d34b4b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Tumor_det"
          component={Tumor_det}
          options={{
            title: 'Detect Tumor',
            headerStyle: {
              backgroundColor: '#d34b4b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="PredictStroke"
          component={PredictStroke}
          options={{
            title: 'Predict Stroke',
            headerStyle: {
              backgroundColor: '#d34b4b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Alzheimer_det"
          component={Alzheimer_det}
          options={{
            title: 'Detect Alzheimer',
            headerStyle: {
              backgroundColor: '#d34b4b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="MultipleSclerosis_det"
          component={MultipleSclerosis_det}
          options={{
            title: 'Detect Multiple Sclerosis',
            headerStyle: {
              backgroundColor: '#d34b4b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="Report"
          component={Report}
          options={{
            title: 'Report',
            headerStyle: {
              backgroundColor: '#d34b4b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: 'Edit Profile',
            headerStyle: {
              backgroundColor: '#d34b4b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
