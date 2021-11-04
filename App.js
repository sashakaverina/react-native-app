/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedbackBase } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={ styles.safeArea }>
      <View style={styles.container}>
        <Text style={styles.header}>
          Here are some boxes of different colors
        </Text>
         <ColorBox colorName="Cyan" colorHex="#2aa198"/>
         <ColorBox colorName="Blue" colorHex="#268bd2"/>
         <ColorBox colorName="Magenta" colorHex="#d33682"/>
         <ColorBox colorName="Orange" colorHex="#cb4b16"/>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    paddingVertical: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  cyanStyle: {
    backgroundColor: '#2aa198',
    
  },
  blueStyle: {
    backgroundColor: '#268bd2',

  },
  magentaStyle: {
    backgroundColor: '#d33682', 
  },
  orangeStyle: {
    backgroundColor: '#cb4b16',
  },
  safeArea: {
  flex: 2,
},
  textStyle: {
    color: '#ffffff',
    fontWeight: 'bold',
  }
})

export default App;
