import jwt from "jwt-simple";

const users = [];

const SECRET = "react_is_amazing";

export const signIn = ({ email, password }) =>
  new Promise((resolve, reject) => {
    const user = users.find((user) => user.email === email);

    setTimeout(() => {
      if (!user) {
        reject({ message: "User does not exist!" });
        return;
      }

      if (user.password !== password) {
        reject({ message: "Invalid password!" });
        return;
      }

      const tokenContent = { name: user.name, email: user.email };

      user.jwt_token = jwt.encode(tokenContent, SECRET);

      resolve({
        user: {
          name: user.name,
          email: user.email,
          permissions: "admin",
        },
        token: user.jwt_token,
      });
    }, 300);
  });

export const createUser = (credentials) =>
  new Promise((resolve, reject) => {
    const user = users.find((user) => user.email === credentials.email);

    setTimeout(() => {
      if (user) reject({ message: "User already exists!" });

      const tokenContent = {
        name: credentials.name,
        email: credentials.email,
        role: "admin",
      };

      const newUser = {
        ...credentials,
        jwt_token: jwt.encode(tokenContent, SECRET),
      };

      users.push(newUser);

      resolve({
        user: {
          name: newUser.name,
          email: newUser.email,
          permissions: "admin",
        },
        token: newUser.jwt_token,
      });
    }, 300);
  });

export const signOut = () =>
  new Promise((resolve) => {
    return setTimeout(() => resolve(), 300);
  });
