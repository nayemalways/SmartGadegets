import React, { useEffect } from 'react';

const useClickOutside = (ref, handler, enabled = true) => {
    useEffect(() => {
        if(!enabled) return;

        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)) return;
            handler(event);
        }

         document.addEventListener("mousedown", listener);

         return () => {
            document.removeEventListener("mousedown", listener);
         }
    }, [ref, handler, enabled]);
};

export default useClickOutside;