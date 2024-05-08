import style from "./App.module.css";

function App() {
  return (
    <div className={style.calcuContainer}>
      <input className={style.display}/>
      <div className={style.btnContainer}>
      <button className={style.button}>C</button>
      <button className={style.button}>C</button>
      <button className={style.button}>C</button>
      <button className={style.button}>C</button>
      <button className={style.button}>C</button>
      <button className={style.button}>C</button>
      </div>
    </div>

  )
}

export default App
