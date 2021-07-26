import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import styles from './style';

const principal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text>Literae</Text>
      </View>
      <View>
        <Text>Pagina pricipal</Text>
      </View>
    </SafeAreaView>  
  );
}

export default principal;