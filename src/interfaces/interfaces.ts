export interface Project {
    id?: string | number;
    projectName: string;
    description: string;
    projectManager: string | boolean;
    assignedTo: string;
    status: string;
    date?: string | Date;
}

export interface ProjectState {

    projects: Project[] 

}

export interface props {
    children: JSX.Element | JSX.Element[]
  }
  

  export type ProjectContexProp = {
    projects: Project[];
    addProject:  (project: Project) => void;
    updateProject: (project: Project) => void;
    deleteProject: (id: string) => void;
 
}