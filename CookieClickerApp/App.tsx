import React, { useState } from 'react'; 
import { SafeAreaView, Text, StyleSheet, Button, View } from 'react-native';
import axiosModule from './axios';

const App = () => {
  const [cookieCount, setCookieCount] = useState(0);
  const onButtonClick = async () => {
  
      const response = await axiosModule.handleClick();
      setCookieCount(response.data.cookieCount);
  };

  return (
    <View style={styles.container}>
      <Button 
        title="Click for cookies" 
        onPress={onButtonClick}
      />
      <Text style={styles.text}>You have {cookieCount} cookies</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
