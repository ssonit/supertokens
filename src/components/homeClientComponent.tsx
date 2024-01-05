"use client";

import { SessionAuth } from "supertokens-auth-react/recipe/session";

export const HomeClientComponent = () => {
  return (
    <SessionAuth>
      <div>Hello world</div>
    </SessionAuth>
  );
};
