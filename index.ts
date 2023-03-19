import Account from "./src/Account.js";
import CPF from "./src/CPF.js";
import { TransactionType } from "./src/TransactionType.js";
import User from "./src/User.js";

const user1 = new User(new CPF("12047290694"), "Breno", 1000);
const user2 = new User(new CPF("096.233.644-06"), "Jose", 1344);

user2.addAccount(new Account("001", 100, "Jose"));

user1.addAccount(new Account("002", 200, user1.nome));

user1.deposit("001", 900);
console.log(user2.getAccountByNumber("001"));
user1.withdraw("002", 30);
console.log(user1);


