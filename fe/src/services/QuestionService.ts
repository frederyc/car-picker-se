export default class QuestionService {
  private static BASE_URL = "http://localhost:5000/api/v1/question/";

  public static findById = async (id: string) => {
    return (await fetch(`${this.BASE_URL}${id}`)).json();
  };
}
