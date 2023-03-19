import Account from "./Account.js";
import BankEntity from "./BankEntity.js";
import CPF from "./CPF.js";
import { TransactionType } from "./TransactionType.js";

export default class User {
    private contas: Account[] = []
    constructor(public cpf: CPF, public nome: string, public dinheiro: number) {
    }

    addAccount(account: Account) {
        this.contas = [...this.contas, account];
        BankEntity.addAccount(account);
    }

    getAccounts() {
        return this.contas;
    }

    getAccountByNumber(accountNumber: string) {
        return this.getAccounts().filter(account => account.numeroDaConta === accountNumber)[0];
    }

    deposit(accountNumber: string, value: number) {
        if(this.dinheiro >= value) {
            this.dinheiro -= value;
           BankEntity.getAccountByNumber(accountNumber).makeTransaction(TransactionType.DEPOSIT, value);
        } 
        else throw new Error("Saldo insuficiente");
    }

    withdraw(accountNumber: string, value: number) {
        const accountSelected = this.contas.filter((conta) => {
            return conta.numeroDaConta === accountNumber;
        })[0];
        console.log(this.contas);
        if(accountSelected) {
            this.dinheiro += value;
            accountSelected.makeTransaction(TransactionType.WITHDRAW, value);
        } 
        
        else throw new Error("User precisa ser dono da conta");
    }

    transfer(accountNumber: string, value: number, receiver: Account) {
        const accountSelected = this.contas.filter((conta) => {
            return conta.numeroDaConta === accountNumber;
        })[0];

        
        if (accountSelected) accountSelected.makeTransaction(TransactionType.SEND, value, receiver);
        else throw new Error("User precisa ser dono da conta");
    }

}