# Feature Mockup Workflow

목적: 마케터가 운영 중인 웹페이지 HTML을 바탕으로 기능 개선 시안을 만들고, 개발팀이 현재 GitHub 배포 링크에서 토글로 기존/개선안을 비교할 수 있게 만드는 작업 절차입니다.

## Target Task

이번 과제:

1. 운영 중인 웹페이지의 설문 완료 페이지 HTML을 입력한다.
2. 설문 완료 페이지에 `상대에게 전해줄 자기소개 한마디` 입력란을 추가한다.
3. Matcha 톤에 맞는 디자인 시안을 생성한다.
4. 현재 GitHub 링크의 시안 뷰어에 토글 방식으로 추가해 개발팀에 요청 의도를 전달한다.

## Output Goal

개발팀이 최종 링크 하나만 열어도 다음을 이해할 수 있어야 합니다.

- 현재 운영 화면이 어떤 상태인지
- 어떤 입력란이 새로 추가되어야 하는지
- 사용자가 어디서, 어떤 문구를 입력하는지
- 디자인 톤과 배치가 어떤 방향인지
- 구현 시 참고해야 할 기획 메모가 무엇인지

## Recommended File Structure

```text
source/
  survey-complete-current.html

mockups/
  survey-complete-intro.html

docs/
  FEATURE_MOCKUP_WORKFLOW.md
  CHANGELOG.md
  PROJECT_CONTEXT.md

index.html
vite.config.js
```

### File Roles

- `source/survey-complete-current.html`: 운영 중인 설문 완료 페이지 HTML 원본 보관
- `mockups/survey-complete-intro.html`: 자기소개 한마디 입력란이 추가된 개선 시안
- `index.html`: 기존 시안들과 새 시안을 토글로 볼 수 있는 뷰어
- `docs/CHANGELOG.md`: 작업 기록과 검증 결과
- `docs/PROJECT_CONTEXT.md`: 새 시안의 목적과 주의사항

## Workflow

### 1. Input: 운영 HTML 수집

사용자가 운영 중인 설문 완료 페이지 HTML을 제공합니다.

받아야 할 입력:

- 설문 완료 페이지 HTML 전체
- 실제 운영 URL이 있다면 URL
- 개인정보 또는 민감 데이터 포함 여부
- 이 페이지가 모바일 중심인지, 데스크톱도 중요한지

처리 원칙:

- 원본 HTML은 `source/survey-complete-current.html`에 저장합니다.
- 원본은 비교 기준이므로 가능한 한 수정하지 않습니다.
- 실제 개인정보, 이메일, 전화번호, 유저 식별값은 더미 값으로 치환합니다.

### 2. Context Check: 기존 구조 파악

작업자는 아래를 확인합니다.

- 현재 `index.html`의 토글 구조
- `vite.config.js`의 멀티 페이지 입력 설정
- 기존 Matcha 디자인 톤
- 새 HTML이 외부 CSS/이미지/스크립트에 의존하는지

판단 기준:

- 운영 HTML이 자체 스타일을 포함하면 원형 보존을 우선합니다.
- 개선 시안은 운영 HTML의 레이아웃을 최대한 유지하되, 새 입력란의 사용 맥락이 명확해야 합니다.
- 구현 요청용 시안이므로 완전한 백엔드 동작보다 화면 의도 전달을 우선합니다.

### 3. Mockup: 자기소개 한마디 입력란 추가

추가할 기능:

- 라벨: `상대에게 전해줄 자기소개 한마디`
- 입력 방식: 짧은 자기소개를 쓸 수 있는 `textarea`
- 권장 보조문구: `매칭된 상대에게 처음 전달될 한마디를 적어주세요.`
- 권장 제한: 80자 또는 100자 내외
- 권장 상태:
  - 기본 상태
  - 입력 중 상태
  - 글자 수 카운터
  - 선택 또는 필수 여부 표시

권장 UX:

- 설문 완료 직후 사용자가 부담 없이 작성할 수 있게 문구를 부드럽게 둡니다.
- 너무 긴 자기소개보다 첫 대화의 실마리를 주는 한마디처럼 느껴지게 합니다.
- 제출/완료 버튼 근처에 배치하되, 기존 완료 경험을 방해하지 않습니다.

예시 문구:

```text
상대에게 전해줄 자기소개 한마디
매칭된 상대에게 처음 전달될 한마디를 적어주세요.
예: 주말엔 전시 보러 가는 걸 좋아해요. 편하게 대화해요 :)
```

### 4. Viewer: 현재 GitHub 링크에 토글 추가

`index.html`의 시안 뷰어에 새 항목을 추가합니다.

권장 토글 구성:

- `후기 시안`
- `이메일 시안`
- `설문 완료 원본`
- `설문 완료 개선안`

또는 개발팀 전달 목적이 더 강하면:

- `현재 화면`
- `개선 시안`
- `관련 리포트`

구현 원칙:

- 기존 iframe 뷰어 방식을 유지합니다.
- 새 원본/개선안 HTML을 각각 iframe 대상으로 연결합니다.
- 토글 라벨은 개발팀이 바로 이해할 수 있게 명확하게 씁니다.
- 모바일에서도 토글 버튼 텍스트가 겹치지 않게 줄바꿈 또는 스크롤을 허용합니다.

### 5. Build Config: Vite 입력 추가

새 HTML 파일이 빌드 산출물에 포함되도록 `vite.config.js`에 입력을 추가합니다.

예상 입력:

```js
surveyCurrent: resolve(__dirname, 'source/survey-complete-current.html'),
surveyIntro: resolve(__dirname, 'mockups/survey-complete-intro.html'),
```

실제 파일 위치는 작업자가 선택하되, `index.html`의 iframe 경로와 일치해야 합니다.

### 6. QA: 검증

필수 확인:

- `npm run build` 성공
- `index.html`에서 기존 시안과 새 시안 토글 전환 가능
- 원본 화면과 개선 화면이 서로 구분됨
- 자기소개 입력란이 모바일에서 잘 보임
- 글자 수 카운터가 있다면 정상 동작
- 개발팀이 볼 안내 문구가 화면 또는 문서에 남아 있음

권장 확인 뷰포트:

- 모바일: 375px 너비
- 모바일 대형: 430px 너비
- 데스크톱: 1280px 너비

### 7. Handoff: 개발팀 전달 메모 작성

`docs/CHANGELOG.md`에 아래 내용을 남깁니다.

- 추가된 시안 파일
- 운영 원본 HTML 저장 위치
- 개선안에서 추가된 UI
- 구현 시 개발팀이 확인해야 할 정책
- 검증 결과

개발팀 전달 메모에는 아래 질문의 답이 포함되어야 합니다.

- 이 입력값은 필수인가 선택인가?
- 최대 글자 수는 몇 자인가?
- 상대방에게 어디에서 노출되는가?
- 작성하지 않으면 어떤 문구 또는 빈 상태가 보이는가?
- 수정 가능 시점은 언제까지인가?

## Acceptance Criteria

작업 완료 조건:

- 운영 HTML 원본이 별도 파일로 보존되어 있다.
- 자기소개 한마디 입력란이 추가된 개선 시안이 있다.
- GitHub 배포 링크의 뷰어에서 원본/개선안을 토글로 비교할 수 있다.
- `npm run build`가 성공한다.
- `docs/CHANGELOG.md`에 작업 요약과 검증 결과가 기록되어 있다.

## Prompt Template For Future AI Tools

아래 템플릿을 다음 AI 도구에 붙여 넣으면 됩니다.

```text
AGENTS.md, docs/PROJECT_CONTEXT.md, docs/CHANGELOG.md, docs/FEATURE_MOCKUP_WORKFLOW.md를 먼저 읽어줘.

목표:
운영 중인 설문 완료 페이지 HTML을 기반으로, "상대에게 전해줄 자기소개 한마디" 입력란이 추가된 개선 시안을 만들고 index.html 뷰어에 토글로 추가해줘.

입력:
[여기에 운영 HTML 또는 운영 URL을 붙여넣기]

요구사항:
- 원본 HTML은 source/survey-complete-current.html에 보존
- 개선 시안은 mockups/survey-complete-intro.html로 생성
- index.html에서 원본/개선안을 토글로 비교 가능하게 추가
- vite.config.js 빌드 입력 추가
- npm run build로 검증
- docs/CHANGELOG.md에 작업 기록 남기기
```
