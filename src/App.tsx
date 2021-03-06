import React, { Suspense, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import {
 FaceBufferGeometry, FaceTracker, ZapparCamera, ZapparCanvas, Types
} from '@zappar/zappar-react-three-fiber';

import faceMapSrc from './assets/faceMeshTemplate.png'

const FaceMeshMaterial = () => {
    const faceMapTexture = useLoader(TextureLoader, faceMapSrc);
    return <meshStandardMaterial transparent map={faceMapTexture} />;
};

function App() {
    const trackerGroup = useRef<Types.FaceAnchorGroup>()
    return (
      <ZapparCanvas>
        <ZapparCamera userFacing rearCameraMirrorMode="css"/>
        <FaceTracker ref={trackerGroup as any}>
          <Suspense fallback={null}>
            <mesh>
              <FaceMeshMaterial />
              <FaceBufferGeometry trackerGroup={trackerGroup}/>
            </mesh>
          </Suspense>

        </FaceTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>
    );
}

export default App;
