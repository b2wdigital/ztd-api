import { Request, Response } from "express";

export const loginSuccess = async (req: Request, res: Response) => {
  const obj = {
    user: req.user,
    cookies: req.cookies,
  };
  res.send(obj);
};

export const logout = async (req: Request, res: Response) => {
  req.logout();
  res.redirect("http://localhost:3000");
};
