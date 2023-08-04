import { MutableRefObject, useState } from 'react';
import useIsomorphicEffect from './useIsomorphicEffect';

const useIsOverflow = ({ ref }: { ref: MutableRefObject<HTMLDivElement | null> }) => {
  const [isOverflow, setIsOverflow] = useState<boolean>(false);
  const isomorphicEffect = useIsomorphicEffect();

  isomorphicEffect(() => {
    const { current } = ref;
    if (current) {
      const hasOverflow = current.scrollWidth > current.clientWidth;

      setIsOverflow(hasOverflow);
    }
  }, [ref]);

  return isOverflow;
};

export default useIsOverflow;
