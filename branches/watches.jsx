import React from 'react';
import MainProduct from './Main_product';
import { watches } from "../data/watches";
export default function SuperMarket() {
  return (
    <MainProduct data={watches}/>
  )
}
