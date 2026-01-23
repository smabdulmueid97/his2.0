import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const title = "Information - Mission Vision";

export default function Page() {
  return (
    <div className="space-y-12 px-4 py-12 md:px-4 md:py-16 2xl:px-0">
      <div className="mx-auto max-w-screen-2xl space-y-6">
        <Badge variant="info">Page</Badge>
        <h1 className="text-4xl font-semibold text-[var(--color-ink)] md:text-5xl">
          {title}
        </h1>
        <p className="text-base text-[var(--color-muted)] md:text-lg">
          This page is under construction. More details will be added soon.
        </p>
      </div>

      <div className="mx-auto max-w-screen-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Quick links</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link href="/">Go to home</Link>
            </Button>
            <Button variant="gold" asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
