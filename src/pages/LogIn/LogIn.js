// Core
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { routers } from "../../utils/routes";

// Instruments
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Typography } from "@mui/material";
import { logInUserAsync } from "../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";

const validationSchema = yup.object({
  password: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const LogIn = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.auth.errorLogIn);

  const formik = useFormik({
    initialValues: {
      email: "nata@gmail.com",
      password: "12345678",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      dispatch(logInUserAsync(values));
    },
  });

  return (
    <div>
      <Typography variant="h3"> Log in</Typography>

      {errorMessage && errorMessage.message && (
        <div style={{ border: "1px solid red", padding: 10, margin: 20 }}>
          {errorMessage.message}
          <Link to={routers.SINGUP.path}> Go to Sing Up page </Link>
        </div>
      )}

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <Button
          color="primary"
          disabled={formik.isSubmitting}
          variant="contained"
          fullWidth
          type="submit"
          style={{ marginTop: 20 }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LogIn;
