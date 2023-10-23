import React from 'react'
import MainProduct from "./Main_product";
import { furniture } from '../data/furniture';
export default function Furniture() {
  return (
    <MainProduct data={furniture}/>
  )
}
