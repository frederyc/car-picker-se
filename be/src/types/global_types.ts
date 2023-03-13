export type Question = {
  id: string,
  question: string,
  options: {
    text: string,
    nextId: string,
  }[]
}

export type Answer = {
  id: string,
  text: string,
  imgSrc: string
}
