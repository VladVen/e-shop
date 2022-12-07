import {DetailedHTMLProps, FC, FunctionComponent, HTMLAttributes, ReactNode} from "react";
import styles from './layout.module.css'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}

export const Layout: FC<LayoutType> = ({children,}) => {

    return <div className={styles.container}>
        <Header className={styles.header}/>
        <div className={styles.body}>
            {children}
        </div>
        <Footer  className={styles.footer}/>
    </div>
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return <Layout>
            <Component {...props} />
        </Layout>
    }
}