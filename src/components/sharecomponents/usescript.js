import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
        url.forEach(element => {
            
            let script = document.createElement('script');
            script.src = element;
            script.async = true;
   
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            }
        });
    }, [url]);
};

export default useScript;