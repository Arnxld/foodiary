import { Tailwind } from '@react-email/tailwind';
import React from 'react';

interface ITailwindConfigProps {
  children: React.ReactNode
}

export function TailwindConfig({children}: ITailwindConfigProps) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              foodiary: {
                green: '#64a30d',
              },
              gray: {
                600: '#a1a1AA',
              }
            }
          }
        }
      }}
    >
      {children}
    </Tailwind>
  )
}
