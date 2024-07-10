import s from '../../Style/TextContainerStyle.module.scss'
import CheckboxCont6 from '../Additional/CheckboxCont6.jsx'
const TxtCont6= ({ onNext }) => {

    return (
        
        <div className={s.text_container}>
               <div className={s.web2_container}>    
            <div className={s.web2_block_text}>
                <p>Hva slags kropp tenner deg?</p>
            </div>
        <div className={s.checkBox_container}>
        <CheckboxCont6/>
        </div>
        <div className={s.web5_hide_text}>
            <p>Velg inntil 3 svar</p>
        </div>
                <div className={s.container_btn}>
                    <div className={s.btn_cont} onClick={onNext}>CONTINUAR</div>
                </div>
                </div>
        </div>
        
    )
}

export default TxtCont6;