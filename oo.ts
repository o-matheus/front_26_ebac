// Na criação de classes nós temos que fazer a definização do parametro e sinalizar a existência do atributo antes de escrever a classe construtora. 
class Pessoas {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} diz ola! `
    }
}

// Forma encurtada apresentada pelo GPT
class Pessoas1 {
    constructor(public nome: string) { }
}

class ContaBancaria {
    protected saldo: number = 0
    numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    // Quando usamos o static sinalizamos que o metódo só pode ser acessado por meio da classe abstrata, sem ser acionado pela instância.
    static numeroBanco() {
        return 123;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

}

class ContaBancariaPF extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaPedro = new ContaBancariaPF(1)

// // Utilizando getters e setters
// class Conta {
//     private _saldo: number;

//     constructor(saldo: number) {
//         this._saldo = saldo;
//     }
//     // Geralmente utilizado para interagir com atríbutos ou metódos privados.
//     get saldo() {
//         return this._saldo;
//     }

//     // Para chamar tem que tratar como se fosse um atributo. (conta.saldo = valor)
//     set saldo(newValue) {
//         this._saldo = newValue;
//     }
// }

// const conta = new Conta(2000);






