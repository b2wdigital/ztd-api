import { StringifyOptions } from "querystring";

export type User = {
  googleid: string;
  name: string;
  profileUrl: string;
  email: string;
  canFeedback: boolean;
  canEditCourse: boolean;
};

export type UserGoogleInfo = {
  _id: string;
  id: string;
  email: string;
  name: string;
  picture: string;
};
