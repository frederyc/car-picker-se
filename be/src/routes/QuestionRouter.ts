import {Request, Response, Router} from 'express';
import {Question} from "../types/global_types";
import {DB_questions} from "../db";

const router = Router();

router.get("/:id", async (req: Request, res: Response) => {
  const ques: Question | undefined = DB_questions.find(x => x.id === req.params.id);
  res.status(ques ? 200 : 404).json(ques ?? { msg: `Failed to load resource with id ${req.params.id}` });
});

export default router;
