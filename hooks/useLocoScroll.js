import { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default useLocoScroll = (start) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const scroll = import('locomotive-scroll').then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
      });
    });

    return () => scroll.destroy();
  }, [start]);
};
