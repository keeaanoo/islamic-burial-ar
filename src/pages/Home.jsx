import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Info } from 'lucide-react'
import { ScanLine } from "lucide-react";

export default function Home() {
    const navigate = useNavigate();

    // Data 6 langkah penguburan
    const steps = [
        {
            id: 1,
            title: "Persiapan Liang Kubur",
            description: "Menyiapkan ukuran dan bentuk liang yang sesuai."
        },
        {
            id: 2,
            title: "Meletakkan Jenazah",
            description: "Menempatkan jenazah dengan posisi yang benar."
        },
        {
            id: 3,
            title: "Menutup Liang Lahad",
            description: "Menutup ruang lahad di samping jenazah."
        },
        {
            id: 4,
            title: "Menimbun Tanah",
            description: "Menimbun liang kubur dengan tanah hingga rata."
        },
        {
            id: 5,
            title: "Setelah Penguburan",
            description: "Doa dan amalan setelah pemakaman."
        }
    ];

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
            <div className="max-w-sm w-full h-full bg-white flex flex-col">
                {/* Header */}
                <div className="bg-inherit h-14 w-full flex justify-between items-center p-4 border-b-2 border-gray-200 rounded-b-md drop-shadow-md flex-shrink-0">
                    <h1 className="scroll-m-20 text-center text-lg font-extrabold tracking-tight text-balance">
                        Islamic Burial AR
                    </h1>
                    <div className="cursor-pointer">
                        <Info color="gray" size={20} />
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-5 py-6 bg-white [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                    <div>
                        <h2 className="scroll-m-20 text-xl font-bold tracking-tight text-emerald-800  border-emerald-800 pb-3 mb-4">
                            Menghantarkan Pulang: Panduan Penguburan Jenazah dalam Islam
                        </h2>

                        <p className="leading-6 text-sm text-gray-700 mb-4">
                            Penguburan jenazah merupakan bentuk penghormatan terakhir yang diajarkan oleh Islam kepada umatnya, baik laki-laki maupun perempuan. Sebagai bagian dari rangkaian perawatan jenazah, prosesi ini bukan sekadar mengubur jasad, melainkan sebuah ibadah yang sarat akan makna dan doa.
                        </p>

                        {/* Hukum dan Landasan Dalil */}
                        <section className="mb-6">
                            <h3 className="text-md font-semibold text-emerald-800 mb-2">
                                Hukum dan Landasan Dalil
                            </h3>
                            <p className="leading-6 text-sm text-gray-700">
                                Hukum mengurus dan menguburkan jenazah adalah <span className="font-medium">Fardhu Kifayah</span> bagi umat Muslim di sekitarnya. Kewajiban ini ditegaskan Allah SWT dalam Al-Qur'an:
                            </p>
                            <blockquote className="border-l-4 border-emerald-400 pl-4 my-3 italic text-sm text-gray-600">
                                "Bukankah Kami menjadikan bumi sebagai (tempat) berkumpul bagi yang (masih) hidup dan yang (sudah) mati." <br />
                                <span className="text-xs font-medium">(QS. Al-Mursalat: 25-26)</span>
                            </blockquote>
                            <blockquote className="border-l-4 border-emerald-400 pl-4 my-3 italic text-sm text-gray-600">
                                "Kemudian, Dia mematikannya lalu menguburkannya." <br />
                                <span className="text-xs font-medium">(QS. Abasa: 21)</span>
                            </blockquote>
                            <p className="leading-6 text-sm text-gray-700 mt-2">
                                Rasulullah SAW juga bersabda bahwa siapa saja yang mengantarkan jenazah hingga dimakamkan akan mendapatkan pahala sebesar dua qiroth (setara dua gunung besar).
                            </p>
                        </section>

                        {/* Tujuan Penguburan dalam Islam */}
                        <section className="mb-6">
                            <h3 className="text-md font-semibold text-emerald-800 mb-2">
                                Tujuan Penguburan dalam Islam
                            </h3>
                            <p className="leading-6 text-sm text-gray-700 mb-2">
                                Islam menetapkan tata cara tertentu dalam penguburan dengan tujuan yang mulia:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                                <li>
                                    <span className="font-medium">Menjaga Kehormatan:</span> Liang lahat dibuat cukup dalam (sekitar 2 meter) agar bau jenazah tidak keluar dan jasad terlindungi dari gangguan binatang buas.
                                </li>
                                <li>
                                    <span className="font-medium">Simbol Kerendahan Diri:</span> Membuka pipi jenazah dan menempelkannya ke tanah merupakan wujud kerendahan diri dan kehinaan manusia di hadapan Allah SWT.
                                </li>
                                <li>
                                    <span className="font-medium">Kesederhanaan:</span> Islam melarang pembangunan bangunan permanen atau penghiasan makam secara berlebihan untuk menjaga kesucian tempat peristirahatan tersebut.
                                </li>
                            </ul>
                        </section>

                        {/* Tahapan Ringkas Penguburan — versi baru sesuai permintaan */}
                        <section className="mb-6">
                            <h3 className="text-md font-semibold text-emerald-800 mb-3">
                                Tahapan Ringkas Penguburan (Step-by-Step)
                            </h3>
                            <div className="space-y-3">
                                {steps.map((step) => (
                                    <div 
                                        key={step.id} 
                                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
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
                        <section className="mb-4">
                            <h3 className="text-md font-semibold text-emerald-800 mb-2">
                                Waktu yang Dihindari
                            </h3>
                            <p className="leading-6 text-sm text-gray-700 mb-2">
                                Demi menghormati kesucian ibadah ini, umat Islam disarankan tidak melakukan penguburan pada tiga waktu berikut:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>Saat matahari terbit hingga naik.</li>
                                <li>Saat matahari tepat di atas kepala (puncak).</li>
                                <li>Saat matahari hampir terbenam hingga benar-benar tenggelam.</li>
                            </ul>
                        </section>
                        <section>
                            <button className="bg-emerald-600 border-b-6 border-emerald-800 w-full h-24 m-2 rounded-lg flex gap-8 px-10 items-center jutify-cenetr active:border-b-0 active:border-t-6 active:border-emerald-800 hover:bg-emerald-700"
                            onClick={() => navigate('/ar')}>
                                <ScanLine color="#ffffff" size={60} className=""/>
                                <h4 className="w-3/4 text-3xl text-white font-semibold text-left">Coba AR!</h4>
                            </button>
                        </section>
                    </div>
                </div>

            </div>
        </div>
    )
}