// src/context/WithdrawalContext.jsx
import React, { createContext, useState, useContext } from "react";

const WithdrawalContext = createContext(null);

export const WithdrawalProvider = ({ children }) => {
  const [withdrawalData, setWithdrawalData] = useState({
    method: "", // "bank" or "pix"
    bank: "",
    accountNumber: "",
    amount: "",
    pixKeyType: "",
    pixKey: "",
  });

  const updateWithdrawalData = (data) => {
    setWithdrawalData((prev) => ({ ...prev, ...data }));
  };

  const resetWithdrawalData = () => {
    setWithdrawalData({
      method: "",
      bank: "",
      accountNumber: "",
      amount: "",
      pixKeyType: "",
      pixKey: "",
    });
  };

  return (
    <WithdrawalContext.Provider
      value={{
        withdrawalData,
        updateWithdrawalData,
        resetWithdrawalData,
      }}
    >
      {children}
    </WithdrawalContext.Provider>
  );
};

export const useWithdrawal = () => {
  const context = useContext(WithdrawalContext);
  if (!context) {
    throw new Error("useWithdrawal must be used within a WithdrawalProvider");
  }
  return context;
};