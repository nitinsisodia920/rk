import { useLocation } from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from "react-router-dom";
import './Checkout.css'



function Final() {
    const location = useLocation();
    function print(){
        var divContents=document.getElementById("receipt").innerHTML;
        var a=window.open(",",'height=500,width=500');
        a.document.write(divContents);
        a.document.close();
        a.print();
    }
    return(
        <div id="receipt">
            <div class="d-flex justify-content-center" id="pay">
            <h3>Payment Success!</h3>
            <CheckCircleOutlineIcon/>
            </div>
            <br/>
            <p class="d-flex justify-content-center">Congratulations! Your Payment was a Success...</p>
            <br/>
            <p class="d-flex justify-content-center">Your product will be delivered to the address  
                 <b class="font-italic">&nbsp;{location.state.addr},{location.state.city},{location.state.country}&nbsp;</b>
                  in a week...</p>
            <br/>
            <div class="d-flex justify-content-center">

            <button onClick={print} class="btn btn-dark btn-lg rounded-pill" >Print Receipt</button>
            <Link to ="/"><button class="btn btn-dark btn-lg rounded-pill" >Back to Home</button></Link>
            </div>
        </div>
    )
}
export default Final ;