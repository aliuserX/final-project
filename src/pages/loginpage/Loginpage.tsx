import LoginStyle from './Login.module.css'
import {useState} from "react";
import SignUpForm from "../../components/auth-component/signUp-form-component/SignUpForm.tsx";
import SignInForm from "../../components/auth-component/signIn-form-component/SignInForm.tsx";

function LoginPage() {
    const [isSighUp , setIsSignUp] = useState(true) ;

    return (
        <div className={LoginStyle['main-login-div']}>
            {isSighUp ? <SignInForm /> : <SignUpForm />}
            {isSighUp ?
                (
                    <span>
                        حساب کاربری ندارید ؟{" "}
                            <button type="button" onClick={() => setIsSignUp(false)}>
                                ثبت نام کنید
                            </button>
                    </span>
                ) : (
                    <span>
                        حساب کاربری دارید ؟{" "}
                            <button type="button" onClick={() => setIsSignUp(true)}>
                                ورود
                            </button>
                    </span>
                )
            }
        </div>
    )
}

export default LoginPage
