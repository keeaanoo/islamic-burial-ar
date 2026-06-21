import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function LandingPage() {

    const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl">

        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">
          Islamic Burial AR
        </h1>

        <h4 className="mt-2 text-base font-semibold text-gray-800">
          Belajar Tata Cara Penguburan Jenazah Sesuai Syariat Islam
        </h4>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          Visualisasi interaktif berbasis Augmented Reality untuk memahami proses penguburan jenazah.
        </p>

        <div className="mt-5 w-full flex flex-col gap-2 text-xs rounded-lg p-4 bg-emerald-50 border border-emerald-200">
          <blockquote className="italic text-gray-700 leading-relaxed">
            &quot;Setiap yang bernyawa akan merasakan kematian. Kami menguji kamu dengan keburukan dan kebaikan sebagai cobaan. Dan hanya kepada Kamilah kamu dikembalikan&quot;
          </blockquote>

          <p className="text-center mt-2 font-medium text-emerald-800">
            (QS Al-Anbiya:35)
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <Button
            size="lg"
            className="w-full bg-emerald-800 hover:bg-emerald-900 text-white"
            onClick={() => navigate('/home')}
          >
            Mulai Belajar
          </Button>
        </div>

      </div>
    </div>
  )
}