import Button from "@mui/material/Button";
import { Grid, Paper, styled, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import { borderRadius } from "@mui/system";
import { useDispatch } from "react-redux";
import { addUsers } from "../../store/modules/userSlice";
import { useNavigate, useNavigation } from "react-router-dom";
interface Mode {
  modo: "login" | "criar";
}

interface CustomPaperProps {
  title: string;
  children: React.ReactNode;
}

function CustomPaper(props: CustomPaperProps) {
  const { title, children } = props;

  return (
    <Paper
      style={{ borderRadius: "20px", padding: "6px", backgroundColor: "pink" }}
    >
      <Typography variant='h2' align='center'>
        {title}
      </Typography>
      {children}
    </Paper>
  );
}

function FormRegister() {
  const [name, setName] = useState("");
  const [confirmName, setConfirmName]= useState('')
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha]=useState('')
 const dispatch = useDispatch()

  const createUser=()=>{
    dispatch(addUsers({
      name: name,
      senha: senha,
      id: 'idTeste555',
      logado: false
    }))
    
    
  }
  return (
    <Grid
      container
      height={"100vh"}
      width={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Grid
        container
        item
        spacing={2}
        xs={8}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid item xs={12}>
          <CustomPaper title='Register'>
            <Grid
              container
              item
              spacing={2}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <TextField
                  type={"text"}
                  id='nome'
                  label='Nome'
                  placeholder='Nombre'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <TextField
                  type={"text"}
                  id='confirmarNome'
                  label='Confirmar nome'
                  placeholder='Confirmar nome'
                  value={confirmName}
                  onChange={(e)=>setConfirmName(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <TextField
                  type={"password"}
                  id='senha'
                  label='Senha'
                  placeholder='Senha'
                  value={senha}
                  onChange={(e)=>setSenha(e.target.value)}

                />
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <TextField
                  type={"password"}
                  id='confirmarSenha'
                  label='Confirmar senha'
                  placeholder='Confirmar senha'
                  value={confirmSenha}
                  onChange={(e)=>setConfirmSenha(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <Button variant='contained' color='secondary' onClick={createUser}>
                  Registrar
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <Typography>
                  Já possui conta? <a href='/login'>Clique aqui</a>
                </Typography>
              </Grid>
            </Grid>
          </CustomPaper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FormRegister;
