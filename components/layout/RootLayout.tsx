import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayoutComponent({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FCFDFD] text-slate-900 relative selection:bg-primary/20 selection:text-primary">
      <div className="grid-bg" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
