import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';

export async function connectToWallet() {
    console.log('Connecting to wallet...');
    const provider = new WalletConnectProvider({
        rpc: {
            8081: 'https://your-custom-network-rpc-endpoint.com',
        },
        chainId: 8081,
    });

    try {
        await provider.enable();
        console.log('Wallet connected');
    } catch (error) {
        console.error('Error connecting to wallet:', error);
    }

    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    console.log('Connected account:', accounts[0]);

    // Replace this with the code to update your UI with the connected account
}
