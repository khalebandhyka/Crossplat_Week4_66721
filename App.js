import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, Card, Text, Avatar, Button, ActivityIndicator, Dialog, Portal } from 'react-native-paper';

const userData = [
  { name: "Khaleb Andhyka", email: "khaleb@example.com", photo: require('./assets/lebbus.jpg') },
  { name: "Hito Kawiswara", email: "hito@example.com", photo: require('./assets/hito.jpg') },
  { name: "Caesar Eka Nathanael", email: "cesar@example.com", photo: require('./assets/cisarus.jpg') },
  { name: "Mario Richie Lim", email: "mario@example.com", photo: require('./assets/mario.jpg') },
  { name: "Marvell Christoffer", email: "marvell@example.com", photo: require('./assets/marpis eving.jpg') },
  { name: "Ryo Anthonio Wijaya", email: "ryo@example.com", photo: require('./assets/awe.jpg') },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); 
  }, []);

  const showDialog = (user) => {
    setSelectedUser(user);
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  if (loading) {
    return <ActivityIndicator animating={true} size="large" style={styles.loader} />;
  }

  return (
    <PaperProvider>
      <ScrollView style={styles.scrollView}>
        {userData.map((user, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Avatar.Image size={60} source={user.photo} />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{user.name}</Text>
                <Text style={styles.emailText}>{user.email}</Text>
                <Button mode="contained" onPress={() => showDialog(user)} style={styles.button}>
                  Lihat Profil
                </Button>
              </View>
            </Card.Content>
          </Card>
        ))}

        {}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Profil Pengguna</Dialog.Title>
            <Dialog.Content>
              {selectedUser && (
                <>
                  <Avatar.Image size={80} source={selectedUser.photo} />
                  <Text style={styles.dialogText}>{selectedUser.name}</Text>
                  <Text>{selectedUser.email}</Text>
                </>
              )}
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Tutup</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  scrollView: { backgroundColor: "#f5f5f5", padding: 10 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { marginVertical: 8, padding: 10, backgroundColor: '#ffffff' },
  cardContent: { flexDirection: "row", alignItems: "center" },
  textContainer: { marginLeft: 10, flex: 1 },
  nameText: { fontSize: 18, fontWeight: 'bold' },
  emailText: { fontSize: 14, color: '#666' },
  button: { marginTop: 5 },
  dialogText: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});

