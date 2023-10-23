import React from 'react';
import MainProduct from './Main_product';
import { super_market } from "../data/super_market";
export default function SuperMarket() {
  return (
    <MainProduct data={super_market}/>
  )
}
