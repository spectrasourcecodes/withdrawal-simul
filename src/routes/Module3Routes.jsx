import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../modules/module3/pages/Home";
import WithdrawalMethod from "../modules/module3/pages/WithdrawalMethod";
import BankWithdrawal from "../modules/module3/pages/BankWithdrawal";
import PixWithdrawal from "../modules/module3/pages/PixWithdrawal";
import KYCVerification from "../modules/module3/pages/KYCVerification";
import WithdrawalPending from "../modules/module3/pages/WithdrawalPending";
import Admin from "../modules/module3/pages/Admin";
import NotFound from "../modules/module3/pages/NotFound";

const Module3Routes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />                       // matches /module3
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

export default Module3Routes;