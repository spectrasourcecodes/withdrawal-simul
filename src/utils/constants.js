// src/utils/constants.js
export const BANK_OPTIONS = [
  { value: "", label: "Select a bank" },
  { value: "banco-do-brasil", label: "Banco do Brasil" },
  { value: "banco-bmg", label: "Banco BMG" },
  { value: "banco-bv", label: "Banco BV" },
  { value: "banco-daycoval", label: "Banco Daycoval" },
  { value: "banco-do-nordeste", label: "Banco do Nordeste (BNB)" },
  { value: "banco-inter", label: "Inter (Banco Inter)" },
  { value: "banco-pan", label: "Banco PAN" },
  { value: "banco-safra", label: "Banco Safra" },
  { value: "banco-sofisa", label: "Banco Sofisa" },
  { value: "bradesco", label: "Bradesco" },
  { value: "btg-pactual", label: "BTG Pactual" },
  { value: "c6-bank", label: "C6 Bank" },
  { value: "caixa-economica-federal", label: "Caixa Econômica Federal (CAIXA)" },
  { value: "itau-unibanco", label: "Itaú Unibanco" },
  { value: "mercado-pago", label: "Mercado Pago" },
  { value: "nubank", label: "Nubank" },
  { value: "pagbank", label: "PagBank" },
  { value: "picpay", label: "PicPay" },
  { value: "santander-brasil", label: "Santander Brasil" },
  { value: "sicredi", label: "Sicredi" },
  { value: "sicoob", label: "Sicoob" },
];

export const PIX_KEY_TYPES = [
  { value: "", label: "Select PIX key type" },
  { value: "cpf", label: "CPF" },
  { value: "cnpj", label: "CNPJ" },
  { value: "email", label: "E-mail" },
  { value: "phone", label: "Phone Number" },
  { value: "random", label: "Random Key" },
];

export const STEP_INDICATORS = [
  { key: "method", label: "Withdrawal Method", path: "/withdrawal-method" },
  { key: "details", label: "Withdrawal Details", path: "/bank-withdrawal" },
  { key: "kyc", label: "KYC Verification", path: "/kyc" },
  { key: "pending", label: "Pending", path: "/pending" },
];

export const ROUTES = {
  HOME: "/",
  WITHDRAWAL_METHOD: "/withdrawal-method",
  BANK_WITHDRAWAL: "/bank-withdrawal",
  PIX_WITHDRAWAL: "/pix-withdrawal",
  KYC: "/kyc",
  PENDING: "/pending",
};