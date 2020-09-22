import React from 'react';
import '../styles/styles.css';

class Titulo2 extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="font-weight-bold" id="titulo_2">{this.props.titulo}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Titulo2;