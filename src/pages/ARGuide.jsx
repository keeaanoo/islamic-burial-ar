import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ScanLine, 
  BookOpen, 
  Info, 
  ArrowRight,
  Camera,
  Maximize2,
  Minimize2,
  MousePointerClick,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const ARGuide = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <Camera className="w-5 h-5 text-emerald-600" />,
      title: 'Arahkan Kamera ke Target',
      description: 'Arahkan kamera ponsel Anda ke gambar target yang telah disediakan. Pastikan pencahayaan cukup dan kamera fokus.'
    },
    {
      icon: <Maximize2 className="w-5 h-5 text-emerald-600" />,
      title: 'Model 3D Akan Muncul',
      description: 'Setelah target terdeteksi, model 3D akan muncul di atas target. Anda dapat melihat simulasi pemakaman dari berbagai sudut.'
    },
    {
      icon: <MousePointerClick className="w-5 h-5 text-emerald-600" />,
      title: 'Navigasi Langkah',
      description: 'Gunakan tombol "Prev" dan "Next" untuk berpindah antar langkah simulasi. Setiap langkah menampilkan animasi yang berbeda.'
    },
    {
      icon: <Minimize2 className="w-5 h-5 text-emerald-600" />,
      title: 'Kontrol Tampilan Informasi',
      description: 'Anda dapat menyembunyikan atau menampilkan detail informasi dengan tombol panah di sudut kanan atas kartu.'
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
      title: 'Lihat Doa-doa',
      description: 'Setelah menyelesaikan semua langkah, Anda dapat mengakses kumpulan doa untuk jenazah dengan menekan tombol "Lihat Doa".'
    }
  ];

  const tips = [
    'Pastikan ruangan memiliki pencahayaan yang cukup',
    'Jauhkan target dari permukaan yang terlalu reflektif',
    'Gerakkan ponsel perlahan untuk deteksi yang lebih stabil',
    'Target harus rata dan tidak terlipat'
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="max-w-sm w-full h-full bg-white flex flex-col">
        {/* Header */}
        <div className="bg-inherit h-14 w-full flex justify-between items-center p-4 border-b-2 border-gray-200 rounded-b-md drop-shadow-md flex-shrink-0">
          <button
            onClick={() => navigate('/home')}
            className="cursor-pointer hover:opacity-70 transition"
          >
            <ChevronLeft color="gray" size={24} />
          </button>
          <h1 className="scroll-m-20 text-center text-lg font-extrabold tracking-tight text-balance">
            Islamic Burial <span className="text-emerald-700">AR</span>
          </h1>
        </div>

        {/* Konten */}
        <div className="flex-1 overflow-y-auto px-5 py-6 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {/* Pengantar */}
          <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/60 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-emerald-200/50 flex items-center justify-center">
                <ScanLine className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h2 className="font-bold text-emerald-800">Augmented Reality</h2>
                <p className="text-xs text-gray-600">Simulasi Pemakaman 3D</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Fitur AR memungkinkan Anda melihat simulasi proses pemakaman jenazah secara 3D dan interaktif. 
              Cukup arahkan kamera ke target yang telah disediakan.
            </p>
          </div>

          {/* Langkah-langkah */}
          <h3 className="text-md font-bold text-emerald-800 mb-3 flex items-center gap-2">
            <Info className="w-4 h-4" />
            Cara Penggunaan
          </h3>
          <div className="space-y-3 mb-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                      {index + 1}
                    </span>
                    <h4 className="text-sm font-semibold text-gray-800">{step.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200/60 mb-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-amber-800">Tips Penggunaan</h4>
                <ul className="mt-1 space-y-1">
                  {tips.map((tip, index) => (
                    <li key={index} className="text-xs text-gray-700 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tombol Mulai AR */}
          <button
            onClick={() => navigate('/ar')}
            className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ScanLine className="w-5 h-5" />
            Mulai AR Sekarang
          </button>

          {/* Catatan */}
          <p className="text-[10px] text-gray-400 text-center mt-4">
            Pastikan perangkat Anda mendukung AR dan memiliki kamera yang berfungsi dengan baik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ARGuide;