import { useState } from 'react'
import './App.css'

function App() {
    //Estado inicial de contagem (count começa no 0) (e o text que começa true)
    const [count, setCount] = useState(0);
    const [text, setText] = useState(true);

    //O que vai rodar na função
    function Counter() {
        //setCount adicione +1 a cada clique
        setCount((count) => count + 1)
        //estrutura condicional que pega a contagem e divide por 2 para pegar o resto dela
        //se não houver resto significa que a função é par (true) se não for par vai dar (false)
        if (count % 2 != 0) {
            setText(true);
        } else {
            setText(false);
        }
    }
    
    
    return (
        <>
        <h1>Contador... </h1>
        <div className='card'>
            <button onClick={Counter}>
                A contagem é {count}
            </button>
            <p>
                {text == true && (
                    <p> Olá </p>
                )}
            </p>
        </div>
    </>
)
}
export default App