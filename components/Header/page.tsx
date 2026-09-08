import Link from "next/link";
import NavBar from "@/components/NavBar/page";
import css from "./Header.module.css";

const Header = () => {
    return (
        <div className={`container ${css.header}`}>
            <div className={css.logo}>
                <Link href="/">
                    <svg className={css.svg}>
                        <use xlinkHref={"/sprite.svg#icon-logo"}></use>
                    </svg>
                </Link>
            </div>
            <NavBar/>
        </div>
    )
}
export default Header;