
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/codebear.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['tsique_art_compact-0_1'].geometry} material={materials.palette} />
        <mesh geometry={nodes['tsique_art_compact-0_2'].geometry} material={materials['palette.001']} />
        <mesh geometry={nodes['tsique_art_compact-0_3'].geometry} material={materials['palette.002']} />
        <mesh geometry={nodes['tsique_art_compact-0_4'].geometry} material={materials['palette.003']} />
        <mesh geometry={nodes['tsique_art_compact-0_5'].geometry} material={materials['palette.004']} />
        <mesh geometry={nodes['tsique_art_compact-0_6'].geometry} material={materials['palette.005']} />
        <mesh geometry={nodes['tsique_art_compact-0_7'].geometry} material={materials['palette.006']} />
        <mesh geometry={nodes['tsique_art_compact-0_8'].geometry} material={materials['palette.007']} />
      </group>
    </group>
  )
}

useGLTF.preload('/codebear.glb')
