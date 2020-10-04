import { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'

export const BREAKPOINT = {
    XS: 'XS',
    SM: 'SM',
    MD: 'MD',
    LG: 'LG',
    XL: 'XL'
}

const BREAKPOINT_WIDTH = {
    SM: 576,
    MD: 767,
    LG: 992,
    XL: 1200
}

const getDeviceConfig = (width) => {
    if (width >= 0 && width < BREAKPOINT_WIDTH.SM) {
        return BREAKPOINT.XS
    } else if (width >= BREAKPOINT_WIDTH.SM && width < BREAKPOINT_WIDTH.MD) {
        return BREAKPOINT.SM
    } else if (width >= BREAKPOINT_WIDTH.MD && width < BREAKPOINT_WIDTH.LG) {
        return BREAKPOINT.MD
    } else if (width >= BREAKPOINT_WIDTH.LG && width < BREAKPOINT_WIDTH.XL) {
        return BREAKPOINT.LG
    } else if (width >= BREAKPOINT_WIDTH.XL) {
        return BREAKPOINT.XL
    } else {
        const msg = `Could not determine breakpoint. [width=${width}]`
        alert(msg)
        throw new Error(msg)
    }
};

const useBreakpoint = () => {
    const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));
    //
    useEffect(() => {
        const calcInnerWidth = throttle(function () {
            setBrkPnt(getDeviceConfig(window.innerWidth))
        }, 200);
        window.addEventListener('resize', calcInnerWidth);
        return () => window.removeEventListener('resize', calcInnerWidth);
    }, [])
    //
    return brkPnt
}

export default useBreakpoint