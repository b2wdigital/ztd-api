import userModel from "../models/user";
import * as relationsService from '../services/relations'
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, profile_url, title, email, canFeedback, canEditCourse } = req.body;
    const dbReq = { name, profile_url, title, email, canFeedback, canEditCourse }
    const dbResponse = await userModel.create(dbReq);
    res.status(200).send(dbResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getByUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const dbResponse = await userModel.findById(id);
    res.status(200).send(dbResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};


export const getAllUsers = async (req: Request, res: Response) => {
  const dbResponse = await userModel.find()
  try {
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};


export const getAllInstructors = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const dbResponse = await userModel.findById(id);
    console.log(dbResponse)
    res.status(200).send(dbResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getGivenFeedbacks = async (req: Request, res: Response) => {
  const { id } = req.params;
  const dbResponse = await relationsService.listGivenFeedbacks(id);
  try {
    res.send(dbResponse);
  }  catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`
    })
  }
};

export const getPendingFeedbacks = async (req: Request, res: Response) => {
  const { id } = req.params;
  const dbResponse = await relationsService.listPendingFeedbacks(id);
  try {
    res.send(dbResponse);
  }  catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`
    })
  }
};
