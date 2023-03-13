import react, {useEffect, useState} from 'react';
import {Backdrop, Box, Typography} from "@mui/material";
import {AnswerData, QuestionData} from "./types/global_types";
import QuestionService from "./services/QuestionService";
import Question from "./components/Question";
import Answer from "./components/Answer";

const appSX = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "#F0F0F0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  alignItems: "center",
  "#wrapper": {
    width: "35%",
    height: "100%",
    margin: "64px 0px 64px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
    gap: "64px",
    "#app-title": {
      width: "fit-content",
      fontSize: "2.25em",
    },
  },
  "#waiting": {
    fontWeight: "bold"
  }
}

const App = () => {
  const [data, setData] = useState<QuestionData | AnswerData | null>(null);

  const getComponent = (): react.ReactNode => {
    console.log(data);
    if (!data) {
      console.log("data - null")
      return (<Typography id={"waiting"} variant={"body2"}>waiting for server...</Typography>);
    } else if (data.id.startsWith("q_")) {
      console.log("data - question")
      return (
          <Question question={data as QuestionData} setData={setData}/>
      );
    } else {
      console.log("data - answer")
      return (
          <Answer answer={data as AnswerData} />
      )
    }
  }

  useEffect(() => {
    const runAsync = async () => {
      const question: QuestionData = await QuestionService.findById("q_a5gR5w") as QuestionData;
      setData(question);
    }
    runAsync();
  }, []);

  return (
    <Box className="App" sx={appSX}>
      <Box id={"wrapper"}>
        <Typography id={"app-title"} variant={"h2"}>AutoMaker</Typography>
        { getComponent() }
      </Box>
    </Box>
  );
}

export default App;
