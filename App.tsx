/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, StyleSheet, View, Image } from 'react-native';

function App() {
  return (
    <SafeAreaProvider style={styles.mainBackground}>
      <View style={styles.loginContainer}>
        <SafeAreaView>
          <Text style={styles.loginText}>Login</Text>
          <Image
            style={styles.iconSize}
            source={require('./assets/images/icon.png')}
          />
        </SafeAreaView>
      </View>

      <SafeAreaView></SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: '#FFFFFF',
  },
  mainBackground: {
    backgroundColor: '#FEF6EF',
  },
  iconSize: {
    width: 250,
    height: 250,
    marginStart: 70,
  },
  loginContainer: {
    height: 350,
    backgroundColor: '#FCE2CE',
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 45,
    paddingLeft: 20,
    color: '#553922',
    fontFamily: 'Actor-Regular',
  },
});
export default App;
