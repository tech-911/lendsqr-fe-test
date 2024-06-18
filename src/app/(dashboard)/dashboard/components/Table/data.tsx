"use client";

import { Payment } from "./columns";

//--------------------get table data and save to local storage for global usage
export async function getTableData() {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("/getUsers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, dataNumber: 500 }), //sending token and number of data to get from endpoint
    });
    const result = (await response.json()) as any;

    if ((await response.status) === 201) {
      // Save values to localStorage
      localStorage.setItem("userData", JSON.stringify(result?.data));
    }
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

export const data: Payment[] = [
  {
    id: "Lends1qr",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "adedeji@lendsqr.com",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "inactive",
  },
  {
    id: "Le2ndsqr",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "adedeji@lendsqr.com",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "pending",
  },
  {
    id: "Le3ndsqr",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "adedeji@lendsqr.com",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "blacklisted",
  },
  {
    id: "Lendsqr4",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "adedeji@lendsqr.com",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "inactive",
  },
  {
    id: "5Lendsqr",
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "adedeji@lendsqr.com",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "active",
  },
];
