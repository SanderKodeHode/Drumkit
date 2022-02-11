console.log("yutfy")

const drumKit = document.querySelector(".drum-kit");
// events
document.addEventListener('keydown', keyInstrument);
drumKit.addEventListener("mousedown", clickInstrument);


const drumInstrument = {
    clap: new Audio("./sounds/clap.wav"),
    hihat: new Audio("./sounds/hihat.wav"),
    kick: new Audio("./sounds/kick.wav"),
    openhat: new Audio("./sounds/openhat.wav"),
    ride: new Audio("./sounds/ride.wav"),
    snare: new Audio("./sounds/snare.wav"),
    tink: new Audio("./sounds/tink.wav"),
    tom: new Audio("./sounds/tom.wav")
}
console.log(drumInstrument)


//Numpad
function keyInstrument(event) {
    //Med If statements
    const keyName = event.key; // 1,2,3,4,5...
    console.log(event.key)
    if (keyName == 1) drumInstrument.kick.play()
    if (keyName == 2) drumInstrument.openhat.play()
    if (keyName == 3) drumInstrument.ride.play()
    if (keyName == 4) drumInstrument.snare.play()
    if (keyName == 5) drumInstrument.tink.play()
    if (keyName == 6) drumInstrument.tom.play()
    if (keyName == 7) drumInstrument.clap.play()
    if (keyName == 8) drumInstrument.hihat.play()

//Med soundMap
    const soundMap = {
        1: drumInstrument.kick,
        2: drumInstrument.openhat,
        3: drumInstrument.ride,
        4: drumInstrument.snare,
        5: drumInstrument.tink,
        6: drumInstrument.tom,
        7: drumInstrument.clap,
        8: drumInstrument.hihat,
    }
    soundMap[keynameName].play()
}

//MouseClick
function clickInstrument(event) {
    console.log(event)
    const keyName = event.target.id;
    drumInstrument[keyName].play();
}