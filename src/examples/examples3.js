import React from "react";

const styles = {
  container: {
    width: "80vw",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0 24px",
  },
};

const Layout = ({ children }) => (
  <div style={styles.container}>
    <Navigation />
    {children}
  </div>
);

export default Layout;
