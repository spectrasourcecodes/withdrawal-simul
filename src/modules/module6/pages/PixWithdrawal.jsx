// src/pages/PixWithdrawal.jsx (NEW)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Button from "../../../components/Button";
import { PIX_KEY_TYPES } from "../../../utils/constants";
import { validatePixWithdrawal } from "../../../utils/validation";
import { useWithdrawal } from "../../../context/WithdrawalContext";

const PixWithdrawal = () => {
  const navigate = useNavigate();
  const { withdrawalData, updateWithdrawalData } = useWithdrawal();

  const [formData, setFormData] = useState({
    pixKeyType: withdrawalData.pixKeyType || "",
    pixKey: withdrawalData.pixKey || "",
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
    const validationErrors = validatePixWithdrawal(formData);
    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validatePixWithdrawal(formData);
    setErrors(validationErrors);
    setTouched({ pixKeyType: true, pixKey: true, amount: true });
    if (Object.keys(validationErrors).length === 0) {
      updateWithdrawalData(formData);
      navigate("/module6/kyc");
    }
  };

  const isValid = () => {
    const validationErrors = validatePixWithdrawal(formData);
    return Object.keys(validationErrors).length === 0;
  };

  return (
    <MainLayout currentStep="details">
      <div className="animate-slide-up">
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
          Saque via PIX
        </h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Informe sua chave PIX para receber o saque instantâneo.
        </p>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-5">
            <Select
              label="Tipo de Chave PIX"
              name="pixKeyType"
              value={formData.pixKeyType}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.pixKeyType ? errors.pixKeyType : ""}
              options={PIX_KEY_TYPES}
              required
            />

            <Input
              label="Chave PIX"
              name="pixKey"
              type="text"
              value={formData.pixKey}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.pixKey ? errors.pixKey : ""}
              placeholder="Digite sua chave PIX"
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
                onClick={() => navigate("/module6/withdrawal-method")}
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

export default PixWithdrawal;