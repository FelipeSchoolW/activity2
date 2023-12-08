import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { useState } from 'react';

const RegistrationPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
  
  const goToLanding = () => {
    navigation.navigate('Landing');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };


  

  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Card style={{ padding: 20, width: '80%' }}>
        <Card.Title title="Register" titleStyle={{ fontSize: 24 }} />
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
          <TextInput
            label="ConfirmPassword"
            value={confirmpassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
            style={{ marginBottom: 20 }}
          />
          <Button mode="contained" onPress={handleLogin} style={{ marginBottom: 15, backgroundColor: 'green' }}>
            Register
          </Button>
          <Button mode="outlined" onPress={goToLanding} style={{ marginBottom: 15, borderColor: 'green' }}>
          <Text style = {{color: 'green'}}>Return to Landing</Text>
          </Button>
          
        </Card.Content>
      </Card>
    </View>
  );
};

export default RegistrationPage;