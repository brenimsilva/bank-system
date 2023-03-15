import Transaction from "./Transaction.js";
import { TransactionType } from "./TransactionType.js";

export default class Account {
    constructor(public numeroDaConta: string, public saldo: number, public historico: Array<Transaction> = []) {}

    makeTransaction(transactionType: TransactionType, value: number, toWho?: Account) {
        this.historico = [...this.historico, new Transaction(this, transactionType, value, toWho)]
    }

    getHistorico() {
        this.historico.forEach((transacao) => {
            console.log(transacao);
        })
    }

}