import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import IErrands from "../../types/iErrands"

const recados: IErrands[]=[
    {
      title:'title',
      description:'description',
      id:'idRecado',
      idUser:'idUser'
    }
  ]

  export const userErrands=  createSlice({
    name: 'Recados',
    initialState: {
        recados,
    },
    reducers:{
        addRecados(state, action: PayloadAction<IErrands>){
            const newRecado= action.payload
            recados.push(newRecado)
          }
    }
  })

  export const {addRecados}= userErrands.actions
  export default userErrands.reducer