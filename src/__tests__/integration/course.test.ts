import { Types } from "mongoose";
import config from "../../config";
import dbConnect from "../../config/db";
import Course from "../../models/course";

describe("Users", () => {
  beforeAll(() => {
    dbConnect(config.MONGO_DB_URL);
  });
  beforeEach(() => {
    if (Course.countDocuments()) {
      return Course.deleteMany({});
    }
  });
  describe("Course Creation", () => {
    it("Should add a new user to database", async () => {
      const newCourse = new Course({
        name: "Aula 01",
      });
      const createdCourse = await Course.create(newCourse);
      expect(newCourse).toEqual(createdCourse);
    });

    it("Should add a list of courses to database", async () => {
      const courses = [
        {
          name: "Aula 01",
          instructors: "",
          urlDoc: "",
          extra: "",
          goals: "",
          topicsCovered: "",
        },
        {
          name: "Aula 02",
          instructors: "",
          urlDoc: "",
          extra: "",
          goals: "",
          topicsCovered: "",
        },
      ];
      const createdCourses = await Course.create(courses);
      expect(createdCourses).toHaveLength(2);
    });
    it("Should returns an error if a name is missing", async () => {
      const newCourse = new Course({
        instructors: "",
        urlDoc: "",
        extra: "",
        goals: "",
        topicsCovered: "",
      });
      await expect(Course.create(newCourse)).rejects.toThrow(
        "Course validation failed: name: Path `name` is required."
      );
    });
  });
  describe("Course List", () => {
    it("Should return a list of courses successfully", async () => {
      const courses = [
        {
          name: "Aula 01",
          instructors: "",
          urlDoc: "",
          extra: "",
          goals: "",
          topicsCovered: "",
        },
        {
          name: "Aula 02",
          instructors: "",
          urlDoc: "",
          extra: "",
          goals: "",
          topicsCovered: "",
        },
      ];
      const courseList = await Course.create(courses);
      expect(courseList).toHaveLength(2);
    });

    it("Should return an empty list when doesn't have an course", async () => {
      const returnedCourse = await Course.find();
      expect(returnedCourse).toHaveLength(0);
    });
  });
  describe("Course By Id", () => {
    it("Shouldnt return a unexistant course", async () => {
      const returnedCourse = await Course.findOne(Types.ObjectId());
      expect(returnedCourse).toBeNull();
    });
    it("Should return a course successfully", async () => {
      const course = {
        name: "Aula 02",
        instructors: "",
        urlDoc: "",
        extra: "",
        goals: "",
        topicsCovered: "",
      };
      const { _id } = await Course.create(course);
      const returnedCourse = await Course.findOne(_id);
      if (returnedCourse) {
        expect(returnedCourse.name).toBe(course.name);
      }
    });
  });
});
