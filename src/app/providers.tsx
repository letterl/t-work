// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { api } from "~/trpc/react";


export function Providers({children}: { children: React.ReactNode }) {

  
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}