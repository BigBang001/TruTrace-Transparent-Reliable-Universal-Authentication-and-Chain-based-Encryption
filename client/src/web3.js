// Import Web3 and the contract’s ABI (Application Binary Interface)
import Web3 from 'web3';
import TruTrace from './contracts/TruTrace.json';

let web3;
let contractInstance;

// Initialize Web3 and the Smart Contract
export const initWeb3 = async () => {
    if (window.ethereum) {
        // Modern DApp browsers
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error('User denied account access', error);
        }
    } else if (window.web3) {
        // Legacy DApp browsers
        web3 = new Web3(window.web3.currentProvider);
    } else {
        // Non-DApp browsers
        alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
    return web3;
};

// Load Contract
export const loadContract = async () => {
    if (!web3) {
        console.error('Web3 has not been initialized. Call initWeb3 first.');
        return;
    }
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = TruTrace.networks[networkId];
    if (deployedNetwork) {
        contractInstance = new web3.eth.Contract(
            TruTrace.abi,
            deployedNetwork && deployedNetwork.address
        );
        console.log('Smart contract loaded:', contractInstance);
    } else {
        console.error('Smart contract not deployed to detected network.');
    }
};

// Get Accounts
export const getAccounts = async () => {
    if (!web3) {
        console.error('Web3 is not initialized.');
        return [];
    }
    return await web3.eth.getAccounts();
};

// Interact with Contract
export const registerProduct = async (productId, productDetails, account) => {
    if (!contractInstance) {
        console.error('Smart contract instance not available.');
        return;
    }
    try {
        await contractInstance.methods.registerProduct(productId, productDetails)
            .send({ from: account });
        console.log(`Product ${productId} registered successfully.`);
    } catch (error) {
        console.error('Error registering product:', error);
    }
};

export const verifyProduct = async (productId) => {
    if (!contractInstance) {
        console.error('Smart contract instance not available.');
        return;
    }
    try {
        const isVerified = await contractInstance.methods.verifyProduct(productId).call();
        console.log(`Product ${productId} verification status: ${isVerified}`);
        return isVerified;
    } catch (error) {
        console.error('Error verifying product:', error);
    }
};
