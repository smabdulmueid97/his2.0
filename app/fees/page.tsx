"use client";

import { CreditCard, Landmark, Wallet } from "lucide-react";

import { useLanguage } from "@/components/language-provider";
import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { feeTables } from "@/lib/mockData";

export default function FeesPage() {
  const { language } = useLanguage();
  const content = {
    en: {
      badge: "Fees & Payments",
      title: "Transparent fee structures for every grade.",
      subtitle: "Payment options and fee breakdowns for each grade.",
      breakdownTitle: "Fee breakdown cards",
      breakdownSubtitle: "Clear term-level totals with itemized details.",
      paymentTitle: "Payment options",
      paymentSubtitle: "Multiple ways to keep fees up to date.",
      paymentMethods: [
        {
          icon: Wallet,
          title: "Mobile Wallet",
          detail: "bKash, Nagad, Rocket (confirm with accounts office).",
        },
        {
          icon: CreditCard,
          title: "Card Payment",
          detail: "Visa and Mastercard gateways for fee collection.",
        },
        {
          icon: Landmark,
          title: "Bank Transfer",
          detail: "Direct deposit to HIS accounts with receipt upload.",
        },
      ],
      slipLabel: "Generate Fee Slip",
      policyTitle: "Payment policy reminder",
      policyDetail:
        "Late payments may incur a small service fee. Installments can be arranged through the accounts office with prior approval.",
      policyAction: "Contact Accounts Office",
    },
    bn: {
      badge: "ফি ও পেমেন্ট",
      title: "প্রতিটি গ্রেডের জন্য স্বচ্ছ ফি কাঠামো।",
      subtitle:
        "এখানে প্রদর্শিত সব পেমেন্ট অপশন ডেমো; বাস্তব লেনদেন হয় না।",
      breakdownTitle: "ফি ব্রেকডাউন কার্ড",
      breakdownSubtitle: "টার্মভিত্তিক মোট ও বিস্তারিত তথ্য।",
      paymentTitle: "পেমেন্ট অপশন",
      paymentSubtitle: "ফি আপডেট রাখার একাধিক উপায়।",
      paymentMethods: [
        {
          icon: Wallet,
          title: "মোবাইল ওয়ালেট",
          detail: "bKash, Nagad, Rocket (শুধু ডেমো ভিউ)।",
        },
        {
          icon: CreditCard,
          title: "কার্ড পেমেন্ট",
          detail: "ফি সংগ্রহের জন্য ভিসা ও মাস্টারকার্ড গেটওয়ে।",
        },
        {
          icon: Landmark,
          title: "ব্যাংক ট্রান্সফার",
          detail: "রসিদ আপলোডসহ HIS একাউন্টে সরাসরি জমা।",
        },
      ],
      slipLabel: "ফি স্লিপ তৈরি করুন",
      policyTitle: "পেমেন্ট নীতিমালা",
      policyDetail:
        "দেরিতে পরিশোধ করলে সামান্য সার্ভিস চার্জ হতে পারে। অনুমোদন সাপেক্ষে কিস্তির সুবিধা আছে।",
      policyAction: "অ্যাকাউন্টস অফিসে যোগাযোগ করুন",
    },
  }[language];

  return (
    <div className="space-y-12 px-3 py-12 md:px-4 md:py-16 2xl:px-0">
      <div className="mx-auto max-w-screen-2xl space-y-6">
        <Badge variant="info">{content.badge}</Badge>
        <h1 className="text-4xl font-semibold text-[var(--color-ink)] md:text-5xl">
          {content.title}
        </h1>
        <p className="text-base text-[var(--color-muted)] md:text-lg">
          {content.subtitle}
        </p>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.breakdownTitle}
          subtitle={content.breakdownSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {feeTables.map((fee) => (
            <Card key={fee.id} className="animate-fade-up">
              <CardHeader>
                <Badge variant="warn">{fee.term}</Badge>
                <CardTitle>{fee.grade}</CardTitle>
                <p className="text-sm text-[var(--color-muted)]">{fee.note}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-2xl font-semibold text-[var(--color-ink)]">
                  {fee.total}
                </p>
                <div className="space-y-2 text-sm text-[var(--color-muted)]">
                  {fee.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <span className="font-semibold text-[var(--color-ink)]">
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  {content.slipLabel}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl space-y-8">
        <SectionHeading
          title={content.paymentTitle}
          subtitle={content.paymentSubtitle}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {content.paymentMethods.map((method) => (
            <Card key={method.title}>
              <CardHeader>
                <method.icon className="h-6 w-6 text-[var(--color-blue-700)]" />
                <CardTitle>{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-[var(--color-muted)]">
                {method.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl">
        <Card className="bg-[var(--color-blue-900)] text-[var(--color-white)]">
          <CardHeader>
            <CardTitle className="text-[var(--color-white)]">
              {content.policyTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-[rgba(255,255,255,0.7)]">
            <p>{content.policyDetail}</p>
            <Button variant="gold">{content.policyAction}</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}




