import Account from "./src/Account.js";
import CPF from "./src/CPF.js";
import { TransactionType } from "./src/TransactionType.js";

const cpf = new CPF("12047290694");


const conta1 = new Account("123", 1000);
const conta2 = new Account("456", 1324);

conta1.makeTransaction(TransactionType.DEPOSIT, 100);
conta1.makeTransaction(TransactionType.WITHDRAW, 123);
conta1.makeTransaction(TransactionType.RECEIVE, 400, conta2);
conta1.makeTransaction(TransactionType.SEND, 333, conta2);

conta1.historico.forEach((transacao) => {
    document.body.innerHTML += transacao.getTransactionString();
})