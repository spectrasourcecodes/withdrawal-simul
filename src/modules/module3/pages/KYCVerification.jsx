// src/pages/KYCVerification.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { verificationCode, kycManagerLink, supportLink } from "../data/data";

const KYCVerification = () => {
  const navigate = useNavigate();
  const [kycCode, setKycCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const KYC_CODE = verificationCode;
  const KYC_URL = kycManagerLink;
  const SUPPORT_URL = supportLink;

  const handleVerify = () => {
    // Reset error
    setError("");

    // Validate input
    if (!kycCode || kycCode.trim() === "") {
      setError("KYC code is required.");
      return;
    }

    // Simulate loading
    setIsLoading(true);

    // Simulate 1-2 second delay
    setTimeout(() => {
      setIsLoading(false);

      if (kycCode.trim() === KYC_CODE) {
        setIsVerified(true);
        // Navigate to pending after a brief success state
        setTimeout(() => {
          navigate("/module3/pending");
        }, 600);
      } else {
        setError("Invalid KYC Code.");
        // Shake animation effect via re-render
        const input = document.getElementById("kyc-input");
        if (input) {
          input.classList.add("border-red-500");
          setTimeout(() => {
            input.classList.remove("border-red-500");
          }, 800);
        }
      }
    }, 1200 + Math.random() * 800); // Random between 1.2s and 2s
  };

  const handleGetKycCode = () => {
    if (KYC_URL && KYC_URL !== "#") {
      window.open(KYC_URL, "_blank", "noopener,noreferrer");
    } else {
      // Fallback: show a helpful message
      alert("KYC URL not configured. Please check your .env file.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleVerify();
    }
  };

  return (
    <MainLayout currentStep="kyc">
      <div className="animate-slide-up">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">KYC Verification</h2>
          <p className="text-gray-500 text-sm mt-1">
            Digite seu código KYC para confirmar sua identidade.
          </p>
        </div>

        <Card>
          <div className="space-y-5">
            <Input
              id="kyc-input"
              label="Código KYC"
              name="kycCode"
              type="text"
              value={kycCode}
              onChange={(e) => {
                setKycCode(e.target.value);
                if (error) setError("");
              }}
              onBlur={() => {
                if (!kycCode || kycCode.trim() === "") {
                  setError("KYC code is required.");
                }
              }}
              error={error}
              placeholder="Digite o código de 6 dígitos"
              required
              inputClassName="font-mono text-center text-lg tracking-widest"
              onKeyDown={handleKeyDown}
              disabled={isLoading || isVerified}
            />

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate("/module3/bank-withdrawal")}
                className="sm:flex-1"
                disabled={isLoading || isVerified}
              >
                ← Voltar
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleGetKycCode}
                className="sm:flex-1"
                disabled={isLoading || isVerified}
              >
                Obter Código KYC
              </Button>
              <Button
                type="button"
                variant="primary"
                onClick={handleVerify}
                className="sm:flex-1"
                disabled={isLoading || isVerified}
                isLoading={isLoading}
              >
                {isVerified ? "✓ Verificado" : "Verificar KYC"}
              </Button>
            </div>
          </div>
        </Card>

        {isVerified && (
          <div className="mt-4 text-center text-green-600 font-medium animate-fade-in">
            ✅ Código verificado! Redirecionando...
          </div>
        )}

        <div className="mt-5 text-center">
          <p className="text-xs text-gray-400">
            🔐 A verificação KYC é obrigatória para saques acima de R$ 1.000,00.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default KYCVerification;