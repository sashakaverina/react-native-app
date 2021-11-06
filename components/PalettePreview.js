import React from "react";
import { Text, View } from 'react-native';


const PalettePreview = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('ColorPalette', item);
        }}
        >
        <Text>{item.paletteName}</Text>
      </TouchableOpacity>
    );
};


export default PalettePreview;