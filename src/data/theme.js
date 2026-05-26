// 디자인 토큰 (CertPass/토스 톤)
export const T = {
  primary: "#3182F6",
  primaryPressed: "#1B64DA",
  primarySoft: "#E8F2FF",
  accent: "#8B5CF6",
  success: "#00C73C",
  error: "#F04452",
  warning: "#FF9F1C",
  bg: "#F9FAFB",
  bgSoft: "#F2F4F6",
  card: "#FFFFFF",
  strong: "#191F28",
  textPrimary: "#333D4B",
  textSecondary: "#6B7684",
  textTertiary: "#8B95A1",
  gradient: "linear-gradient(135deg, #3182F6 0%, #8B5CF6 100%)",
  line: "#E5E8EB",
};


export const FONT =
  "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif";

// 둥근 네비 버튼 공용 스타일
export const navBtn = {
  width: 34, height: 34, borderRadius: "50%", border: `1px solid ${T.line}`,
  background: T.card, color: T.primary, cursor: "pointer", fontSize: 16,
  display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: FONT,
};
