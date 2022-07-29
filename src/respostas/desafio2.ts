enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'ana',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'ronaldo',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'carol',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "paulo",
    idade: 19,
    profissao: Trabalho.Padeiro
}