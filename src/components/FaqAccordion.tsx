import { useState } from "react";
import { MessageSquare, ChevronDown, ChevronUp } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  faqItems: FaqItem[];
};

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm p-6 cursor-pointer"
          onClick={() => toggleItem(index)}
        >
          <div className="flex items-start justify-between">
            <div className="flex">
              <div className="w-6 h-6 rounded-full bg-zep-blue-100 flex items-center justify-center mr-3 mt-1">
                <MessageSquare size={14} className="text-zep-blue-500" />
              </div>
              <h3 className="font-semibold">{item.question}</h3>
            </div>
            <div className="mt-1">
              {openIndex === index ? (
                <ChevronUp className="text-gray-600" />
              ) : (
                <ChevronDown className="text-gray-600" />
              )}
            </div>
          </div>
          {openIndex === index && (
            <p className="mt-4 text-gray-600 transition-all duration-300">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
