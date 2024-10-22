import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";

interface LoginScreenProps {
  navigation: any; // Use a more specific type if you have it
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleLogin = () => {
    // Lógica de login
    if (!email || !password) {
      setModalMessage("Por favor, preencha todos os campos");
      setModalVisible(true);
    } else {
      // Autenticação
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Login</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Seu Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Sua Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.cadastroContainer}>
          <Text style={styles.cadastroText}>Ainda não tem conta?</Text>
          <TouchableOpacity
            style={styles.cadastroButton}
            onPress={() => navigation.navigate("Register")} // Navigate to RegistrationScreen
          >
            <Text style={styles.cadastroButtonText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeButton}>&times;</Text>
            </Pressable>
            <Text>{modalMessage}</Text>
          </View>
        </View>
      </Modal>
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
  formContainer: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  forgotPassword: {
    marginTop: 5,
    color: "#008c80",
    textAlign: "right",
  },
  loginButton: {
    backgroundColor: "#008c80",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  cadastroContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  cadastroText: {
    marginBottom: 10,
  },
  cadastroButton: {
    backgroundColor: "#008c80",
    padding: 10,
    borderRadius: 5,
  },
  cadastroButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  closeButton: {
    fontSize: 24,
    color: "#000",
    alignSelf: "flex-end",
  },
});

export default LoginScreen;
