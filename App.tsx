/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaProvider style={styles.mainBackground}>
      <View style={styles.loginContainer}>
        <SafeAreaView>
          {/* NEW WRAPPER VIEW */}
          <View style={styles.viewChild}>
            <View style={styles.row}>
              <Text style={styles.loginText}>Login</Text>
              <Image
                style={styles.iconSize}
                source={require('./assets/images/icon.png')}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
      {/* Textiput email*/}
      <TextInput
        style={styles.inputText}
        placeholder="Email"
        placeholderTextColor={'#57595B'}
        value={userName}
        onChangeText={setUserName}
      ></TextInput>
      <TextInput
        secureTextEntry={true}
        style={styles.inputText}
        placeholder="Password"
        placeholderTextColor={'#57595B'}
      ></TextInput>
      <Text
        style={styles.txtForgot}
        onPress={() => Alert.alert('Feature not avalible right now!')}
      >
        Forgot password?
      </Text>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => Alert.alert('Welcome 🙏 ' + userName)}
      >
        <Text style={styles.txtLogin}>Login</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  //Main Background
  mainBackground: {
    backgroundColor: '#FEF6EF',
  },
  //Background img
  imgBack: {
    flex: 1,
    justifyContent: 'center',
  },
  loginContainer: {
    height: 320,
    backgroundColor: '#FCE2CE',
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
  },
  viewChild: {
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },

  loginText: {
    fontSize: 55,
    textAlign: 'center',
    top: 70,
    left: 30,
    color: '#553922',
    fontFamily: 'Actor-Regular',
    position: 'relative',
  },

  iconSize: {
    width: 250,
    height: 250,
    top: 60,
    right: 40,
  },
  //TextInput
  inputText: {
    borderWidth: 1,
    borderColor: '#757575',
    color: '#25343F',
    borderRadius: 15,
    fontSize: 15,
    padding: 15,
    height: 60,
    margin: 10,
    justifyContent: 'center',
  },
  //email icon
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  //Text forgot password
  txtForgot: {
    marginStart: 12,
    marginTop: 2,
    fontSize: 15,
  },
  //Pressable Log in
  btnLogin: {
    alignItems: 'center',
    backgroundColor: '#FCE2CE',
    padding: 10,
    margin: 10,
    borderRadius: 30,
  },
  //Login text
  txtLogin: {
    textAlign: 'center',
    fontSize: 20,
    color: '#553922',
    fontWeight: '600',
  },
});
export default App;
