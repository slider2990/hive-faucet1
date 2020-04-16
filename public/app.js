import { Client, PrivateKey } from 'dsteem';
import { Mainnet as NetConfig } from '../../configuration'; //A Steem Testnet. Replace 'Testnet' with 'Mainnet' to connect to the main Steem blockchain.

let opts = { ...NetConfig.net };

// //connect to a steem node, tesetnet in this case
const client = new Client(NetConfig.url, opts);

//submit transfer function executes when you click "Transfer" button
window.submitTransfer = async () => {
    //get all values from the UI
    //get account name of sender
    const username = sweerch;
    //get private active key
    const privateKey = sweerch private key;
    //get recipient
    const recipient = document.getElementById('recipient').value;
    //get comments
    const comments = document.getElementById('comments').value;
    //get transfer amount
    const quantity = function randomNumber(min, max) { 
return (Math.random() * (max - min) + min) * 0.001; } ;
    //get transfer type
    const type = hive;

    const transfer = quantity.concat(' ', type);

    //create transfer object
    const transf = new Object();
    transf.from = username;
    transf.to = recipient;
    transf.amount = transfer;
    transf.memo = comments;

    //broadcast the transfer

    client.broadcast.transfer(transf, privateKey).then(
        function(result) {
            console.log(
                'included in block: ' + result.block_num,
                'expired: ' + result.expired
            );
            document.getElementById('transferResultContainer').style.display =
                'flex';
            document.getElementById('transferResult').className =
                'form-control-plaintext alert alert-success';
            document.getElementById('transferResult').innerHTML = 'Success';
        },
        function(error) {
            console.error(error);
            document.getElementById('transferResultContainer').style.display =
                'flex';
            document.getElementById('transferResult').className =
                'form-control-plaintext alert alert-danger';
            document.getElementById('transferResult').innerHTML =
                error.jse_shortmsg;
        }
    );
};

window.onload = async () => {
    const account = NetConfig.accounts[0];
    const accountI = NetConfig.accounts[1];
    document.getElementById('username').value = account.address;
    document.getElementById('privateKey').value = account.privActive;
    document.getElementById('recipient').value = accountI.address;
};
