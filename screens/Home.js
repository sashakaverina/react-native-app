import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, FlatList, RefreshControl, TouchableOpacity, Text } from 'react-native';
import { withSafeAreaInsets } from "react-native-safe-area-context";
import PalettePreview from "../components/PalettePreview";

const Home = ({navigation, route}) => {
  const newColorPalette = route.params ? route.params.newColorPalette : undefined ;
  const [colorPalettes, setColorPalettes] = useState()
  const [isRefreshing, setIsRefreshing] = useState(false)

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

  const handleRefresh = useCallback( async () => {
   setIsRefreshing(true);
   await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000)
   
  }, [])

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes(palettes => [newColorPalette, ...palettes])
    }
  }, [newColorPalette]);

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
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            ListHeaderComponent={<TouchableOpacity onPress={() => { navigation.navigate('ColorPaletteModal')}}>
              <Text style={styles.text}>Add a Color Scheme</Text>
            </TouchableOpacity>}
        />    
    );
};

const styles = StyleSheet.create({
  list: {
      padding: 10,
      backgroundColor: 'white',
  },
  text: {
    fontSize: 22,
    color: 'teal',
    fontWeight: "bold",
    marginBottom: 20,
  }
});


export default Home;


