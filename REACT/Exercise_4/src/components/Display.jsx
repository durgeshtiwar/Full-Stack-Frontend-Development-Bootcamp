import style from "./Display.module.css"
const Display = ({displayVal})=>{
  return <input className={style.display} readOnly value={displayVal}/>
}
export default Display;