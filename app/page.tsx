import { LoginContent } from "@/components/login/LoginContent";
import { LoginForm } from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-orange-600 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-slate-900 via-teal-700 to-red-700" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
          <LoginContent />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
