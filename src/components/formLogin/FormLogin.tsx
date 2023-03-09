import Button from "@mui/material/Button";
import { Grid, Paper, styled, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useDispatch} from "react-redux";
import React,{useState} from "react";

interface Mode {
  modo: "login" | "criar";
}

function FormLogin() {
  const Item = styled(Paper)(() => ({
    borderRadius: "20px",
    padding: "6px",
    backgroundColor: "pink",
  }));

  const [name, setName] = useState('')
  const [senha, setSenha]= React.useState('')


  const dispatch = useDispatch()

  return (
    <>
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
          <Item elevation={15}>
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
                xs={10}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <Typography align='center' variant='h2'>
                  Login
                </Typography>
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
                  id='nome'
                  label='Nome'
                  placeholder='Nome'
                  value={name}
                  onChange={(e)=>setName(e.target.value)}

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
                />
              </Grid>

              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <Button href="/home" variant='contained' color='secondary'>
                  Entrar
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
                  Não possui conta?
                  <a href='/createUser'>Clique aqui</a>
                </Typography>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default FormLogin;
