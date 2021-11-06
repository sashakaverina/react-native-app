import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import ColorBox from "../components/ColorBox";



const ColorPalette = ({route}) => {
  const { paletteName, colors } = route.params;
    return (
  
      <FlatList
        data={ colors }
        style={styles.container}
        keyExtractor={item => item.colorName}
        renderItem={({item}) => <ColorBox colorName={item.colorName} colorHex={item.hexCode}/>}
       
      
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