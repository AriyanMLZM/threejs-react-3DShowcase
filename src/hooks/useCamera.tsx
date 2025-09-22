import gsap from 'gsap'
import { useRef } from 'react'
import type { PerspectiveCamera } from 'three'

const useCamera = () => {
	const cameraRef = useRef<PerspectiveCamera>(null)

	const goToPos = (pos: IPos) => {
		gsap.to(cameraRef.current!.position, {
			...pos,
			duration: 1.5,
		})
	}

	return { cameraRef, goToPos }
}

export default useCamera
