import { useState, useCallback } from 'react';

const useComponentSize = () => {
    const [size,setSize] = useState({height: 360});

    const onLayout = useCallback(event => {
        const { width, height } = event.nativeEvent.layout;
        setSize({ width, height });
    }, []);
    
    return [size, onLayout];
};

export default useComponentSize;