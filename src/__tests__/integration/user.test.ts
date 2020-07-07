import { Types } from "mongoose";
import config from "../../config";
import dbConnect from "../../config/db";
import User from "../../models/user";

describe("Users", () => {
  beforeAll(() => {
    dbConnect(config.MONGO_DB_URL);
  });
  beforeEach(() => {
    if (User.countDocuments()) {
      return User.deleteMany({});
    }
  });
  describe("User Creation", () => {
    it("Should add a new user to database", async () => {
      const newUser = new User({
        name: "Student_XX",
        title: "student",
        email: "student.3@b2wdigital.com.br",
        canFeedback: true,
        canEditCourse: false,
      });
      const createdUser = await User.create(newUser);
      expect(createdUser).toEqual(createdUser);
    });
    it("Should add a list of users to database", async () => {
      const users = [
        {
          name: "Student_01",
          title: "student",
          email: "student.1@b2wdigital.com.br",
          canFeedback: true,
          canEditCourse: false,
        },
        {
          name: "Student_02",
          title: "student",
          email: "student.2@b2wdigital.com.br",
          canFeedback: true,
          canEditCourse: false,
        },
      ];
      const createdUsers = await User.create(users);
      expect(createdUsers).toHaveLength(2);
    });
    it("Should returns an error if a name is missing", async () => {
      const newUser = new User({
        title: "student",
        email: "student.1@b2wdigital.com.br",
        canFeedback: true,
        canEditCourse: false,
      });
      await expect(User.create(newUser)).rejects.toThrow(
        "User validation failed: name: Path `name` is required."
      );
    });
  });
  describe("User List", () => {
    it("Should return a list of user successfully", async () => {
      const users = [
        {
          name: "Student_1",
          title: "student",
          email: "student.1@b2wdigital.com.br",
          canFeedback: true,
          canEditCourse: false,
        },
        {
          name: "Student_2",
          title: "student",
          email: "student.2@b2wdigital.com.br",
          canFeedback: true,
          canEditCourse: false,
        },
        {
          name: "Student_3",
          title: "student",
          email: "student.3@b2wdigital.com.br",
          canFeedback: true,
          canEditCourse: false,
        },
      ];
      const userList = await User.create(users);
      expect(userList).toHaveLength(3);
    });

    it("Should return an empty list when doesn't have an user", async () => {
      const returnedUser = await User.find();
      expect(returnedUser).toHaveLength(0);
    });
  });
  describe("User By Id", () => {
    it("Shouldnt return a unexistant user", async () => {
      const returnedUser = await User.findOne(Types.ObjectId());
      expect(returnedUser).toBeNull();
    });
    it("Should return a list of user successfully", async () => {
      const user = {
        name: "Student_1",
        title: "student",
        email: "student.1@b2wdigital.com.br",
        canFeedback: true,
        canEditCourse: false,
      };
      const { _id } = await User.create(user);
      const returnedUser = await User.findOne(_id);
      if (returnedUser) {
        expect(returnedUser.name).toBe(user.name);
      }
    });
  });
});
