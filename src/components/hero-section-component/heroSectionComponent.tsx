import heroSectionComponentStyle from './heroSectionComponent.module.css'
function HeroSectionComponent() {
    return (
        <section>
            <h1>سلام من یلدا هستم</h1>
            <h2>ما تیم توسعه نرم افزار هستیم</h2>
            <span>تیم پارس کد با هدف ساخت راهکارهای نرم افزاری خلاقانه و کاربردی، در کنار شماست</span>
            <button className={heroSectionComponentStyle['member-button']}>آشنایی با اعضا</button>
        </section>
    )
}

export default HeroSectionComponent
