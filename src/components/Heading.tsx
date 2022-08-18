import { AppBar, Box,  Typography, Button, Container  } from '@mui/material';
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation, useParams } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import logo from "../assets/logo.png";

const Heading = () => {

  const location = useLocation();

  return (
    <>
      <Container>
        <AppBar color="default" position="fixed">
          <Box
            borderBottom={1}
            color={"black"}
            height="52px"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ backgroundColor: "white" }}
            paddingLeft={5}
          >
            <img src={logo} alt="logo-esto-es" />
          </Box>

          {/* VOLVER ATRAS */}
          <Box
            height={"64px"}
            display="flex"
            flexDirection="row"
            alignItems="center"
            style={{ backgroundColor: "white" }}
            paddingLeft={3}
          >
            {location.pathname === "/" ? (
              ""
            ) : (
              <Button
                data-cy="button-back"
                component={Link}
                to="/"
                style={{ color: "rgba(0, 0, 0, 0.65)" }}
              >
                <ArrowBackIcon />
                Back
              </Button>
            )}
              
            <Typography data-cy="title-my-project-add-project"  variant="h6" paddingLeft={2}>
              {location.pathname === "/" ? "My projects" : "Add Project"}
            </Typography>
            {location.pathname === "/" ? (
              <Button
              data-cy="button-add-project"
              component={Link}
              to="/add-project"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  marginLeft: "auto",
                  marginRight: "25px",
                }}
              >
                <AddIcon />
                Add Project
              </Button>
            ) : (
              ""
            )}
          </Box>
        </AppBar>
      </Container>
    </>
  );
}

export default Heading;