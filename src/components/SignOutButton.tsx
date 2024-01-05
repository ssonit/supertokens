"use client";

import { signOut } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import { redirectToAuth } from "supertokens-auth-react";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOut();
    redirectToAuth();
  };
  return <button onClick={handleSignOut}>Sign Out</button>;
}
