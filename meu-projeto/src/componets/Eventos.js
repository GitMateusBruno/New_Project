import Button from "./evento/Button"

function Evento() {

    function meuEvento() {
        console.log('ativando primeiro evento')
    }

    function segundoEvento() {
        console.log('ativando segundo evento')
    }

    return(
        <div>
            <p>Clique para disparar um Evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="segundo Evento"/>
         </div>
    )
};

export default Evento