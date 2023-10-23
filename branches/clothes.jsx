import React from "react";
import { clothes } from "../data/clothes";
import MainProduct from "./Main_product";


export default function Clothes() {
  return (
    <MainProduct data={clothes}/>
    
  );
}
