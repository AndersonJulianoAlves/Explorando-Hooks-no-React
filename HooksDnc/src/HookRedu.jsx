import { useState, useReducer } from 'react'; // Importando useEffect
import './App.css';

//função reducer (parametro)
//state o estado com o qual esta trabalhando
//o action define quais ações serão alterada
function reducer(state, action) {
    //switch recebe uma informação (action.type)
    //(action.type) é o tipo de açao que vai executar
    //case é a ação
    switch (action.type) {
        case "Click":
            return { count: state.count + 1, text: !state.text }
    }
}


function App() {
    /*const [count, setCount] = useState(0);
    const [text, setText] = useState(true);*/
    //state guarda todos os objetos que vai trabalhar
    //o dispatch é o alterador
    //essa contante chama o useReducer(parametro,{objeto com informaçoes de estado})
    //a função reducer é criada fora do componente
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: true
    })



    function Counter() {
        dispatch({ type: 'Click' })
        setCount((count) => count + 1);
    }

    return (
        <>
            <h1>Contador</h1>
            <div className='card'>
                <button onClick={Counter}>A contagem é {state.count}</button>
                {state.text === true && <p> Olá </p>}
            </div>
        </>
    );
}

export default App;