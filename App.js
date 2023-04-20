import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Web3Provider } from 'react-native-web3';


export default function App() {
  const [walletAddress, setWalletAddress] = useState('');

  const connectToMetaMask = async () => {
    try {
      const provider = await Web3Provider.getWeb3Provider();
      const accounts = await provider.eth.getAccounts();
      const address = accounts[0];
      setWalletAddress(address);
    } catch (error) {
      console.log(error);
    }
  };

  const onButtonPress = () => {
    connectToMetaMask();
  };



  // const onButtonPress = () => {
  //   alert('Button pressed!');
  // };

  return (

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>Connect to MetaMask</Text>
        </TouchableOpacity>
        {walletAddress !== '' && (
          <View style={styles.addressContainer}>
            <Text style={styles.addressTitle}>Wallet address:</Text>
            <Text style={styles.addressText}>{walletAddress}</Text>
          </View>
        )}
      </View>

  );

}

// export default Web3Provider(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
