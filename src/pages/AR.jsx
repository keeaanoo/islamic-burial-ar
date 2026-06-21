import React, { useEffect, useRef, useState } from 'react'
import 'aframe-extras'
import targetsMind from '../assets/targets.mind?url'
import gltf from '../assets/model-backup-textured.gltf?url'

const steps = [
  {
    clip: 'step1',
    title: 'Menggali Kubur',
    description: 'Mempersiapkan liang kubur sesuai syariat Islam.'
  },
  {
    clip: 'step2',
    title: 'Menurunkan Jenazah',
    description: 'Jenazah diturunkan ke dalam liang kubur dengan hati-hati.'
  },
  {
    clip: 'step3',
    title: 'Posisi Jenazah',
    description: 'Jenazah dimiringkan menghadap kiblat.'
  },
  {
    clip: 'step4',
    title: 'Menutup Kubur',
    description: 'Liang kubur ditutup dan dirapikan.'
  }
]

const AR = () => {
  const modelRef = useRef(null)
  const [currentStep, setCurrentStep] = useState(0)

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

    const handleLoaded = () => {
      model.setAttribute(
        'animation-mixer',
        `clip: ${steps[0].clip}; loop: once; clampWhenFinished: true`
      )
    }

    model.addEventListener('model-loaded', handleLoaded)

    return () => {
      model.removeEventListener('model-loaded', handleLoaded)
    }
  }, [])

  return (
    <div className="relative w-screen h-screen">
      <a-scene
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
          <a-gltf-model
            ref={modelRef}
            src="#avatarModel"
            position="0 0 -0.6"
            rotation="90 0 0"
            scale="0.7 0.7 0.7"
          ></a-gltf-model>
        </a-entity>
      </a-scene>

      {/* Info Card */}
      <div className="absolute top-4 left-4 right-4 bg-white/90 rounded-xl p-4 shadow-lg z-50">
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

      {/* Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-50">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-5 py-3 bg-white rounded-xl shadow disabled:opacity-40"
        >
          ← Prev
        </button>

        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="px-5 py-3 bg-blue-600 text-white rounded-xl shadow disabled:opacity-40"
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default AR