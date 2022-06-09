function Button(cor, frase, contador, atualiza) {

    function clickMouse() {
        setContador(contador + 1);

        atualiza(contador+1)
    }

    function zerarContador() {
        setContador(0);
    }
    return (
        <div>

            <button onClick={clickMouse}>Clicar</button>
            <p>Contador de visitas:{contador}</p>
            <button onClick={()=> {setContador(0)}}>Resetar count</button>
        </div>

    );
}

export default Button;