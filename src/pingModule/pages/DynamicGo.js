import React from 'react'
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import { getPingPongModule } from '../redux/module'
import Go from './Go'

export default function Dynamic() {
  return (
    <DynamicModuleLoader modules={[getPingPongModule()]}>
      <Go />
      <div>dinamic</div>
    </DynamicModuleLoader>
  );
}