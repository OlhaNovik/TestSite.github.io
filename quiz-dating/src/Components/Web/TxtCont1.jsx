import s from '../../Style/TextContainerStyle.module.scss'

const TxtCont1 = ({ onNext }) => {

    return (
        <div className={s.text_container}>
            <div className={s.web1_block_one}>
                <p>VIKTIG!</p>
            </div>
            <div className={s.block_text}>
                <p>DETTE ER IKKE EN DATINGSIDE.
                   <br></br> DU MELDER OG DU FAN, DET ER DET.</p>
            </div>
            <div className={s.web1_block_three}>
            <p>Vi har <span style={{ color: 'red' }}>551 kvinnelige</span> medlemmer innenfor 10 miles fra din nåværende posisjon. Disse kvinnene er BARE ute etter tilfeldige seksuelle møter. Du er heldig, for <span style={{ color: 'red' }}>øyeblikket er GRATIS registrering for menn</span> åpen i ytterligere -8 minutter og -5 sekunder... Alt vi ber deg om er å svare på 3 enkle spørsmål for å se om du kvalifiserer for vår eksklusive nettside. </p>
            </div>
            <div className={s.web1_block_four}>
                <p>Er du eldre enn 24?</p>
                </div>
                <div className={s.container_btn}>
                    <div className={s.btn_yes} onClick={onNext}>YA</div>
                    <div className={s.btn_no} onClick={onNext}>NEI</div>


                </div>
        </div>
    )
}

export default TxtCont1;