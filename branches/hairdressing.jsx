import React from 'react'
import MainProduct from './Main_product';
import { hairdressing } from '../data/hairdressing';
export default function Hairdressing() {
  return (
    <MainProduct data={hairdressing}/>
  )
}
