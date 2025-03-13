import { useState, useCallback } from 'react';

/**
 * A custom hook that provides a boolean toggle state with functions to control it
 * @param initialState The initial state of the toggle (default: false)
 * @returns [state, toggle, setTrue, setFalse, setValue] 
 *   - state: current boolean state
 *   - toggle: function to toggle the state
 *   - setTrue: function to set the state to true
 *   - setFalse: function to set the state to false
 *   - setValue: function to set the state to a specific boolean value
 */
export const useToggle = (initialState: boolean = false) => {
  const [state, setState] = useState<boolean>(initialState);

  // Toggle the state
  const toggle = useCallback(() => setState(prev => !prev), []);
  
  // Set state to true
  const setTrue = useCallback(() => setState(true), []);
  
  // Set state to false
  const setFalse = useCallback(() => setState(false), []);
  
  // Set state to a specific boolean value
  const setValue = useCallback((value: boolean) => setState(value), []);

  return [state, toggle, setTrue, setFalse, setValue] as const;
};