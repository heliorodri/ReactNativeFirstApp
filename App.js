import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import signos from './signo.json'
import DetalhesSignos from './DetalheSignos'


export default class App extends React.Component {
   render() {

    return (
      <DetalhesSignos/>
    )
    return (
      <View style={styles.container}>
        {signos.map((signo, key) => (
          <Button key={key} title={signo.nome} onPress={() => console.log('clicou')}/>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
