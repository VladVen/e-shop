import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import styles from './footer.module.css'
import cn from 'classnames'

interface FooterType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Footer: FC<FooterType> = ({ className,...props}) => {

    return <footer className={cn(className, styles.footer)} {...props} >
        <div>
            2022
        </div>
        <div><a href="https://github.com/VladVen">VladVen</a></div>
    </footer>
};

export default Footer;