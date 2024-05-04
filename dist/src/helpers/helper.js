import algosdk from "algosdk";
import { getClient, getAccount } from "../config/config.js";
export const storeTodo = async (data) => {
    try {
        const client = getClient();
        const account = getAccount();
        const suggestedParams = await client.getTransactionParams().do();
        const note = algosdk.encodeObj({
            title: data.title,
            day: data.day,
            reminder: data.reminder ? data.reminder : 500, // Convert boolean to string
        });
        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Sending the transaction to oneself
            amount: 1000, // Minimum amount
            note: note,
            suggestedParams: suggestedParams,
        });
        const signedTxn = txn.signTxn(account.sk);
        const sendTxn = await client.sendRawTransaction(signedTxn).do();
        console.log("Transaction ID:", sendTxn.txId);
    }
    catch (error) {
        console.error("Failed to store todo data:", error);
    }
};
//# sourceMappingURL=helper.js.map