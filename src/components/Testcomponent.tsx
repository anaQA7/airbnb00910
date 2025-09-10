import React from "react";
import { Home } from "lucide-react";
import { Button } from "./ui/button";

interface TestcomponentProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const Testcomponent = ({
  title = "Start hosting today",
  description = "Earn extra income and meet interesting guests by sharing your space.",
  buttonText = "Become a Host",
  onButtonClick,
  className = "",
}: TestcomponentProps) => {
  return (
    <div className={`text-center py-12 ${className}`}>
      <Home className="h-16 w-16 mx-auto text-gray-400 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button 
        className="bg-[#FF5A5F] hover:bg-[#FF5A5F]/90"
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Testcomponent;