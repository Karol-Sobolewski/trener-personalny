import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  return (
    <main className="flex flex-col max-w-7xl mx-auto px-4 py-16">
      <div className="overflow-hidden flex flex-col bg-gray-50 shadow-lg rounded-md pb-16 min-h-[80vh]">
        {children}
      </div>
    </main>
  );
}
