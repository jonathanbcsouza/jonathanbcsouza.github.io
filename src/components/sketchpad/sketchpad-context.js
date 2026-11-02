import { createContext, useContext } from 'react';

/**
 * Separate from the provider component so that file exports only a component,
 * which is what keeps fast refresh working during development.
 */
export const SketchpadContext = createContext(null);

export const useSketchpad = () => {
  const value = useContext(SketchpadContext);
  if (!value) {
    throw new Error('useSketchpad must be used inside a SketchpadProvider');
  }
  return value;
};
