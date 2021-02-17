import React, {Component} from 'react';
import classes from './LandingButton.module.css';
import Chattahoochee_watershed from '../../assets/Chattahoochee_watershed.png';
import UpperChattahoochee_watershed from '../../assets/UpperChattahoochee_watershed.png';
import LowerChattahoochee_watershed from '../../assets/LowerChattahoochee_watershed.png';
import Flint_watershed from '../../assets/Flint_watershed.png';
import Apalachicola_watershed from '../../assets/Apalachicola_watershed.png';
import ApalachicolaBay_watershed from '../../assets/ApalachicolaBay_watershed.png';
import Flint_River from '../../assets/Rivers/Flint_River.png';
import Chattahoochee_River from '../../assets/Rivers/Chattahoochee_River.png';
const elements = ['Upper Chattahoochee', 'Lower Chattahoochee','Flint', 'Apalachicola', 'Apalachicola Bay'];
let items = [];
let pics = [UpperChattahoochee_watershed, LowerChattahoochee_watershed, Flint_watershed, Apalachicola_watershed, ApalachicolaBay_watershed]
let buttonPics = [Chattahoochee_River, Chattahoochee_River, Flint_River]
class LandingButton extends Component{
    render(){
        items = [];
        for (let i=0; i<elements.length;i++) {
            if(i % 2 === 0){
                items.push(<ul 
                    key={i} 
                    onMouseOut={(e) => this.props.changeImage(Chattahoochee_watershed)} 
                    onMouseOver={(e) => this.props.changeImage(pics[i])} 
                    className={classes.itemLeft} 
                    style={{ backgroundImage: `url(${buttonPics[i]})` }}
                    onClick={() => this.props.changePage(elements[i])}>
                    {elements[i]}
                    </ul>)
            }
            else{
                items.push(<ul 
                    key={i} 
                    onMouseOut={(e) => this.props.changeImage(Chattahoochee_watershed)} 
                    onMouseOver={(e) => this.props.changeImage(pics[i])} 
                    className={classes.itemRight} 
                    style={{ backgroundImage: `url(${buttonPics[i]})` }}
                    onClick={() => this.props.changePage(elements[i])}>
                    {elements[i]}
                    </ul>)
            }
        }
        return (
    <div className={classes.list}>
      {items}
    </div>
  )
    }
}
export default LandingButton;