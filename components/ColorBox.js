import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = () => {
    return (
        <View style={[styles.box, styles.cyanStyle]}>
        <Text style={styles.textStyle}>Cyan: #2aa198</Text>
      </View>

    )
};

const styles = StyleSheet.create({
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
    textStyle: {
        color: '#ffffff',
        fontWeight: 'bold',
      }
});

export default ColorBox;