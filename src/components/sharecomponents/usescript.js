import { useEffect } from 'react';

const useScript = url => {
    


    useEffect(() => {
        let count = 0 ;
        url.forEach(element => {
            
            count ++;
            let script = document.createElement('script');
            script.setAttribute("id", `js${count}`);
            script.src = element;
            script.async = false;
            if(!document.getElementById(`js${count}`)) {
                document.body.appendChild(script).id = `js${count}`;
            }
            
            
            //return () => {
              //  document.body.removeChild(script);
            //}
        });
    }, [url]);
};

export default useScript;