import { Request, Response } from "express";
import axios from "axios";
import { googleConfig, googleLoginUrl } from "../config/google-util";
import { create as createUser } from "../services/user";

async function getGoogleDriveFiles(accessToken: string) {
  const { data } = await axios({
    url: "https://www.googleapis.com/oauth2/v2/userinfo",
    method: "get",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const createdUser = await createUser(data);
  console.log(createdUser);
}

export const googleUrl = (req: Request, res: Response): any => {
  res.send(googleLoginUrl);
};

export const callback = async (req: Request, res: Response) => {
  const { code } = req.query;
  const { data } = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: "post",
    data: {
      client_id: googleConfig.clientId,
      client_secret: googleConfig.clientSecret,
      redirect_uri: "http://localhost:3333/auth/google/callback",
      grant_type: "authorization_code",
      code,
    },
  });
  getGoogleDriveFiles(data.access_token);
};
