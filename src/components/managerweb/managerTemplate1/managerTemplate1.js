import React from 'react';
import ManagerTemplate1Session1 from './managerTamplate1Session1';
import ManagerTemplate1Session2 from './managerTamplate1Session2';
import ManagerTemplate1Session3 from './managerTamplate1Session3';
import ManagerTemplate1Session4 from './managerTamplate1Session4';
import ManagerTemplate1Session5 from './managerTamplate1Session5';
import ManagerTemplate1Session6 from './managerTamplate1Session6';
import ManagerTemplate1Session7 from './managerTamplate1Session7';
import ManagerTemplate1Session8 from './managerTamplate1Session8';

function ManagerTemplate1(props){
    return(
        <div className="container-fluid">
            <ManagerTemplate1Session1 {...props}/>
            <ManagerTemplate1Session2 {...props}/>
            <ManagerTemplate1Session3 {...props}/>
            <ManagerTemplate1Session4 {...props}/>
            <ManagerTemplate1Session5 {...props}/>
            <ManagerTemplate1Session6 {...props}/>
            <ManagerTemplate1Session7 {...props}/>
            <ManagerTemplate1Session8 {...props}/>
        </div>
      
    )
}

export default ManagerTemplate1;