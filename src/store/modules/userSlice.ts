import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  IErrands  from "../../types/iErrands";
import IUser from "../../types/iUser";

const users: IUser[] = [
  {name: 'Thalis',
  senha: '123456',
  id: 'idExemple',
}
];



export const userSlice = createSlice({
  name: "user",
  initialState: {
    users,
  },
  reducers: {
    addUsers(state, action: PayloadAction<IUser>) {
      state.users = [...state.users, action.payload];
    },
    removeUser(state, action: PayloadAction<string>){
    state.users.filter((item)=> item.id !== action.payload)
    },
  }
});

export const { addUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;
