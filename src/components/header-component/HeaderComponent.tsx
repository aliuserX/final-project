import HeaderComponentStyle from './HeaderComponent.module.css'
import {Link, NavLink} from "react-router-dom";

function HeaderComponent() {
    return (
        <header>
            <button className={HeaderComponentStyle['menu-button']}>
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M8 12H8.00901M12.0045 12H12.0135M15.991 12H16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" strokeWidth="1"/>
                    </g>
                </svg>
            </button>
            <Link className={HeaderComponentStyle['']} to="/" aria-label="صفحه اصلی کپی ارزان">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    width="30"
                    height="30"
                    role="img"
                    aria-labelledby="logo-title"
                >
                    <title id="logo-title">Document and data logo</title>
                    <g
                        fill="none"
                        stroke="#002A77"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M39 22.75H72.5L87 37.25V77.25H39" />
                        <path d="M72.5 22.75V37.25H87" />
                    </g>
                    <g fill="#FD5F00">
                        <rect x="11" y="36" width="29" height="5.5" rx="2.75" />
                        <rect x="7" y="47.25" width="34" height="5.5" rx="2.75" />
                        <rect x="14" y="58.5" width="27" height="5.5" rx="2.75" />
                        <circle cx="47" cy="50" r="2.75" />
                        <circle cx="54.5" cy="50" r="2.75" />
                    </g>
                    <rect x="62" y="47.25" width="14" height="5.5" rx="2.75" fill="#002A77" />
                </svg>
                کپی ارزان
            </Link>
            <div className={HeaderComponentStyle['header-action-buttons']}>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? HeaderComponentStyle['active-header-action-button'] : ""
                    }>
                    خانه
                </NavLink>
                <Link to="/">سفارشها</Link>
                <Link to="/">پشتیبانی</Link>
                <Link to="/">ثبت سفارش</Link>
            </div>
            <Link to="/">
                <svg fill="#1C274C" width="30" height="30" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                    <path d="M228,128A100,100,0,1,0,60.71,201.90967a3.97048,3.97048,0,0,0,.842.751,99.79378,99.79378,0,0,0,132.8982-.00195,3.96558,3.96558,0,0,0,.83813-.74756A99.76267,99.76267,0,0,0,228,128ZM36,128a92,92,0,1,1,157.17139,64.87207,75.616,75.616,0,0,0-44.50782-34.04053,44,44,0,1,0-41.32714,0,75.61784,75.61784,0,0,0-44.50782,34.04A91.70755,91.70755,0,0,1,36,128Zm92,28a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,156ZM68.86475,198.417a68.01092,68.01092,0,0,1,118.27.00049,91.80393,91.80393,0,0,1-118.27-.00049Z"/>
                </svg>
            </Link>
        </header>
    )
}

export default HeaderComponent
