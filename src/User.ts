import Account from "./Account.js";
import CPF from "./CPF.js";

export default class User {
    constructor(public cpf: CPF, public nome: string, public dinheiro: number, private contas: Account[] = []) {}

    addAccount(account: Account) {
        this.contas = [...this.contas, account];
    }

    getAccounts() {
        return this.contas;
    }

    getAccountByNumber(accountNumber: string) {
        return this.getAccounts().filter(account => account.numeroDaConta === accountNumber)[0];
    }
}