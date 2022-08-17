
import { render ,screen} from '@testing-library/react';
import React from 'react';
import ProjectForm from '../../../src/components/ProjectForm';
import { ProjectGlobalContext } from '../../../src/context/ProjectGlobalState';


describe('ProjectForm Component Test', () => {
    it('should render correctly', () => {
        render(
          // global context test
          <ProjectGlobalContext.Provider 
          value={{
            projects: [],
            addProject: () => {},
            updateProject: () => {},
            deleteProject: () => {},
            }}
            >

            <ProjectForm />
            </ProjectGlobalContext.Provider>
        );
        expect(screen.getByText('Project Name')).toBeInTheDocument();

    }
    );
})