import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import ColorBox from "../components/ColorBox";

const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];

const ColorPalette = () => {
    return (
  
      <FlatList
        data={COLORS}
        style={styles.container}
        keyExtractor={item => item.colorName}
        renderItem={({item}) => <ColorBox colorName={item.colorName} colorHex={item.hexCode}/>}
        ListHeaderComponent={<Text style={styles.textStyle}>Solarized</Text>}
      
      />
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingHorizontal: 10,
      backgroundColor: 'white',
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
  });


export default ColorPalette;