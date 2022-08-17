import { cyan } from '@mui/material/colors';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';
import Heading from '../../src/components/Heading';


describe("Headyng e2e", () => {
    it("mounts", () => {
      cy.mount(
        <MemoryRouter>
          <Heading />
          
        </MemoryRouter>
      );
  
      const buttonAddProject = "[data-cy=button-add-project]"; 
      cy.get(buttonAddProject).click()
      cy.get("[data-cy=title-my-project-add-project]").should("have.text","Add Project");
      cy.get("[data-cy=button-back]").click()
      cy.get("[data-cy=title-my-project-add-project]").should("have.text","My projects");
   
    });
  
})