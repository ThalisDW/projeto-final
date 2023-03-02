import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../../types/iUser";

const users: IUser[] = [];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users,
  },
  reducers: {
    addUsers(state, action: PayloadAction<IUser>) {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { addUsers } = userSlice.actions;
export default userSlice.reducer;
