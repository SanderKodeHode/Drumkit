const drumKit = document.querySelector(".drum-kit");
// EventListener
document.addEventListener('keydown', keyInstrument);
drumKit.addEventListener("mousedown", clickInstrument);


const drumInstrument = {
    kick: new Audio("./sounds/kick.wav"),
    openhat: new Audio("./sounds/openhat.wav"),
    ride: new Audio("./sounds/ride.wav"),
    snare: new Audio("./sounds/snare.wav"),
    tink: new Audio("./sounds/tink.wav"),
    tom: new Audio("./sounds/tom.wav"),
    clap: new Audio("./sounds/clap.wav"),   
    hihat: new Audio("./sounds/hihat.wav")
}


//Numpad
function keyInstrument(event) {
//With If statements
    const keyName = event.key;
    if (keyName == 1) drumInstrument.kick.play()
    if (keyName == 2) drumInstrument.openhat.play()
    if (keyName == 3) drumInstrument.ride.play()
    if (keyName == 4) drumInstrument.snare.play()
    if (keyName == 5) drumInstrument.tink.play()
    if (keyName == 6) drumInstrument.tom.play()
    if (keyName == 7) drumInstrument.clap.play()
    if (keyName == 8) drumInstrument.hihat.play()

//Alternative
    // const instrumentSet = {
    //     1: drumInstrument.kick,
    //     2: drumInstrument.openhat,
    //     3: drumInstrument.ride,
    //     4: drumInstrument.snare,
    //     5: drumInstrument.tink,
    //     6: drumInstrument.tom,
    //     7: drumInstrument.clap,
    //     8: drumInstrument.hihat,
    // }
    // InstrumentSet[keynameName].play()
}

//MouseClick
function clickInstrument(event) {
    console.log(event)
    const keyName = event.target.id;
    drumInstrument[keyName].play();
}
