import * as feedbackService from '../services/feedback';
import { Request, Response } from "express";

export const createFeedback = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log('data', data);
    const dbResponse = await feedbackService.create(data);
    res.send(dbResponse);
  }  catch (err) {
    return res.status(err.statusCode).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`
    })
  }
};

export const getFeedbackById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const dbResponse = await feedbackService.getById(id)
  try {
    res.send(dbResponse);
  }  catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`
    })
  }
};

export const getAllFeedbacks = async (req: Request, res: Response) => {
  const dbResponse = await feedbackService.List()
  try {
    res.send(dbResponse);
  }  catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`
    })
  }
};

export const getFeedbackByUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const dbResponse = await feedbackService.getByUser(id)
  try {
    res.send(dbResponse);
  }  catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`
    })
  }
};

export const getFeedbackByCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const dbResponse = await feedbackService.getByCourse(id)
  try {
    res.send(dbResponse);
  }  catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`
    })
  }
};






