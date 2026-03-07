import { Card, CardContent } from "@/components/ui/card";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
}

const StepCard = ({ stepNumber, title, description }: StepCardProps) => {
  return (
    <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300 hover:shadow-lg">
      <CardContent className="pt-8 pb-6 px-6">
        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          {stepNumber}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StepCard;
