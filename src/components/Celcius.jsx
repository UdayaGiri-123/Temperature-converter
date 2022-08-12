import React from "react";

export default class Celcius extends React.Component{
   constructor(props){
    super(props);
    this.handleCel=this.handleCel.bind(this);
   }  

   handleCel(e){
    this.props.changeCel(e.target.value);
   }

    render(){
        return (
            <div>
                <fieldset style={{width:"500px", height:"200px"}}>
                    <legend>Enter Temp in Celcius here </legend>
                    <input type="text" value={this.props.temp} onChange={this.handleCel}></input>
                </fieldset>
                
            </div>
        )
    }
}