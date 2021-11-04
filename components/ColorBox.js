import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = ({ colorName, colorHex }) => {
    const boxColor = {
        backgroundColor: colorHex,
    }

    const textColor = {
        color: parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1 ? "black" : "white",
    }
    return (
        <View style={[styles.box, boxColor]}>
        <Text style={styles.textStyle, textColor}>{colorName}: {colorHex}</Text>
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