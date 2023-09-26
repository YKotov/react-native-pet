import {useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useAuthState} from '../../context/AuthContext';

export const Login = () => {
  const background = {
    uri: 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
  };
  const {setAuthState} = useAuthState();
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [disabled, setDisabled] = useState(false);

  const updateAuthState = () => {
    setDisabled(true);
    setTimeout(() => {
      setAuthState(true);
    }, 200);
  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={background}
        style={{height: '100%', justifyContent: 'center'}}>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={onChangeText}
            value={text}
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            secureTextEntry={true}
            textContentType="password"
            placeholder="password"
          />

          <Pressable
            disabled={disabled}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              styles.button,
            ]}
            onPress={updateAuthState}>
            {disabled && <ActivityIndicator size="small" />}
            {!disabled && <Text>Login to account</Text>}
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    height: '100%',
  },

  formWrapper: {
    height: 'auto',
    paddingTop: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },

  button: {
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    fontSize: 16,
    minWidth: 100,
    borderRadius: 5,
  },
});
