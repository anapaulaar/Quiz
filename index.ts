import { Quiz } from "./src/Classes/Quiz"
import { perguntasQuiz } from "./src/perguntasQuiz"

const quiz = new Quiz([],0)

quiz.inserirPergunta(perguntasQuiz.primeira)
quiz.inserirPergunta(perguntasQuiz.segunda)
quiz.inserirPergunta(perguntasQuiz.terceira)

quiz.iniciaQuiz()
