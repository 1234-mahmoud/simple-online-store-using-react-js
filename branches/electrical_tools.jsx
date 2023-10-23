import React from "react";
import { electrical_tools } from "../data/electrical_Tools";
import MainProduct from "./Main_product";
export default function ElectricalTools() {

  return (
    <MainProduct data={electrical_tools}/>
  )
}
