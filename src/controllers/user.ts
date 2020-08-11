import { Request, Response } from "express";
import * as userService from "../services/user";
import * as relationsService from "../services/relations";

export const getByUserId = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const dbResponse = await userService.getById(id);
  try {
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const dbResponse = await userService.list();
  try {
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};

export const getAllInstructors = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // const dbResponse = await userService.findById(id);
    // console.log(dbResponse);
    // res.status(200).send(dbResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const editUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const dbResponse = await userService.getById(id);
  try {
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};

export const getGivenFeedbacks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const dbResponse = await relationsService.listGivenFeedbacks(id);
  try {
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};

export const getPendingFeedbacks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const dbResponse = await relationsService.listPendingFeedbacks(id);
  try {
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};
