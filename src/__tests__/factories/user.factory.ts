import factory from "factory-girl";
import userModel from "../../models/user";

factory.define("Intern", userModel, {
  name: factory.seq("User.name", (n) => `Student ${n}`),
  profile_url: factory.seq("User.img", (n) => `img ${n}.jpg`),
  title: "Intern",
  email: factory.seq("User.email", (n) => `student${n}@email.com`),
  canFeedback: true,
  canEditCourse: false,
});

factory.define("Instructor", userModel, {
  name: factory.seq("User.name", (n) => `Instructor ${n}`),
  profile_url: factory.seq("User.img", (n) => `img ${n}.jpg`),
  title: "Intern",
  email: factory.seq("User.email", (n) => `student${n}@email.com`),
  canFeedback: false,
  canEditCourse: true,
});

export default factory;
