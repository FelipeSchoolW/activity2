import React from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from "yup";

const SigninSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid email')
  .required('Enter valid email address'),
  username: Yup.string()
  .min(3, 'Too short!')
  .max(20, 'Too long!')
  .required('Enter valid username'),
  password: Yup.string()
  .min(6)
  .required('Enter a password')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
  'Must contain minimum 8 characters, atleast one uppercase letter, a number and special character'),
  confirmPassword: Yup.string()
  .min(8)
  .oneOf([Yup.ref('password')],'Password do not match')
  .required('Re-Enter your password')
});

const LoginPage = ({ navigation }) => {
  const [showPass, setShowpass] = React.useState(false);

  const showToast = (message = "Something wen't wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const goToLanding = () => {
    navigation.navigate('Landing');
  };

  const goToRegistration = () => {
    navigation.navigate('Register');
  };

  const goToAccountRecovery = () => {
    navigation.navigate('AccountRecovery');
  };
  

  const handleLogin = async () => {
    //try {
     //console.debug(values);
    


    navigation.navigate('Home');
   //} catch (e) {
     // console.debug(e.toString());
    }
  };


  return (
    <Formik
    initialValues={{ email: "", password: ""}}
    onSubmit={async (values) =>{
      test(JSON.stringify(values), navigation)
      //await handleLogin(values);
    }}
    validationSchema={SigninSchema}
    >

    {({values, touched, handleChange, handleBlur, handleSubmit, isSubmitting, errors}) => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
          <Card style={{ padding: 20, width: '80%' }}>
            <Card.Title title="Login" titleStyle={{ fontSize: 24 }} />
            <Card.Content>
    
              <TextInput
                label="Email"
                value={values.email}
                left={<TextInput.Icon icon={"email"}/>}
                style={{ marginBottom: 10 }}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              <TextInput
                label="Password"
                left={<TextInput.Icon icon={"lock"}/>}
                secureTextEntry={showPass}
                style={{ marginBottom: 20 }}
                right={
                  <TextInput.Icon
                  icon={showPass ? "eye" : "eye-off" }
                  onPress={() => setShowpass(!showPass)}
                  />
                }
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              {errors ? <Text style={{ color: 'red', marginBottom: 10 }}>{errors}</Text> : null}
    
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
    )}
  </Formik>

  );
};

export default LoginPage;