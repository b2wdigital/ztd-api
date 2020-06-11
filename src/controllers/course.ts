import { Request, Response } from "express";
import * as courseService from "../services/course";

export const createCourse = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const dbResponse = await courseService.create(req.body);
    return res.status(200).send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};

export const getCourseById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const dbResponse = await courseService.getById(id);
    return res.status(200).send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};

export const getAllCourses = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const dbResponse = await courseService.list();
  try {
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
  }
};

export const updateCourse = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body, params } = req;
  const dbResponse = await courseService.update(params.id, body);
  try {
    return res.send(dbResponse);
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      error: `👻 ${err.name}`,
      message: `${err.message}`,
    });
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
