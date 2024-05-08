import style from "./ButtonContainer.module.css";
const ButtonContainer = ()=>{

  let butons = ['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  return <div className={style.btnContainer}>
    {butons.map(item =><button key={`button${item}`} className={style.button}>{item}</button>)}
  </div>
}
export default ButtonContainer;