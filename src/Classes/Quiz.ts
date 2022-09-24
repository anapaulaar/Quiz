import {IQuestoes} from './../Interfaces/Quiz'
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export class Quiz {
  pergunta: IQuestoes[]
  dinheiro: number

  constructor (public perguntas:IQuestoes[],  public dinheiroAdicionado: number = 0) {
    this.pergunta = perguntas
    this.dinheiro = dinheiroAdicionado
  }

  iniciaQuiz () {
    this.geradorPerguntas()
  }
  geradorPerguntas (listaPerguntas: number = 0) {
    if (listaPerguntas === this.pergunta.length) {
      console.log(`!!! VOCÊ GANHOU ${this.dinheiroAdicionado} !!!`)
    }
    console.log(`Pergunta: ${this.perguntas[listaPerguntas].pergunta}`)
    this.perguntas[listaPerguntas].opcoes.forEach(questao => {
      console.log(questao)
    })
    rl.question('Qual é a resposta? ', (resposta: string) => {
      if (resposta === this.perguntas[listaPerguntas].respostaCorreta) {
        
        listaPerguntas++
        this.dinheiroAdicionado += 100
        this.geradorPerguntas(listaPerguntas)
        return
      } 
        console.log('Você perdeu, mas acumulou: ' + this.dinheiroAdicionado)
        rl.close()
    })
  }


  inserirPergunta (perguntas: IQuestoes) {
    this.pergunta.push(perguntas)
    return perguntas
  }
}