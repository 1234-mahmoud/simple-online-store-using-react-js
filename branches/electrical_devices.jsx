import React from "react";
import MainProduct from "./Main_product";
import { electrical_devices } from "../data/electrical_devices";
export default function ElectricalDevices() {

  return (
    <MainProduct data={electrical_devices}/>
  )
}
