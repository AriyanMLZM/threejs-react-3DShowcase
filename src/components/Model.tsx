import { useGLTF } from '@react-three/drei'

const Model = () => {
	const { scene } = useGLTF('./model.glb')

	return (
		<mesh>
			<primitive object={scene} />
		</mesh>
	)
}

export default Model
