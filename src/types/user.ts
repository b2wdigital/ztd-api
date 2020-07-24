export type User = {
  googleid: string;
  name: string;
  profileUrl: string;
  email: string;
  canFeedback: boolean;
  canEditCourse: boolean;
};

export type UserGoogleInfo = {
  id: string;
  email: string;
  name: string;
  picture: string;
};
