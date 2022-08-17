import React, { ChangeEvent, useContext, useState } from "react";
import { ProjectGlobalContext } from "../context/ProjectGlobalState";
import ProjectItem from "../components/ProjectItem";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid, Button, Box, TextField, Alert } from '@mui/material';


const ProjectList = () => {


  const { projects} = useContext(ProjectGlobalContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("")

  const filteredProjects = () =>{
    if(search.length === 0)
    return projects?.slice(currentPage,currentPage +5);
  

    const filtered = projects.filter(project => {
      return project.projectName.toLowerCase().includes(search.toLowerCase())
    } )
    return filtered.slice(currentPage,currentPage +5);
  }


  const nextPage = ()=> {
    if(currentPage < projects.length - 5){
      
      setCurrentPage(currentPage + 5);
    }
  }
  const prevPage = ()=> {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5);
    }
  }

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
   setCurrentPage(0);
    setSearch(e.target.value);
  }

  return (
    <>
      <Grid
        sx={{
          padding: "1rem",
          border: "1px solid #e0e0e0",
        }}
      >
        <TextField
          placeholder="Search"
          name="search"
          value={search}
          onChange={onSearchChange}
        />
      </Grid>

      {filteredProjects().length === 0 ? (
        <Alert
          sx={{
            margin: "1rem",
            border: "1px solid #e0e0e0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          severity="info"
        >
          No hay proyectos
        </Alert>
      ) : null}

      <Grid container>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  display: { xs: "none", md: "table-row" },
                  backgroundColor: "rgba(0, 0, 0, 0.02)",
                }}
              >
                <TableCell>Project info</TableCell>
                <TableCell>Project Manager</TableCell>
                <TableCell>Assigned To</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProjects().map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {filteredProjects().length > 0 ? (
        <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <Box>
            {" "}
            Page: {currentPage / 5 + 1} de {Math.ceil(projects.length / 5)}
          </Box>
          <Button onClick={prevPage}>Prev</Button>
          <Button onClick={nextPage}>Next</Button>
        </Grid>
      ) : null}
    </>
  );
}

export default ProjectList