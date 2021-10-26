

# Auth


<!-- STATE -->
```js

session:{
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
}

session:
  user: {
    name: null,
    login: null,
  },
  authenticated: false,   // SIGN_IN_SUCCESS(true), SIGN_OUT(false)
  authenticating: false, // SIGN_IN_REQUEST(true), SIGN_IN_SUCCESS, SIGN_IN_FAILURE(false)
  token: null,
  error: null,
}

```

<!-- TYPES -->

```js
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_OUT = 'SIGN_OUT';

```


<!-- ACTIONS  -->


```js
export const signUserIn = credentials => dispatch => {
  dispatch({ type: SIGN_IN_REQUEST });

  api.signIn(credentials).then(
    response => {
      dispatch({ type: SIGN_IN_SUCCESS, payload: response });
      // to lS 
    },
    error => dispatch({ type: SIGN_IN_FAILURE, payload: error }),
  );
};

export const signUserOut = () => dispatch => {
  return api.signOut().then(() => {
    dispatch({ type: SIGN_OUT });
    // Update LS 

  });
};

```


<!-- API -->
```js

import jwt from 'jwt-simple';


const users = [
  {
    name: 'mango',
    login: 'mango@mail.com',
    password: 'mango123',
    jwt_token: null,
  },
  {
    name: 'poly',
    login: 'poly@mail.com',
    password: 'poly111',
    jwt_token: null,
  },
];


const SECRET = 'react_is_amazing';

export const createUser = ({ name, login, password }) => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.login === login);

    setTimeout(() => {
      if (user) reject('User already exists!');

      const newUser = {
        name,
        login,
        password,
        jwt_token: jwt.encode(user.password, SECRET),
      };

      users.push(newUser);

      resolve({
        user: {
          name: newUser.name,
          login: newUser.login,
        },
        token: newUser.jwt_token,
      });
    }, 300);
  });
};

export const signIn = ({ login, password }) => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.login === login);

    setTimeout(() => {
      if (!user) {
        reject('User does not exist!');
        return;
      }

      if (user.password !== password) {
        reject('Invalid password!');
        return;
      }

      user.jwt_token = jwt.encode(user.password, SECRET);

      resolve({
        user: {
          name: user.name,
          login: user.login,
        },
        token: user.jwt_token,
      });
    }, 300);
  });
};

export const signOut = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
};

```



<!-- REDUCERS -->


```js
const initialState = {
  user: {
    name: null,
    login: null,
  },
  authenticated: false,
  authenticating: false,
  token: null,
  error: null,
};

function user(state = { name: null, login: null }, { type, payload }) {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return payload.user;

    case SIGN_OUT:
      return { name: null, login: null };

    default:
      return state;
  }
}

function authenticated(state = false, { type, payload }) {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return true;

    case SIGN_OUT:
      return false;

    default:
      return state;
  }
}

function authenticating(state = false, { type, payload }) {
  switch (type) {
    case SIGN_IN_REQUEST:
      return true;

    case SIGN_IN_SUCCESS:
    case SIGN_IN_FAILURE:
      return false;

    default:
      return state;
  }
}

function token(state = null, { type, payload }) {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return payload.token;

    case SIGN_OUT:
      return null;

    default:
      return state;
  }
}

function error(state = null, { type, payload }) {
  switch (type) {
    case SIGN_IN_REQUEST:
    case SIGN_IN_SUCCESS:
    case SIGN_OUT:
      return null;

    case SIGN_IN_FAILURE:
      return payload;
    default:
      return state;
  }
}
```



# HOSTING  
1) Log in In netlify

https://app.netlify.com/

https://www.npmjs.com/package/netlify-cli

2) Add file netlify.toml to your root app

```

[build]
  publish = "build"

[[redirects]] 
  from = "/*"
  to = "/index.html"
  status = 200

```

3) Installing


```

https://app.netlify.com/
npm install netlify-cli -g
netlify login 

```


4) Scripts 

```json
"predeploy": "npm run build",
"deploy": "netlify deploy -p"
```

5) Deploying 


```
npm run deploy 
```


```
This folder isn't linked to a site yet
? What would you like to do? +  Create & configure a new site
? Team: nataliasabadysh's team
Choose a unique site name (e.g. super-cool-site-by-nataliasabadysh.netlify.app) or leave it blank for a random name. You can update the site name later.
? Site name (optional): ns-netlify-tutorial
 ```


6) Open the site 

```
 netlify open --site
```


