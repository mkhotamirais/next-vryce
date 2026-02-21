import React, { Suspense } from "react";
import AdminMenu from "./AdminMenu";
import AdminProvider from "@/components/providers/AdminProvider";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container pb-8">
          <div className="max-w-xl">
            <AdminMenu />
            {children}
          </div>
        </div>
      </Suspense>
    </AdminProvider>
  );
}
