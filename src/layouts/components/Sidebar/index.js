// Framework
import clsx from "clsx";
import Navigation from "./components/Navigation";

// Style
import styles from "./Sidebar.module.scss";

function Sidebar (){
    return (
        <div className={clsx(styles.container)}>
            <Navigation />
        </div>
    );
}

export default Sidebar;