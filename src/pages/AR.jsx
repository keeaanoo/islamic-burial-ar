import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronUp, ChevronDown, Maximize2 } from 'lucide-react'
import 'aframe-extras'
import targetsMind from '../assets/targets.mind?url'
import gltf from '../assets/model-backup-textured.gltf?url'

const steps = [
  {
    clip: 'step1',
    title: 'Persiapan Liang Kubur',
    description: `Kedalaman ±2 meter (setinggi orang berdiri tangan terangkat), lebar 50–72 cm, panjang melebihi tinggi jenazah.

Model galian:
- Lahad (ceruk di dinding sisi kiblat) untuk tanah keras.
- Shaqq (parit di tengah dasar) untuk tanah gembur.

Tujuan: Melindungi jenazah dari bau dan gangguan luar.`
  },
  {
    clip: 'step2',
    title: 'Menurunkan Jenazah',
    description: `Proses ini dilakukan oleh laki-laki (terutama keluarga terdekat) meskipun jenazahnya perempuan.

Cara: Dimasukkan perlahan ke liang lahat, kepala lebih dulu, dari arah kaki kuburan (selatan). 
Untuk jenazah perempuan, dibentangkan kain di atas kubur sebagai penutup.

Doa: "Bismillāh wa 'alā millati rasūlillāh" atau "Bismillāhi wa 'alā sunnati rasūlillāh".
Tambahan: "Ya Allah, bukalah pintu langit untuk rohnya, luaskan jalan masuknya, lapangkan kuburnya."`
  },
  {
    clip: 'step3',
    title: 'Posisi Jenazah & Pelepasan Ikatan',
    description: `Posisi: Miring ke kanan (lambung kanan di bawah), wajib menghadap Kiblat.

Pelepasan ikatan: Semua tali pengikat kain kafan dilepas.

Kontak dengan tanah: Kain di pipi kanan dan ujung kaki dibuka, ditempelkan langsung ke tanah sebagai simbol kerendahan diri.

Penyangga: Punggung dan kepala disangga dengan tanah/batu bata (labinah) agar tetap miring.`
  },
  {
    clip: 'step4',
    title: 'Penutupan & Penimbunan',
    description: `Penutup lahat: Ditutup papan kayu/bambu/batu secara menyamping agar tanah tidak langsung menimpa jasad.

Taburan tanah: Para hadirin menaburkan 3 genggam tanah dari arah kepala.

Penyelesaian:
- Makam ditimbun hingga penuh, digunduk setinggi satu jengkal (seperti punuk unta).
- Diberi tanda batu nisan di bagian kepala.
- Disunahkan menyiram air bersih di atas pusara untuk memadatkan tanah.`
  },
  {
    clip: 'step5',
    title: 'Doa Setelah Pemakaman',
    description: 'Bacaan doa untuk jenazah setelah pemakaman. Klik tombol "Lihat Doa" untuk melihat kumpulan doa lengkap.'
  }
];

const AR = () => {
  const navigate = useNavigate()
  const sceneRef = useRef(null)
  const modelRef = useRef(null)
  const [currentStep, setCurrentStep] = useState(-1)
  const [isExpanded, setIsExpanded] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)

  const stopAr = () => {
    const scene = sceneRef.current
    if (!scene) return

    const mindarSystem = scene.systems?.['mindar-image']
    if (mindarSystem?.stop) {
      mindarSystem.stop()
    }

    const video = scene.querySelector('video')
    if (video) {
      if (video.pause) video.pause()
      if (video.srcObject && video.srcObject.getTracks) {
        video.srcObject.getTracks().forEach((track) => track.stop())
      }
      video.srcObject = null
      video.src = ''
    }

    if (scene.pause) {
      scene.pause()
    }
  }

  const changeAnimation = (stepIndex) => {
    setCurrentStep(stepIndex)

    const model = modelRef.current

    if (model) {
      model.removeAttribute('animation-mixer')

      setTimeout(() => {
        model.setAttribute(
          'animation-mixer',
          `clip: ${steps[stepIndex].clip}; loop: once; clampWhenFinished: true`
        )
      }, 50)
    }
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      changeAnimation(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      changeAnimation(currentStep - 1)
    }
  }

  useEffect(() => {
    const model = modelRef.current
    if (!model) return
    if (currentStep === -1) return

    const handleLoaded = () => {
      model.setAttribute(
        'animation-mixer',
        `clip: ${steps[currentStep].clip}; loop: once; clampWhenFinished: true`
      )
    }

    model.addEventListener('model-loaded', handleLoaded)

    return () => {
      model.removeEventListener('model-loaded', handleLoaded)
    }
  }, [currentStep])

  useEffect(() => {
    return () => {
      stopAr()
    }
  }, [])

  const renderCard = () => {
    if (isMinimized) {
      return (
        <div className="absolute top-16 left-4 right-4 z-40">
          <button
            onClick={() => setIsMinimized(false)}
            className="w-full bg-white/90 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg flex items-center justify-between hover:bg-white/95 transition-all duration-200"
          >
            <span className="text-sm font-medium text-gray-700 truncate">
              {currentStep === -1 ? 'Info Simulasi' : `Langkah ${currentStep + 1}: ${steps[currentStep].title}`}
            </span>
            <Maximize2 size={16} className="text-gray-500 flex-shrink-0" />
          </button>
        </div>
      )
    }

    return (
      <div className="absolute top-16 left-4 right-4 z-40 transition-all duration-300">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-200/50">
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1 min-w-0">
              {currentStep === -1 ? (
                <h2 className="font-bold text-lg text-emerald-800">Simulasi Pemakaman Islami</h2>
              ) : (
                <h2 className="font-bold text-lg text-emerald-800 truncate">
                  {steps[currentStep].title}
                </h2>
              )}
            </div>
            <div className="flex gap-1 flex-shrink-0">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                title={isExpanded ? 'Sembunyikan detail' : 'Tampilkan detail'}
              >
                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            </div>
          </div>

          {isExpanded && (
            <div className="mt-2 space-y-2">
              {currentStep === -1 ? (
                <>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Pelajari prosedur pemakaman sesuai syariat Islam melalui demonstrasi 3D interaktif.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-emerald-600 text-xs">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>Tekan tombol "Mulai" untuk memulai simulasi</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {currentStep + 1} / {steps.length}
                    </span>
                    <div className="flex-1 mx-3 h-1 bg-gray-200 rounded-full">
                      <div 
                        className="h-1 bg-emerald-600 rounded-full transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {steps[currentStep].description}
                  </p>

                  <div className="flex items-center gap-1">
                    {steps.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === currentStep ? 'bg-emerald-600 w-4' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-screen h-screen">
      <a-scene
        ref={sceneRef}
        mindar-image={`imageTargetSrc: ${targetsMind}; filterMinCF:0.001; filterBeta:0.001; uiScanning:no;`}
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights: true"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: true"
      >
        <a-assets>
          <a-asset-item id="avatarModel" src={gltf}></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          {currentStep !== -1 && (
            <a-gltf-model
              ref={modelRef}
              src="#avatarModel"
              position="0 0 -0.6"
              rotation="90 0 0"
              scale="0.7 0.7 0.7"
            ></a-gltf-model>
          )}
        </a-entity>
      </a-scene>

      {/* Header */}
      <div className="bg-white h-14 w-full flex justify-between items-center p-4 border-b-2 border-gray-200 rounded-b-md drop-shadow-md flex-shrink-0 absolute top-0 left-0 right-0 z-50">
        <button
          onClick={() => {
            stopAr()
            navigate('/home')
          }}
          className="cursor-pointer hover:opacity-70 transition"
        >
          <ChevronLeft color="gray" size={24} />
        </button>
        <h1 className="scroll-m-20 text-center text-lg font-extrabold tracking-tight text-balance">
          Islamic Burial <span className="text-emerald-700">AR</span>
        </h1>
      </div>

      {/* Card retractable */}
      {renderCard()}

      {/* Navigation buttons */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-50">
        {currentStep === -1 ? (
          <button
            onClick={() => setCurrentStep(0)}
            className="px-10 py-2 mb-8 bg-emerald-600 border-b-4 border-emerald-900 text-white rounded-lg shadow font-semibold hover:bg-emerald-700 active:border-b-0 active:border-t-4 active:border-emerald-900 transition"
          >
            Mulai
          </button>
        ) : (
          <>
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-10 py-2 mb-8 bg-gray-100 border-b-4 border-gray-400 text-black rounded-md shadow font-semibold hover:bg-gray-300 active:border-b-0 active:border-t-4 active:border-gray-400 transition disabled:opacity-40"
            >
              Prev
            </button>

            {currentStep === steps.length - 1 ? (
              <button
                onClick={() => {
                  stopAr()
                  navigate('/doa')
                }}
                className="px-10 py-2 mb-8 bg-emerald-600 border-b-4 border-emerald-900 text-white rounded-md shadow font-semibold hover:bg-emerald-700 active:border-b-0 active:border-t-4 active:border-emerald-900 transition"
              >
                Lihat Doa
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="px-10 py-2 mb-8 bg-emerald-600 border-b-4 border-emerald-900 text-white rounded-md shadow font-semibold hover:bg-emerald-700 active:border-b-0 active:border-t-4 active:border-emerald-900 transition"
              >
                Next
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default AR