import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, ChevronRight, ScanLine } from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-sm bg-white rounded-3xl p-6 transition-all">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Islamic Burial <span className="text-emerald-700">AR</span>
          </h1>
          <div className="mt-1 h-1 w-12 bg-emerald-600 mx-auto rounded-full" />
        </div>

        {/* Deskripsi */}
        <h4 className="text-base font-semibold text-gray-800 text-center leading-snug">
          Belajar Tata Cara Penguburan Jenazah
        </h4>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed text-center">
          Visualisasi interaktif berbasis Augmented Reality untuk memahami proses
          penguburan jenazah.
        </p>

        {/* Preview / Ilustrasi */}
        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="aspect-square rounded-xl bg-emerald-100/60 flex flex-col items-center justify-center p-2 border border-emerald-200/50">
            <BookOpen className="w-8 h-8 text-emerald-700" />
            <span className="text-[10px] font-medium text-emerald-800 mt-1 text-center">
              Sesuai Syariat
            </span>
          </div>
          <div className="aspect-square rounded-xl bg-emerald-100/60 flex flex-col items-center justify-center p-2 border border-emerald-200/50">
            <ScanLine className="w-8 h-8 text-emerald-700" />
            <span className="text-[10px] font-medium text-emerald-800 mt-1 text-center">
              Simulasi AR
            </span>
          </div>
        </div>

        {/* Ayat */}
        <div className="mt-8 w-full p-2 pl-4 border-l-4 border-emerald-500">
          <blockquote className="italic text-xs text-gray-700 leading-relaxed">
            “Setiap yang bernyawa akan merasakan kematian. Kami menguji kamu
            dengan keburukan dan kebaikan sebagai cobaan. Dan hanya kepada
            Kamilah kamu dikembalikan”
          </blockquote>
          <p className="text-center mt-4 text-xs font-medium text-emerald-800">
            (QS Al-Anbiya: 35)
          </p>
        </div>

        {/* Tombol */}
        <div className="mt-6">
          <Button
            size="lg"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            onClick={() => navigate("/home")}
          >
            Mulai Belajar
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Footer kecil (opsional) */}
        <p className="mt-4 text-[10px] text-center text-gray-400">
          © 2026 Islamic Burial AR
        </p>
      </div>
    </div>
  );
}