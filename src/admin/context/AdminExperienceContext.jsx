import React, { createContext, useContext, useState } from "react";

const AdminExperienceContext = createContext(null);

export function AdminExperienceProvider({ children }) {
  const [mode, setMode] = useState("admin");
  const [product, setProduct] = useState(null);

  const enterProduct = (id) => {
    setProduct(id);
    setMode("product");
  };

  const returnToAdmin = () => {
    setProduct(null);
    setMode("admin");
  };

  return (
    <AdminExperienceContext.Provider
      value={{
        mode,
        product,
        enterProduct,
        returnToAdmin,
        isAdminMode: mode === "admin",
        isProductMode: mode === "product"
      }}
    >
      {children}
    </AdminExperienceContext.Provider>
  );
}

export function useAdminExperience() {
  return useContext(AdminExperienceContext);
}
