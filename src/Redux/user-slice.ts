import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../Interfaces/interfaces";
import { RootState } from "./redux-store";

const initialState: UserState = {
  users: [
    {
      id: 1,
      name: "Cameron Williamson",
      email: "c@company.com",
      birthDate: "5/6/1992",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
      phone: "(889) 907-1960",
      password: "Myspace1",
    },
    {
      id: 2,
      name: "Leslie Alexander",
      email: "l@company.com",
      birthDate: "23/7/1980",
      address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      phone: "(480) 555-0103",
      password: "Myspace2",
    },
    {
      id: 3,
      name: "Guy Hawkins",
      email: "g@company.com",
      birthDate: "16/11/1981",
      address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      phone: "(603) 555-0123",
      password: "Myspace3",
    },
    {
      id: 4,
      name: "Kristin Watson",
      email: "k@company.com",
      birthDate: "3/6/1981",
      address: "3517 W. Gray St. Utica, Pennsylvania 57867",
      phone: "(603) 555-0123",
      password: "Myspace4",
    },
    {
      id: 5,
      name: "Dianne Russell",
      email: "d@company.com",
      birthDate: "10/12/1990",
      address: "6391 Elgin St. Celina, Delaware 10299",
      phone: "(603) 555-0123",
      password: "Myspace5",
    },
    {
      id: 6,
      name: "Devon Lane longer longer longer  longer longer longer text",
      email: "de@company.com longer longer longer  longer longer longer text",
      birthDate: "11/3/1984",
      address: "3891 Ranchview Dr. Richardson, California 62639 longer longer  longer longer  longer longer  longer longer text",
      phone: "(603) 555-0123",
      password: "Myspace6 longer longer text",
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    //here will be all manipulation with state
  },
});

export const selectUsers = (state: RootState) => {
  return state.usersList.users;
};

export default userSlice.reducer;
