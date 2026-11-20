import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/header-component/HeaderComponent.tsx";
import FooterComponent from "../components/footer-component/FooterComponent.tsx";

function App() {
    return (
        <>
            <HeaderComponent />

            <main>
                <Outlet />
            </main>

            <FooterComponent />
        </>
    )
}

export default App
