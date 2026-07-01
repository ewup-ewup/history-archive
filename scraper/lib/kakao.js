// 카카오톡 "나에게 보내기" 모듈
// ------------------------------------------------------------
// 카카오 REST API 로 본인 카카오톡에 링크 메시지를 보냅니다.
// (친구에게 보내기는 상대 동의·친구목록 권한이 필요해 복잡하므로,
//  개인 알림 용도로 가장 안정적인 "나에게 보내기(memo)" 를 사용합니다.)
//
// 필요한 값(모두 GitHub Secrets 로 주입):
//   KAKAO_REST_API_KEY  : 카카오 개발자 앱의 REST API 키
//   KAKAO_REFRESH_TOKEN : talk_message 스코프로 발급받은 리프레시 토큰
//
// 액세스 토큰(6시간)은 매 실행마다 리프레시 토큰으로 새로 발급합니다.
// 리프레시 토큰이 갱신되어 반환되면 로그로 안내합니다(수동 시크릿 교체 권장).

async function getAccessToken() {
  const restKey = process.env.KAKAO_REST_API_KEY;
  const refresh = process.env.KAKAO_REFRESH_TOKEN;
  if (!restKey || !refresh) {
    throw new Error("KAKAO_REST_API_KEY / KAKAO_REFRESH_TOKEN 이 필요합니다.");
  }
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: restKey,
    refresh_token: refresh,
  });
  const res = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
    body,
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`카카오 토큰 갱신 실패: ${JSON.stringify(data)}`);
  }
  if (data.refresh_token) {
    console.log(
      "[kakao] 새 리프레시 토큰이 발급되었습니다. KAKAO_REFRESH_TOKEN 시크릿을 갱신하세요:\n" +
        data.refresh_token
    );
  }
  return data.access_token;
}

// 링크 메시지 전송. text 는 알림/미리보기 문구, link 는 다이제스트 URL.
export async function sendKakaoLink({ text, link, buttonTitle = "요약 보러가기" }) {
  const accessToken = await getAccessToken();
  const template = {
    object_type: "text",
    text,
    link: { web_url: link, mobile_web_url: link },
    button_title: buttonTitle,
  };
  const res = await fetch("https://kapi.kakao.com/v2/api/talk/memo/default/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: new URLSearchParams({ template_object: JSON.stringify(template) }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.result_code !== 0) {
    throw new Error(`카카오 메시지 전송 실패: HTTP ${res.status} ${JSON.stringify(data)}`);
  }
  return true;
}
