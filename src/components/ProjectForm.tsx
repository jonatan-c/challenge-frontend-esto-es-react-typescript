
import React, {  useContext, useEffect, useState  } from 'react';
import { useParams } from "react-router-dom";
import { Project } from "../interfaces/interfaces";
import { ProjectGlobalContext } from "../context/ProjectGlobalState";
import { FormControl, MenuItem, TextField, Container, Button } from "@mui/material";
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';


const initialProject = {
 
    projectName: '',
    description: '',
    projectManager: '',
    assignedTo: '',
    status: '',
 
}


const ProjectForm = () => {


    const [projectForm, setProjectForm] = useState<Project>(initialProject);
    const {projectName,description,projectManager,assignedTo,status} = projectForm;

    const params = useParams();

    const onInputChange = (e: any) => {
      
      setProjectForm({
        ...projectForm,
        [e.target.name]: e.target.value,
      });
    };
    
    const { addProject,updateProject, projects} = useContext(ProjectGlobalContext);
    
    
    useEffect(() => {
      localStorage.setItem('projectsLocalStorage', JSON.stringify( projects || [] ));
    }, [projects])
    

      useEffect(() => {
        const projectFound = projects?.find((projec) => projec.id === params.id);
        if (projectFound) {
          setProjectForm({
            id: projectFound.id,
            projectName: projectFound.projectName,
            description: projectFound.description,
            projectManager: projectFound.projectManager,
            assignedTo: projectFound.assignedTo,
            status: projectFound.status,
            date: projectFound.date,
          });
        }
      }, [params.id ,projects]);
      
      const onResetForm = () => {
        setProjectForm(initialProject);
      }
      
      const onFormSubmit = (e : any) :void => {
        e.preventDefault();        
        if(projectName === '' || description === '' || projectManager === '' || assignedTo === '' || status === ''){
          
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill all the fields',
          })
        } else {
          if (!projectForm.id) {
            addProject(projectForm);
          } else {
            updateProject(projectForm);
          }
          onResetForm();
        }
        
      }
 
  return (
    <>
      <Container maxWidth="sm" style={{ backgroundColor: "white" }}>
        <FormControl
          fullWidth
          style={{ padding: "25px 0" }}
        >
          <label>Project Name</label>
          <TextField
            autoComplete='off'
            data-cy="input-project-name"
            style={{ margin: "10px 0" }}
            type="text"
            name="projectName"
            value={projectName}
            onChange={onInputChange}
          />
          <label>Descripcion</label>
          <TextField
            autoComplete='off'
            data-cy="input-description"
            style={{ margin: "10px 0" }}
            type="text"
            name="description"
            value={description}
            onChange={onInputChange}
          />
          <FormControl
          
          >
            <label>Project Manager</label>
            <Select
              style={{ margin: "10px 0", color: "#595959" }}
              name="projectManager"
              displayEmpty
              onChange={onInputChange}
              value={projectManager}
              data-cy="select-project-manager"
            >
              <MenuItem disabled value="">
                Select a Person
              </MenuItem>
              <MenuItem 
                data-cy="select-project-manager-item-JC"
              value="Jonatan Claros">Jonatan Claros</MenuItem>
              <MenuItem value="Mark Zuckerbeng">Mark Zuckerbeng</MenuItem>
              <MenuItem value="Lionel Messi">Lionel Messi</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <label>Assigned To</label>
            <Select
              style={{ margin: "10px 0", color: "#595959" }}
              name="assignedTo"
              displayEmpty
              onChange={onInputChange}
              value={assignedTo}
              data-cy="select-assigned-to"
            >
              <MenuItem disabled value="">
                {" "}
                Select a Person
              </MenuItem>
              <MenuItem 
                data-cy="select-assigned-to-item-DM"
              value="Diego Maradona">Diego Maradona</MenuItem>
              <MenuItem value="Kun Aguero">Kun Aguero</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <label>Status</label>
            <Select
              style={{ margin: "10px 0", color: "#595959" }}
              name="status"
              displayEmpty
              onChange={onInputChange}
              value={status}
              data-cy="select-status"
            >
              <MenuItem disabled value="">
                Enabled
              </MenuItem>
              <MenuItem 
                data-cy="select-status-item-enabled"
              value="enabled">Enabled</MenuItem>
              <MenuItem value="disabled">Disabled</MenuItem>
            </Select>
          </FormControl>

          <Box>
            {!projectForm.id ? (
              <Button
                variant="contained"
                style={{ backgroundColor: "red" }}
                type="submit"
                onClick={onFormSubmit}
                data-cy="button-create-project"
              >
                Create project
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{ backgroundColor: "red" }}
                type="submit"
                onClick={onFormSubmit}
              >
                Save changes
              </Button>
            )}
          </Box>
        </FormControl>
      </Container>
    </>
  );
}

export default ProjectForm