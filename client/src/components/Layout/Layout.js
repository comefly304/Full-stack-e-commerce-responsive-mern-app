import React from "react";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="layout">
       <Toaster/>
        {children}
      </main>
      
    </div>
  );
};

export default Layout;
