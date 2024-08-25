"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export const LayoutThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider {...props}>
      {children}
    </ThemeProvider>
  );
}