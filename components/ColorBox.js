import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = ({ colorName, colorHex }) => {
    const boxColor = {
        backgroundColor: colorHex,
    }
    return (
        <View style={[styles.box, boxColor]}>
        <Text style={styles.textStyle}>{colorName}: {colorHex}</Text>
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
    
    textStyle: {
        color: '#ffffff',
        fontWeight: 'bold',
      }
});

export default ColorBox;