import courseModel, { ICourseDocument } from "../models/course";
import { Course } from "../types/course";

import NotFoundError from "../errors/not-found-error";
import ValidationError from "../errors/validation-error";

export const create = async (data: Course): Promise<ICourseDocument> => {
  const { name } = data;

  if (!data.name || name === "") {
    throw new ValidationError("Field name is required", 422);
  }
  return courseModel.create(data);
};

export const getById = async (id: string): Promise<ICourseDocument> => {
  const course = await courseModel.findById(id);
  if (!course) {
    throw new NotFoundError(`🤷 Feedback ${id} not found`, 404);
  }
  return course;
};

export const list = async (): Promise<ICourseDocument[]> => {
  const course = await courseModel.find();
  return course;
};

export const update = async (
  id: string,
  body: Course
): Promise<ICourseDocument> => {
  await courseModel.findByIdAndUpdate(id, body);
  const course = await courseModel.findById(id);
  if (!course) {
    throw new NotFoundError(`🤷 Course ${id} not found`, 404);
  }
  return course;
};

// export const updateInstructor = async (req: Request, res: Response) => {
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

// export const delete = async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const dbResponse = await courseModel.findByIdAndRemove(id);
//   try {
//     res.status(200).send(dbResponse);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
