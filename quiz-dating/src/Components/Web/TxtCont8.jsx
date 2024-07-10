import s from '../../Style/TextContainerStyle.module.scss'
import React, { useEffect } from 'react';

const TxtCont8 = ({ onNext }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onNext();
        }, 3000); // 10000 мілісекунд = 10 секунд

        return () => clearTimeout(timer);
    }, [onNext]);

    return (
        <div className={s.text_container}>
            <div className={s.web1_block_one}>
                <p>VIKTIG!</p>
            </div>
            <div className={s.block_text}>
                <p>DETTE ER IKKE EN DATINGSIDE.
                   <br></br> DU MELDER OG DU FAN, DET ER DET.</p>
            </div>
            <div className={s.text_progres}>
               <p> Dupliserte registreringer blir gjennomgått...</p></div>
                <div className={s.container_progress}>
                    <div className={s.green_progress}></div>
                    <div className={s.white_progress}></div>
                </div>
        </div>
    )
}

export default TxtCont8;