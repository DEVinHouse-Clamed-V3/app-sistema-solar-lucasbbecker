import { StyleSheet, Text, View , Image} from 'react-native';

export function PlanetsList({planets}) {
    
    return (
        <View style={styles.card}>
        <Text style={styles.pageTitle}>{planets.nome}</Text>
        <Image style={styles.imagePost} source={{
          uri: planets.img,
        }} />
        <View>
          <View style={styles.descriptionCard}>
            <Text style={styles.fontCardTitle}>Average Orbital Speed</Text>
            <Text style={styles.fontCard}>{planets.velocidadeOrbitalMediaKmS}</Text>
          </View>
          <View style={styles.descriptionCard}>
            <Text style={styles.fontCardTitle}>Satellites</Text>
            <Text style={styles.fontCard}>{planets.quantidadeSatelites}</Text>
          </View>
          <View style={styles.descriptionCard}>
            <Text style={styles.fontCardTitle}>Surface Area</Text>
            <Text style={styles.fontCard}>{planets.areaSuperficieKm2}</Text>
          </View>
          <View style={styles.descriptionCard}>
            <Text style={styles.fontCardTitle}>Rotation Speed</Text>
            <Text style={styles.fontCard}>{planets.periodoRotacaoDias}</Text>
          </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    pageTitle: {
      fontSize: 30,
      color: '#fff',
    },
    card: {
      margin: 20,
      paddingTop: 15,
      paddingBottom: 30,
      backgroundColor: '#000',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 50,
      width: 'auto',
      height: 'auto',
    },
    imagePost: {
      marginTop: 20,
      marginBottom: 50,
      width: 300,
      height: 300,
      borderRadius: 20,
    },
    descriptionCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 100,
      marginBottom: 5,
    },
    fontCard: {
      fontSize: 16,
      color: '#fff',
    },
    fontCardTitle: {
        fontSize: 16,
        color: '#7f7f7f',
    }
  });
  