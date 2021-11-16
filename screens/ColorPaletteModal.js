import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';


const ColorPaletteModal = () => {

    const [value1, setValue1] = useState('');

    return (
        <ScrollView style={styles.container}>
          <Text style={styles.text}>Name of your color palette</Text>
          <TextInput
            style={styles.input}
            value={value1}
            onChangeText={setValue1}
          />
        </ScrollView>
    )
};

export default ColorPaletteModal;

const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 5,
      padding: 5,
      marginBottom: 20,
    },
    container: {
      flex: 1,
      padding: 10,
    },
    text: {
      fontSize: 13,
      fontWeight: '500',
      marginBottom: 10,
    }
  });