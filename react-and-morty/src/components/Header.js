import { useState } from "react";

function LandingDescription() {
    return <>
        <p>The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.</p>
    </>
}
function Landing() {

    let img = "./Rick_and_Morty.png"
    const [isShown, setIsShown] = useState(true);
    function handleClick() {
        setIsShown(false);
    }
    return <>
        <div style={{ textAlign: "center" }}>
            <img id="logo" src={img} alt="img logo" ></img>
            <div>
                <button class="button-27" onClick={handleClick}>Characters</button>
                <button class="button-27" onClick={handleClick}>Locations</button>
            </div>

            {isShown && <LandingDescription />}
        </div>

    </>
}
export default Landing