import s from '../../Style/TextContainerStyle.module.scss'
import CheckboxComponent from '../Additional/CheckBoxContainer';
const TxtCont5= ({ onNext }) => {
    const checkboxes = [
        { id: 'checkbox1', label: 'Asiater' },
        { id: 'checkbox2', label: 'Annen' },
        { id: 'checkbox3', label: 'Regelmessig' },
        { id: 'checkbox4', label: 'Big Ass' },
        { id: 'checkbox5', label: 'BBW' },
        { id: 'checkbox6', label: 'Mager' },
    ];
    return (
        
        <div className={s.text_container}>
               <div className={s.web2_container}>    
            <div className={s.web2_block_text}>
                <p>Hvilken type jente tenner deg?</p>
            </div>
        <div className={s.checkBox_container}>
        <CheckboxComponent checkboxes={checkboxes}/>
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

export default TxtCont5;