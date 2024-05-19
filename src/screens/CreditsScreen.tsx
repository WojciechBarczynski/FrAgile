import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CreditsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authors{"\n"}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Adam "TumuⓁec" Naumiec</Text>
        <Text style={styles.text}>Michał "DeNiro" Nożkiewicz</Text>
        <Text style={styles.text}>Wojciech "Tarczyński" Barczyński</Text>
        <Text style={styles.text}>Paweł "Liżma" Lamża</Text>
        <Text style={styles.text}>Jakub "Śruba" Pryc</Text>
        <Text style={styles.text}>Weronika "Wero" Klatka</Text>
      </View>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

function Button(props: any) {
  const { onPress, title} = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.button_text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    marginTop: 20
  },
  button_text: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "500",
    color: 'white'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: 'skyblue',
    gap: 10
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  title: {
    fontSize: 50,
    fontWeight: "600"},
  text: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "500"
  },
});

export default CreditsScreen;
