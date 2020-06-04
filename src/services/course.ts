import courseModel from "../models/course";
import { Course }  from "../types/course";
const NotFoundError = require('../errors/not-found-error')
const ValidationError = require('../errors/validation-error')

export const create = async (data: Course) => {
    const { name, instructors, urlDoc, extra, goals, topicsCovered } = data;

    if (!data.name|| name === ''){
      throw new ValidationError({ message: 'Field name is required', statusCode: 422 })
    }
    return await courseModel.create(data)
};

export const getById = async (id: string) => {
    const course = await courseModel.findById(id);
    if (!course) {
      throw new NotFoundError({
        message: `🤷 Feedback ${id} not found`,
        statusCode: 404,
      });
    }
    return course;
};

export const list = async () => {
  const course = await courseModel.find()
  return course;
};

export const update = async (id: string, body: Course) => {
  await courseModel.findByIdAndUpdate(id, body);
  const course =  await courseModel.findById(id)
  if (!course) {
    throw new NotFoundError({
      message: `🤷 Course ${id} not found`,
      statusCode: 404,
    });
  }
  return course
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




