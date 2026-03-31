import { Suspense } from "react";

import LoginClient from "./login-client";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="page-gutter py-12">Loading...</div>}>
      <LoginClient />
    </Suspense>
  );
}
