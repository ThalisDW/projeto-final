import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import IUser from "../../types/iUser";

const users: IUser[] = [
  {name: 'Thalis',
  senha: '123456',
  id: 'idExemple',
  logado: true
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
    loginUser(state, action:PayloadAction<string>){
      if(state.users.find((item)=>item.name === action.payload)){
        state.users.map((item)=>{ 
          if(item.name === action.payload){
            return item.logado = true

          }
        })
      }
    },
    logOn(state):any{
     const log= state.users.filter((item)=>item.logado === true)
     return log
    }
  }
});

export const { addUsers, removeUser, loginUser, logOn } = userSlice.actions;
export default userSlice.reducer;
