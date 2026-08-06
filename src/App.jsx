// src/App.jsx
import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { WithdrawalProvider } from "./context/WithdrawalContext";

function App() {
  return (
    <WithdrawalProvider>
      <AppRoutes />
    </WithdrawalProvider>
  );
}

export default App;