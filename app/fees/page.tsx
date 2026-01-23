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
      badge: "à¦«à¦¿ à¦“ à¦ªà§‡à¦®à§‡à¦¨à§à¦Ÿ",
      title: "à¦ªà§à¦°à¦¤à¦¿à¦Ÿà¦¿ à¦—à§à¦°à§‡à¦¡à§‡à¦° à¦œà¦¨à§à¦¯ à¦¸à§à¦¬à¦šà§à¦› à¦«à¦¿ à¦•à¦¾à¦ à¦¾à¦®à§‹à¥¤",
      subtitle:
        "à¦à¦–à¦¾à¦¨à§‡ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¿à¦¤ à¦¸à¦¬ à¦ªà§‡à¦®à§‡à¦¨à§à¦Ÿ à¦…à¦ªà¦¶à¦¨ à¦¡à§‡à¦®à§‹; à¦¬à¦¾à¦¸à§à¦¤à¦¬ à¦²à§‡à¦¨à¦¦à§‡à¦¨ à¦¹à§Ÿ à¦¨à¦¾à¥¤",
      breakdownTitle: "à¦«à¦¿ à¦¬à§à¦°à§‡à¦•à¦¡à¦¾à¦‰à¦¨ à¦•à¦¾à¦°à§à¦¡",
      breakdownSubtitle: "à¦Ÿà¦¾à¦°à§à¦®à¦­à¦¿à¦¤à§à¦¤à¦¿à¦• à¦®à§‹à¦Ÿ à¦“ à¦¬à¦¿à¦¸à§à¦¤à¦¾à¦°à¦¿à¦¤ à¦¤à¦¥à§à¦¯à¥¤",
      paymentTitle: "à¦ªà§‡à¦®à§‡à¦¨à§à¦Ÿ à¦…à¦ªà¦¶à¦¨",
      paymentSubtitle: "à¦«à¦¿ à¦†à¦ªà¦¡à§‡à¦Ÿ à¦°à¦¾à¦–à¦¾à¦° à¦à¦•à¦¾à¦§à¦¿à¦• à¦‰à¦ªà¦¾à§Ÿà¥¤",
      paymentMethods: [
        {
          icon: Wallet,
          title: "à¦®à§‹à¦¬à¦¾à¦‡à¦² à¦“à§Ÿà¦¾à¦²à§‡à¦Ÿ",
          detail: "bKash, Nagad, Rocket (à¦¶à§à¦§à§ à¦¡à§‡à¦®à§‹ à¦­à¦¿à¦‰)à¥¤",
        },
        {
          icon: CreditCard,
          title: "à¦•à¦¾à¦°à§à¦¡ à¦ªà§‡à¦®à§‡à¦¨à§à¦Ÿ",
          detail: "à¦«à¦¿ à¦¸à¦‚à¦—à§à¦°à¦¹à§‡à¦° à¦œà¦¨à§à¦¯ à¦­à¦¿à¦¸à¦¾ à¦“ à¦®à¦¾à¦¸à§à¦Ÿà¦¾à¦°à¦•à¦¾à¦°à§à¦¡ à¦—à§‡à¦Ÿà¦“à§Ÿà§‡à¥¤",
        },
        {
          icon: Landmark,
          title: "à¦¬à§à¦¯à¦¾à¦‚à¦• à¦Ÿà§à¦°à¦¾à¦¨à§à¦¸à¦«à¦¾à¦°",
          detail: "à¦°à¦¸à¦¿à¦¦ à¦†à¦ªà¦²à§‹à¦¡à¦¸à¦¹ HIS à¦à¦•à¦¾à¦‰à¦¨à§à¦Ÿà§‡ à¦¸à¦°à¦¾à¦¸à¦°à¦¿ à¦œà¦®à¦¾à¥¤",
        },
      ],
      slipLabel: "à¦«à¦¿ à¦¸à§à¦²à¦¿à¦ª à¦¤à§ˆà¦°à¦¿ à¦•à¦°à§à¦¨",
      policyTitle: "à¦ªà§‡à¦®à§‡à¦¨à§à¦Ÿ à¦¨à§€à¦¤à¦¿à¦®à¦¾à¦²à¦¾",
      policyDetail:
        "à¦¦à§‡à¦°à¦¿à¦¤à§‡ à¦ªà¦°à¦¿à¦¶à§‹à¦§ à¦•à¦°à¦²à§‡ à¦¸à¦¾à¦®à¦¾à¦¨à§à¦¯ à¦¸à¦¾à¦°à§à¦­à¦¿à¦¸ à¦šà¦¾à¦°à§à¦œ à¦¹à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¥¤ à¦…à¦¨à§à¦®à§‹à¦¦à¦¨ à¦¸à¦¾à¦ªà§‡à¦•à§à¦·à§‡ à¦•à¦¿à¦¸à§à¦¤à¦¿à¦° à¦¸à§à¦¬à¦¿à¦§à¦¾ à¦†à¦›à§‡à¥¤",
      policyAction: "à¦…à§à¦¯à¦¾à¦•à¦¾à¦‰à¦¨à§à¦Ÿà¦¸ à¦…à¦«à¦¿à¦¸à§‡ à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦— à¦•à¦°à§à¦¨",
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




