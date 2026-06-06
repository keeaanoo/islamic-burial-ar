import React from 'react'

const App = () => {
  return (
    <div className='w-screen h-screen'>
<a-scene mindar-image="imageTargetSrc: src\assets\targets.mind; uiError:no; uiLoading:no; filterMinCF:0.001; filterBeta: 0.001;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights: false" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: true">
        <a-assets>
            <a-asset-item id="avatarModel" src="src\assets\model.gltf"></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        <a-entity mindar-image-target="targetIndex: 0">
            <a-gltf-model rotation="90 0 0" position="0 0 -1.5" scale="1 1 1" src="#avatarModel"></a-gltf-model>
        </a-entity>
        </a-scene>
    </div>
  )
}

export default App