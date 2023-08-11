import { Box, Typography, Button } from '@mui/material';

export default function User() {


    return(
        <>
            <main className="user">
                <div className="header-user">
                    <h1 className="title-user">Minha conta</h1>
                    <Typography>Seja bem vindo (a), <span className="bolder">Ana Banana</span>
                    </Typography>
                </div>
                <div className="nav-user">
                    <Button variant="contained">Cadastro</Button>
                    <Button variant="text">Pedidos</Button>
                    <Button variant="text">Desejos</Button>
                </div>
                <div className="form-user">

                </div>
            </main>
        </>
    )
}