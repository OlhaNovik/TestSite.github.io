import s from '../../Style/TextContainerStyle.module.scss'

const TxtCont3 = ({ onNext }) => {

    return (
        
        <div className={s.text_container}>
               <div className={s.web2_container}>    
            <div className={s.web2_block_text}>
                <p>Har du noen gang hatt seksuelt overførbare sykdommer (kjønnssykdommer)?</p>
            </div>
                <div className={s.container_btn}>
                    <div className={s.btn_yes} onClick={onNext}>YA</div>
                    <div className={s.btn_no} onClick={onNext}>NEI</div>


                </div>
                </div>
        </div>
        
    )
}

export default TxtCont3;