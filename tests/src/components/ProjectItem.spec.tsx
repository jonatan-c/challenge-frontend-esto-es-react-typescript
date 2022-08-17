import { render,screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProjectItem from '../../../src/components/ProjectItem';



describe('TEST Project Item', () => {
    test("renders correctly", () => {
        render(
          <BrowserRouter>
            <ProjectItem project={{
                id: "1",
                projectName: "Project 1",
                date: "01/01/2020",
                description: "Description 1",
                projectManager: "Project Manager 1",
                assignedTo: "Assigned To 1",
                status: "Status 1",
            }} />
          </BrowserRouter>
        );
        expect(screen.getByText("Creation date: 01/01/2020" )).toBeInTheDocument();
      });
})