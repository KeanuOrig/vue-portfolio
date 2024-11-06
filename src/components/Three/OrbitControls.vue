<script setup>
import { extend, useTresContext } from '@tresjs/core'
import { OrbitControls } from 'three/addons/controls/OrbitControls'

extend({ OrbitControls })

const { camera, renderer } = useTresContext()
</script>
<!-- :minPolarAngle="Math.PI / 2"
    :maxPolarAngle="Math.PI / 2" -->
<template>
  <TresOrbitControls
    v-if="renderer"
    :args="[camera, renderer?.domElement]"
    :enableZoom="false"
    :minPolarAngle="Math.PI / 2"
    :maxPolarAngle="Math.PI / 2"
  />
</template>