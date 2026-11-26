import HeroSectionComponent from "../../components/hero-section-component/heroSectionComponent.tsx";
import HomepageMembersSectionComponent
    from "../../components/homepage-members-section-component/HomepageMembersSectionComponent.tsx";

function HomePage() {
    return (
        <>
            <HeroSectionComponent />
            <HomepageMembersSectionComponent />
        </>
    )
}

export default HomePage
