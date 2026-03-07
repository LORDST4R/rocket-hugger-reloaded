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
      {/* Hero Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src="/images/food-bg.jpg"
          alt="Food delivery"
          className="w-full h-full object-cover"
        />
        {/* Soft white fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent" />
        {/* Logo top-left */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <img src={deliverooLogo} alt="Deliveroo" className="w-8 h-8 drop-shadow-lg" />
          <span className="text-white font-bold text-xl tracking-wide drop-shadow-lg">deliveroo</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 pt-6 pb-8 text-center">
        <h1 className="text-[1.7rem] font-extrabold text-foreground leading-tight mb-2">
          Claim Your Deliveroo Student Reward
        </h1>
        <p className="text-muted-foreground text-base mb-5">United Kingdom Only</p>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <CheckCircle2 className="w-6 h-6 text-primary" />
          <span className="font-bold text-foreground text-base">
            {approvedCount.toLocaleString()}+ UK Students Approved This Month
          </span>
        </div>

        {/* Divider */}
        <div className="w-14 h-1 bg-primary rounded-full mx-auto mb-8" />

        {/* How To Qualify */}
        <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-1">
          HOW TO QUALIFY
        </h2>
        <p className="text-muted-foreground text-sm mb-6">Takes ~5–10 minutes</p>

        {/* Steps */}
        <div className="space-y-3 mb-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex items-center gap-4 bg-muted rounded-2xl px-5 py-5 text-left"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                {step.num}
              </div>
              <span className="text-foreground font-semibold text-[0.95rem] leading-snug">
                {step.text}
              </span>
            </div>
          ))}
        </div>

        {/* Apply Now CTA */}
        <a href={OFFER_URL} target="_blank" rel="noopener noreferrer" className="block mb-12">
          <button className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-2xl hover:opacity-90 transition-opacity uppercase tracking-wide">
            APPLY NOW
          </button>
        </a>

        {/* FAQ */}
        <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-6">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <Accordion type="single" collapsible className="text-left">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-[0.9rem] font-medium text-foreground hover:no-underline py-4">
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
      <footer className="py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <img src={deliverooLogo} alt="Deliveroo" className="w-6 h-6" />
          <span className="font-bold text-muted-foreground text-sm">deliveroo</span>
        </div>
        <p className="text-muted-foreground text-xs">Powered by Deliveroo</p>
      </footer>
    </div>
  );
};

export default Index;
