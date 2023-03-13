import {Request, Response, Router} from 'express';
import {Answer} from "../types/global_types";
import {DB_answers} from "../db";

const router = Router();

router.get("/:id", async (req: Request, res: Response) => {
  const ans: Answer | undefined = DB_answers.find(x => x.id === req.params.id);
  res.status(ans ? 200 : 404).json(ans ?? { msg: `Failed to load resource with id ${req.params.id}` });
});

export default router;
