import * as courseService  from "../services/course";
import { Request, Response } from "express";

export const createCourse = async (req: Request, res: Response) => {
  try {
    const dbResponse = await courseService.create(req.body);
    res.status(200).send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`
    })
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dbResponse = await courseService.getById(id);
    res.status(200).send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`
    })
  }
};

export const getAllCourses = async (req: Request, res: Response) => {
  const dbResponse = await courseService.list();
  try {
    res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`
    })
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  const { body, params } = req;
  const dbResponse = await courseService.update(params.id, body);
  try {
    res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`
    })
  }
};

// export const updateInstructorCourse = async (req: Request, res: Response) => {
//   const { body, params } = req;

//   await courseModel.findByIdAndUpdate(params.id, body.instructors);
//   const dbResponse = await courseModel.findById(params.id);
//   try {
//     res.send(dbResponse);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// export const updateInstructorName = async (req: Request, res: Response) => {
//   const { body, params } = req;

//   await courseModel.findByIdAndUpdate(params.id, body.name);
//   const dbResponse = await courseModel.findById(params.id);
//   try {
//     res.send(dbResponse);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// export const deleteCourseById = async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const dbResponse = await courseModel.findByIdAndRemove(id);
//   try {
//     res.status(200).send(dbResponse);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };




