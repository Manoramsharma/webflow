import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { useState } from 'react';
import { MDBSwitch } from 'mdb-react-ui-kit';
import Divider from '@mui/material/Divider';
import { Form } from "react-bootstrap";
import { Grid } from '@mui/material';
import ContactDetails from './workflow-form';

const drawerWidth = 340;

export default function PermanentDrawerRight() {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => setIsChecked(!isChecked);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        {/* <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar> */}
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          display: 'flex',
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        <Grid>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Workflow name</Form.Label><br />
            <Form.Control
              placeholder="Re-engagement automation"
              className="form-control-sender form-control border-0"
              name="contactName"
            //   onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            //   value={formik.values.contactName}
            ></Form.Control>
            {/* {formik.touched.contactName && formik.errors.contactName && (
              <span className="text-danger">{formik.errors.contactName}</span>
            )} */}
          </Form.Group><br/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Trigger details</Form.Label><br/>
            <Form.Control
              placeholder=""
              className="form-control-sender form-control border-0"
              name="contactName"
            //   onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
               value={"Workflow Trigger: Description"}
            ></Form.Control>
            {/* {formik.touched.contactName && formik.errors.contactName && (
              <span className="text-danger">{formik.errors.contactName}</span>
            )} */}
          </Form.Group><br/>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Workflow details</Form.Label><br/>
          
            {/* {formik.touched.contactName && formik.errors.contactName && (
              <span className="text-danger">{formik.errors.contactName}</span>
            )} */}
          </Form.Group>
          </Grid>
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Divider />
      </Drawer>
    </Box>
  );
}