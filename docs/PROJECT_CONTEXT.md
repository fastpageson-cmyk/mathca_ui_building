# Matcha Project Context

마지막 갱신일: 2026-05-27

## What This Project Is

`matcha`는 Matcha 서비스의 초기 시안 산출물을 빠르게 확인하고 공유하기 위한 정적 프론트엔드 프로젝트입니다. 현재 핵심은 제품 전체 앱 구현이 아니라, 마케터가 원하는 기능 개선 방향을 개발팀에 명확히 전달할 수 있는 시안 허브를 안정적으로 유지하는 것입니다.

## Current Product Surface

- `index.html`은 시안 뷰어입니다. 상단 토글로 `landing.html`과 `report.html`을 iframe 안에서 전환합니다.
- `landing.html`은 후기/랜딩 페이지 성격의 긴 단일 HTML 시안입니다.
- `report.html`은 매칭 리포트 이메일 화면 시안입니다.
- `email_draft.html`은 이메일 발송용으로 바로 가져다 쓸 수 있는 인라인 스타일 HTML 초안입니다.
- 새 기능 개선 시안은 원본 화면과 개선안을 나란히 비교할 수 있도록 `index.html` 뷰어에 토글로 추가하는 방식을 권장합니다.
- 현재 추가된 기능 개선 시안은 설문 완료 페이지에 자기소개 한마디 입력란을 넣는 `mockups/survey-complete-intro.html`입니다.

## Tech Stack

- Vite
- Plain HTML/CSS/JavaScript
- 별도 프레임워크 없음
- 빌드 명령: `npm run build`
- 개발 서버: `npm run dev`

## Build Configuration

`vite.config.js`는 멀티 페이지 입력을 사용합니다.

- `index.html`
- `landing.html`
- `report.html`
- `mockups/survey-complete-intro.html`

정적 배포에서 리포트 데이터 접근을 위해 `public/src/data/match_messages.json` 복사본도 존재합니다.

## Brand And Design Direction

- 브랜드 키워드: 따뜻함, 정제됨, 신뢰감, 부드러운 소개/매칭 경험
- 주요 색감:
  - Matcha green: `#5B8C5A`
  - Deep forest: `#2d5a2d`, `#3d5a3d`
  - Warm cream: `#FDFBF7`, `#FAF8F2`
  - Charcoal: `#2C2C2C`
- 주요 폰트:
  - Serif accent: `DM Serif Display`
  - Sans: `IBM Plex Sans`
- 현재 시안은 glassmorphism 성격의 카드, 부드러운 배경, 낮은 대비의 보조 텍스트를 사용합니다.

## Important Files

| File | Purpose |
| --- | --- |
| `index.html` | 랜딩/리포트 시안 전환 뷰어 |
| `landing.html` | 후기/랜딩 페이지 시안 |
| `report.html` | 매칭 리포트 이메일 시안 구조 |
| `src/css/report.css` | 리포트 전용 스타일 |
| `src/js/report.js` | JSON 기반 매칭 메시지 렌더링 |
| `src/data/match_messages.json` | 리포트 메시지 원본 |
| `public/src/data/match_messages.json` | 배포 접근용 메시지 복사본 |
| `email_draft.html` | 이메일 발송용 인라인 HTML |
| `mockups/survey-complete-intro.html` | 설문 완료 페이지 자기소개 한마디 입력 개선 시안 |
| `docs/DEVELOPER_HANDOFF.md` | 기능 개선 시안별 개발팀 전달사항 |
| `docs/FEATURE_MOCKUP_WORKFLOW.md` | 운영 HTML 기반 기능 개선 시안 제작 워크플로우 |
| `backup_v1/` | 이전 버전 백업 |
| `dist/` | 빌드 결과물 |

## Known Context And Cautions

- `src/js/main.js`와 `src/css/style.css`에는 Vite 기본 템플릿 흔적 또는 이전 생성물이 남아 있습니다. 현재 주요 화면은 루트 HTML 파일들이 직접 구성합니다.
- `src/css/style.css`는 매우 큰 생성 CSS처럼 보입니다. 사용자가 명시하지 않으면 정리하지 않습니다.
- 리포트 메시지 데이터는 현재 `src/data/`와 `public/src/data/` 양쪽에 있으므로, 메시지 변경 시 두 파일 동기화가 필요합니다.
- `report.js`는 `fetch('src/data/match_messages.json')`를 사용합니다. 배포/로컬 경로 이슈가 생기면 Vite public 경로와 함께 확인해야 합니다.
- 실제 이메일/이름처럼 보이는 값은 데모 값인지 확인 후 유지하거나 교체합니다.
- 운영 웹페이지 HTML을 입력받아 시안을 만들 때는 원본을 별도 파일에 보존하고, 개선안은 별도 HTML로 생성해 비교 가능하게 유지합니다.
- 루트의 `설문완료.html`은 사용자가 저장한 운영 설문 완료 페이지 원본입니다. 현재 개선 시안 작업에서는 원본을 수정하지 않았습니다.

## Working Agreement For Future AI Tools

- 새 기능보다 현재 산출물의 안정적인 전달을 우선합니다.
- 디자인 변경은 전체 톤을 유지하면서 필요한 부분만 조정합니다.
- 변경 이유가 다음 작업자에게 중요하면 이 파일에 남깁니다.
- 작업 기록은 `docs/CHANGELOG.md`에 남깁니다.

## Suggested Next Improvements

- `src/data/`와 `public/src/data/` 데이터 동기화 방식을 자동화하거나 하나의 접근 경로로 단순화
- Vite 기본 템플릿 잔여 파일이 실제로 필요 없는지 확인 후 정리
- 이메일 발송용 HTML과 웹 미리보기용 HTML의 관리 기준 분리
- 화면 검증 체크리스트 추가
