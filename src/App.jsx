import { useState } from 'react';
import HelloPerson from './HelloPerson';
import Button from './Button';

function App() {

    const [nome, setNome] = useState("");

    const pessoas = [
        {
            nome: " angelooo",
            idade: 20,
            caracteristica: "alta",
            foto:"https://i.insider.com/62910341f099c4001956ab91?width=1000&format=jpeg&auto=webp"
        },
        {
            nome: " Jade ",
            idade: 20,
            caracteristica: "alta",
            foto: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaGyav8PTM5XH60I617esZVuJevapJcc-lEplDWZJjWH00OVci6e02PdvHsku2SDhA7XUsD2qaUIz670YI_XLcNHTA82YV3Z-FFnj5616bnX-ULg3nJFLw18.jpg?r=3d2"
    
        },
        {
            nome: " joao ",
            idade: 20,
            caracteristica: "alta",
            foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gZf70ny3rYbFuM3SyDcVHCWFrnYB0adeUw&usqp=CAU"
        },
        {
            nome: " mateus ",
            idade: 20,
            caracteristica: "alta",
            foto:"https://coisasdatv.com.br/wp-content/uploads/2021/08/brooklyn-99-amy-almond-1024x512.jpg"
            

        },
    ]
    return (
        <div>
            <input type="text" onChange={(event) => { setNome(event.target.value) }} />
            <Button />

            {pessoas.map((pessoa,key) => {
                return <HelloPerson nome={pessoa.nome}
                key={key}
                    idade={pessoa.idade}
                    caracteristica={pessoa.caracteristica}
                    foto={pessoa.foto}
                />
            })}


        </div>
    )
}

export default App
