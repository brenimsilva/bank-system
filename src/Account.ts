import Transaction from "./Transaction";

export default class Account {
    constructor(public numeroDaConta: string, public saldo: number, public historico: Array<Transaction>) {}

    
}