import boar from "../public/NFTticket boar.png"
import deer from "../public/NFTticket deer.png"
import "../styles/App.css";


const Icon = ()=>{
    return (
        <a className="Ticket_buy">
            <div className="NFTIcon">
                <p><img className="icon-boar" src={boar} alt="boar" /></p>
                <p><img className="icon-deer" src={deer} alt="deer" /></p>
            </div>
        </a>
    );
}

export default Icon