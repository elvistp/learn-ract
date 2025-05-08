import { useId } from 'react';

function App() {
  const idNombre = useId();
  const idEmail = useId();
  return (
    <main style={{padding: '5rem', fontFamily: 'Arial'}}>
      <h1>Formulario</h1>
      <form>
        <div>
          <label htmlFor={idNombre}>Nombre:</label>
          <input id={idNombre} name="nombre" type="text" />
        </div>
        <br />
        <div>
          <label htmlFor={idEmail}>Email:</label>
          <input id={idEmail} name="email" type="email" />n
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
export default App;