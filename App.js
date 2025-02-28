import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const useData = [
  { name: "Khaleb Andhyka", email: "khaleb@example.com", photo: require('./assets/lebbus.jpg') },
  { name: "Hito Kawiswara", email: "hito@example.com", photo: require('./assets/hito.jpg') },
  { name: "Caesar Eka Nathanael", email: "cesar@example.com", photo: require('./assets/cisarus.jpg') },
  { name: "Mario Richie Lim", email: "mario@example.com", photo: require('./assets/mario.jpg') },
  { name: "Marvell Christoffer", email: "marvell@example.com", photo: require('./assets/marpis eving.jpg') },
  { name: "Ryo Anthonio Wijaya", email: "Ryo@example.com", photo: require('./assets/awe.jpg') },
];

export default function App() {
  return (
    <ScrollView>
      {useData.map((users, index) => {
        return (
          <View style={styles.container} key={index}>
            <View style={styles.card}>
              <Image source={users.photo} style={styles.avatar} />
              <View style={styles.boldText}>
                <Text style={styles.boldText}>{users.name}</Text>
                <Text>{users.email}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
    padding: 5,
    display:"flex",
  },
  card: {
    borderWidth: 1,
    borderColor:"black",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    padding: 8,
    width: 325,
    gap: 8,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 999,
  },
  boldText: {
    fontWeight: "bold",
  },
  description: {
    width: "fit-content",
    display: "flex",
    gap: 2,
  },
});