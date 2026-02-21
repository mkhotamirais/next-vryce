import React from "react";
import AdminMenu from "./AdminMenu";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container pb-8">
      <div className="max-w-xl">
        <AdminMenu />
        {children}
      </div>
    </div>
  );
}
