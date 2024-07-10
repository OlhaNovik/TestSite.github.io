import s from '../Style/TextContainerStyle.module.scss';

const TextContainer = () => {

    return (
        <div className={s.text_container}>
            <div className={s.block_one}>
                <p>VIKTIG!</p>
            </div>
            <div className={s.block_text}>
                <p>DETTE ER IKKE EN DATINGSIDE.
                   <br></br> DU MELDER OG DU FAN, DET ER DET.</p>
            </div>
            <div className={s.block_three}>
            <p>Vi har 551 kvinnelige medlemmer innenfor 10 miles fra din nåværende posisjon. Disse kvinnene er BARE ute etter tilfeldige seksuelle møter. Du er heldig, for øyeblikket er GRATIS registrering for menn åpen i ytterligere -8 minutter og -5 sekunder... Alt vi ber deg om er å svare på 3 enkle spørsmål for å se om du kvalifiserer for vår eksklusive nettside. </p>
            </div>
        </div>
    )
}

export default TextContainer;