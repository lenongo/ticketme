import boar from "../public/NFTticket boar.png"
import deer from "../public/NFTticket deer.png"
import "../styles/App.css";


const Icon = ()=>{
    return (
        <div className="Ticket_buy">


<div class="aboutnftticket"><a href="/nftticket"><h6>NFTチケットって？</h6></a></div>

                            <p className="information" id="buyticket">NFTチケット購入</p>
            <div className="NFTIcon">
                <img className="icon-boar" src={boar} alt="boar" />
                <img className="icon-deer" src={deer} alt="deer" />
            </div>

        </div>
    );
}

export default Icon