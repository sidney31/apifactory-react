import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import Perlin from './perlin'

export const Wave = () => {
	const waveRef = useRef(null)

	var width: number
	var height: number
	var width: number
	var size: number
	var t: number
	var waveHeight: number
	var perlin: Perlin
	var scene: THREE.Scene
	var camera: THREE.PerspectiveCamera
	var renderer: THREE.WebGLRenderer
	var geometry: THREE.PlaneGeometry
	var wireframe: THREE.WireframeGeometry
	var lineMaterial: THREE.LineBasicMaterial
	var line: THREE.LineSegments

	useEffect(() => {
		width = waveRef.current?.offsetWidth
		height = waveRef.current?.offsetHeight
		size = (width + height) / 2
		t = 0
		waveHeight = 30
		perlin = new Perlin()

		scene = new THREE.Scene()
		camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		)
		camera.position.z = size

		renderer = new THREE.WebGLRenderer({ antialias: true })
		renderer.setClearColor(0xf5f5f5)
		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.setPixelRatio(window.devicePixelRatio)
		waveRef.current?.appendChild(renderer.domElement)

		geometry = new THREE.PlaneGeometry(
			size * 1.3,
			size * 1.3,
			size / 30,
			size / 30
		)

		wireframe = new THREE.WireframeGeometry(geometry)
		lineMaterial = new THREE.LineBasicMaterial({ color: 0x73d2e6 })
		line = new THREE.LineSegments(wireframe, lineMaterial)
		line.rotation.x = -86 * (Math.PI / 180) // deg to rad: `degrees * (PI / 180)`;
		scene.add(line)

		function updateVertices(geom: THREE.LineSegments) {
			let vertices = geom.geometry.attributes.position.array

			for (let i = 0; i <= vertices.length; i += 3) {
				vertices[i + 2] =
					perlin.noise(vertices[i] / 900 + t, vertices[i + 1] / 900 + t) *
					waveHeight
			}
			geom.geometry.attributes.position.needsUpdate = true
		}

		var animate = function () {
			requestAnimationFrame(animate)
			t += 0.001
			updateVertices(line)
			renderer.render(scene, camera)
		}

		animate()
	}, [])

	return <div ref={waveRef}></div>
}
