"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Check, Zap, WalletCards } from 'lucide-react';

function Billing() {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "3 Interviews per month",
        "Basic AI Feedback",
        "Email Support",
      ],
      current: true,
      buttonText: "Current Plan"
    },
    {
      name: "Pro Plan",
      price: "$29",
      period: "/month",
      description: "For serious job seekers",
      features: [
        "Unlimited Interviews",
        "Advanced AI Analysis",
        "Priority Support",
        "Mock Interview Recording"
      ],
      current: false,
      buttonText: "Upgrade to Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Team Management",
        "Custom API Access",
        "24/7 Dedicated Support",
        "White-label Reports"
      ],
      current: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="p-6 md:p-10 space-y-8">
      <div className="flex items-center justify-between">
            <div>
                <h2 className="font-bold text-3xl flex items-center gap-2">
                    <WalletCards className="h-8 w-8 text-primary" /> Billing & Subscription
                </h2>
                <p className="text-muted-foreground mt-2">Manage your plan and billing details</p>
            </div>
      </div>

      {/* Usage Section */}
      <Card>
        <CardHeader>
            <CardTitle>Current Usage</CardTitle>
            <CardDescription>You are on the Free Plan. Cycle resets on Feb 1, 2026.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span>Interviews Used</span>
                    <span className="font-bold">2 / 3</span>
                </div>
                <Progress value={66} className="h-3" />
            </div>
        </CardContent>
      </Card>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
            <Card key={index} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg scale-105 z-10' : ''}`}>
                {plan.popular && (
                    <div className="absolute top-0 right-0 -mt-2 -mr-2">
                        <Badge className="bg-primary text-primary-foreground hover:bg-primary">Most Popular</Badge>
                    </div>
                )}
                <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                    <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                <Check className="h-4 w-4 text-green-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button 
                        variant={plan.current ? "outline" : plan.popular ? "default" : "secondary"} 
                        className="w-full"
                        disabled={plan.current}
                    >
                        {plan.current ? "Active Plan" : plan.buttonText}
                    </Button>
                </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  )
}

export default Billing;
