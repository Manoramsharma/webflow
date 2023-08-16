import { Button, Card, CardContent, Stack } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";

const ContactDetails = ({ formik, handleFormSubmit }) => {
  return (
    <>
      <Card variant="false" className="card-content-2 h-100">
        <CardContent className="pb-3">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div className="card-content-title mb-3">Contact Details</div>
          </Stack>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control
              placeholder=" Charlene E. Milstead"
              className="form-control-sender form-control border-0"
              name="contactName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contactName}
            ></Form.Control>
            {formik.touched.contactName && formik.errors.contactName && (
              <span className="text-danger">{formik.errors.contactName}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>

            <Form.Control
              placeholder="1108 Angus Road New York"
              className="form-control-sender form-control border-0"
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            ></Form.Control>
            {formik.touched.address && formik.errors.address && (
              <span className="text-danger">{formik.errors.address}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              placeholder="212-439-5165"
              className="form-control-sender form-control border-0"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            ></Form.Control>
            {formik.touched.phone && formik.errors.phone && (
              <span className="text-danger">{formik.errors.phone}</span>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder=" Charlene456@gmail.com"
              className="form-control-sender form-control border-0"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            ></Form.Control>
            {formik.touched.email && formik.errors.email && (
              <span className="text-danger">{formik.errors.email}</span>
            )}
          </Form.Group>
          <div className="mt-3 text-center">
            {/* <CommonButton
              onClick={() => handleFormSubmit("contactSchema")}
              children="Save"
              className="btn-forgot w-128"
              submit="submit"
            /> */}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default ContactDetails;
