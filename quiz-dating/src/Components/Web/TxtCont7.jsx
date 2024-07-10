import s from '../../Style/TextContainerStyle.module.scss'
import CheckboxComponent from '../Additional/CheckBoxContainer';
const TxtCont7= ({ onNext }) => {

    const checkboxes = [
        { id: 'checkbox1', label: 'Skype' },
        { id: 'checkbox2', label: 'Whatsapp' },
        { id: 'checkbox3', label: 'Annen' },
        { id: 'checkbox4', label: 'Snapchat' },
        { id: 'checkbox5', label: 'Ingen' },
        { id: 'checkbox6', label: 'Viber' },
    ];
    return (
        
        <div className={s.text_container}>
               <div className={s.web2_container}>    
            <div className={s.web2_block_text}>
                <p>Bruker du noen meldingsapper?</p>
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

export default TxtCont7;