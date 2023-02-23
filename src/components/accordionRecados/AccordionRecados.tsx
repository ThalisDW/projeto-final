import { Accordion, AccordionSummary, Button, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import TextField from "@mui/material/TextField";

export default function AccordionRecados() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "auto",
    bgcolor: "background.paper",
    border: "2px solid #ffabff",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      {/* MODAL */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Grid container spacing={3}>
              <Grid item xs={12} mb={3} display={"flex"} justifyContent={"center"}>
                <img
                  src='./img/imgModalEditar.png'
                  alt='editar'
                  height={"150%"}
                />
              </Grid>
              <Grid item xs={12} textAlign={"center"}>
                <Typography id='modal-modal-title' variant='h5' component='h2'>
                  Edit your message
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <hr />
              </Grid>

              <Grid container spacing={5} item xs={12}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth={true}
                    variant='outlined'
                    label='Edit your title'
                    placeholder='Title'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth={true}
                    variant='outlined'
                    label='Edit your description'
                    placeholder='Description'
                  />
                </Grid>
                <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                  <Button variant="contained" color="success">Salvar</Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
      {/* ====================== */}
      <Grid container spacing={1}>
        <Grid item>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography variant='h5'>Título</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
            <hr />
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant='contained' color='error'>
                    Excluir
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='contained' color='warning'>
                    Editar
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography variant='h5'>Título</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
            <hr />
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item>
                  <Button variant='contained' color='error'>
                    Excluir
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleOpen}
                    variant='contained'
                    color='warning'
                  >
                    Editar
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
}
