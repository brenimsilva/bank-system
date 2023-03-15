export default class CPF {
    constructor(public cpf: string) {
        //Validação porca xisdê
        if (cpf.length === 11) {
            this.cpf = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`
            console.log(this.cpf);
            return;
        } else if (cpf.length === 14) {
            this.cpf = cpf;
            return;
        }
        throw new Error("Cpf informado não válido");
    }

}