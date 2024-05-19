import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const CreditsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FrAgile App</Text>
      <Text style={styles.text}>{"\n"}</Text>
      <Text style={styles.description}>An application prepared to facilitate the organization of open days at the Department of Computer Science during the "HacktahIOn 2024" hackathon, organized as part of the Software Engineering course at AGH.</Text>
      <Text style={styles.text}>{"\n"}</Text>
      <Text style={styles.title}>Authors{"\n"}</Text>
      <Text style={styles.text}>Adam "Tumu(L)ec" Naumiec</Text>
      <Text style={styles.text}>Michał "DeNiro" Nożkiewicz</Text>
      <Text style={styles.text}>Wojciech "Tarczyński" Barczyński</Text>
      <Text style={styles.text}>Paweł Lamża</Text>
      <Text style={styles.text}>Jakub Pryc</Text>
      <Text style={styles.text}>Weronika Klatka</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
});


export default CreditsScreen;
