import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import signos from './signo.json'


export default class DetalhesSignos extends Component {
    constructor(){
        super()
        this.state = {signo: undefined}
    }

    componentDidMount () {
        const idSigno = parseInt(this.props.match.params.idSigno, 10)
     
        this.setState({
          signo: signos
            .filter((signo, key) => idSigno === key)
            .shift()
        })
    }

    render() {
    const { idSigno } = this.props
    const { signo } = this.state

    if (!signo){
        return (
            <View />
        )
    }

    return (
      <View style={styles.container}>
        <Text>{signo.nome}</Text>
        <Text>{signo.caracteristica}</Text>
        <Text>{signo.periodo.join(' até ')}</Text>
        <Button title="Voltar" onPress={() => this.props.history.push('/')} />
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
