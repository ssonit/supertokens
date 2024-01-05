"use client";

import { useEffect, useState } from "react";
import { redirectToAuth } from "supertokens-auth-react";
import SuperTokens from "supertokens-auth-react/ui";
import { PreBuiltUIList } from "@/config/frontend";

export default function Auth() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (SuperTokens.canHandleRoute(PreBuiltUIList) === false) {
      redirectToAuth({ redirectBack: false });
    } else {
      setLoaded(true);
    }
  }, []);

  if (loaded) {
    return SuperTokens.getRoutingComponent(PreBuiltUIList);
  }

  return null;
}
