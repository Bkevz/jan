import { CustomComponents } from 'react-day-picker';
import { LucideProps } from 'lucide-react';
import React from 'react';

declare module 'react-day-picker' {
  export interface CustomComponents {
    IconPrevious?: (props: LucideProps) => React.ReactNode;
    IconNext?: (props: LucideProps) => React.ReactNode;
    IconDropdown?: (props: LucideProps) => React.ReactNode;
  }
}