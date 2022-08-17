import { Box, TableCell, TableRow, Avatar, Button, IconButton, Menu, MenuItem, Grid, useMediaQuery } from '@mui/material';
import React, { useContext, useEffect, useState } from "react";
import { ProjectGlobalContext } from "../context/ProjectGlobalState";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { getInitLetters } from '../utils/getInitLetters';


const ProjectItem = ({project}:any) => {
  const {  projects } =
    useContext(ProjectGlobalContext);
  useEffect(() => {
    localStorage.setItem(
      "projectsLocalStorage",
      JSON.stringify(projects || [])
    );  
  }, [projects]);

 
  const pantalla = useMediaQuery("(max-width:600px)");

  const options = [
    {
      DeleteIcon: "Edit",
    },
    {
      DeleteIcon: "Delete",
    },
  ];

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [show, setShow] = useState(false);
  const { deleteProject } = useContext(ProjectGlobalContext);

  const {
    id,
    projectName,
    date,
    description,
    projectManager,
    assignedTo,
    status,
  } = project;

  const showPoints = () => {
    setShow(!show);
  };

  return (
    <>
      <TableRow
        sx={{
          display: {
            xs: "flex",
            flexDirection: "row",
            borderBottom: "inherit",
            justifyContent: "space-between",
            md: "table-row",
          },
        }}
      >
        <TableCell
          sx={{
            display: {
              xs: "block",
              borderBottom: "none",
              order: 1,
              md: "table-cell",
            },
          }}
        >
          <Box display="flex">{projectName}</Box>
          <Box>
            <small>Creation date: {date}</small>
          </Box>
        </TableCell>

        <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Avatar sx={{ width: 40, height: 40 }}>
              {getInitLetters(projectManager)}
            </Avatar>
            <Box paddingLeft={1}>{projectManager}</Box>
          </Box>
        </TableCell>
        {/* <Box> */}
        <TableCell
          sx={{
            display: {
              xs: "none",
              flexShrink: 0,
              order: 3,
              md: "table-cell",
            },
          }}
        >
          <Box display="flex" flexDirection="row" alignItems="center">
            <Avatar
              sx={{ width: 40, height: 40 }}
              // src="/static/images/avatar/1.jpg"
            ></Avatar>
            <Box paddingLeft={1}>{assignedTo}</Box>
          </Box>
        </TableCell>
        {/* </Box> */}
        <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
          <Button
            style={{ color: "black", backgroundColor: "white" }}
            variant="outlined"
          >
            {status}
          </Button>
        </TableCell>

        {/* 3 PUNTOS  */}

        <TableCell
          sx={{
            display: {
              xs: "block",
              alignItems: "",
              order: 2,
              md: "table-cell",
              borderBottom: "none",
            },
          }}
        >
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Button component={Link} to={`/edit-project/${id}`}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1713 2.00002L9.838 3.33336H3.33333V12.6667H12.6667V6.16202L14 4.82869V13.3334C14 13.5102 13.9298 13.6797 13.8047 13.8048C13.6797 13.9298 13.5101 14 13.3333 14H2.66667C2.48986 14 2.32029 13.9298 2.19526 13.8048C2.07024 13.6797 2 13.5102 2 13.3334V2.66669C2 2.48988 2.07024 2.32031 2.19526 2.19529C2.32029 2.07026 2.48986 2.00002 2.66667 2.00002H11.1713ZM13.6567 1.40002L14.6 2.34402L8.472 8.47202L7.53067 8.47402L7.52933 7.52936L13.6567 1.40002Z"
                    fill="#262626"
                  />
                </svg>
                Edit
              </Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button onClick={() => deleteProject(id)}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3333 3.99998H14.6666V5.33331H13.3333V14C13.3333 14.1768 13.2631 14.3464 13.1381 14.4714C13.013 14.5964 12.8435 14.6666 12.6666 14.6666H3.33331C3.1565 14.6666 2.98693 14.5964 2.86191 14.4714C2.73688 14.3464 2.66665 14.1768 2.66665 14V5.33331H1.33331V3.99998H4.66665V1.99998C4.66665 1.82317 4.73688 1.6536 4.86191 1.52858C4.98693 1.40355 5.1565 1.33331 5.33331 1.33331H10.6666C10.8435 1.33331 11.013 1.40355 11.1381 1.52858C11.2631 1.6536 11.3333 1.82317 11.3333 1.99998V3.99998ZM12 5.33331H3.99998V13.3333H12V5.33331ZM5.99998 2.66665V3.99998H9.99998V2.66665H5.99998Z"
                    fill="#262626"
                  />
                </svg>
                Delete
              </Button>
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
      {pantalla ? (
        <Grid display="flex" flexDirection="column" paddingLeft={2}>
          <Box
            sx={{
              display: {
                xs: "flex",
                marginBottom: 5,
                borderBottom: " 1px solid #e0e0e0",
                md: "none",
              },
            }}
          >
            <Avatar
              sx={{ width: 20, height: 20 }}
              // src="./static/images/avatar/1.jpg"
            ></Avatar>
            <Box paddingLeft={1}>{assignedTo}</Box>
          </Box>
        </Grid>
      ) : (
        ""
      )}
    </>
  );
}

export default ProjectItem