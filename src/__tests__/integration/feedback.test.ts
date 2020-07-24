import { Types } from "mongoose";
import config from "../../config";
import dbConnect from "../../config/db";
import Feedback from "../../models/feedback";

describe("Users", () => {
  beforeAll(() => {
    dbConnect(config.MONGO_DB_URL);
  });
  beforeEach(() => {
    if (Feedback.countDocuments()) {
      return Feedback.deleteMany({});
    }
  });
  describe("Feedback Creation", () => {
    it("Should add a new feedback to database", async () => {
      const newFeedback = new Feedback({
        id_user: "5f044c683bd89050951eb90f",
        id_course: "5ecb3cb81bbb5d4508daed8e",
        grade: 5,
        positiveFeedback: "Sim",
        negativeFeedback: "Não",
      });
      const createdFeedback = await Feedback.create(newFeedback);
      expect(newFeedback).toEqual(createdFeedback);
    });

    it("Should add a list of feedbacks to database", async () => {
      const feedbacks = [
        {
          id_user: "5f044c683bd89050951eb90f",
          id_course: "5ecb3cb81bbb5d4508daed8e",
          grade: 5,
          positiveFeedback: "Sim",
          negativeFeedback: "Não",
        },
        {
          id_user: "5f044c683bd89050951eb90f",
          id_course: "5ecb3cb81bbb5d4508daed8e",
          grade: 5,
          positiveFeedback: "Sim",
          negativeFeedback: "Não",
        },
      ];
      const createdfeedbacks = await Feedback.create(feedbacks);
      expect(createdfeedbacks).toHaveLength(2);
    });
    // it("Should returns an error if a id is missing", async () => {
    //   const newFeedback = [
    //     {
    //       id_course: "5ecb3cb81bbb5d4508daed8e",
    //       grade: 5,
    //       positiveFeedback: "Sim",
    //       negativeFeedback: "Não",
    //     },
    //   ];
    //   await expect(Feedback.create(newFeedback)).rejects.toThrow(
    //     "Feedback validation failed: id_user: Path `id_user` is required"
    //   );
    // });
  });
  describe("feedback List", () => {
    it("Should return a list of feedbacks successfully", async () => {
      const feedbacks = [
        {
          id_user: "5f044c683bd89050951eb90f",
          id_course: "5ecb3cb81bbb5d4508daed8e",
          grade: 5,
          positiveFeedback: "Sim",
          negativeFeedback: "Não",
        },
        {
          id_user: "5f044c683bd89050951eb90f",
          id_course: "5ecb3cb81bbb5d4508daed8e",
          grade: 5,
          positiveFeedback: "Sim",
          negativeFeedback: "Não",
        },
      ];
      const feedbackList = await Feedback.create(feedbacks);
      expect(feedbackList).toHaveLength(2);
    });

    it("Should return an empty list when doesn't have an feedback", async () => {
      const returnedfeedback = await Feedback.find();
      expect(returnedfeedback).toHaveLength(0);
    });
  });
  describe("feedback By Id", () => {
    it("Shouldnt return a unexistant feedback", async () => {
      const returnedfeedback = await Feedback.findOne(Types.ObjectId());
      expect(returnedfeedback).toBeNull();
    });
    it("Should return a feedback successfully", async () => {
      const feedback = {
        id_user: "5f044c683bd89050951eb90f",
        id_course: "5ecb3cb81bbb5d4508daed8e",
        grade: 5,
        positiveFeedback: "Sim",
        negativeFeedback: "Não",
      };
      const { _id } = await Feedback.create(feedback);
      const returnedfeedback = await Feedback.findOne(_id);
      if (returnedfeedback) {
        expect(returnedfeedback.id_user).toBe(feedback.id_user);
      }
    });
  });
});
