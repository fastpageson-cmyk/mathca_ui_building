# Matcha Change Log

이 파일은 여러 AI 도구와 사람이 같은 프로젝트를 이어서 작업할 때 맥락 손실을 줄이기 위한 작업 로그입니다. 새 작업을 시작하면 `In Progress`에 적고, 완료하면 날짜별 항목으로 옮겨주세요.

## In Progress

- 없음

## 2026-05-27

### Added

- AI 협업 공통 규칙 파일 `AGENTS.md` 추가
- 프로젝트 전체 맥락 파일 `docs/PROJECT_CONTEXT.md` 추가
- 작업 이력 관리 파일 `docs/CHANGELOG.md` 추가
- Claude 계열 도구용 진입 파일 `CLAUDE.md` 추가
- Cursor 계열 도구용 진입 파일 `.cursorrules` 추가
- 운영 HTML 기반 기능 개선 시안 제작 워크플로우 `docs/FEATURE_MOCKUP_WORKFLOW.md` 추가
- 설문 완료 페이지 자기소개 한마디 개선 시안 `mockups/survey-complete-intro.html` 추가
- 기능 개선 시안별 개발팀 전달사항 문서 `docs/DEVELOPER_HANDOFF.md` 추가

### Changed

- `mockups/survey-complete-intro.html` 설문 완료 개선 시안 디자인 수정
  - 자기소개 입력란 상단의 구분선(`intro-divider`) 제거
  - "선택" 배지 제거
  - "매칭된 상대에게 처음 전달될 한마디를 적어주세요." 안내 문구 스타일을 Matcha Green 브랜드 감성을 살린 부드러운 하이라이트로 개선
  - `contact@trymatcha.cc` 문의 링크 위치를 '다음 매칭에서 나를 제외해주세요' 카드 하단으로 이동
  - '다음 매칭에서 나를 제외해주세요' 토글 스위치 동작이 온/오프 상태로 전환되도록 동적 인터랙션 스크립트 및 스타일 구현
  - 모바일 뷰포트에서 입력란이 찢어지지 않도록 `textarea` 리사이즈 고정(`resize: none`) 설정

### Notes

- 현재 프로젝트는 Vite 기반 정적 프론트엔드이며, 주요 산출물은 `index.html`, `landing.html`, `report.html`, `email_draft.html`입니다.
- 메시지 데이터는 `src/data/match_messages.json`와 `public/src/data/match_messages.json`에 중복되어 있으므로 이후 수정 시 동기화가 필요합니다.
- 이 프로젝트는 마케터가 기능 개선 요청을 시각적으로 전달하는 시안 허브 역할을 합니다.
- 설문 완료 개선안은 원본 `설문완료.html`을 직접 수정하지 않고, 보이는 원형을 유지한 별도 정적 HTML로 제작했습니다.
- 자기소개 한마디는 선택 입력, 최대 100자, 미입력 시 기존 이메일 기본 문구 유지, 언제든 수정 가능 정책으로 정리했습니다.
- 설문 완료 개선안의 자기소개 입력 영역을 독립 카드에서 발송 안내 카드 내부로 이동해 원본의 한눈에 들어오는 정보 구조에 가깝게 정리했습니다.

### Verification

- 문서 추가 작업이므로 빌드 영향은 없지만, 이후 변경에서는 `npm run build` 확인을 권장합니다.
- `docs/FEATURE_MOCKUP_WORKFLOW.md`는 문서 추가 작업이라 별도 빌드는 생략했습니다.
- `npm run build` 성공
- 로컬 미리보기에서 `설문 완료 개선안` 토글, 자기소개 입력란, 선택 입력 배지, 100자 카운터 동작 확인
- compact 레이아웃 조정 후 `npm run build` 재확인 및 브라우저에서 입력 영역 노출 확인

## Log Template

아래 템플릿을 복사해서 새 항목을 추가하세요.

```markdown
## YYYY-MM-DD

### Changed

- 무엇을 바꿨는지 한 줄씩 기록

### Files

- `path/to/file`

### Verification

- 실행한 확인 방법과 결과

### Handoff Notes

- 다음 작업자가 알아야 할 맥락
```
