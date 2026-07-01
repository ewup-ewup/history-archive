# 네이버 블로그 일일 요약 스크래퍼

[blog.naver.com/ranto28](https://blog.naver.com/ranto28) 에 올라오는 글을 **매일 자동으로**
가져와 Claude 로 **본문 요약 + 댓글 요약**을 만들고,

1. 사이트와 같은 디자인의 **HTML 다이제스트**(`public/digest/YYYY-MM-DD.html`)로 저장하고
2. **카카오톡**으로 그 링크를 보내줍니다.

매일 아침 07:00(KST) GitHub Actions 가 실행합니다.

---

## 동작 흐름

```
scraper/run.js
 ├─ lib/naver.js      RSS/PostView/댓글 API 로 새 글·본문·댓글 수집
 ├─ lib/summarize.js  Claude Messages API 로 본문·댓글 요약(JSON)
 ├─ lib/render.js     사이트 팔레트로 standalone HTML 생성
 ├─ lib/kakao.js      카카오 "나에게 보내기" 로 링크 전송
 └─ lib/state.js      이미 요약한 글(logNo) 기록 → 중복 방지
```

- 새로 올라온 글만 요약합니다(이미 처리한 글은 `state.json` 으로 건너뜀).
- 댓글 수집이 실패해도 본문 요약만으로 다이제스트는 정상 생성됩니다.
- 결과물은 `public/` 아래라 `npm run build` 시 사이트와 함께 배포됩니다.
  전체 목록은 `/digest/index.html` 에서 볼 수 있습니다.

---

## 설정 (한 번만)

### 1) Claude API 키
[Anthropic Console](https://console.anthropic.com/) 에서 API 키를 발급받아
저장소 **Settings → Secrets and variables → Actions → Secrets** 에 등록합니다.

| 종류 | 이름 | 값 |
| --- | --- | --- |
| Secret | `ANTHROPIC_API_KEY` | `sk-ant-...` |

### 2) 카카오톡 "나에게 보내기"
[Kakao Developers](https://developers.kakao.com/) 에서:

1. 애플리케이션 생성 → **REST API 키** 확인.
2. **카카오 로그인** 활성화 + **동의 항목**에서 `talk_message`(카카오톡 메시지 전송) 켜기.
3. 아래 순서로 **리프레시 토큰**을 한 번 발급받습니다.

```bash
# (1) 인가 코드 받기 — 브라우저에서 아래 URL 열고, 리다이렉트된 주소의 ?code= 값 복사
#     redirect_uri 는 앱에 등록한 값과 정확히 일치해야 합니다.
https://kauth.kakao.com/oauth/authorize?client_id=REST_API_KEY&redirect_uri=https://localhost&response_type=code&scope=talk_message

# (2) 토큰 교환 — refresh_token 을 받아둡니다.
curl -X POST "https://kauth.kakao.com/oauth/token" \
  -d "grant_type=authorization_code" \
  -d "client_id=REST_API_KEY" \
  -d "redirect_uri=https://localhost" \
  -d "code=받은_인가코드"
```

응답의 `refresh_token` 을 저장소 Secret 에 등록합니다.
(액세스 토큰은 6시간마다 리프레시 토큰으로 자동 재발급되므로 등록하지 않아도 됩니다.)

| 종류 | 이름 | 값 |
| --- | --- | --- |
| Secret | `KAKAO_REST_API_KEY` | 카카오 앱 REST API 키 |
| Secret | `KAKAO_REFRESH_TOKEN` | 위에서 받은 refresh_token |

> 리프레시 토큰은 약 2개월 유효하며, 사용 중 갱신되면 실행 로그에 새 값이 안내됩니다.
> 그때 Secret 을 교체하면 됩니다.

### 3) 사이트 주소(선택이지만 권장)
카카오 링크가 실제 배포 주소를 가리키도록, **Variables** 탭에 등록합니다.

| 종류 | 이름 | 값(예) |
| --- | --- | --- |
| Variable | `SITE_BASE_URL` | `https://history-archive.pages.dev` |
| Variable | `BLOG_ID` | `ranto28` (기본값이라 생략 가능) |
| Variable | `MAX_POSTS` | `5` (기본값이라 생략 가능) |

미설정 시 링크는 상대경로(`/digest/...`)로 들어갑니다.

---

## 실행

- **자동**: 매일 07:00 KST. `.github/workflows/daily-digest.yml`
- **수동**: 저장소 **Actions → 네이버 블로그 일일 요약 → Run workflow**
  (`dry_run` 체크 시 저장/전송 없이 로그로만 미리보기)

### 로컬 테스트
```bash
# 실제 저장/전송 없이 요약 결과만 콘솔 출력
ANTHROPIC_API_KEY=sk-ant-... npm run digest:dry

# 실제 파일 생성까지(카카오는 생략) — 셸에서 env 지정
ANTHROPIC_API_KEY=sk-ant-... SKIP_KAKAO=1 npm run digest
```

---

## 커스터마이징

| 원하는 것 | 고칠 곳 |
| --- | --- |
| 실행 시각/주기 | `.github/workflows/daily-digest.yml` 의 `cron` |
| 다른 블로그 | Variable `BLOG_ID` 변경 |
| 요약 톤/형식 | `scraper/lib/summarize.js` 의 system 프롬프트 |
| 페이지 디자인 | `scraper/lib/render.js` 의 `CSS` |
| 하루 처리 글 수 | Variable `MAX_POSTS` |

## 참고 / 주의

- 네이버 공개 엔드포인트(RSS·PostView·cbox 댓글 API)를 사용합니다. 네이버가
  마크업/파라미터를 바꾸면 `scraper/lib/naver.js` 만 손보면 됩니다. 특히 댓글
  API 파라미터는 최초 실 실행에서 한 번 검증하는 것을 권장합니다.
- 자동 생성 요약은 원문의 뉘앙스와 다를 수 있습니다. 개인 참고용으로만
  사용하고, 원문 저작권·이용약관을 준수하세요.
