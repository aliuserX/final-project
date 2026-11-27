import HeroSectionComponent from "../../components/hero-section-component/heroSectionComponent.tsx";
import TopMembersSectionComponent
    from "../../components/top-members-section-component/TopMembersSectionComponent.tsx";
import TopTeamsSectionComponent from "../../components/top-teams-section-component/TopTeamsSectionComponent.tsx";
import TopProjectsSectionComponent
    from "../../components/top-projects-section-component/TopProjectsSectionComponent.tsx";

function HomePage() {
    return (
        <>
            <HeroSectionComponent />
            <TopTeamsSectionComponent />
            <TopProjectsSectionComponent />
            <TopMembersSectionComponent />
        </>
    )
}

export default HomePage
