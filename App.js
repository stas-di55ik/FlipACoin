import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  state = {
    coinResult: 'head'
  }
  
  flipACoin() {
    const random = Math.floor(Math.random() * 2) + 1;
    if (random === 1) {
      this.setState({
        coinResult: 'head'
      });
    } else {
      this.setState({
        coinResult: 'tail'
      });
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.state.coinResult === 'head' ? 'Head' : 'Tail'}
        </Text>

        { this.state.coinResult === 'head' ?
        <Image 
          source={require('./assets/coin-h.png')}
          style={styles.image}/> :
        <Image 
          source={require('./assets/coin-t.png')}
          style={styles.image}
        />}
        
        <TouchableOpacity onPress={() => {
          this.flipACoin();
        }} style={styles.button}> 
          <Text>Flip a coin</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#f1c40f',
    padding: 20,
    margin: 20,
    borderRadius: 4,
  },
  image: {
      width: 250,
      height: 250
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 20,
  }
});
