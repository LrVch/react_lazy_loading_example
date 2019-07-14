import React from 'react'
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import { getUserModule } from '../../redux/module'
import User from './User'

export default function Dynamic() {
  return (
    <DynamicModuleLoader modules={[getUserModule()]}>
      <User />
    </DynamicModuleLoader>
  );
}