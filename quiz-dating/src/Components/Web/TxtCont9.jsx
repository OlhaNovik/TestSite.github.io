import s from '../../Style/TextContainerStyle.module.scss'
import icon from '../../Img/okHand.png'
const TxtCont9 = ({ onNext }) => {

    return (
        <div className={s.text_container}>
            <div className={s.web9_block_one}>
                <p>GRATULERER</p>
            </div>
            <div className={s.block_text}>
                <p>DU ER KVALIFISERT FOR VÅR NETTSTED!</p>
            </div>
            <div className={s.web1_block_three}>
                <p>Basert på svarene dine, er det <span style={{ color: 'red' }}>216</span> kvinnelige
                    medlemmer i nærheten av deg</p>
            </div>
            <div className={s.web9_block_four}>
                <p>Du er godkjent for å melde deg på!</p>
            </div>
            <div className={s.container_rules}>
                <div className={s.head_cont}><p>Vennligst les våre 3 regler nå</p></div>
                <div className={s.rul}>
                    <img src={icon} alt="#" />
                    <p>Hvis du ser noen du kjenner, har du ikke lov til <br></br>å
                        publisere det! Ikke spre rykter.</p>
                </div>
                <div className={s.rul}>
                    <img src={icon} alt="#" />
                    <p>Respekter andre medlemmers seksuelle lyster. Våre brukere er normale kvinner, ikke <br></br> prostituerte eller pornostjerner.</p>
                </div>
                <div className={s.rul}>
                    <img src={icon} alt="#" />
                    <p>Når du har sex med et av våre medlemmer, er det DITT ansvar <br></br> å 
beskytte deg mot kjønnssykdommer.</p>
                </div>

            </div>
            <div className={s.web9_hide_text}>
                <p>Hvis du godtar alt ovenfor, klikker du på 'Jeg godtar'-knappen nedenfor for å fortsette til GRATIS registreringssiden.</p>
            </div>
            <div className={s.container_btn}>
            <div className={s.btn_cont} onClick={onNext}>JEG ER ENIG</div>
            </div>
        </div>
    )
}

export default TxtCont9;