import Button from "@mui/material/Button";
import { Grid, Paper, styled, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { borderRadius } from "@mui/system";
interface Mode {
  modo: "login" | "criar";
}

function FormRegister() {
  const Item = styled(Paper)(() => ({
    borderRadius: "20px",
    padding: "6px",
    backgroundColor: "pink",
  }));

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
                  Register
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
                <TextField
                  type={"password"}
                  id='confirmarSenha'
                  label='Confirmar senha'
                  placeholder='Confirmar senha'
                />
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
              >
                <Button variant='contained' color='secondary'>
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
                  Já possui conta?
                  <a href='/login'>Clique aqui</a>
                </Typography>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default FormRegister;
