
import moment from "moment";
import React, { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import {v4} from 'uuid';

 
import { Project, ProjectContexProp, ProjectState, props } from "../interfaces/interfaces";
import { ProjectReducer } from "./ProjectReducer";
 
const initialState: ProjectState = {
  projects: JSON.parse(localStorage.getItem("projectsLocalStorage") || "[]"),
};
 

export const ProjectGlobalContext = createContext<ProjectContexProp>({} as ProjectContexProp);


export const ProjectGlobalProvider = ({ children }:props) => {
  
  
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

 
  const addProject = (project : Project): void => {
    try {
      dispatch({
        type: "ADD_PROJECT",
        payload: { ...project, id: v4(), date:  moment(new Date()).format("DD/MM/YYYY - hh:mm a") },
      });
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Proyecto agregado correctamente',
        showConfirmButton: false,
        timer: 3000
      })
    } catch (error) {
      console.log(error);
      
    }

  }
  

  function updateProject(updateProject : Project):void {
    try {
      dispatch({
        type: "UPDATE_PROJECT",
        payload: updateProject,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Proyecto actualizado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });


    } catch (error) {
      console.log(error);
      
    }

  }

  function deleteProject(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        dispatch({
          type: "DELETE_PROJECT",
          payload: id,
        });
      }
    })

  }

  return (
    <ProjectGlobalContext.Provider
      value={{
        projects: state.projects,
        addProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectGlobalContext.Provider>
  );
};