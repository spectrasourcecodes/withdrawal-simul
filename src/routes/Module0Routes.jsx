import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../modules/module0/pages/Home";
import WithdrawalMethod from "../modules/module0/pages/WithdrawalMethod";
import BankWithdrawal from "../modules/module0/pages/BankWithdrawal";
import PixWithdrawal from "../modules/module0/pages/PixWithdrawal";
import KYCVerification from "../modules/module0/pages/KYCVerification";
import WithdrawalPending from "../modules/module0/pages/WithdrawalPending";
import Admin from "../modules/module0/pages/Admin";
import NotFound from "../modules/module0/pages/NotFound";

const Module0Routes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />                       // matches /module0
      <Route path="withdrawal-method" element={<WithdrawalMethod />} />
      <Route path="bank-withdrawal" element={<BankWithdrawal />} />
      <Route path="pix-withdrawal" element={<PixWithdrawal />} />
      <Route path="kyc" element={<KYCVerification />} />
      <Route path="pending" element={<WithdrawalPending />} />
      <Route path="admin/generate" element={<Admin />} />
      {/* Optional module‑specific 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Module0Routes;