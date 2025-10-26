import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

interface TrialSignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TrialSignupModal({ open, onOpenChange }: TrialSignupModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    properties: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Trial signup:", formData);
    // Here you would typically send the data to your backend
    toast({
      title: "Welcome to Vertex Property Cloud!",
      description: "Your 14-day free trial has started. Check your email for next steps.",
      duration: 5000,
    });
    onOpenChange(false);
    setFormData({ fullName: "", email: "", company: "", properties: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background/95 backdrop-blur-xl border-border/50">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <DialogTitle className="text-2xl">Start Your Free Trial</DialogTitle>
          </div>
          <DialogDescription>
            Get started with a 14-day free trial. No credit card required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name *</Label>
            <Input
              id="company"
              type="text"
              placeholder="Your Company"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              required
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="properties">Number of Properties *</Label>
            <Input
              id="properties"
              type="number"
              placeholder="10"
              value={formData.properties}
              onChange={(e) =>
                setFormData({ ...formData, properties: e.target.value })
              }
              required
              min="1"
              className="h-11"
            />
          </div>

          <div className="pt-4 space-y-3">
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              Start Free Trial
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
