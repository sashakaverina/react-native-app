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
         <View style={[styles.box, styles.cyanStyle]}>
           <Text style={styles.textStyle}>Cyan: #2aa198</Text>
         </View>
         <View style={[styles.box, styles.blueStyle]}>
           <Text style={styles.textStyle}>Blue: #268bd2</Text>
         </View>
         <View style={[styles.box, styles.magentaStyle]}>
           <Text style={styles.textStyle}>Magenta: #d33682</Text>
         </View>
         <View style={[styles.box, styles.orangeStyle]}>
           <Text style={styles.textStyle}>Orange: #cb4b16</Text>
         </View>
         <ColorBox />
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
