import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import { useWithdrawal } from "../../../context/WithdrawalContext";
import { supportLink } from "../data/data";

const WithdrawalPending = () => {
  const navigate = useNavigate();
  const { resetWithdrawalData } = useWithdrawal();

  const SUPPORT_URL = supportLink;

  const handleSupport = () => {
    if (SUPPORT_URL && SUPPORT_URL !== "#") {
      window.open(SUPPORT_URL, "_blank", "noopener,noreferrer");
    } else {
      alert("Support URL not configured. Please check your .env file.");
    }
  };

  const handleBackHome = () => {
    resetWithdrawalData();
    navigate("/module5");
  };

  return (
    <MainLayout currentStep="pending">
      <div className="animate-slide-up text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-yellow-50 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-yellow-500 animate-pulse-soft"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Saque em Análise
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Seu pedido de saque foi recebido com sucesso.
        </p>

        <Card className="text-left">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-lg">✓</span>
              <div>
                <h4 className="font-medium text-gray-700">Solicitação recebida</h4>
                <p className="text-sm text-gray-400">
                  Seu pedido de saque está em análise pelo time de segurança.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-500 text-lg">⏳</span>
              <div>
                <h4 className="font-medium text-gray-700">Tempo estimado</h4>
                <p className="text-sm text-gray-400">
                  A análise pode levar até 24 horas úteis.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-500 text-lg">🛡️</span>
              <div>
                <h4 className="font-medium text-gray-700">Segurança</h4>
                <p className="text-sm text-gray-400">
                  Estamos verificando seus dados para garantir a segurança da transação.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={handleSupport}
              className="sm:flex-1"
            >
              🧑‍💻 Suporte ao Cliente
            </Button>
            <Button
              variant="primary"
              onClick={handleBackHome}
              className="sm:flex-1"
            >
              ← Voltar ao Início
            </Button>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

export default WithdrawalPending;