import React from 'react';
import LeftContain from './leftContain/leftContain';
import RightContain from './rightContain/rightContain';
//import ListCourse from './ListCourse/ListCourse';
import './Contain.css';
const container = () => {
    return(
        <div className="contain">
            <LeftContain/>
            <RightContain/>
        </div>
    );
}
export default container;
