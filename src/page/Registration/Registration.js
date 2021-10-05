// Core
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

// Instruments
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  MenuItem,
  Select,
  FormLabel,
} from "@mui/material";

// Custom Styling
import { styles, styleWrapper } from "./RegistrationStyles";

import { delay } from "../../utils/delay";
// import { validationSchema } from "../../utils/schema";

export const Registration = () => {

  const formik = useFormik({
    initialValues: {},
    // validationSchema
    onSubmit:  () => {},
  });

  return (
    <div>
      <Typography variant="h3">Registration Form</Typography>
    </div>
  );
};
