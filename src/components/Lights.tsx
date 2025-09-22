const Lights = () => {
  return (
		<>
			<hemisphereLight groundColor="#fff" intensity={0.4} />
			<directionalLight intensity={1.5} position={[2, 5, 5]} />
			<directionalLight intensity={0.8} position={[-5, 5, -5]} />
		</>
	)
}

export default Lights