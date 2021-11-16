import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import { withSafeAreaInsets } from "react-native-safe-area-context";
import PalettePreview from "../components/PalettePreview";

const Home = ({navigation}) => {
  const [colorPalettes, setColorPalettes] = useState()

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch('https://color-palette-api.kadikraman.vercel.app/palettes');
    const palettes = await result.json();
    if (result.ok) {
      setColorPalettes(palettes);
    }
  });

  useEffect(() => {
    fetchColorPalettes();
  }, []);
    return (
        <FlatList style={styles.list}
            data={colorPalettes}
            keyExtractor={item => item.paletteName}
            renderItem={({item}) => (
                <PalettePreview handlePress={() => {
                    navigation.navigate('ColorPalette', item);
                } }
                    colorPalette={item} 
                />      
            )}
            refreshControl={<RefreshControl refreshing={true} onRefresh={() => {}}/>}
        />    
    );
};

const styles = StyleSheet.create({
  list: {
      padding: 10,
      backgroundColor: 'white',
  }
});


export default Home;


