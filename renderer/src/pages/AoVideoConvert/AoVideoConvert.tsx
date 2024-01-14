import AoTaskPageTemp from "@/components/AoTaskPageTemp"
import useAoVideoConvertStyles from "./style"

export default function AoVideoConvert() {
  const { styles } = useAoVideoConvertStyles();

  return (
    <div className={styles.aoPageVideoConvert}>
      <AoTaskPageTemp />
    </div>
  )
}