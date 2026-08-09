import React from "react";
import { Routes, Route } from "react-router-dom";
import { WithdrawalProvider } from "./context/WithdrawalContext";

// Module route components
import AppRoutes from "./routes/AppRoutes";
import Module0Routes from "./routes/Module0Routes";
import Module1Routes from "./routes/Module1Routes";
import Module2Routes from "./routes/Module2Routes";
import Module3Routes from "./routes/Module3Routes";

function App() {
  return (
    <WithdrawalProvider>
      <Routes>
        {/* Modules routes – each is a "silo" */}
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/module0/*" element={<Module0Routes />} />
        <Route path="/module1/*" element={<Module1Routes />} />
        <Route path="/module2/*" element={<Module2Routes />} />
        <Route path="/module3/*" element={<Module3Routes />} />
      </Routes>
    </WithdrawalProvider>
  );
}

export default App;