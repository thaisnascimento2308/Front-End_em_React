import React , { useState }from 'react';

export function Counter() {
  const [contador, setContador] = useState(0);

    return (
      <div style={{marginTop: '20px', marginLeft: '20px'}}>
        <h1>{contador}</h1>

        <div>
          <button onClick={() => {
            // ! this.state.contador = this.state.contador -1;
            setContador(contador - 1);
          }}
          >
            Diminuir
          </button>

          <button 
            onClick={() => {
             // ! this.contador += 1;
              setContador(contador + 1);
          }}

          >
            Aumentar
            </button>
        </div>
      </div>
    )
  }