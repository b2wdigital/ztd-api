import { Request, Response } from "express";
import * as feedbackService from "../services/feedback";

export const createFeedback = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const data = req.body;
    const dbResponse = await feedbackService.create(data);
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};

export const getFeedbackById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const dbResponse = await feedbackService.getById(id);
  try {
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};

export const getAllFeedbacks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const dbResponse = await feedbackService.List();
  try {
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};

export const getFeedbackByUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  // const { jwt } = req.headers.authorization;

  const dbResponse = await feedbackService.getByUser(id);
  console.log(dbResponse);
  try {
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};

export const getFeedbackByCourse = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const dbResponse = await feedbackService.getByCourse(id);
  try {
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};
