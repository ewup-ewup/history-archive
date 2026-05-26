import { L } from "../data/i18n";
import { T } from "../data/theme";

export default function Disclaimer({ lang = "ko" }) {
  return (
    <p style={{ marginTop: 24, fontSize: 12, lineHeight: 1.7, color: T.textTertiary, textAlign: "center" }}>
      {L[lang].disclaimer}
    </p>
  );
}
