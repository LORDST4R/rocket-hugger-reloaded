import { useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import deliverooLogo from "@/assets/deliveroo-logo.png";

const OFFER_URL = "https://trksy.org/aff_c?offer_id=4054&aff_id=28933";

const steps = [
  { num: 1, text: "Go Through A Quick Questionnaire" },
  { num: 2, text: "Complete 4-5 Quick Tasks (Guided)" },
  { num: 3, text: "We'll Go Through Your Application And Email You Within 24hrs" },
];

const faqs = [
  {
    q: "Do I need to provide bank details?",
    a: "No, you will never be asked for any bank or payment details. This offer is completely free to complete.",
  },
  {
    q: "How long do the deals take?",
    a: "Most deals take between 5–10 minutes to complete. Some may take slightly longer depending on the offer.",
  },
  {
    q: "What kind of deals are included?",
    a: "Deals include signing up for free trials, completing short surveys, and other simple tasks. All are straightforward.",
  },
];

const Index = () => {
  const approvedCount = useMemo(() => {
    const startDate = new Date("2025-01-01");
    const now = new Date();
    const daysDiff = Math.floor(
      (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return 500 + daysDiff * 3;
  }, []);

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      {/* Hero Image with logo and white fade */}
      <div className="relative w-full h-56 overflow-hidden animate-fade-in-up">
        <img
          src="/images/food-bg.jpg"
          alt="Food delivery"
          className="w-full h-full object-cover"
        />
        {/* White fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        {/* Logo top-left */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <img src={deliverooLogo} alt="Deliveroo" className="w-7 h-7" />
          <span className="text-white font-bold text-lg tracking-wide drop-shadow-lg">deliveroo</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8 text-center">
        <h1 className="text-2xl font-extrabold text-foreground leading-tight mb-2 animate-fade-in-up animation-delay-200">
          Claim Your Deliveroo Student Reward
        </h1>
        <p className="text-muted-foreground text-sm mb-5">United Kingdom Only</p>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up animation-delay-400">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="font-bold text-foreground text-sm">
            {approvedCount.toLocaleString()}+ UK Students Approved This Month
          </span>
        </div>

        {/* Divider */}
        <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-8" />

        {/* How To Qualify */}
        <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-1">
          HOW TO QUALIFY
        </h2>
        <p className="text-muted-foreground text-xs mb-6">Takes ~5–10 minutes</p>

        {/* Steps */}
        <div className="space-y-3 mb-8 animate-fade-in-up animation-delay-600">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex items-center gap-4 bg-muted rounded-xl px-5 py-4 text-left"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                {step.num}
              </div>
              <span className="text-foreground font-semibold text-sm leading-snug">
                {step.text}
              </span>
            </div>
          ))}
        </div>

        {/* Apply Now CTA */}
        <a href={OFFER_URL} target="_blank" rel="noopener noreferrer" className="block mb-10">
          <button className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wide">
            APPLY NOW
          </button>
        </a>

        {/* FAQ */}
        <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <Accordion type="single" collapsible className="text-left">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <div className="flex items-center justify-center gap-2 mb-1">
          <img src={deliverooLogo} alt="Deliveroo" className="w-5 h-5" />
          <span className="font-bold text-muted-foreground text-sm">deliveroo</span>
        </div>
        <p className="text-muted-foreground text-xs">Powered by Deliveroo</p>
      </footer>
    </div>
  );
};

export default Index;
