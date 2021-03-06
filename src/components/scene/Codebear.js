import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/codebear.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['tsique_art_compact-0001_1'].geometry} material={materials['palette.007']} />
        <mesh geometry={nodes['tsique_art_compact-0001_2'].geometry} material={materials.palette} />
        <mesh geometry={nodes['tsique_art_compact-0001_3'].geometry} material={materials['palette.001']} />
        <mesh geometry={nodes['tsique_art_compact-0001_4'].geometry} material={materials['palette.002']} />
        <mesh geometry={nodes['tsique_art_compact-0001_5'].geometry} material={materials['palette.003']} />
        <mesh geometry={nodes['tsique_art_compact-0001_6'].geometry} material={materials['palette.004']} />
        <mesh geometry={nodes['tsique_art_compact-0001_7'].geometry} material={materials['palette.005']} />
        <mesh geometry={nodes['tsique_art_compact-0001_8'].geometry} material={materials['palette.006']} />
      </group>
    </group>
  )
}

useGLTF.preload('/codebear.glb')
