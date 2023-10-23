import React from 'react'
import { electronics } from "../data/electronic devices";
import MainProduct from './Main_product';
export default function Electronics() {
  return (
    <MainProduct data={electronics}/>
  )
}
