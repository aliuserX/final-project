import heroSectionComponentStyle from './heroSectionComponent.module.css'
import {NavLink} from "react-router-dom";

function HeroSectionComponent() {
    return (
        <section className={heroSectionComponentStyle['hero-section']}>
            <h2>ما یک تیم توسعه نرم افزار هستیم</h2>
            <span>تیم پارس کد با هدف ساخت راهکارهای نرم افزاری خلاقانه و کاربردی، در کنار شماست</span>
            <button className={heroSectionComponentStyle['member-button']}>آشنایی با اعضا</button>
            <NavLink to='/EditMember'>
                <button className={heroSectionComponentStyle['add-member-button']}>به ما بپیوندید</button>
            </NavLink>
        </section>
    )
}

export default HeroSectionComponent
