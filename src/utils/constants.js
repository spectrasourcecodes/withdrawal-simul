// src/utils/constants.js
export const BANK_OPTIONS = [
  { value: "", label: "Select a bank" },
  { value: "banco-do-brasil", label: "Banco do Brasil" },
  { value: "nubank", label: "Nubank" },
  { value: "itau", label: "Itaú" },
  { value: "bradesco", label: "Bradesco" },
  { value: "santander", label: "Santander Brasil" },
  { value: "caixa", label: "Caixa Econômica Federal" },
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