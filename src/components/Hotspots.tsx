import { Html } from '@react-three/drei'

const positions: IPos[] = [
	{ x: 7.06, y: 8.17, z: 1.83 },
	{ x: -8.32, y: 7.65, z: 1.32 },
	{ x: 3.74, y: 8.75, z: -0.55 },
]

const Hotspots = ({ goToPos }: { goToPos: (pos: IPos) => void }) => {
	return (
		<>
			{positions.map((pos: IPos, index) => (
				<Html occlude="raycast" position={[pos.x, pos.y, pos.z]} key={index}>
					<button
						type="button"
						onClick={() => goToPos(pos)}
						className="w-[25px] h-[25px] bg-white/60 hover:bg-black/60 rounded-full text-[14px] font-bold text-black hover:text-white"
					>
						{index + 1}
					</button>
				</Html>
			))}
		</>
	)
}

export default Hotspots
