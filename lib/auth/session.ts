import { SignJWT, jwtVerify } from "jose";

export type SessionPayload = {
  sub: string;
  role: "student" | "teacher" | "admin";
  schoolId: string;
};

const getSecret = () => {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("Missing AUTH_SECRET environment variable.");
  }
  return new TextEncoder().encode(secret);
};

export async function signSession(payload: SessionPayload) {
  const secret = getSecret();
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifySession(token: string) {
  const secret = getSecret();
  const { payload } = await jwtVerify(token, secret);
  return payload as SessionPayload & { iat: number; exp: number };
}
