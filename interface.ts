class Conta {
    saldo: number = 0
    constructor(public numeroDaConta: number){

    }

    depositar(valor: number) {
        this.saldo += valor 
    }
}

// Criando interfaces.
interface ITransacional {
    transferir: (valor: number, destinatario: Conta ) => boolean;
    taxaTransferencia: number;
}

class ContaCorrente extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia)
        return true
    }
    taxaTransferencia: number = 0;

}
