import React from 'react'
import { baby_toys } from '../data/baby_toys'
import MainProduct from "./Main_product";
export default function BabyToys() {
  return (
    <MainProduct data={baby_toys}/>
  )
}
