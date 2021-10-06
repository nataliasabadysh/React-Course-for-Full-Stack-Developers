# FORM 

# Login & Sign Up


```
create 2 components 
1) LoginForm with email, password  
2) SignUpForm with name, email and  password 

**** !!! without Forgot password 

```

[UI Example](http://w3iscool.com/wp-content/uploads/2015/10/login-signup-form-1.jpg)


# Tabs with Material ui ❗️❗️❗️

npm i @mui/material
npm i @emotion/react
npm i @emotion/styled


[Tabs](https://mui.com/ru/api/tabs/#main-content)
[Examples](https://mui.com/components/tabs/)


```js
// examples would be something like this:
  const [value, setValue] = useState(0); // INDEX of the selected TAB 

  const handleChange = (event, newValue) => {
     setValue(newValue);
   };
   
  const showLogInUIJsx = value === 0 && <h1>Log in page</h1>
  const showSignInUIJsx = value === 1 && <h1>Sign In Page</h1>

 return(
    <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Log in"/> 
      <Tab label="Sign up"/> 
      {showLogInUIJsx || showSignInUIJsx}
    </Tabs>
   )
)
```

# use FORMIK and YUP !

```
 npm install formik

```


<h3>Example you can find from the lesson PDF as a screen, 
<h1>+</h1> need to add validation for all form-fields </h3>

```
npm install yup
```

[validation from the doc](https://formik.org/docs/guides/validation)
```js

// EXAMPLE 
import * as Yup from 'yup';

const validation = Yup.object().shape({
   username: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
    password: Yup.number()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });

```

1) Show error message in red color. 
2) Button onSend should show correct form values in the console 