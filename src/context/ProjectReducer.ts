import { Project, ProjectState } from "../interfaces/interfaces";
import { useEffect } from 'react';

export type ProjectAction =
  | { type: "ADD_PROJECT"; payload: Project }
  | { type: "UPDATE_PROJECT"; payload: Project }
  | { type: "DELETE_PROJECT"; payload: string };






export function ProjectReducer(state: ProjectState, action: ProjectAction) : ProjectState {
  switch (action.type) {
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };
    case "UPDATE_PROJECT": {
      const newProjects = state.projects.map((project) => {
        if (project.id === action.payload.id) {
          return action.payload;
        }
        return project;
      });
      return {
        ...state,
        projects: newProjects,
      };
    }
    case "DELETE_PROJECT": {
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== action.payload),
      };
    } 
    default:
      return state;
  }
}