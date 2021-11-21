import React, { useEffect } from "react";
import { usePrevious } from "react-use";
import { scroller } from "react-scroll";
import useReactRouter from "use-react-router";

export default () => {
  const { history, location } = useReactRouter();
  const { pathname, search, hash } = location;
  const prevLocation = usePrevious({ location: { pathname, search, hash } });

  useEffect(() => {
    if (hash !== "" && hash !== "#_=_") {
      if (
        !prevLocation ||
        (prevLocation.location !== undefined &&
          prevLocation.location.pathname !== pathname)
      ) {
        scroller.scrollTo(hash.replace("#", ""), {
          duration: 800,
          delay: 0,
          smooth: true,
        });
      } else {
        scroller.scrollTo(hash.replace("#", ""), {
          duration: 800,
          delay: 0,
          smooth: true,
        });
      }
    }
  }, [hash, pathname]);
  return <></>;
};
