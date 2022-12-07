import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import styles from './header.module.css'

interface HeaderType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Header: FC<HeaderType> = (props) => {

    return <div {...props}>
        Header
    </div>
};

export default Header;