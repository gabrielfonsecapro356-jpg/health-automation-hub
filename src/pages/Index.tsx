import { useEffect } from "react";
import { HealthcareForm } from "@/components/form/HealthcareForm";

const Index = () => {
  useEffect(() => {
    document.title = "Diagnóstico de Automação para Empresas de Saúde";
  }, []);

  return <HealthcareForm />;
};

export default Index;
