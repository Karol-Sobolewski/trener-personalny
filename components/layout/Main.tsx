import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  return (
    <main className="flex flex-col max-w-7xl mx-auto px-4 py-16">
      <div className="overflow-hidden flex flex-col bg-gray-50 dark:bg-slate-600  shadow-lg rounded-md">
        {children}
      </div>
    </main>
  );
}
