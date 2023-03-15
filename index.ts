import Account from "./src/Account.js";
import CPF from "./src/CPF.js";
import { TransactionType } from "./src/TransactionType.js";
import User from "./src/User.js";

const user1 = new User(new CPF("12047290694"), "Breno", 1000);
const user2 = new User(new CPF("096.233.644-06"), "Jose", 1344, [new Account("001", 100, "Jose")]);

user1.addAccount(new Account("002", 200, user1.nome));

console.log(user1.getAccounts());
console.log(user1.getAccountByNumber("002"));

user1.getAccountByNumber("002").makeTransaction(TransactionType.DEPOSIT, 100);