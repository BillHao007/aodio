import { AoLogo } from "@/components/AoLogo";
import useAoHomeStyles from "./style";

export default function AoHome() {
  const { styles } = useAoHomeStyles();

  return (
    <div className={styles.aoPageHome}>
      <div className="ao-home-logo-area">
        <AoLogo size={90} className="ao-home-logo"/>
      </div>
    </div>
  )
}