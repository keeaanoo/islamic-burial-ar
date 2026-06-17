import React from 'react'
import 'aframe-extras'
import targetsMind from './assets/targets.mind?url'
import step1 from './assets/step1.gltf?url'
import animated from './assets/animated.gltf?url'

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <a-scene mindar-image={`imageTargetSrc: ${targetsMind}; uiError:no; uiLoading:no; filterMinCF:0.001; filterBeta: 0.001;`} color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights: true" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: true">
        <a-assets>
          <a-asset-item id="avatarModel" src={animated}></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        <a-entity mindar-image-target="targetIndex: 0">
            <a-gltf-model rotation="90 0 0" position="0 0 -0.5" scale="0.4 0.4 0.4" src="#avatarModel" animation-mixer="clip: step1"></a-gltf-model>
        </a-entity>
        </a-scene>
    </div>
  )
}

export default App