import { useState, useEffect } from 'react';
import Observer from '../observer/index';
import { getScrollParent } from '../utils/getScrollParent';
function useVisible(currentElem, config) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (!currentElem.current) {
            return;
        }
        const parent = getScrollParent(currentElem.current);
        const observer = new Observer(currentElem.current, parent, setVisible, config);
        observer.observe();
        return () => observer.cancelObservation();
    }, [currentElem.current]);
    return visible;
}
export default useVisible;
