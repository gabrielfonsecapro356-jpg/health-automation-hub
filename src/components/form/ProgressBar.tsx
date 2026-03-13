import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export const ProgressBar = ({ currentStep, totalSteps, steps }: ProgressBarProps) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-3">
        <span className="text-sm font-medium text-muted-foreground">
          Etapa {currentStep + 1} de {totalSteps}
        </span>
        <span className="text-sm font-semibold text-primary">
          {Math.round(progress)}% concluído
        </span>
      </div>
      
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full gradient-primary transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex flex-wrap justify-center md:justify-between mt-4 gap-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center gap-1.5 text-xs transition-all duration-300 shrink-0",
              index <= currentStep
                ? "text-primary font-medium"
                : "text-muted-foreground"
            )}
          >
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 text-xs shrink-0",
                index < currentStep
                  ? "gradient-primary text-primary-foreground"
                  : index === currentStep
                  ? "bg-primary text-primary-foreground animate-pulse-soft"
                  : "bg-muted text-muted-foreground"
              )}
            >
              {index < currentStep ? (
                <Check className="w-3 h-3" />
              ) : (
                index + 1
              )}
            </div>
            <span className="hidden xl:inline max-w-[80px] truncate">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
