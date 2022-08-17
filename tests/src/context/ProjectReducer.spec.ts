import {
  ProjectReducer,
  ProjectAction,
} from "../../../src/context/ProjectReducer";
import { ProjectState } from "./../../../src/interfaces/interfaces";
import { Project } from "../../../src/interfaces/interfaces";

describe("Project Reducer", () => {
  const initialState: ProjectState = {
    projects: [
      {
        id: "1",
        projectName: "Project 1",
        description: "This is project 1",
        projectManager: "John Doe",
        assignedTo: "Jane Doe",
        status: "In Progress",
        date: new Date(),
      },
      {
        id: "2",
        projectName: "Project 2",
        description: "This is project 2",
        projectManager: "John Doe",
        assignedTo: "Jane Doe",
        status: "In Progress",
        date: new Date(),
      },
    ],
  };
  test("should add a project", () => {
    const action1: ProjectAction = {
      type: "ADD_PROJECT",
      payload: {
        id: 3,
        projectName: "Test Project",
        description: "Test Description",
        projectManager: "Test Project Manager",
        assignedTo: "Test Assigned To",
        status: "Test Status",
        date: new Date(),
      },
    };

    const newState = ProjectReducer(initialState, action1);

    expect(newState).toEqual({
      projects: [...initialState.projects, action1.payload],
    });
    expect(newState.projects.length).toEqual(3);
  });

  test("should update a project", () => {
    const action1: ProjectAction = {
    type: "UPDATE_PROJECT",
    payload: {
        id: "1",
        projectName: "Actualizado Project",
        description: "ActualizadoTest Description",
        projectManager: "ActualizadoTest Project Manager",
        assignedTo: "ActualizadoTest Assigned To",
        status: "Actualizado Test Status",
        date: new Date(),
      },
    };

    const newState = ProjectReducer(initialState, action1);

    
  });

  test("should delete a project", () => {
    const action1: ProjectAction = {
      type: "DELETE_PROJECT",
      payload: "1",
    };

    const newState = ProjectReducer(initialState, action1);
    expect(newState).toEqual({
      projects: [
        ...initialState.projects.filter(
          (project) => project.id !== action1.payload
        ),
      ],
    });
  });

  test("should return the initial state", () => {
    const newState = ProjectReducer(initialState, {} as ProjectAction);
    expect(newState).toEqual(initialState);
  });
});
