import React, { useState } from 'react'; 
import { Text, Image, StyleSheet, Pressable, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axiosModule from './axios';

const image = { uri: 'https://static.wikia.nocookie.net/cookieclicker/images/5/5a/PerfectCookie.png' };
const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <SafeAreaProvider> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="NavBar"
            component={Cookie}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const Cookie = ({}) => {
  const [cookieCount, setCookieCount] = useState(0);
  const onButtonClick = async () => {
    const response = await axiosModule.handleClick();
    setCookieCount(response.data.cookieCount);
};
  return (
    
<View style={styles.container}>
    <View style={styles.button}>
    <Pressable onPress={onButtonClick}>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </Pressable>
    </View>
    <Text style={styles.text}>You have {cookieCount} cookies</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  button: {
    // Optional styling for button wrapper
  },
  image: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});

export default App;
function setCookieCount(cookieCount: any) {
  throw new Error('Function not implemented.');
}

