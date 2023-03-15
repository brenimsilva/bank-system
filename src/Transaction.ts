import Account from "./Account.js";
import { TransactionType } from "./TransactionType.js";
import User from "./User.js";

interface accountProjection {
    numeroDaConta: string;
    saldo: number;
}
export default class Transaction {
    account: accountProjection;
    account2: accountProjection;
    constructor(account: Account, public transactionType: TransactionType, public value: number, account2?: Account){
        this.account = {numeroDaConta: account.numeroDaConta, saldo: account.saldo};
        this.account2 = {numeroDaConta: account2?.numeroDaConta, saldo: account2?.saldo} as accountProjection;
    }

    getTransactionString() {
        switch (this.transactionType) {
            case TransactionType.DEPOSIT:
                return `<h5 style="color: green">+R$${this.value}</h5>`
            case TransactionType.WITHDRAW:
                return `<h5 style="color: red">-R$${this.value}</h5>`
            case TransactionType.RECEIVE:
                return `<h5 style="color: green">R$${this.value} recebido de ${this.account2?.numeroDaConta}</h5>`
            case TransactionType.SEND:
                return `<h5 style="color: red">R$${this.value} enviado para ${this.account2?.numeroDaConta}</h5>`
        }
    }
}