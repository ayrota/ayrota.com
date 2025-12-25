import { createContext, useContext } from 'react';
import type { Phase } from './phase';

export const PhaseContext = createContext<Phase>('orientation');

export function usePhase() {
  return useContext(PhaseContext);
}