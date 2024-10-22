import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const data = [
  {
    id: 247,
    userId: 1,
    score: 5,
    feeling: "Estou me sentindo bem!",
    timestamp: "2024-08-29 10:27:48.514 -0300",
  },
  {
    id: 248,
    userId: 95595,
    score: 3,
    feeling: "Bem!",
    timestamp: "2024-08-30 08:23:49.321 -0300",
  },
  {
    id: 249,
    userId: 1,
    score: 5,
    feeling: "Feliz",
    timestamp: "2024-09-01 10:30:21.243 -0300",
  },
  {
    id: 250,
    userId: 95230,
    score: 5,
    feeling: "Estou feliz",
    timestamp: "2024-09-04 09:59:59.834 -0300",
  },
  // Adicione os outros dados aqui...
  {
    id: 287,
    userId: 95230,
    score: 2,
    feeling: "Estou muito feliz",
    timestamp: "2024-09-28 12:21:33.355 -0300",
  },
];

const ListagemScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>ID: {item.id}</Text>
      <Text style={styles.cardText}>Usuário: {item.userId}</Text>
      <Text style={styles.cardText}>Pontuação: {item.score}</Text>
      <Text style={styles.cardText}>Sentimento: {item.feeling}</Text>
      <Text style={styles.cardText}>Data: {item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem de Dados</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* Botão para voltar à tela inicial */}
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
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2, // Para sombra em Android
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardText: {
    fontSize: 16,
    marginVertical: 2,
  },
  backButton: {
    backgroundColor: "#008c80",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ListagemScreen;
