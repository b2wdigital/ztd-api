import { Request, Response } from "express";
import config from "../config"

export const redirectGit = async (req: Request, res: Response) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}`)
};



