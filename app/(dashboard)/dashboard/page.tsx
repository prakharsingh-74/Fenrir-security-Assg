"use client";

import {
  Search,
  Filter,
  Columns3,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react";
import { mockScans, ScanStatus } from "@/lib/mockData";

const getStatusColor = (status: ScanStatus) => {
  switch (status) {
    case "Completed":
      return "bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400";
    case "Scheduled":
      return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    case "Failed":
      return "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Top Header */}
      <div className="h-16 bg-white dark:bg-[#0F0F0F] flex items-center justify-between px-8 z-10 sticky top-0">
        <div className="flex items-center gap-2 text-[15px]">
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            Scan
          </span>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-gray-500">Private Assets</span>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-teal-500 font-medium">New Scan</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 dark:bg-[#0F0F0F] dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
            Export Report
          </button>
          <button className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-lg hover:bg-red-100 dark:bg-red-500/10 dark:border-red-500/20 dark:hover:bg-red-500/20">
            Stop Scan
          </button>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-y-auto bg-[#F5F5F5] dark:bg-[#0A0A0A]">
        {/* Context Row */}
        <div className="flex items-center gap-8 mb-8 text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            Org:{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              Project X
            </span>
          </div>
          <div className="w-px h-4 bg-gray-200 dark:bg-gray-800" />
          <div className="flex items-center gap-2 text-gray-500">
            Owner:{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              Nammagiri
            </span>
          </div>
          <div className="w-px h-4 bg-gray-200 dark:bg-gray-800" />
          <div className="flex items-center gap-2 text-gray-500">
            Total Scans:{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              100
            </span>
          </div>
          <div className="w-px h-4 bg-gray-200 dark:bg-gray-800" />
          <div className="flex items-center gap-2 text-gray-500">
            Scheduled:{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              1000
            </span>
          </div>
          <div className="w-px h-4 bg-gray-200 dark:bg-gray-800" />
          <div className="flex items-center gap-2 text-gray-500">
            Rescans:{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              100
            </span>
          </div>
          <div className="w-px h-4 bg-gray-200 dark:bg-gray-800" />
          <div className="flex items-center gap-2 text-gray-500">
            Failed Scans:{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              100
            </span>
          </div>
          <div className="flex items-center gap-2 text-teal-600 ml-auto bg-teal-50 dark:bg-teal-500/10 px-3 py-1.5 rounded-full font-medium">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            10 mins ago
          </div>
        </div>

        {/* Severities Row */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Critical Severity",
              count: 86,
              trend: "+2%",
              isIncrease: true,
              color: "text-red-600",
              bg: "bg-red-50",
              darkBg: "dark:bg-red-500/10",
              icon: "⊘",
            },
            {
              label: "High Severity",
              count: 16,
              trend: "+0.9%",
              isIncrease: true,
              color: "text-orange-500",
              bg: "bg-orange-50",
              darkBg: "dark:bg-orange-500/10",
              icon: "⚠",
            },
            {
              label: "Medium Severity",
              count: 26,
              trend: "+0.9%",
              isIncrease: false,
              color: "text-yellow-500",
              bg: "bg-yellow-50",
              darkBg: "dark:bg-yellow-500/10",
              icon: "⚠",
            },
            {
              label: "Low Severity",
              count: 16,
              trend: "+0.9%",
              isIncrease: true,
              color: "text-blue-500",
              bg: "bg-blue-50",
              darkBg: "dark:bg-blue-500/10",
              icon: "ℹ",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#1A1A1A] rounded-xl p-6 shadow-sm border border-transparent dark:border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </span>
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.bg} ${stat.darkBg} ${stat.color} text-lg font-bold`}
                >
                  {stat.icon}
                </div>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {stat.count}
                </span>
                <div
                  className={`flex items-center text-xs font-medium ${stat.isIncrease ? "text-red-500" : "text-teal-500"}`}
                >
                  {stat.isIncrease ? (
                    <ArrowUpRight className="w-3 h-3 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 mr-1" />
                  )}
                  {stat.trend} {stat.isIncrease ? "increase" : "decrease"} than
                  yesterday
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Table Area */}
        <div className="bg-white dark:bg-[#1A1A1A] rounded-xl shadow-sm border border-transparent dark:border-gray-800">
          <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search scans by name or type..."
                className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 dark:bg-[#0F0F0F] dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 dark:bg-[#0F0F0F] dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
                <Columns3 className="w-4 h-4" /> Column
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600">
                <Plus className="w-4 h-4" /> New scan
              </button>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 py-4 px-6">
                  Scan Name
                </th>
                <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 py-4 px-6">
                  Type
                </th>
                <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 py-4 px-6">
                  Status
                </th>
                <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 py-4 px-6">
                  Progress
                </th>
                <th className="text-center text-xs font-medium text-gray-500 dark:text-gray-400 py-4 px-6">
                  Vulnerability
                </th>
                <th className="text-right text-xs font-medium text-gray-500 dark:text-gray-400 py-4 px-6">
                  Last Scan
                </th>
              </tr>
            </thead>
            <tbody>
              {mockScans.map((scan) => (
                <tr
                  key={scan.id}
                  className="border-b border-gray-50 dark:border-gray-900/50 hover:bg-gray-50 dark:hover:bg-[#1A1A1A] transition-colors group"
                >
                  <td className="py-4 px-6">
                    <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                      {scan.name}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-400">
                    {scan.type}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(scan.status)}`}
                    >
                      {scan.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3 w-48">
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${scan.status === "Failed" ? "bg-red-500" : "bg-teal-500"}`}
                          style={{ width: `${scan.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 w-8">
                        {scan.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1.5 min-w-[120px]">
                      {scan.vulnerabilities.critical > 0 && (
                        <span className="min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded text-[11px] font-bold bg-red-500 text-white leading-none">
                          {scan.vulnerabilities.critical}
                        </span>
                      )}
                      {scan.vulnerabilities.high > 0 && (
                        <span className="min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded text-[11px] font-bold bg-orange-500 text-white leading-none">
                          {scan.vulnerabilities.high}
                        </span>
                      )}
                      {scan.vulnerabilities.medium > 0 && (
                        <span className="min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded text-[11px] font-bold bg-[#EAB308] text-white leading-none">
                          {scan.vulnerabilities.medium}
                        </span>
                      )}
                      {scan.vulnerabilities.low > 0 && (
                        <span className="min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded text-[11px] font-bold bg-green-500 text-white leading-none">
                          {scan.vulnerabilities.low}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right text-sm text-gray-500">
                    {scan.lastScan}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
