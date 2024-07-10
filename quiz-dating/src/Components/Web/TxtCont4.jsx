import s from '../../Style/TextContainerStyle.module.scss'

const TxtCont4 = ({ onNext }) => {

    return (
        
        <div className={s.text_container}>
               <div className={s.web2_container}>    
            <div className={s.web2_block_text}>
                <p>Ville du brukt kondom når du har sex med en partner du møtte på siden vår?</p>
            </div>
                <div className={s.container_btn}>
                    <div className={s.btn_yes} onClick={onNext}>YA</div>
                    <div className={s.btn_no} onClick={onNext}>NEI</div>


                </div>
                </div>
        </div>
        
    )
}

export default TxtCont4;