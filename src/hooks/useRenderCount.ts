import {useEffect} from 'react';

export const useRenderCount = (componentName: string) => {
  useEffect(() => {
    console.log('redering ', componentName);
  });
};
