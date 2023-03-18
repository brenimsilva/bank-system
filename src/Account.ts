import Transaction from "./Transaction.js";
import { TransactionType } from "./TransactionType.js";

export default class Account {
    constructor(public numeroDaConta: string, public saldo: number, public donoDaConta: string, public historico: Array<Transaction> = []) {}

    makeTransaction(transactionType: TransactionType, value: number, accountReceiver?: Account) {
        switch(transactionType) {
            case TransactionType.DEPOSIT:
                this.saldo += value;
                break;

            case TransactionType.SEND:
                if(this.saldo >= value) {
                    this.saldo -= value;
                    accountReceiver!.saldo += value;
                    accountReceiver!.historico = [...accountReceiver!.historico, 
                        new Transaction(accountReceiver!, TransactionType.RECEIVE, value, this)];
                    break;
                } else {
                    throw new Error("Saldo insuficiente");
                }

            case TransactionType.WITHDRAW:
                if(this.saldo >= value) this.saldo -= value;
                break;
        }
        this.historico = [...this.historico, new Transaction(this, transactionType, value, accountReceiver)]
    }

    getHistorico() {
        this.historico.forEach((transacao) => {
            console.log(transacao);
        })
    }

}