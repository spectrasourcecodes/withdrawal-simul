import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import WithdrawalMethod from "../pages/WithdrawalMethod";
import BankWithdrawal from "../pages/BankWithdrawal";
import PixWithdrawal from "../pages/PixWithdrawal";
import KYCVerification from "../pages/KYCVerification";
import WithdrawalPending from "../pages/WithdrawalPending";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/withdrawal-method" element={<WithdrawalMethod />} />
      <Route path="/bank-withdrawal" element={<BankWithdrawal />} />
      <Route path="/pix-withdrawal" element={<PixWithdrawal />} />
      <Route path="/kyc" element={<KYCVerification />} />
      <Route path="/pending" element={<WithdrawalPending />} />
      <Route path="/admin/generate" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;