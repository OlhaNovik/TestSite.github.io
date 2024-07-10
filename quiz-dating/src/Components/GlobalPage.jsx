import s from '../Style/GlobalPage.module.scss';
import TextContainer from './TextContainer';
import FotoContainer from './FotoContainer';


const GlobalPage = () => {

    return (
        <div className={s.App}>
            <div className={s.app_container}>
                <div className={s.container_header}>
                    <div>
                        <svg className={s.btn_back} width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 18.0004H36.8962M3 18.0004L17.1234 3.87695M3 18.0004L17.1234 32.1238" stroke="white" strokeOpacity="0.5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></div>
                    <div><svg className={s.btn_close} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.01031 1.01385C2.36212 -0.337951 4.55388 -0.337951 5.90555 1.01385L14.9965 10.105L24.0875 1.01395C25.4393 -0.337859 27.6307 -0.337859 28.9826 1.01395C30.3344 2.36575 30.3344 4.55752 28.9826 5.90909L19.8921 15.0001L28.9826 24.091C30.3344 25.4424 30.3344 27.6343 28.9826 28.9861C27.6307 30.338 25.4389 30.338 24.087 28.9861L14.9965 19.8956L5.90601 28.9861C4.55398 30.338 2.36221 30.338 1.01041 28.9861C-0.341399 27.6343 -0.341399 25.4429 1.01041 24.091L10.1014 15.0001L1.01031 5.90909C-0.341491 4.55742 -0.341491 2.36566 1.01031 1.01385Z" fill="white" fillOpacity="0.5" />
                    </svg></div>
                </div>
            </div>
            <div className={s.main_container}>
                <TextContainer />
                <FotoContainer />
            </div>

        </div>
    );
}

export default GlobalPage;