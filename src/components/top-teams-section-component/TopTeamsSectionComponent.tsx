import topTeamsSectionComponentStyle from './TopTeamsSectionComponent.module.css'

function TopTeamsSectionComponent() {
    return (
        <section className={topTeamsSectionComponentStyle['top-team-section']}>
            <div className={topTeamsSectionComponentStyle['top-team-section-header']}>
                <span>تیم های برتر</span>
                <span>
                    همه تیم ها
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                    </svg>
                </span>
            </div>
            <div className={topTeamsSectionComponentStyle['top-team-article-list']}>
                <article className={topTeamsSectionComponentStyle['top-team-article']}>
                    <div className={topTeamsSectionComponentStyle['top-team-article-image']}>

                    </div>
                    <div className={topTeamsSectionComponentStyle['top-team-article-information']}>
                        <span>تیم پارس کد</span>
                        <span>ما تیم توسعه فرانتنذ هستیم</span>
                        <button className={topTeamsSectionComponentStyle['top-team-article-button']}>
                            مشاهده تیم
                        </button>
                    </div>
                </article>
                <article className={topTeamsSectionComponentStyle['top-team-article']}>
                    <div className={topTeamsSectionComponentStyle['top-team-article-image']}>

                    </div>
                    <div className={topTeamsSectionComponentStyle['top-team-article-information']}>
                        <span>تیم پارس کد</span>
                        <span>ما تیم توسعه فرانتنذ هستیم</span>
                        <button className={topTeamsSectionComponentStyle['top-team-article-button']}>
                            مشاهده تیم
                        </button>
                    </div>
                </article>
                <article className={topTeamsSectionComponentStyle['top-team-article']}>
                    <div className={topTeamsSectionComponentStyle['top-team-article-image']}>

                    </div>
                    <div className={topTeamsSectionComponentStyle['top-team-article-information']}>
                        <span>تیم پارس کد</span>
                        <span>ما تیم توسعه فرانتنذ هستیم</span>
                        <button className={topTeamsSectionComponentStyle['top-team-article-button']}>
                            مشاهده تیم
                        </button>
                    </div>
                </article>
                <article className={topTeamsSectionComponentStyle['top-team-article']}>
                    <div className={topTeamsSectionComponentStyle['top-team-article-image']}>

                    </div>
                    <div className={topTeamsSectionComponentStyle['top-team-article-information']}>
                        <span>تیم پارس کد</span>
                        <span>ما تیم توسعه فرانتنذ هستیم</span>
                        <button className={topTeamsSectionComponentStyle['top-team-article-button']}>
                            مشاهده تیم
                        </button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default TopTeamsSectionComponent
