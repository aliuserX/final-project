import FooterComponentStyle from './FooterComponent.module.css'

function FooterComponent() {
    return (
        <footer>
            <button className={FooterComponentStyle['footer-button']}>۱</button>
            <button className={FooterComponentStyle['footer-button']}>۲</button>
            <button className={FooterComponentStyle['footer-button']}>۳</button>
            <button className={FooterComponentStyle['footer-button']}>۴</button>
            <button className={FooterComponentStyle['footer-button']}>5</button>
        </footer>
    )
}

export default FooterComponent
