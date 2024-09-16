import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

import { planets } from './planets';
import { PlanetsList } from './PlanetsList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'grey'} />
  
        <View style={styles.header}>
          <Text style={styles.title}>Vamos explorar</Text>
          <MaterialCommunityIcons name='space-station' size={60} color={'#000'} />
        </View>
        
        <Swiper style={styles.wrapper} loop={false} showsButtons={false} showsPagination={false}>
        {
        planets.map((planets) => (
          <PlanetsList planets={planets}></PlanetsList>          
        ))}
      </Swiper>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    color: '#000000',
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
