import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './style';

const login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Pagina de login</Text>
      </View>
    </SafeAreaView>  
  );
}

export default login;