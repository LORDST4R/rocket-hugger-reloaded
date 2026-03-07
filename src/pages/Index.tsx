import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import StepCard from "@/components/StepCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, ShieldCheck, Clock, Gift } from "lucide-react";

const OFFER_URL = "https://trksy.org/aff_c?offer_id=4054&aff_id=28933";

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/food-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(172,100%,18%,0.92)] via-[hsl(172,100%,20%,0.88)] to-[hsl(172,100%,18%,0.95)]" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
          {/* Logo */}
          <div className="animate-fade-in-up mb-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 inline-block border border-primary-foreground/20">
              <Gift className="w-12 h-12 text-primary-foreground" />
              <span className="block text-primary-foreground font-bold text-lg mt-1 tracking-wide">
                Deliveroo
              </span>
            </div>
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground max-w-3xl leading-tight">
            Claim Your Deliveroo Student Reward
          </h1>

          <div className="animate-fade-in-up animation-delay-400 mt-4 inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm px-5 py-2 rounded-full border border-primary-foreground/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-primary-foreground font-semibold text-sm tracking-wide uppercase">
              United Kingdom Only
            </span>
          </div>

          <p className="animate-fade-in-up animation-delay-600 mt-6 text-primary-foreground/80 text-lg max-w-xl">
            Complete a short questionnaire and simple tasks to receive your exclusive Deliveroo reward.
          </p>

          <a href={OFFER_URL} target="_blank" rel="noopener noreferrer" className="animate-fade-in-up animation-delay-600 mt-8">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-6 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform duration-200"
            >
              Apply Now →
            </Button>
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-secondary py-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-2 text-secondary-foreground">
            <Users className="w-5 h-5" />
            <span className="font-bold text-lg">{approvedCount.toLocaleString()}+</span>
            <span className="text-sm">UK Students Approved This Month</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2 text-secondary-foreground">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm font-medium">Verified & Secure</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2 text-secondary-foreground">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">Takes ~5 Minutes</span>
          </div>
        </div>
      </section>

      {/* How To Qualify */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-4">
            How To Qualify
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Follow these three simple steps to claim your Deliveroo student reward.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <StepCard
                stepNumber={1}
                title="Complete Questionnaire"
                description="Answer a few quick questions to verify your student status and eligibility."
              />
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <StepCard
                stepNumber={2}
                title="Complete Tasks"
                description="Finish a few simple deal tasks to qualify for your Deliveroo reward."
              />
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <StepCard
                stepNumber={3}
                title="Application Review"
                description="Your application will be reviewed and your reward will be sent upon approval."
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <a href={OFFER_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="text-lg px-10 py-6 rounded-full font-bold shadow-xl hover:scale-105 transition-transform duration-200"
              >
                Apply Now →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="item-1" className="bg-card rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Do I need to enter bank details?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No, you will never be asked for any bank or payment details. This offer is completely free to complete.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How long does the deal last?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The deal is available for a limited time only. We recommend applying as soon as possible to secure your spot.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What kind of tasks do I need to complete?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Tasks are simple deal offers such as signing up for free trials or completing short surveys. All tasks are straightforward and can be completed in minutes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card rounded-lg border px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Is this available outside the UK?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                This offer is currently available to UK students only. You must be based in the United Kingdom to qualify.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-[hsl(172,100%,22%)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Don't Miss Out
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
            Limited spots available. Apply now to claim your Deliveroo student reward.
          </p>
          <a href={OFFER_URL} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-6 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform duration-200"
            >
              Apply Now →
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Gift className="w-5 h-5 text-primary" />
            <span className="text-background font-bold tracking-wide">Deliveroo Rewards</span>
          </div>
          <p className="text-background/50 text-xs max-w-md mx-auto">
            This site is not affiliated with, endorsed by, or connected to Deliveroo. All trademarks belong to their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
