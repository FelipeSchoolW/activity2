import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToLanding = () => {
    navigation.navigate('Landing');
  };

  const goToRegistration = () => {
    navigation.navigate('Register');
  };

  const goToAccountRecovery = () => {
    navigation.navigate('AccountRecovery');
  };
  

  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Card style={{ padding: 20, width: '80%' }}>
        <Card.Title title="Login" titleStyle={{ fontSize: 24 }} />
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={{ marginBottom: 20 }}
          />
          <Button mode="contained" onPress={handleLogin} style={{ marginBottom: 15, backgroundColor: 'green' }}>
            Login
          </Button>
          <Button mode="outlined" onPress={goToLanding} style={{ marginBottom: 15, borderColor: 'green' }}>
          <Text style = {{color: 'green'}}>Return to Landing</Text>
          </Button>
          <Button mode="text" onPress={goToRegistration}>
          <Text style = {{color: 'green'}}>Register</Text>
          </Button>
          <Text style={{ marginTop: 10, textAlign: 'center', color: 'green' }} onPress={goToAccountRecovery}>
            Forgot Password?
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default LoginPage;