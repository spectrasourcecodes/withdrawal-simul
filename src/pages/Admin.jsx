import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import { verificationCode } from "../data/data";

const Admin = () => {
  const [formData, setFormData] = useState({
    investorName: "",
    kycFee: "",
    investmentAmount: "",
    profit: "",
    receiptType: "pending", // "pending" or "successful"
  });

  const [generatedReceipt, setGeneratedReceipt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // const KYC_CODE = verificationCode;
  const KYC_CODE = expired;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateReceipt = () => {
    // Validação
    if (!formData.investorName || !formData.kycFee || !formData.investmentAmount || !formData.profit) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    const fee = parseFloat(formData.kycFee);
    const investment = parseFloat(formData.investmentAmount);
    const profit = parseFloat(formData.profit);

    if (isNaN(fee) || fee < 0) {
      alert("A taxa KYC deve ser um número válido maior ou igual a zero.");
      return;
    }
    if (isNaN(investment) || investment <= 0) {
      alert("O valor investido deve ser um número válido maior que zero.");
      return;
    }
    if (isNaN(profit)) {
      alert("O lucro deve ser um número válido.");
      return;
    }

    const receiptData = {
      investorName: formData.investorName,
      kycFee: fee,
      investmentAmount: investment,
      profit: profit,
      receiptType: formData.receiptType,
      kycCode: KYC_CODE,
      date: new Date().toLocaleString("pt-BR"),
      id: Math.random().toString(36).substring(2, 10).toUpperCase(),
    };

    setGeneratedReceipt(receiptData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const ReceiptDisplay = ({ data }) => {
    if (!data) return null;

    const isPending = data.receiptType === "pending";

    return (
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Cabeçalho premium */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center text-white font-bold text-sm border border-white/20">
              B$
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Comprovante de Transação</h3>
              <p className="text-gray-400 text-xs tracking-wider">COMPROVANTE · #{data.id}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-300 text-xs">Emitido em</p>
            <p className="text-white text-sm font-medium">{data.date}</p>
          </div>
        </div>

        {/* Status e corpo */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Status da Verificação</p>
              <span
                className={`inline-block mt-1 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
                  isPending
                    ? "bg-yellow-500/10 text-yellow-700 border-yellow-200"
                    : "bg-green-500/10 text-green-700 border-green-200"
                }`}
              >
                {isPending ? "⏳ Pendente" : "✅ Verificado com Sucesso"}
              </span>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Código KYC</p>
              <p className="font-mono font-bold text-blue-700 text-lg tracking-widest bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                {data.kycCode}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Detalhes em grid */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Investidor</p>
              <p className="font-medium text-gray-800">{data.investorName}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Taxa KYC</p>
              <p className="font-medium text-gray-800">R$ {data.kycFee.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Valor Investido</p>
              <p className="font-medium text-gray-800">R$ {data.investmentAmount.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Lucro</p>
              <p
                className={`font-bold text-xl ${
                  data.profit >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                R$ {data.profit.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Informação adicional */}
          <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
            <p className="text-xs text-gray-500">
              {isPending
                ? "⚠️ Este comprovante está pendente de verificação KYC."
                : "✅ KYC verificado com sucesso. Transação validada."}
            </p>
            <span
              className={`text-xs font-bold uppercase ${
                isPending ? "text-yellow-600" : "text-green-600"
              }`}
            >
              {isPending ? "Aguardando análise" : "Análise concluída"}
            </span>
          </div>

          {/* Rodapé e impressão */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 tracking-wider">
              Documento gerado eletronicamente · {new Date().getFullYear()}
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.print()}
              className="!bg-gray-800 !text-white hover:!bg-gray-900"
            >
              🖨️ Imprimir Comprovante
            </Button>
          </div>
        </div>
      </div>
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
            onClick={() => (window.location.href = "/module1")}
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

            {/* Seleção do tipo de comprovante */}
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
      </div>

      {/* Modal premium */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Botão fechar */}
              <button
                onClick={closeModal}
                className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white shadow-xl hover:shadow-2xl flex items-center justify-center text-gray-400 hover:text-gray-700 transition-all duration-200 border-2 border-gray-100 hover:border-gray-300"
                aria-label="Fechar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Comprovante dentro do modal */}
              <ReceiptDisplay data={generatedReceipt} />
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Admin;