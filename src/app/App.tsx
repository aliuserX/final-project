import {Outlet} from "react-router-dom";
import AppStyle from './App.module.css'
import HeaderComponent from "../components/header-component/HeaderComponent.tsx";
import FooterComponent from "../components/footer-component/FooterComponent.tsx";

function App() {
    return (
        <>
            <HeaderComponent />

            <main className={AppStyle['main']}>
                <Outlet />
            </main>

            <FooterComponent />
        </>
    )
}

export default App
