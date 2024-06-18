"use client";

import { generateRandomUserData } from "@/utls/fx";
import { http, HttpResponse } from "msw";

//  response type alais

type requestType = {
  id: string;
  email: string;
  password: string;
};

//  Generate n Character token
const generateToken = (length: number = 20): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters[randomIndex];
  }

  return token;
};

//  Handler

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.post("*/login", async ({ request }) => {
    // ...and respond to them using this JSON response.
    const userInfo = (await request.json()) as requestType;
    const token = generateToken(100);
    const responseBody = { ...userInfo, token };
    return HttpResponse.json(responseBody, { status: 201 });
  }),
  http.post("*/getUsers", async ({ request }) => {
    // ...and respond to them using this JSON response.
    const { dataNumber, token } = (await request.json()) as {
      dataNumber: number;
      token: string;
    };
    if (!token || token === "") {
      return HttpResponse.json(
        { message: "unauthorized access" },
        { status: 401 }
      );
    }
    const userList = generateRandomUserData(dataNumber);
    if (userList.length === 0) {
      return HttpResponse.json(
        { message: "invalid data length" },
        { status: 400 }
      );
    }

    return HttpResponse.json({ data: userList }, { status: 201 });
  }),
];
