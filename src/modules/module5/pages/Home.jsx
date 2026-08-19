import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/module5/withdrawal-method");
  };

  return (
    <MainLayout>
      <div className="text-center animate-slide-up">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Saque <span className="text-green-600">Bancário</span>
        </h1>

        <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto mb-8">
          Solicite um saque para sua conta em poucos passos. Ambiente seguro e rápido.
        </p>

        <Card className="max-w-sm mx-auto text-left">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-lg font-bold">1</span>
              <div>
                <h3 className="font-semibold text-gray-700">Escolha o método</h3>
                <p className="text-sm text-gray-400">Selecione a opção de transferência bancária</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-lg font-bold">2</span>
              <div>
                <h3 className="font-semibold text-gray-700">Preencha os dados</h3>
                <p className="text-sm text-gray-400">Informe banco, conta e valor do saque</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-lg font-bold">3</span>
              <div>
                <h3 className="font-semibold text-gray-700">Verificação KYC</h3>
                <p className="text-sm text-gray-400">Confirme sua identidade com o código</p>
              </div>
            </div>
          </div>

          <Button
            onClick={handleStart}
            fullWidth
            size="lg"
            className="mt-6"
          >
            Iniciar Saque →
          </Button>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Home;