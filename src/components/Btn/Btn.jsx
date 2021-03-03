import React from 'react';
import './Btn.css';

import {useHistory} from 'react-router-dom';

const Btn = (props) => {

    let history = useHistory();

    const click = () => {
        console.log(props.valor);
        history.push(`/${props.valor}`);
    };


    return(
        <div onClick={() => click()} className="componenteBoton">
            {props.text}
        </div>
    )
};


export default Btn;