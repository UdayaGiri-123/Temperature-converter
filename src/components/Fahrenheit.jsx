import React from "react";

export default class Fahrenheit extends React.Component{
      constructor(props){
        super(props);
        this.handleFa=this.handleFa.bind(this);
      }

    handleFa(e){
        this.props.changeFa(e.target.value);
    }

    render(){

        return (
            <div>
                <fieldset style={{width:"500px", height:"200px"}}>
                    <legend>Enter Temp in Fahrenheit here </legend>
                    <input type="text" value={this.props.temp} onChange={this.handleFa} ></input>
                </fieldset>
                
            </div>
        )
    }
}