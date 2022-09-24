"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quiz = void 0;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Quiz {
    constructor(perguntas, dinheiroAdicionado = 0) {
        this.perguntas = perguntas;
        this.dinheiroAdicionado = dinheiroAdicionado;
        this.pergunta = perguntas;
        this.dinheiro = dinheiroAdicionado;
    }
    iniciaQuiz() {
        this.geradorPerguntas();
    }
    geradorPerguntas(listaPerguntas = 0) {
        if (listaPerguntas === this.pergunta.length) {
            console.log(`!!! VOCÊ GANHOU ${this.dinheiroAdicionado} !!!`);
        }
        console.log(`Pergunta: ${this.perguntas[listaPerguntas].pergunta}`);
        this.perguntas[listaPerguntas].opcoes.forEach(questao => {
            console.log(questao);
        });
        rl.question('Qual é a resposta? ', (resposta) => {
            if (resposta === this.perguntas[listaPerguntas].respostaCorreta) {
                listaPerguntas++;
                this.dinheiroAdicionado += 100;
                this.geradorPerguntas(listaPerguntas);
                return;
            }
            console.log('Você perdeu, mas acumulou: ' + this.dinheiroAdicionado);
            rl.close();
        });
    }
    inserirPergunta(perguntas) {
        this.pergunta.push(perguntas);
        return perguntas;
    }
}
exports.Quiz = Quiz;
