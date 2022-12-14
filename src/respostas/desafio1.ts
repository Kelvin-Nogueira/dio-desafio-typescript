// Resposta 1
const funcionario = {
    codigo: 10,
    nome: 'Kelvin'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Kelvin'
}

// Respostas 3 e 4
interface Funcionario {  // interfaces https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'Kelvin';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'Kelvin'
}