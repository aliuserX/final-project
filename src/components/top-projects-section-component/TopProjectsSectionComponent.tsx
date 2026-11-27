import TopProjectsSectionComponentStyle from './TopProjectsSectionComponent.module.css'

function TopProjectsSectionComponent() {
    return (
        <section className={TopProjectsSectionComponentStyle['top-project-section']}>
            <div className={TopProjectsSectionComponentStyle['top-project-section-header']}>
                <span>پروژه های برتر</span>
                <span>
                    همه پروژه
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                    </svg>
                </span>
            </div>
            <div className={TopProjectsSectionComponentStyle['top-project-article-list']}>
                <article className={TopProjectsSectionComponentStyle['top-project-article']}>
                    <div className={TopProjectsSectionComponentStyle['top-project-article-image']}>

                    </div>
                    <div className={TopProjectsSectionComponentStyle['top-project-article-information']}>
                        <span>تیم پارس کد</span>
                        <span>ما تیم توسعه فرانتنذ هستیم</span>
                        <button className={TopProjectsSectionComponentStyle['top-project-article-button']}>
                            مشاهده تیم
                        </button>
                    </div>
                </article>
                <article className={TopProjectsSectionComponentStyle['top-project-article']}>
                    <div className={TopProjectsSectionComponentStyle['top-project-article-image']}>

                    </div>
                    <div className={TopProjectsSectionComponentStyle['top-project-article-information']}>
                        <span>تیم پارس کد</span>
                        <span>ما تیم توسعه فرانتنذ هستیم</span>
                        <button className={TopProjectsSectionComponentStyle['top-project-article-button']}>
                            مشاهده تیم
                        </button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default TopProjectsSectionComponent
