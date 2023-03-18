import Account from "./Account";

export default class BankEntity {
    private static accounts: Array<Account> = [];
    constructor() {}

    public static getAccountByNumber(accountNumber: string) {
        return this.accounts.filter(account => account.numeroDaConta === accountNumber)[0];
    }

    public static addAccount(account: Account) {
        this.accounts = [...this.accounts, account];
    }

}