
// Core
import { NavLink } from 'react-router-dom';
import Button from "@material-ui/core/Button";

import styled from "styled-components";

// EXAMPLE 
export const LinkStyle = styled(NavLink)`
    text-transform: uppercase;
`
export const ButtonStyled = styled(Button)`
    text-transform: uppercase;
    color: red;
`
// import { ButtonStyled } from '..'
/* USE CASE 
    <ButtonStyled
          color="primary"
          disabled={formik.isSubmitting}
          variant="contained"
          fullWidth
          type="submit"
        >

*/

