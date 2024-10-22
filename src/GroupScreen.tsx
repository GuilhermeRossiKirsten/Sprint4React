import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SobreGrupoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Grupo F(MRG³)</Text>
      <Text style={styles.description}>
        O grupo F(MRG³) é composto por um conjunto de estudantes dedicados a
        desenvolver projetos inovadores e colaborar no aprendizado mútuo.
      </Text>
      <Text style={styles.subtitle}>Integrantes:</Text>
      <View style={styles.membersContainer}>
        <Text style={styles.member}>Gabriel Coghi Barbosa - RM: 93501</Text>
        <Text style={styles.member}>Mikael Pocker Fonseca - RM: 95564</Text>
        <Text style={styles.member}>Guilherme Rossi Kirsten - RM: 95230</Text>
        <Text style={styles.member}>
          Gabriel Gino Jorge Dallape - RM: 94862
        </Text>
        <Text style={styles.member}>
          Ronaldo Otsuka Ribeiro Mira - RM: 95595
        </Text>
        <Text style={styles.member}>
          Felipe Bazana Cardoso Sousa - RM: 94817
        </Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.backButtonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  membersContainer: {
    marginBottom: 30,
  },
  member: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  backButton: {
    backgroundColor: "#008c80",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SobreGrupoScreen;
