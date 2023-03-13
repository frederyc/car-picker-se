export default class AnswerService {
  private static BASE_URL = "http://localhost:5000/api/v1/answer/";

  public static findById = async (id: string) => {
    return (await fetch(`${this.BASE_URL}${id}`)).json();
  };
}
