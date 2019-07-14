import React from 'react'
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import { getCounterModule } from '../../redux/module'
import Counter from './Counter'

export default function Dynamic() {
  return (
    <DynamicModuleLoader modules={[getCounterModule()]}>
      <Counter />
    </DynamicModuleLoader>
  );
}