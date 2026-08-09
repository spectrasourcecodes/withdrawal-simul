// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import Button from "../../../components/Button";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="text-center animate-slide-up py-12">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-3">
          Página não encontrada
        </h2>
        <p className="text-gray-400 max-w-sm mx-auto mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>

        <Link to="/module1">
          <Button variant="primary" size="lg">
            ← Voltar para o início
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default NotFound;