import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Info, ScanLine, CheckCircle2 } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "Persiapan Liang Kubur",
      description: "Menyiapkan ukuran dan bentuk liang yang sesuai.",
    },
    {
      id: 2,
      title: "Meletakkan Jenazah",
      description: "Menempatkan jenazah dengan posisi yang benar.",
    },
    {
      id: 3,
      title: "Menutup Liang Lahad",
      description: "Menutup ruang lahad di samping jenazah.",
    },
    {
      id: 4,
      title: "Menimbun Tanah",
      description: "Menimbun liang kubur dengan tanah hingga rata.",
    },
    {
      id: 5,
      title: "Setelah Penguburan",
      description: "Doa dan amalan setelah pemakaman.",
    },
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
      <div className="max-w-sm w-full h-full bg-white flex flex-col">
        {/* Header */}
        <div className="bg-inherit h-14 w-full flex justify-between items-center p-4 border-b-2 border-gray-200 rounded-b-md drop-shadow-md flex-shrink-0">

            <h1 className="scroll-m-20 text-center text-lg font-extrabold tracking-tight text-balance">
            Islamic Burial <span className="text-emerald-700">AR</span>
            </h1>
            <button className="cursor-pointer hover:opacity-70 transition">
                <Info color="gray" size={20} />
            </button>
        </div>

        {/* Konten Scrollable */}
        <div className="flex-1 overflow-y-auto px-5 py-6 bg-white [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          <div>
            {/* Judul Utama */}
            <h2 className="text-xl font-bold tracking-tight text-emerald-800 pb-2 mb-4 border-b-2 border-emerald-500">
              Menghantarkan Pulang: Panduan Penguburan Jenazah dalam Islam
            </h2>

            {/* Paragraf Pembuka */}
            <p className="leading-relaxed text-sm text-gray-700 mb-5">
              Penguburan jenazah merupakan bentuk penghormatan terakhir yang diajarkan oleh Islam
              kepada umatnya, baik laki-laki maupun perempuan. Sebagai bagian dari rangkaian
              perawatan jenazah, prosesi ini bukan sekadar mengubur jasad, melainkan sebuah ibadah
              yang sarat akan makna dan doa.
            </p>

            {/* Hukum dan Landasan Dalil */}
            <section className="mb-6">
              <h3 className="text-md font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                Hukum dan Landasan Dalil
              </h3>
              <p className="leading-relaxed text-sm text-gray-700">
                Hukum mengurus dan menguburkan jenazah adalah{" "}
                <span className="font-medium">Fardhu Kifayah</span> bagi umat Muslim di sekitarnya.
                Kewajiban ini ditegaskan Allah SWT dalam Al-Qur'an:
              </p>
              <div className="mt-2 space-y-2">
                <blockquote className="border-l-4 border-emerald-400 pl-4 py-4 italic text-sm text-gray-600 rounded-r-md">
                  "Bukankah Kami menjadikan bumi sebagai (tempat) berkumpul bagi yang (masih) hidup
                  dan yang (sudah) mati." <br />
                  <span className="text-xs font-medium">(QS. Al-Mursalat: 25-26)</span>
                </blockquote>
                <blockquote className="border-l-4 border-emerald-400 pl-4 py-4 italic text-sm text-gray-600 rounded-r-md">
                  "Kemudian, Dia mematikannya lalu menguburkannya." <br />
                  <span className="text-xs font-medium">(QS. Abasa: 21)</span>
                </blockquote>
              </div>
              <p className="leading-relaxed text-sm text-gray-700 mt-3">
                Rasulullah SAW juga bersabda bahwa siapa saja yang mengantarkan jenazah hingga
                dimakamkan akan mendapatkan pahala sebesar dua qiroth (setara dua gunung besar).
              </p>
            </section>

            {/* Tujuan Penguburan */}
            <section className="mb-6">
              <h3 className="text-md font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                Tujuan Penguburan dalam Islam
              </h3>
              <p className="leading-relaxed text-sm text-gray-700 mb-2">
                Islam menetapkan tata cara tertentu dalam penguburan dengan tujuan yang mulia:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium">Menjaga Kehormatan:</span> Liang lahat dibuat
                    cukup dalam (sekitar 2 meter) agar bau jenazah tidak keluar dan jasad terlindungi
                    dari gangguan binatang buas.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium">Simbol Kerendahan Diri:</span> Membuka pipi
                    jenazah dan menempelkannya ke tanah merupakan wujud kerendahan diri dan kehinaan
                    manusia di hadapan Allah SWT.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <span className="font-medium">Kesederhanaan:</span> Islam melarang pembangunan
                    bangunan permanen atau penghiasan makam secara berlebihan untuk menjaga kesucian
                    tempat peristirahatan tersebut.
                  </span>
                </li>
              </ul>
            </section>

            {/* Tahapan Ringkas Penguburan */}
            <section className="mb-6">
              <h3 className="text-md font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                Tahapan Ringkas Penguburan (Step-by-Step)
              </h3>
              <div className="space-y-3">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md hover:border-emerald-300 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-800">{step.title}</h4>
                      <p className="text-xs text-gray-600 mt-0.5">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Waktu yang Dihindari */}
            <section className="mb-6">
              <h3 className="text-md font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                Waktu yang Dihindari
              </h3>
              <p className="leading-relaxed text-sm text-gray-700 mb-2">
                Demi menghormati kesucian ibadah ini, umat Islam disarankan tidak melakukan
                penguburan pada tiga waktu berikut:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Saat matahari terbit hingga naik.</li>
                <li>Saat matahari tepat di atas kepala (puncak).</li>
                <li>Saat matahari hampir terbenam hingga benar-benar tenggelam.</li>
              </ul>
            </section>

            {/* Tombol AR yang lebih baik */}
            <section className="mt-2">
              <button
                className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] transition-all duration-150 rounded-xl px-6 py-5 flex items-center justify-center gap-4 shadow-md hover:shadow-lg"
                onClick={() => navigate("/ar")}
              >
                <ScanLine color="#ffffff" size={32} className="flex-shrink-0" />
                <span className="text-white font-semibold text-lg">Coba AR</span>
              </button>
            </section>

            {/* Footer kecil */}
            <p className="mt-4 text-[10px] text-center text-gray-400">
              © 2026 Islamic Burial AR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}