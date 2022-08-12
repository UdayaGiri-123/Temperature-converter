import React from "react";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";

function CeltoFa(C){
    return (C*1.8+32);
}

function FatoCel(F){
    return (F-32)/1.8;
}
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            celcius:"36",
            Fahrenheit:"104"
        }
        this.handleCel=this.handleCel.bind(this);
        this.handleFa=this.handleFa.bind(this);
    }
handleCel(celcius){
    this.setState({
        celcius:celcius,
        Fahrenheit:CeltoFa(celcius)
      });
}

handleFa(Fahrenheit){
    this.setState({
        celcius:FatoCel(Fahrenheit),
        Fahrenheit:Fahrenheit
    });
}

    render(){
        return(
            <div>
                <Celcius temp={this.state.celcius} changeCel={this.handleCel}/>
                <Fahrenheit temp={this.state.Fahrenheit} changeFa={this.handleFa}/>
            </div>
        )
    }
}