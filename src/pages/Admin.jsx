import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

const Admin = () => {
  const [formData, setFormData] = useState({
    investorName: "",
    kycFee: "",
    investmentAmount: "",
    profit: "",
    receiptType: "pending", // "pending" or "successful"
  });

  const [generatedReceipt, setGeneratedReceipt] = useState(null);

  const KYC_CODE = import.meta.env.VITE_KYC_CODE || "123456";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateReceipt = () => {
    // Validation
    if (!formData.investorName || !formData.kycFee || !formData.investmentAmount || !formData.profit) {
      alert("Please fill in all required fields.");
      return;
    }

    const fee = parseFloat(formData.kycFee);
    const investment = parseFloat(formData.investmentAmount);
    const profit = parseFloat(formData.profit);

    if (isNaN(fee) || fee < 0) {
      alert("KYC Fee must be a valid number greater than or equal to zero.");
      return;
    }
    if (isNaN(investment) || investment <= 0) {
      alert("Investment Amount must be a valid number greater than zero.");
      return;
    }
    if (isNaN(profit)) {
      alert("Profit must be a valid number.");
      return;
    }

    setGeneratedReceipt({
      investorName: formData.investorName,
      kycFee: fee,
      investmentAmount: investment,
      profit: profit,
      receiptType: formData.receiptType,
      kycCode: KYC_CODE,
      date: new Date().toLocaleString("pt-BR"),
      id: Math.random().toString(36).substring(2, 10).toUpperCase(),
    });
  };

  const ReceiptDisplay = ({ data }) => {
    if (!data) return null;

    const statusLabel =
      data.receiptType === "pending"
        ? "⏳ Pending (KYC Verification Required)"
        : "✅ Successful (KYC Verified)";

    const statusColor =
      data.receiptType === "pending"
        ? "border-yellow-200 bg-yellow-50/30"
        : "border-green-200 bg-green-50/30";

    return (
      <Card className={`mt-6 border-2 ${statusColor}`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Comprovante</h3>
            <p className={`text-sm font-medium ${data.receiptType === "pending" ? "text-yellow-600" : "text-green-600"}`}>
              {statusLabel}
            </p>
          </div>
          <span className="text-xs text-gray-400">#{data.id}</span>
        </div>

        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-gray-500">Investidor</p>
              <p className="font-medium text-gray-800">{data.investorName}</p>
            </div>
            <div>
              <p className="text-gray-500">Código KYC</p>
              <p className="font-mono font-bold text-blue-700">{data.kycCode}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-gray-500">Taxa KYC</p>
              <p className="font-medium text-gray-800">R$ {data.kycFee.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-500">Valor Investido</p>
              <p className="font-medium text-gray-800">R$ {data.investmentAmount.toFixed(2)}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-2">
            <p className="text-gray-500">Lucro</p>
            <p className={`font-bold text-lg ${data.profit >= 0 ? "text-green-700" : "text-red-600"}`}>
              R$ {data.profit.toFixed(2)}
            </p>
            {data.receiptType === "pending" && (
              <p className="text-xs text-yellow-600 mt-1">
                ⚠️ Este comprovante está pendente de verificação KYC.
              </p>
            )}
            {data.receiptType === "successful" && (
              <p className="text-xs text-green-600 mt-1">
                ✅ KYC verificado com sucesso.
              </p>
            )}
          </div>

          <div className="text-xs text-gray-400 pt-1">
            Emitido em: {data.date}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.print()}
          >
            🖨️ Imprimir
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <MainLayout>
      <div className="animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Gerar Comprovante KYC
          </h1>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => (window.location.href = "/")}
          >
            ← Voltar ao site
          </Button>
        </div>

        <Card>
          <p className="text-gray-500 text-sm mb-4">
            Preencha os dados do investidor e selecione o tipo de comprovante.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              generateReceipt();
            }}
            className="space-y-4"
          >
            <Input
              label="Nome do Investidor"
              name="investorName"
              value={formData.investorName}
              onChange={handleChange}
              placeholder="Digite o nome completo"
              required
            />

            <Input
              label="Taxa KYC (R$)"
              name="kycFee"
              type="text"
              value={formData.kycFee}
              onChange={handleChange}
              placeholder="0,00"
              required
              inputClassName="font-mono"
            />

            <Input
              label="Valor Investido (R$)"
              name="investmentAmount"
              type="text"
              value={formData.investmentAmount}
              onChange={handleChange}
              placeholder="0,00"
              required
              inputClassName="font-mono"
            />

            <Input
              label="Lucro (R$)"
              name="profit"
              type="text"
              value={formData.profit}
              onChange={handleChange}
              placeholder="Digite o valor do lucro"
              required
              inputClassName="font-mono"
            />

            {/* Receipt Type Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Tipo de Comprovante
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="receiptType"
                    value="pending"
                    checked={formData.receiptType === "pending"}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-600 focus:ring-green-500"
                  />
                  Pendente (KYC necessário)
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="receiptType"
                    value="successful"
                    checked={formData.receiptType === "successful"}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-600 focus:ring-green-500"
                  />
                  Sucesso (KYC verificado)
                </label>
              </div>
            </div>

            <Button type="submit" variant="primary" fullWidth>
              Gerar Comprovante
            </Button>
          </form>
        </Card>

        {/* Receipt display */}
        <ReceiptDisplay data={generatedReceipt} />
      </div>
    </MainLayout>
  );
};

export default Admin;