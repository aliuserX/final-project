import HeaderComponentStyle from './HeaderComponent.module.css'

function HeaderComponent() {
    return (
        <header>
            <h2 className={HeaderComponentStyle['color-red']}>هدر سایت چـاپینو (ثابت)</h2>
        </header>
    )
}

export default HeaderComponent
