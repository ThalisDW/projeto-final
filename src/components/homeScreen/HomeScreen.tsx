import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Grid, TextField } from "@mui/material";
import AccordionRecados from "../accordionRecados/AccordionRecados";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOn } from "../../store/modules/userSlice";
import { store } from "../../store/store";

const drawerWidth = 240;



const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function HomeScreen() {
  const dispatch=useDispatch()
  const storeDb = store.getState()
  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [description, setDescription]= useState('')
  const [title, setTitle]= useState('')
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar sx={{ backgroundColor: "pink" }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h2' fontFamily={"serif"} noWrap component='div'>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        open={open}
        sx={{ backgroundColor: "#eaeaea" }}
      >
        <DrawerHeader
          sx={{
            backgroundColor: "pink",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant='h5' fontFamily={"serif"}>
            Main
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: "Home", link: "/home" },
            { text: "New errands", link: "/login" },
            { text: "Send email", link: "#" },
            { text: "Drafts", link: "#" },
          ].map((text, index) => (
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                href={text.link}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Exit"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                href='/login'
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component='main' sx={{ p: 3 }}>
        <DrawerHeader />
        {/* CONTEUDO HOME */}
        <Grid
          container
          bgcolor={"#eaeaea"}
          spacing={4}
          borderRadius={2}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          width={"100%"}
        >
          <Grid
            container
            item
            xs={12}
            spacing={1}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={5}>
              <TextField
                color='secondary'
                fullWidth={true}
                type={"text"}
                placeholder='Digite o título'
                label='Título'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                color='secondary'
                fullWidth={true}
                type={"text"}
                placeholder='Digite a descrição'
                label='Descrição'
                value={null}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
            >
              <Button type='button' variant='contained' color='success'>
                Salvar
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <AccordionRecados />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
