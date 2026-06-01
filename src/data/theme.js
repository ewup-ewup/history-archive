// 디자인 토큰 (CertPass/토스 톤)
// 값은 CSS 변수 참조 — 실제 색은 index.css의 :root(라이트) / html[data-theme="dark"](다크)에서 정의.
// 컴포넌트는 기존처럼 T.strong 등을 inline style로 쓰면 되고, 테마 전환은 <html data-theme>만 바꾸면 즉시 반영됨.
export const T = {
  primary: "var(--t-primary)",
  primaryPressed: "var(--t-primaryPressed)",
  primarySoft: "var(--t-primarySoft)",
  accent: "var(--t-accent)",
  success: "var(--t-success)",
  error: "var(--t-error)",
  warning: "var(--t-warning)",
  bg: "var(--t-bg)",
  bgSoft: "var(--t-bgSoft)",
  card: "var(--t-card)",
  strong: "var(--t-strong)",
  textPrimary: "var(--t-textPrimary)",
  textSecondary: "var(--t-textSecondary)",
  textTertiary: "var(--t-textTertiary)",
  gradient: "var(--t-gradient)",
  line: "var(--t-line)",
  // 의미 토큰 (다크에서 가독성 위해 별도 정의)
  dangerSoft: "var(--t-dangerSoft)",   // 심리 박스 등 옅은 적색 배경
  dangerText: "var(--t-dangerText)",   // 그 위 텍스트
  successSoft: "var(--t-successSoft)", // 실측/저장됨 등 옅은 녹색 배경
  infoSoft: "var(--t-infoSoft)",       // 옅은 보라 패널
  headerBg: "var(--t-headerBg)",       // 상단 헤더 반투명 배경
};

export const FONT =
  "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif";

// 둥근 네비 버튼 공용 스타일
export const navBtn = {
  width: 34, height: 34, borderRadius: "50%", border: `1px solid ${T.line}`,
  background: T.card, color: T.primary, cursor: "pointer", fontSize: 16,
  display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: FONT,
};
