import React from 'react';
import '../styles/styles.css';

const Titulo2=props=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="font-weight-bold" id="titulo_2">{props.titulo}</h1>
                </div>
            </div>
        </div>
    );
}


export default Titulo2;