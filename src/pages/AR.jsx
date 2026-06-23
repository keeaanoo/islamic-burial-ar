import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Info, ChevronLeft } from 'lucide-react'
import 'aframe-extras'
import targetsMind from '../assets/targets.mind?url'
import gltf from '../assets/model-backup-textured.gltf?url'

const steps = [
  {
    clip: 'step1',
    title: 'Persiapan Liang Kubur',
    description: 'Membuat lubang yang luas dan dalam. Disarankan menggunakan model Liang Lahat (lubang di dinding samping) jika tanah keras, atau model Shaqq (lubang di tengah dasar) jika tanah gembur'
  },
  {
    clip: 'step2',
    title: 'Menurunkan Jenazah',
    description: 'Jenazah diangkat perlahan dan dimasukkan ke liang lahat dimulai dari bagian kepala terlebih dahulu melalui arah kaki kuburan (posisi selatan)'
  },
  {
    clip: 'step3',
    title: 'Posisi Jenazah & Pelepasan Ikatan',
    description: 'Jenazah wajib dimiringkan ke kanan dan dipastikan menghadap ke arah Kiblat, Semua tali pengikat kain kafan dilepas. Pipi kanan dan ujung kaki ditempelkan langsung ke tanah setelah kain kafan di bagian tersebut dibuka'
  },
  {
    clip: 'step4',
    title: 'Penutupan & Penimbunan',
    description: 'Lubang ditutup dengan papan kayu/bambu sebelum ditimbun tanah Setiap hadirin disunahkan menaburkan tiga genggam tanah dari arah kepala.'
  }
]

const AR = () => {
  const navigate = useNavigate()
  const sceneRef = useRef(null)
  const modelRef = useRef(null)
  const [currentStep, setCurrentStep] = useState(-1)

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

    // Jika belum mulai (Step 0), jangan set animasi
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

  return (
    <div className="relative w-screen h-screen">
      <a-scene
        ref={sceneRef}
        mindar-image={`imageTargetSrc: ${targetsMind}; filterMinCF:0.001; filterBeta:0.001;`}
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights: true"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: true"
      >
        <a-assets>
          <a-asset-item
            id="avatarModel"
            src={gltf}
          ></a-asset-item>
        </a-assets>

        <a-camera
          position="0 0 0"
          look-controls="enabled: false"
        ></a-camera>

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

      {/* Info Card */}
      <div className="absolute top-16 left-4 right-4 bg-white/90 rounded-sm p-4 shadow-lg z-40">
        {currentStep === -1 ? (
          <div>
            <h2 className="font-bold text-lg">Simulasi Pemakaman Islami</h2>
            <p className="text-sm text-gray-600 mt-2">
              Pelajari prosedur pemakaman sesuai syariat Islam melalui demonstrasi 3D interaktif.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="font-bold text-lg">
              {steps[currentStep].title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {steps[currentStep].description}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Langkah {currentStep + 1} dari {steps.length}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-50">
        {currentStep === -1 ? (
          <button
            onClick={() => setCurrentStep(0)}
            className="px-10 py-2 bg-emerald-600 border-b-4 border-emerald-900 text-white rounded-lg shadow font-semibold hover:bg-emerald-700 active:border-b-0 active:border-t-4 active:border-emerald-900 transition"
          >
            Mulai
          </button>
        ) : (
          <>
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-10 py-2 bg-gray-100 border-b-4 border-gray-400 text-black rounded-md shadow font-semibold hover:bg-gray-300 active:border-b-0 active:border-t-4 active:border-gray-400 transition disabled:opacity-40"
            >
              Prev
            </button>

            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className="px-10 py-2 bg-emerald-600 border-b-4 border-emerald-900 text-white rounded-md shadow font-semibold hover:bg-emerald-700 active:border-b-0 active:border-t-4 active:border-emerald-900 transition"
            >
              Next 
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default AR