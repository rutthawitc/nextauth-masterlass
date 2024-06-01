import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
export default function Home() {
  return (
    <main className="flex h-full flex-col text-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200 to-blue-800">
      <div className="space-y-6">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            poppins.className
          )}
        >
          🔐Auth
        </h1>
        <p className="text-white text-lg">Simple Authentication service.</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
