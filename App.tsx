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

      <SafeAreaView></SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  //Main Background
  mainBackground: {
    backgroundColor: '#FEF6EF',
  },
  loginContainer: {
    height: 350,
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
});
export default App;
