"use client";
import {
  LayoutDashboard,
  FolderKanban,
  Activity,
  Calendar,
  Bell,
  Settings,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Scans", href: "/scans", icon: Activity },
  { name: "Schedule", href: "/schedule", icon: Calendar },
];

const bottomNavItems = [
  { name: "Notifications", href: "/notifications", icon: Bell, badge: 3 },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Support", href: "/support", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[280px] h-screen bg-white dark:bg-[#0F0F0F] border-r border-gray-200 dark:border-gray-800 flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
          <span className="text-white font-bold text-sm">●</span>
        </div>
        <span className="font-bold text-xl text-teal-500 tracking-tight">
          aps
        </span>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 space-y-1 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 pl-8 pr-4 py-3 rounded-r-full transition-colors ${
                isActive
                  ? "bg-[#E6F8F5] dark:bg-teal-500/10 text-[#0CC8A8] dark:text-teal-400 font-medium"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 mx-4 rounded-full pl-4"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${isActive ? "text-[#0CC8A8]" : "text-gray-400"}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="text-[15px]">{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <div className="px-5 pb-8 space-y-2 border-t border-gray-100 dark:border-gray-800 pt-6 mt-auto">
        {bottomNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-full transition-colors ${
                isActive
                  ? "bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <item.icon className="w-5 h-5" strokeWidth={2} />
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full" />
                  )}
                </div>
                <span className="text-[15px]">{item.name}</span>
              </div>
            </Link>
          );
        })}
        <ThemeToggle />

        {/* User Profile */}
        <div className="mt-8 pt-6 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 text-yellow-900 flex items-center justify-center font-bold text-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                admin@edu.com
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Security Lead
              </p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
