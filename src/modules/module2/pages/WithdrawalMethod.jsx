// src/pages/WithdrawalMethod.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import Card from "../../../components/Card";
import { useWithdrawal } from "../../../context/WithdrawalContext";

const WithdrawalMethod = () => {
  const navigate = useNavigate();
  const { updateWithdrawalData } = useWithdrawal();

  const handleSelectBankTransfer = () => {
    updateWithdrawalData({ method: "bank" });
    navigate("/module2/bank-withdrawal");
  };

  const handleSelectPix = () => {
    updateWithdrawalData({ method: "pix" });
    navigate("/module2/pix-withdrawal");
  };

  return (
    <MainLayout currentStep="method">
      <div className="animate-slide-up">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Método de Saque
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Escolha a forma como deseja receber seus fundos.
        </p>

        <div className="space-y-4">
          {/* Bank Transfer */}
          <Card
            className="cursor-pointer hover:border-green-300 transition-all duration-200 border-2 border-transparent"
            onClick={handleSelectBankTransfer}
            padding="p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-lg">
                  Transferência Bancária
                </h3>
                <p className="text-sm text-gray-400">
                  Saque direto para sua conta bancária
                </p>
              </div>
              <div className="text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Card>

          {/* PIX - Now enabled */}
          <Card
            className="cursor-pointer hover:border-green-300 transition-all duration-200 border-2 border-transparent"
            onClick={handleSelectPix}
            padding="p-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-lg">PIX</h3>
                <p className="text-sm text-gray-400">
                  Saque instantâneo via chave PIX
                </p>
              </div>
              <div className="text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/module2/")}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            ← Voltar para o início
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default WithdrawalMethod;