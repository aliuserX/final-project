import HomePageStyle from './Homepage.module.css'
import SignupForm from "../../components/auth/SignupForm.tsx";
import SigninForm from "../../components/auth/SigninForm.tsx";
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1 className={HomePageStyle['color-green']}>سلام</h1>
            <SignupForm />
            <SigninForm />
            <Link to="/new">
                <button>برو به نیو هوم پیج</button>
            </Link>
        </div>
    )
}

export default HomePage
