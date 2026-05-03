import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const BreakpointContext = createContext();

export const BreakpointProvider = function BreakpointProvider({ children }) {
    // Bootstrap breakpoints
    const isXxl = useMediaQuery({ minWidth: 1400 });
    const isXl = useMediaQuery({ minWidth: 1200, maxWidth: 1399 });
    const isLg = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
    const isMd = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isSm = useMediaQuery({ minWidth: 576, maxWidth: 767 });
    const isXs = useMediaQuery({ maxWidth: 575 });

    const isTouchDevice =
        typeof window !== "undefined" && navigator.maxTouchPoints > 0;

    const isMobileDevice =
        typeof window !== "undefined" &&
        (navigator.userAgentData?.mobile === true ||
            /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent));

    // Determine current breakpoint
    const current = isXxl
        ? "xxl"
        : isXl
          ? "xl"
          : isLg
            ? "lg"
            : isMd
              ? "md"
              : isSm
                ? "sm"
                : "xs";

    // Helper flags
    const isXsOnly = isXs;
    const isSmOnly = isSm;
    const isMdOnly = isMd;
    const isLgOnly = isLg;
    const isXlOnly = isXl;
    const isXxlOnly = isXxl;

    const isSmDown = isXs || isSm;
    const isMdDown = isXs || isSm || isMd;
    const isLgDown = isXs || isSm || isMd || isLg;
    const isXlDown = isXs || isSm || isMd || isLg || isXl;

    const isSmUp = isSm || isMd || isLg || isXl || isXxl;
    const isMdUp = isMd || isLg || isXl || isXxl;
    const isLgUp = isLg || isXl || isXxl;
    const isXlUp = isXl || isXxl;

    return (
        <BreakpointContext.Provider
            value={{
                current,

                // exact matches
                isXs,
                isSm,
                isMd,
                isLg,
                isXl,
                isXxl,

                // only
                isXsOnly,
                isSmOnly,
                isMdOnly,
                isLgOnly,
                isXlOnly,
                isXxlOnly,

                // up
                isSmUp,
                isMdUp,
                isLgUp,
                isXlUp,

                // down
                isSmDown,
                isMdDown,
                isLgDown,
                isXlDown,

                isTouchDevice,
                isMobileDevice,
            }}
        >
            {children}
        </BreakpointContext.Provider>
    );
};

export const useBreakpoint = function useBreakPoint() {
    return useContext(BreakpointContext);
};
