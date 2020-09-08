import React from 'react';
import '../styles/styles.css';

class DatosInicio extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <form>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <input type="email" className="form-control" id="iniciar" placeholder={this.props.input1}/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <input type="password" className="form-control" id="iniciar" placeholder={this.props.input2}/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <p><a className="texto_1" href="/olvidaste-contraseña">{this.props.question1}</a></p>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                    <div className="col-md-6 col-sm-6 col-lg-6">
                    <button type="submit" className="btn w-100 " id="button_2"><a className="texto_1" href="/">{this.props.button}</a></button>
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3"></div>
                </div>
                </form>
                <br/>
                <div className="row">
                    <div className="col text-center"><a className="texto_1" href="/">{this.props.question2}</a></div>
                </div>
            </div>
        );
    }
}

export default DatosInicio;