import { Check } from "lucide-react";

export function LoginContent() {
  return (
    <div className="text-white order-2 lg:order-1">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-teal-300 text-sm font-semibold mb-8">
          <div className="w-6 h-6 rounded-full bg-teal-400 flex items-center justify-center text-xs">
            ⊕
          </div>
          aps
        </div>
      </div>

      <h1 className="text-5xl lg:text-6xl font-bold mb-2 leading-tight">
        Expert level Cybersecurity
        <br />
        in <span className="text-teal-400">hours</span> not weeks.
      </h1>

      <div className="mt-12">
        <h3 className="text-white font-semibold mb-6">What's included</h3>
        <ul className="space-y-4">
          <li className="flex gap-3 items-start">
            <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
            <span className="text-gray-200">
              Effortlessly spider and map targets to uncover hidden security
              flaws
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
            <span className="text-gray-200">
              Deliver high-quality, validated findings in hours, not weeks.
            </span>
          </li>
          <li className="flex gap-3 items-start">
            <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
            <span className="text-gray-200">
              Generate professional, enterprise-grade security reports
              automatically.
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-2 text-yellow-300">
          <span className="text-lg">★</span>
          <span className="font-semibold">Rated 4.5/5.0</span>
          <span className="text-gray-300 text-sm">(100k+ reviews)</span>
        </div>
        <p className="text-gray-300 text-sm mt-2">Trustpilot</p>
      </div>
    </div>
  );
}
