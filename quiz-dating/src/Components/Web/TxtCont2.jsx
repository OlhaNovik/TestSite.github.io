import s from '../../Style/TextContainerStyle.module.scss'

const TxtCont2 = ({ onNext }) => {

    return (
        
        <div className={s.text_container}>
               <div className={s.web2_container}>    
            <div className={s.web2_block_text}>
                <p>Disse kvinnene har bedt oss om IKKE å tillate menn som søker et "forhold". De ønsker BARE rask sex. IKKE DATERING. Godtar du denne forespørselen?</p>
            </div>
                <div className={s.container_btn}>
                    <div className={s.btn_yes} onClick={onNext}>YA</div>
                    <div className={s.btn_no} onClick={onNext}>NEI</div>


                </div>
                </div>
        </div>
        
    )
}

export default TxtCont2;