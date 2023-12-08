import logo from './assets/cat_img.jpg';
import React from 'react';
import './App.css'

function App() {

  const element1 = React.createElement('h1', { 'fontFamily': 'Tahoma' }, 'Task 2')

  const element = React.createElement('p', { 'fontFamily': 'Tahoma', 'color': 'darkgreen', 'backgroundColor': 'yellow', 'fontSize': '20px' }, 'Розробити сторінку з заголовком, параграфом тексту та зображенням за допомогою синтаксису JSX. Повторити дану сторінку, використовуючи метод createElement.');
  return (
    <>
      <h2 style={{ fontFamily: 'Tahoma' }}>{'Task 2'}</h2>
      <p style={{ fontFamily: 'Tahoma', color: 'darkgreen', backgroundColor: 'yellow', fontSize: '20px' }}>Розробити сторінку з заголовком, параграфом тексту та зображенням за допомогою синтаксису JSX. Повторити дану сторінку, використовуючи метод createElement.
      </p>
      <img src={logo} alt="cat img"></img>
      {/* <form>
        <label htmlFor>HTML</label>
        <input type="text" name="html"></input>
      </form> */}
      {element1}
      {element}
    </>
  )
}

export default App;
