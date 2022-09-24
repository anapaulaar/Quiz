"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quiz_1 = require("./src/Classes/Quiz");
const perguntasQuiz_1 = require("./src/perguntasQuiz");
const quiz = new Quiz_1.Quiz([], 0);
quiz.inserirPergunta(perguntasQuiz_1.perguntasQuiz.primeira);
quiz.inserirPergunta(perguntasQuiz_1.perguntasQuiz.segunda);
quiz.inserirPergunta(perguntasQuiz_1.perguntasQuiz.terceira);
quiz.iniciaQuiz();
