import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { firestore, auth, googleAuthProvider, } from '../../firebase';
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: '500571869292-3tlo6fvmqcooblpj6s38f1oco4f0si43.apps.googleusercontent.com',
});
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const GoogleIcon = () => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 55 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M26.1835 -0.000453051C27.4229 -0.0785352 28.6623 -0.000453051 29.9018 -0.000453051C32.0708 0.0776291 34.1623 0.546122 36.2539 1.0927C37.2609 1.48311 38.268 1.87352 39.275 2.18585C39.7398 2.42009 40.2046 2.65434 40.6694 2.81051C40.7468 2.88859 40.8243 2.88859 40.9792 2.96667C41.444 3.20092 41.8313 3.43516 42.2961 3.74749C43.3806 4.45023 44.4651 5.23105 45.4722 6.01188C45.937 6.40229 46.3243 6.7927 46.7891 7.18311C46.8666 7.26119 46.944 7.41735 46.7891 7.57352C45.2398 9.05708 43.6905 10.6187 42.1412 12.1804C41.599 12.6489 41.0567 13.1954 40.5919 13.6639C40.1271 14.0543 39.6623 14.5228 39.275 14.9913C39.0426 15.2256 38.8877 15.2256 38.6553 14.9913C38.3454 14.679 38.0356 14.3667 37.6482 14.1324C36.7961 13.3516 35.7891 12.805 34.7046 12.4146C33.6975 11.9461 32.768 11.5557 31.6835 11.3995C31.2187 11.2434 30.7539 11.1653 30.2891 11.1653C29.9792 11.0872 29.6694 11.0872 29.282 11.0872C28.5849 11.0091 27.8877 11.0091 27.1905 11.0872C26.6482 11.0872 26.106 11.1653 25.5637 11.2434C25.0215 11.3215 24.4792 11.3995 24.0144 11.5557C23.0074 11.79 22.0778 12.1023 21.1482 12.5708C20.606 12.805 19.9863 13.1174 19.5215 13.4297C19.444 13.4297 19.3666 13.5078 19.2891 13.5858C18.9018 13.8201 18.5919 14.0543 18.2046 14.3667C17.8173 14.6009 17.5074 14.9132 17.1201 15.2256C16.3454 15.8502 15.6482 16.553 15.106 17.4119C14.8736 17.7242 14.5637 17.9585 14.4088 18.3489C14.099 18.8174 13.7891 19.2858 13.5567 19.7543C13.2468 20.3009 12.937 20.8475 12.7046 21.3941C12.4722 21.8626 12.3173 22.3311 12.1623 22.7995H12.0849C9.06374 20.4571 6.04261 18.0365 3.02148 15.6941C3.40881 15.0694 3.71867 14.3667 4.10599 13.742C4.26092 13.5078 4.41585 13.3516 4.49332 13.1174C4.64825 12.805 4.80317 12.4927 4.9581 12.2585C5.73275 11.1653 6.5074 10.1502 7.43698 9.13516C7.43698 9.13516 7.43698 9.13516 7.43698 9.05708C7.97923 8.51051 8.44402 8.04201 8.98627 7.49544C9.99332 6.55845 11.0778 5.77763 12.0849 4.91873C12.3173 4.76256 12.4722 4.6064 12.7046 4.45023C12.937 4.29407 13.1694 4.1379 13.4792 3.98174C14.4863 3.43516 15.4159 2.96667 16.4229 2.42009C17.4299 2.02968 18.437 1.63927 19.444 1.24886C21.6905 0.624205 23.8595 0.155711 26.1835 -0.000453051Z"
        fill="#EB4536"
      />
      <Path
        d="M2.94398 15.6943C5.96511 18.0368 8.98623 20.4573 12.0074 22.7998C11.4651 24.83 11.0003 26.8601 11.1552 28.9683C11.1552 29.5149 11.1552 30.0615 11.2327 30.608C11.3102 31.1546 11.3876 31.6231 11.5426 32.1697C11.62 32.8724 11.8524 33.4971 12.0074 34.1217C8.90877 36.4642 5.88764 38.8847 2.86651 41.3053C2.86651 41.3053 2.78905 41.3053 2.78905 41.2272C2.63412 40.7587 2.40172 40.2902 2.16933 39.8217C1.78201 38.8067 1.47215 37.7916 1.08482 36.6984C0.465105 34.5902 0.155246 32.4039 -0.0771484 30.2176C-0.0771484 29.0464 -0.0771484 27.8752 -0.0771484 26.7039C0.232711 24.3615 0.54257 22.019 1.23975 19.7546C1.62708 18.7395 2.0144 17.7245 2.40172 16.6313C2.63412 16.3971 2.78905 16.0847 2.94398 15.6943Z"
        fill="#F9BC17"
      />
      <Path
        d="M36.1761 55.9841C35.1691 56.2184 34.162 56.4526 33.155 56.6088C33.0775 56.6088 33 56.6088 32.9226 56.6868H32.8451C27.3451 57.4677 21.6127 56.843 16.5775 54.5005C16.1127 54.2663 15.6479 54.0321 15.1831 53.7978C13.4789 52.8608 11.8522 51.7677 10.3029 50.5184C9.91553 50.206 9.52821 49.8156 9.14089 49.5033C8.4437 48.8005 7.74652 48.0978 7.1268 47.3951C6.81694 47.0827 6.58455 46.6923 6.27469 46.38C6.19722 46.2238 6.11976 46.1458 6.04229 46.0677C5.26765 45.0526 4.57046 43.8814 3.87328 42.7882C3.64089 42.3197 3.33103 41.8512 3.09863 41.3827V41.3047C6.11976 38.8841 9.14089 36.4636 12.2395 34.1211C12.7043 35.5266 13.324 36.9321 14.1761 38.1814C14.486 38.7279 14.7958 39.1964 15.1831 39.5868C15.2606 39.743 15.2606 39.8211 15.4155 39.8992C15.8029 40.2896 16.1127 40.7581 16.5775 41.1485L16.655 41.2266C17.1198 41.7731 17.662 42.1636 18.2043 42.554C19.1338 43.2567 20.0634 43.8814 21.1479 44.3499C22.0775 44.8964 23.162 45.2088 24.1691 45.443C24.6338 45.5211 25.0986 45.5992 25.5634 45.7553C26.1057 45.8334 26.6479 45.9896 27.1902 45.9115C27.655 45.9115 28.1198 45.9896 28.5845 45.9115C29.1268 45.9115 29.6691 45.9896 30.2113 45.8334C30.7536 45.8334 31.2958 45.7553 31.7606 45.5992C32.2254 45.5992 32.6902 45.443 33.0775 45.2868C34.2395 45.0526 35.324 44.5841 36.331 43.9594C36.8733 43.7252 37.3381 43.3348 37.8029 43.1005C40.7465 45.443 43.6902 47.7074 46.6338 50.0499V50.1279C46.4789 50.206 46.4015 50.2841 46.2465 50.4403C45.3944 51.143 44.4648 51.8458 43.5353 52.5485C42.6057 53.1732 41.5986 53.7197 40.5916 54.2663C40.1268 54.5005 39.5845 54.7348 39.1198 54.891C38.655 55.0471 38.1127 55.2814 37.6479 55.4375C37.1831 55.6718 36.6409 55.8279 36.1761 55.9841Z"
        fill="#36A852"
      />
      <Path
        d="M51.2818 44.2726C51.2043 44.2726 51.2043 44.3507 51.2043 44.4288C50.8944 44.8973 50.5846 45.4439 50.2747 45.9123C50.0423 46.2247 49.8874 46.4589 49.655 46.7713C49.5001 46.9274 49.3452 47.1617 49.1902 47.3178C48.3381 48.2548 47.5635 49.2699 46.6339 50.1288C43.6902 47.7863 40.7466 45.4439 37.8029 43.1795C38.2677 42.7891 38.8099 42.4767 39.1973 42.0082C39.4297 41.774 40.4367 40.837 40.5916 40.5247C40.7466 40.3685 40.9015 40.1343 41.0564 39.9C41.4437 39.3534 41.8311 38.8069 42.0635 38.2603C42.1409 38.1822 42.7606 36.8548 42.8381 36.6987C42.993 36.2302 43.2254 35.6836 43.3029 35.137C43.4578 34.8247 43.4578 34.5123 43.5353 34.1219C43.5353 34.0439 43.6902 33.9658 43.5353 33.8877C43.148 33.8096 35.1691 33.8096 34.6268 33.8877C34.1621 33.8096 29.1268 33.8096 28.5846 33.8877C28.5071 33.8877 28.3522 33.8877 28.2747 33.8877L28.1973 33.8096C28.1973 33.7315 28.1973 33.7315 28.1973 33.6534C28.1973 32.4822 28.1973 31.2329 28.1973 30.0617C28.1973 29.9055 28.1973 29.1247 28.1973 28.9685C28.1973 27.4849 28.1973 26.0014 28.1973 24.4397C28.3522 23.9713 27.9649 23.1904 28.6621 23.1904C29.1268 23.2685 53.7606 23.2685 54.2254 23.1904C54.3029 23.1904 54.3029 23.1904 54.3804 23.1904C54.3804 23.2685 54.4578 23.2685 54.4578 23.3466C54.4578 23.4247 54.4578 23.5028 54.5353 23.5808C54.5353 23.6589 54.5353 23.6589 54.6128 23.737C54.6128 23.8151 54.6128 24.1274 54.6902 24.2055C54.6902 24.2836 54.6902 24.3617 54.6902 24.4397C54.6902 24.5178 54.6902 24.5959 54.7677 24.674C54.8452 25.611 55.0001 26.626 55.0001 27.563C55.0001 28.5 55.0001 29.5151 55.0001 30.4521C54.9226 32.4822 54.6128 34.5123 54.148 36.5425C54.148 36.6206 54.148 36.6206 54.148 36.6987C53.993 37.0891 53.9156 37.5576 53.8381 37.948C53.6832 38.4945 53.5283 38.963 53.2959 39.5096C53.1409 39.9781 52.9085 40.5247 52.7536 40.9932C52.6761 41.3055 52.6761 41.3836 52.6761 41.3836C52.4437 41.8521 52.2113 42.3206 52.0564 42.7891C51.7466 43.3356 51.5142 43.8041 51.2818 44.2726Z"
        fill="#557EBF"
      />
    </Svg>
  );
};
const Login = () => {
  const [usernameValue, setusernameValue] = useState('');
  const [passwordValue, setpasswordValue] = useState('');
  const [disabled, setdisabled] = useState(false);
  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: { fontFamily: 'Poppins-Regular' },
    });
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{ alignItems: 'flex-start', marginBottom: 30, marginEnd: 70 }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Poppins-Regular',
            color: 'white',
          }}
        >
          Log in or Sign Up
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Poppins-Regular',
            color: '#FFB30F',
          }}
        >
          for FREE
        </Text>
      </View>

      <View
        style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}
      >
        <View
          style={{
            paddingLeft: 10,
            height: 60,
            borderWidth: 1,
            width: SCREEN_WIDTH * 0.8,
            borderRadius: 10,
            borderColor: '#363C5A',
          }}
        >
          <TextInput
            style={{
              height: 60,
              color: '#363C5A',
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
            }}
            placeholder={' username '}
            placeholderTextColor="#6D7187"
            onChangeText={(text) => setusernameValue(text)}
            value={usernameValue}
          />
        </View>
      </View>
      <View
        style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}
      >
        <View
          style={{
            paddingLeft: 10,
            height: 60,
            borderWidth: 1,
            width: SCREEN_WIDTH * 0.8,
            borderRadius: 10,
            borderColor: '#363C5A',
          }}
        >
          <TextInput
            ref={inputElementRef}
            style={{
              height: 60,
              color: '#363C5A',
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
            }}
            placeholder={' password '}
            secureTextEntry
            placeholderTextColor="#6D7187"
            onChangeText={(text) => setpasswordValue(text)}
            value={passwordValue}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          margin: 10,
          backgroundColor: '#FFB30F',
          width: SCREEN_WIDTH * 0.8,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
        onPress={async () => {
          setdisabled(true);
          auth.signInWithEmailAndPassword(usernameValue, passwordValue);
        }}
        disabled={disabled}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Regular',
            color: 'white',
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text
        style={{ fontSize: 20, fontFamily: 'Poppins-Regular', color: 'white' }}
      >
        or
      </Text>
      <TouchableOpacity
        style={{
          margin: 10,
          backgroundColor: '#363C5A',
          width: SCREEN_WIDTH * 0.8,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
        onPress={() => {
          onGoogleButtonPress()
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <View style={{ margin: 5 }}>
            <GoogleIcon />
          </View>
          <View style={{ margin: 5 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Poppins-Regular',
                color: 'white',
              }}
            >
              Continue with Google
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F2232',
  },
});

export default Login;
