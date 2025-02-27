import { useContext } from 'react';
import { CyclesContext } from '../contexts/cycles-context';

export function UseCycles() {
  const context = useContext(CyclesContext);

  return context;
}
