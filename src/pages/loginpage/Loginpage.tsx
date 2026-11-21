import SignupForm from "../../components/auth-component/SignupForm.tsx";
import SigninForm from "../../components/auth-component/SigninForm.tsx";
import {Link} from "react-router-dom";

function LoginPage() {
    return (
        <>
            <SignupForm />
            <SigninForm />
            <Link to="/">
                <button>برو به هوم پیج</button>
            </Link>
        </>
    )
}

export default LoginPage
