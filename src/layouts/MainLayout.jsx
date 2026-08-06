import React from "react";
import Header from "../components/Header";
import ProgressSteps from "../components/ProgressSteps";

const MainLayout = ({ children, currentStep }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {currentStep && (
        <div className="bg-white border-b border-gray-100">
          <ProgressSteps currentStep={currentStep} />
        </div>
      )}

      <main className="flex-1 container-custom py-8 sm:py-12 animate-fade-in">
        <div className="max-w-2xl mx-auto">{children}</div>
      </main>

      <footer className="border-t border-gray-100 bg-white mt-auto">
        <div className="container-custom py-4">
          <p className="text-center text-xs text-gray-400">
            🇧🇷 BancoDigital · Saque · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;