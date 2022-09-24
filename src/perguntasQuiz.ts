import {IQuestoes} from './Interfaces/Quiz'

const questaoUm: IQuestoes = {
    pergunta: 'Qual o nome do atual presitente dos Estados Unidos?',
    opcoes: [
      'A: joe Biden',
      'B: Donald Trump',
      'C: Barack Obama',
    ],
    respostaCorreta: 'A',
		//dinheiro: 5000
  }
  const questaoDois: IQuestoes = {
    pergunta: 'Qual preseidente do brasileiro sofreu impeachment?',
    opcoes: [
      'A: Dilma',
      'B: Lula',
      'C: Bolsonaro'
    ],
    respostaCorreta: 'A',
		//dinheiro: 10000
  }
  const questaoTres: IQuestoes = {
    pergunta: 'Qual governador do Estado de São Paulo tem escândalos sobre roubo na Merenda?',
    opcoes: [
      'A: Dória',
      'B: Geraldo Alckmin',
      'C: Rodrigo Garcia'
    ],
    respostaCorreta: 'B',
		//dinheiro: 30000
  }

	export const perguntasQuiz = {
		primeira: questaoUm, segunda: questaoDois, terceira: questaoTres
	}