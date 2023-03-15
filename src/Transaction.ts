import Account from "./Account.js";
import { TransactionType } from "./TransactionType.js";

export default class Transaction {
    constructor(public id: string, public account: Account, public transactionType: TransactionType, public account2?: Account){}

    getTransactionString() {
        this.account
    }
    
}