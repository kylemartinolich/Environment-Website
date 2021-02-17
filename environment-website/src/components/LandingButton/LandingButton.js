import React, {Component} from 'react';
const elements = ['Chattahoochee', 'Flint', 'Apalachacola'];
let items = [];
class LandingButton extends Component{
    
    render(){

        for (let i=0; i<=elements.length;i++) {
            items.push(<li key={i}>{elements[i]}</li>)
        }
        return (
    <div>
      {items}
    </div>
  )
    }
}
export default LandingButton;