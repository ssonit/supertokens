import { SessionAuthForNextJS } from "@/components/sessionAuthForNextJS";
import SignOutButton from "@/components/SignOutButton";
import { TryRefreshComponent } from "@/components/tryRefreshClientComponent";
import { getSSRSession } from "@/utils/sessionUtils";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { session, hasToken, hasInvalidClaims } = await getSSRSession();
  if (!session) {
    if (!hasToken) {
      return redirect("/auth");
    }
    if (hasInvalidClaims) {
      return <SessionAuthForNextJS />;
    } else {
      return <TryRefreshComponent />;
    }
  }

  return (
    <main className="flex items-center justify-center flex-col min-h-screen">
      <SessionAuthForNextJS>
        <div>Your user id is: {session.getUserId()}</div>
        <SignOutButton></SignOutButton>
      </SessionAuthForNextJS>
    </main>
  );
}
