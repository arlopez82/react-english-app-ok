const synth = window.speechSynthesis;

export const cargarIdiomas = () => {
    const voices= synth.getVoices().sort((a, b) => {
        const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
        if ( aname < bname ) return -1;
        else if ( aname == bname ) return 0;
        else return +1;
    });

    return voices;

}

export const traducir = (texto)=>
{

    const voices = cargarIdiomas();
    const voice = voices.filter(a=>
            a.name == 'Google US English'
        );

    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }

    const textoOrigen = new SpeechSynthesisUtterance(texto);

    textoOrigen.voice = voice[0];

    textoOrigen.pitch = 1;
    textoOrigen.rate = 1;
    synth.speak(textoOrigen);
}