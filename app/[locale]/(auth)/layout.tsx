import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary/5 h-full min-h-screen">
      <div className="max-w-md mx-auto py-16">
        <div className="bg-white rounded-lg border border-gray-200 p-10">{children}</div>
      </div>
    </div>
  );
}
