// src/pages/BankWithdrawal.jsx (updated to use STEP_INDICATORS)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import { BANK_OPTIONS } from "../../../utils/constants";
import { validateBankWithdrawal } from "../../../utils/validation";
import { useWithdrawal } from "../../../context/WithdrawalContext";

const BankWithdrawal = () => {
  const navigate = useNavigate();
  const { withdrawalData, updateWithdrawalData } = useWithdrawal();

  const [formData, setFormData] = useState({
    bank: withdrawalData.bank || "",
    accountNumber: withdrawalData.accountNumber || "",
    amount: withdrawalData.amount || "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    updateWithdrawalData({ [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validateBankWithdrawal(formData);
    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateBankWithdrawal(formData);
    setErrors(validationErrors);
    setTouched({ bank: true, accountNumber: true, amount: true });
    if (Object.keys(validationErrors).length === 0) {
      updateWithdrawalData(formData);
      navigate("/module5/kyc");
    }
  };

  const isValid = () => {
    const validationErrors = validateBankWithdrawal(formData);
    return Object.keys(validationErrors).length === 0;
  };

  return (
    <MainLayout currentStep="details">
      <div className="animate-slide-up">
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
          Dados Bancários
        </h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Preencha as informações da sua conta para o saque.
        </p>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Select
              label="Banco"
              name="bank"
              value={formData.bank}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.bank ? errors.bank : ""}
              options={BANK_OPTIONS}
              required
            />

            <Input
              label="Número da Conta"
              name="accountNumber"
              type="text"
              value={formData.accountNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.accountNumber ? errors.accountNumber : ""}
              placeholder="Digite o número da conta"
              required
              inputClassName="font-mono"
            />

            <Input
              label="Valor do Saque (R$)"
              name="amount"
              type="text"
              value={formData.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.amount ? errors.amount : ""}
              placeholder="0,00"
              required
              inputClassName="font-mono text-lg"
            />

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate("/module5/withdrawal-method")}
                className="sm:flex-1"
              >
                ← Voltar
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="sm:flex-1"
                disabled={!isValid()}
              >
                Prosseguir →
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </MainLayout>
  );
};

export default BankWithdrawal;