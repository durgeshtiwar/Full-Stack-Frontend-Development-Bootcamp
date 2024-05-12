import style from "./ButtonContainer.module.css";
const ButtonContainer = ({onButttonClick})=>{

  let buttons = ['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  return <div className={style.btnContainer}>
    {buttons.map((item) =>(<button key={`button${item}`} className={style.button} onClick={onButttonClick} >{item}</button>))}
  </div>
}
export default ButtonContainer;