import express, {Application} from "express";
import questionRouter from "./routes/QuestionRouter";
import answerRouter from "./routes/AnswerRouter";

const app: Application = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/v1/question", questionRouter);
app.use("/api/v1/answer", answerRouter);

app.listen(5000, () => {
  console.log("Server started");
});
