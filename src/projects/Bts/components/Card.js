import logo1 from '../Images/react-logo.png';
import mobilelogo from '../Images/mobile-logo.png';
import emaillogo from '../Images/email-logo.png';
function card(props) {
    console.log("status:",props.status);
    return (
        <div className="card1">
            {props.status==0&&<div>Available</div>}
            <div>
                
                <img src={logo1} />
                <h4>{props.name}</h4>
            </div>
            <div className="phem">
                <div className="numlogo">
                    <img src={mobilelogo} className="imglogo" />
                    <h5>{props.mobile}</h5>
                </div>
                <div className="email">
                    <img src={emaillogo} className="emaillogo"/>
                <h6>{props.mail}</h6>
                </div>


                
            </div>


        </div>




    )
}
export default card;