"use client";

import { http, HttpResponse } from "msw";

//  response type alais

type responseType = {
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
    const userInfo = (await request.json()) as responseType;
    const token = generateToken(100);
    const responseBody = { ...userInfo, token };
    return HttpResponse.json(responseBody, { status: 201 });
  }),
];
