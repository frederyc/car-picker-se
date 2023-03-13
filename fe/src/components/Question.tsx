import {Box, Button, Typography} from "@mui/material";
import {AnswerData, QuestionData} from "../types/global_types";
import react from "react";
import QuestionService from "../services/QuestionService";
import AnswerService from "../services/AnswerService";

type QuestionParams = {
  question: QuestionData,
  setData: react.Dispatch<react.SetStateAction<QuestionData | AnswerData | null>>
}

const QuestionSX = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "6px",
  "#text": {
    fontSize: "1.25em",
    textAlign: "center",
  },
  "#option": {
    backgroundColor: "black",
    textTransform: "none",
  }
}

const Question = (p: QuestionParams) => {
  const handleClick = async (x: { text: string, nextId: string}) => {
    p.setData(null);
    if (x.nextId.startsWith("q_")) {
      const question: QuestionData = await QuestionService.findById(x.nextId) as QuestionData;
      p.setData(question)
    } else {
      const answer: AnswerData = await AnswerService.findById(x.nextId) as AnswerData
      p.setData(answer);
    }
  }

  return (
      <Box id={"question"} sx={QuestionSX}>
        <Typography id={"text"} variant={"body2"}>{p.question.question}</Typography>
        {
          p.question.options.map(x =>
            <Button id={"option"} fullWidth variant={"contained"} size={"small"} onClick={() => handleClick(x)}>
              {x.text}
            </Button>
          )
        }
      </Box>
  );
}

export default Question;
