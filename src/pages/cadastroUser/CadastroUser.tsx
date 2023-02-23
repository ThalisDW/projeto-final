import { Grid } from "@mui/material";
import ImgLogin from "../../components/imgLogin/ImgLogin";
import ModalLogin from "../../components/formlRegister/FormRegister";
import FormRegister from "../../components/formlRegister/FormRegister";

const CadastroUser = () => {
  return (
    <>
      <Grid container sx={{backgroundColor:"#eaeaea"}}>
        <Grid container item xs={12} md={6} bgcolor={"pink"}>
          <ImgLogin src='./img/fundo_de_tela.png' />
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <FormRegister />
        </Grid>
      </Grid>
    </>
  );
};

export default CadastroUser;
