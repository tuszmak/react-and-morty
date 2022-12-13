import { Link } from "react-router-dom";

function Landing() {

    let img = "./Rick_and_Morty.png"
    return <>
        <div style={{ textAlign: "center" }}>
            <Link to={'/'}><img id="logo" src={img} alt="img logo" ></img></Link>
            <div>
                <Link to={'/characters'} >
                    <button className="button-27">Characters</button>
                </Link>
                <button className="button-27">Locations</button>
            </div>
        </div>

    </>
}
export default Landing
