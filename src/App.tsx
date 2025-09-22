import {
	ContactShadows,
	OrbitControls,
	PerspectiveCamera,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './components/Model'
import Lights from './components/Lights'
import Hotspots from './components/Hotspots'
import useCamera from './hooks/useCamera'

const App = () => {
	const { cameraRef, goToPos } = useCamera()

	return (
		<main className="bg-gray-400 flex justify-center items-center w-screen h-screen">
			<Canvas>
				<Suspense>
					<OrbitControls
						target={[0, 3, -2.5]}
						maxDistance={30}
						minDistance={5}
						enablePan={false}
					/>
					<PerspectiveCamera
						ref={cameraRef}
						position={[11.45, 10.59, 13.5]}
						near={0.1}
						far={1000}
						fov={50}
						makeDefault
					/>
					<Model />
					<Lights />
					<ContactShadows
						position={[0, -1, 0]}
						blur={1}
						opacity={0.5}
						scale={20}
						color="#000"
					/>
					<Hotspots goToPos={goToPos} />
				</Suspense>
			</Canvas>
		</main>
	)
}

export default App
