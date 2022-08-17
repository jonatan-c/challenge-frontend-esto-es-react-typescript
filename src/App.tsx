import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Heading from "./components/Heading";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import { ProjectGlobalProvider } from "./context/ProjectGlobalState";
import { Box, Container } from "@mui/material";
import React from "react";

function App() {
  return (
    <>
      <Container>
        <ProjectGlobalProvider>
          <BrowserRouter>
            <Heading />
            <Box style={{padding: "150px 0 0 0"}}  >
              <Routes>
                <Route path="/" element={<ProjectList />} />
                <Route path="/add-project" element={<ProjectForm />} />
                <Route path="/edit-project/:id" element={<ProjectForm />} />
              </Routes>
            </Box>
          </BrowserRouter>
        </ProjectGlobalProvider>
      </Container>
    </>
  );
}

export default App;
