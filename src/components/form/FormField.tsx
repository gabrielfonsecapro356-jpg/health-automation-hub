import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea" | "radio" | "checkbox";
  value: string | string[];
  onChange: (value: string | string[]) => void;
  options?: { label: string; value: string }[];
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  options = [],
  placeholder,
  required = false,
  className,
}: FormFieldProps) => {
  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    const currentValues = Array.isArray(value) ? value : [];
    if (checked) {
      onChange([...currentValues, optionValue]);
    } else {
      onChange(currentValues.filter((v) => v !== optionValue));
    }
  };

  return (
    <div className={cn("space-y-2 animate-fade-in-up", className)}>
      <Label
        htmlFor={name}
        className="text-sm font-medium text-foreground flex items-center gap-1"
      >
        {label}
        {required && <span className="text-destructive">*</span>}
      </Label>

      {type === "text" || type === "email" || type === "tel" ? (
        <Input
          id={name}
          name={name}
          type={type}
          value={value as string}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="h-12 bg-card border-2 border-border/50 focus:border-primary transition-all duration-300"
        />
      ) : type === "textarea" ? (
        <Textarea
          id={name}
          name={name}
          value={value as string}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="min-h-[120px] bg-card border-2 border-border/50 focus:border-primary transition-all duration-300 resize-none"
        />
      ) : type === "radio" ? (
        <RadioGroup
          value={value as string}
          onValueChange={onChange}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={cn(
                "flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300",
                value === option.value
                  ? "border-primary bg-accent shadow-soft"
                  : "border-border/50 bg-card hover:border-primary/50"
              )}
              onClick={() => onChange(option.value)}
            >
              <RadioGroupItem value={option.value} id={`${name}-${option.value}`} />
              <Label
                htmlFor={`${name}-${option.value}`}
                className="cursor-pointer flex-1 text-sm"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      ) : type === "checkbox" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {options.map((option) => {
            const isChecked = Array.isArray(value) && value.includes(option.value);
            return (
              <div
                key={option.value}
                className={cn(
                  "flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300",
                  isChecked
                    ? "border-primary bg-accent shadow-soft"
                    : "border-border/50 bg-card hover:border-primary/50"
                )}
                onClick={() => handleCheckboxChange(option.value, !isChecked)}
              >
                <Checkbox
                  id={`${name}-${option.value}`}
                  checked={isChecked}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(option.value, checked as boolean)
                  }
                />
                <Label
                  htmlFor={`${name}-${option.value}`}
                  className="cursor-pointer flex-1 text-sm"
                >
                  {option.label}
                </Label>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
