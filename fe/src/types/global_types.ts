import react from "react";

export type QuestionData = {
  id: string,
  question: string,
  options: {
    text: string,
    nextId: string,
  }[]
}

export type AnswerData = {
  id: string,
  text: string,
  imgSrc: string
}
