import {Box, Typography} from "@mui/material";
import {AnswerData} from "../types/global_types";

const AnswerSX = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "16px",
  "#text": {
    textAlign: "center",
    fontSize: "1.25em",
    fontWeight: "bold"
  }
}

type AnswerParams = {
  answer: AnswerData
}

const Answer = (p: AnswerParams) => {
  return (
    <Box id={"answer"} sx={AnswerSX}>
      <Typography id={"text"} variant={"body2"}>{p.answer.text}</Typography>
      <img src={p.answer.imgSrc} alt={"cannot load image"}/>
    </Box>
  );
}

export default Answer;
