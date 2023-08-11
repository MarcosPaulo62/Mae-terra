import { Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import "./style.css";
import { Box, display } from "@mui/system";
import { makeStyles } from "@mui/styles";
const tabs = ["Cadastro", "Pedidos", "Desejos"];

const useStyles = makeStyles(() => ({
  containedButton: {
    backgroundColor: "#355d4c",
    "&:hover": {
      backgroundColor: "#1e342b",
    },
  },
  textButton: {
    color: "#355d4c",
  },
}));

export default function User() {
  const [activeTab, setActiveTab] = useState("Cadastro");
  const [changeData, setChangeData] = useState("Alterar dados");
  const [state, setState] = useState(true);
  const classes = useStyles();

  const readonly = () => {
    if (state) {
      setChangeData("Salvar dados");
      setState(false);
    } else {
      setChangeData("Alterar dados");
      setState(true);
    }
  };
  return (
    <>
      <main className="user">
        <div className="user-content">
          <div className="header-user">
            <h1 className="title-user">Minha conta</h1>
            <Typography>
              Seja bem vindo (a), <span className="bolder">Ana Banana</span>
            </Typography>
          </div>
          <div className="nav-user">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={tab === activeTab ? "contained" : "text"}
                onClick={() => setActiveTab(tab)}
                className={
                  tab === activeTab
                    ? classes.containedButton
                    : classes.textButton
                }
              >
                {tab}
              </Button>
            ))}
          </div>
          {activeTab === "Cadastro" ? (
            <div className="form-user">
              <h2 className="title-form">Dados pessoais</h2>
              <Box>
                <Typography>Login</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  defaultValue="anamorango@gmail.com"
                  size="small"
                  disabled={state}
                />
              </Box>

              <Box>
                <Typography>Nome de usuário</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  disabled={state}
                  defaultValue="Ana Banana"
                  size="small"
                />
              </Box>

              <Box>
                <Typography>Telefone</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  disabled={state}
                  defaultValue="(11) 7070-7070"
                  size="small"
                />
              </Box>

              <Box>
                <Typography>Senha</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type="password"
                  defaultValue="1234"
                  size="small"
                  disabled={state}
                />
              </Box>

              <button className="btn btn-add" onClick={() => readonly()}>
                {changeData}
              </button>
            </div>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <Typography>Página em construção :D</Typography>
            </Box>
          )}
        </div>
      </main>
    </>
  );
}
