// src/utils/validation.js
export const validateBankWithdrawal = (values) => {
  const errors = {};

  if (!values.bank || values.bank === "") {
    errors.bank = "Please select a bank.";
  }

  if (!values.accountNumber || values.accountNumber.trim() === "") {
    errors.accountNumber = "Account number is required.";
  }

  if (!values.amount || values.amount.trim() === "") {
    errors.amount = "Enter withdrawal amount.";
  } else if (Number(values.amount) <= 0) {
    errors.amount = "Amount must be greater than zero.";
  } else if (isNaN(Number(values.amount))) {
    errors.amount = "Amount must be a valid number.";
  }

  return errors;
};

export const validatePixWithdrawal = (values) => {
  const errors = {};

  if (!values.pixKeyType || values.pixKeyType === "") {
    errors.pixKeyType = "Please select a PIX key type.";
  }

  if (!values.pixKey || values.pixKey.trim() === "") {
    errors.pixKey = "PIX key is required.";
  }

  if (!values.amount || values.amount.trim() === "") {
    errors.amount = "Enter withdrawal amount.";
  } else if (Number(values.amount) <= 0) {
    errors.amount = "Amount must be greater than zero.";
  } else if (isNaN(Number(values.amount))) {
    errors.amount = "Amount must be a valid number.";
  }

  return errors;
};

export const validateKyc = (code) => {
  if (!code || code.trim() === "") {
    return "KYC code is required.";
  }
  return null;
};