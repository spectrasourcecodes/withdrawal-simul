import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../modules/module4/pages/Home";
import WithdrawalMethod from "../modules/module4/pages/WithdrawalMethod";
import BankWithdrawal from "../modules/module4/pages/BankWithdrawal";
import PixWithdrawal from "../modules/module4/pages/PixWithdrawal";
import KYCVerification from "../modules/module4/pages/KYCVerification";
import WithdrawalPending from "../modules/module4/pages/WithdrawalPending";
import Admin from "../modules/module4/pages/Admin";
import NotFound from "../modules/module4/pages/NotFound";

const Module4Routes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />                       // matches /module4
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

export default Module4Routes;