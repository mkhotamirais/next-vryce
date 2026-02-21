import React from "react";
import AdminMenu from "./AdminMenu";
import AdminProvider from "@/components/providers/AdminProvider";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <div className="container pb-8">
        <div className="max-w-xl">
          <AdminMenu />
          {children}
        </div>
      </div>
    </AdminProvider>
  );
}
