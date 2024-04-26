import { Container } from "@mui/material";
import LogoTablet from "../../assets/logoTablet.svg?react";
import styles from "./Logo.module.css";
import TabletPhysics from "../../services/TabletPhysics";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function Logo() {
    const logoTabletRef = useRef<(HTMLDivElement)>(null);
    const [tabletPhysics, setTabletPhysics] = useState<TabletPhysics>();

    useEffect(() => {
        if(logoTabletRef === null) return;

        setTabletPhysics(new TabletPhysics(logoTabletRef));

        return () => tabletPhysics?.destroy();
    }, [])

    return (
        <Container>
            <h1 className={styles.title}>Technical Tasks</h1>
            <div ref={logoTabletRef} className={styles.logoWrapper} onClick={tabletPhysics?.setImpulse.bind(tabletPhysics)}>
                <LogoTablet className={styles.logo}/>
            </div>
        </Container>
    )
}

export default Logo;