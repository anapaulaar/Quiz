"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perguntasQuiz = void 0;
const questaoUm = {
    pergunta: 'Qual o nome do atual presitente dos Estados Unidos?',
    opcoes: [
        'A: joe Biden',
        'B: Donald Trump',
        'C: Barack Obama',
    ],
    respostaCorreta: 'A',
    //dinheiro: 5000
};
const questaoDois = {
    pergunta: 'Qual preseidente do brasileiro sofreu impeachment?',
    opcoes: [
        'A: Dilma',
        'B: Lula',
        'C: Bolsonaro'
    ],
    respostaCorreta: 'A',
    //dinheiro: 10000
};
const questaoTres = {
    pergunta: 'Qual governador do Estado de São Paulo tem escândalos sobre roubo na Merenda?',
    opcoes: [
        'A: Dória',
        'B: Geraldo Alckmin',
        'C: Rodrigo Garcia'
    ],
    respostaCorreta: 'B',
    //dinheiro: 30000
};
exports.perguntasQuiz = {
    primeira: questaoUm, segunda: questaoDois, terceira: questaoTres
};
