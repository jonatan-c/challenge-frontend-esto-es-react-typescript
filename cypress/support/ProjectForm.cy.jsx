 
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Heading from '../../src/components/Heading';
import ProjectForm from '../../src/components/ProjectForm';
import { ProjectGlobalContext } from '../../src/context/ProjectGlobalState';
 
 

describe("Project Form inputs", () => {
    it("mounts", () => {
      cy.mount(
        <ProjectGlobalContext.Provider
          value={{
            projects: [],
            addProject: () => {},
            updateProject: () => {},
            deleteProject: () => {},
          }}
        >
          <MemoryRouter>
            <ProjectForm />
          </MemoryRouter>
        </ProjectGlobalContext.Provider>
      );
      // vieport desltop
      cy.viewport(1280, 720)

      // data-cy="input-project-name"
      cy.get("[data-cy=input-project-name]").type("My Project")
      // data-cy="input-description"
      cy.get("[data-cy=input-description]").type("My Project Description")
      // data-cy="select-project-manager"
      // cy.select("[data-cy=select-project-manager]", "Jonatan Claros")

      cy.get("[data-cy=select-project-manager]").parent().click() // click on the select
      cy.get("[data-cy=select-project-manager-item-JC]").contains("Jonatan Claros").click() // 

      // data-cy="select-assigned-to"
      cy.get("[data-cy=select-assigned-to]").parent().click() // click on the select
      cy.get("[data-cy=select-assigned-to-item-DM]").contains("Diego Maradona").click() //
   
      // data-cy="select-status"
      cy.get("[data-cy=select-status]").parent().click() // click on the select
      cy.get("[data-cy=select-status-item-enabled]").contains("Enabled").click() //

      // click create project button
      cy.get("[data-cy=button-create-project]").click() // click on the select

    });
  
})