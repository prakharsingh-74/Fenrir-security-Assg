import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#0A0A0A] flex w-full">
      <Sidebar />
      <main className="flex-1 ml-[280px] w-[calc(100%-280px)] overflow-x-hidden min-h-screen">
        {children}
      </main>
    </div>
  );
}
