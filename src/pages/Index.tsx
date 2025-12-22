import { HealthcareForm } from "@/components/form/HealthcareForm";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Diagnóstico de Automação para Empresas de Saúde</title>
        <meta 
          name="description" 
          content="Descubra como otimizar os processos da sua clínica, hospital ou laboratório com automação inteligente. Faça o diagnóstico gratuito." 
        />
      </Helmet>
      <HealthcareForm />
    </>
  );
};

export default Index;
