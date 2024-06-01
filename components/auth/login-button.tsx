"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  asChild?: boolean;
  children: React.ReactNode;
  mode?: "modal" | "redirect";
}

export const LoginButton = ({
  asChild,
  children,
  mode = "redirect",
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };
  //TODO : inplement modal
  if (mode === "modal") {
    return <span>TODO : inplement modal</span>;
  }

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
