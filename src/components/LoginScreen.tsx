import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Login: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (!email.trim()) {
      alert("Please enter your email address");
      return;
    }
    if (!password.trim()) {
      alert("Please enter your password");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // List of mock credentials
    const mockCredentials = [
      { email: "user1@example.com", password: "password1" },
      { email: "user2@example.com", password: "password2" },
      { email: "user3@example.com", password: "password3" },
    ];

    // Check if input email and password match any entry in the list
    const foundUser = mockCredentials.find(
      (cred) =>
        cred.email.toLowerCase() === email.toLocaleLowerCase() &&
        cred.password === password
    );

    if (!foundUser) {
      alert("Incorrect email or password");
      return;
    }

    navigation.replace("Home");
  };

  const handleForgotPassword = () => {
    console.log("Forgot password link pressed");
  };

  const handleSignUp = () => {
    navigation.replace("Signup");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.inputContainer}>
        <Icon name="email" size={24} color="#333" />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={24} color="#333" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpLink}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,

    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 8,
  },
  loginButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    marginTop: 132,
    width: "100%",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginTop: 16,
  },
  forgotPassword: {
    color: "#007AFF",
  },
  signUpLink: {
    color: "#007AFF",
    marginTop: 16,
    textAlign: "center",
  },
});

export default Login;
