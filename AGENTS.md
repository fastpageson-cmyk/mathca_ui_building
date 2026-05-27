# Matcha AI Collaboration Rules

이 파일은 Codex, Claude, Cursor, 기타 바이브 코딩 도구가 이 프로젝트를 이어서 작업할 때 가장 먼저 읽어야 하는 공통 규칙입니다.

## First Read Order

1. `AGENTS.md`
2. `docs/PROJECT_CONTEXT.md`
3. `docs/CHANGELOG.md`
4. 작업 대상 파일

## Project Snapshot

- 프로젝트명: `matcha`
- 성격: Matcha 서비스의 랜딩/후기 시안과 이메일 매칭 리포트를 보여주는 Vite 기반 정적 프론트엔드
- 주요 화면:
  - `index.html`: `landing.html`과 `report.html`을 전환해서 보는 시안 뷰어
  - `landing.html`: 후기/랜딩 페이지 시안
  - `report.html`: 매칭 리포트 이메일 시안
  - `email_draft.html`: 직접 이메일 발송에 쓸 수 있는 인라인 스타일 HTML 초안
- 주요 데이터:
  - `src/data/match_messages.json`: 매칭 리포트 동적 메시지 원본
  - `public/src/data/match_messages.json`: 정적 배포에서 접근 가능한 데이터 복사본

## Operating Principles

- 사용자가 명시하지 않은 대규모 리팩터링은 하지 않습니다.
- 디자인 시안 파일은 의도적으로 독립 HTML/CSS 성격이 강합니다. 공통화보다 현재 산출물의 안정성과 재현성을 우선합니다.
- `backup_v1/`은 과거 기준점입니다. 사용자가 요청하지 않으면 수정하지 않습니다.
- `dist/`는 빌드 결과물입니다. 소스 변경 없이 직접 수정하지 않습니다.
- 민감하거나 실제 개인 정보처럼 보이는 이메일, 이름, 링크, 메시지는 추가 전에 반드시 더미 데이터인지 확인합니다.
- 기존 톤은 따뜻하고 정제된 matcha 브랜드 감성입니다. 갑작스러운 고채도, 과한 장식, 기술 데모 느낌을 피합니다.

## File Ownership Guide

- 뷰어 전환/프레임 UI: `index.html`
- 랜딩 페이지 시안: `landing.html`
- 리포트 구조: `report.html`
- 리포트 스타일: `src/css/report.css`
- 리포트 동적 렌더링: `src/js/report.js`
- 리포트 메시지 데이터: `src/data/match_messages.json`, `public/src/data/match_messages.json`
- 빌드 입력 설정: `vite.config.js`

## Before Editing

- 현재 작업 목적을 `docs/CHANGELOG.md`의 `In Progress` 섹션에 한 줄로 남깁니다.
- 관련 파일만 읽고, 변경 범위를 작게 유지합니다.
- 같은 데이터가 `src/data/`와 `public/src/data/`에 동시에 있을 때는 둘 다 일관되게 맞춥니다.

## After Editing

- `npm run build`로 확인합니다.
- 화면/스타일 변경이면 가능하면 로컬에서 `index.html`, `landing.html`, `report.html`을 확인합니다.
- `docs/CHANGELOG.md`에 변경 요약, 수정 파일, 검증 결과, 다음 작업자를 위한 메모를 남깁니다.
- 새 맥락이나 결정이 생기면 `docs/PROJECT_CONTEXT.md`도 갱신합니다.

## Conflict Avoidance

- 여러 도구가 동시에 같은 파일을 만질 수 있으므로, 작업 전후로 변경 파일을 확인합니다.
- 다른 사람이 만든 변경을 되돌리지 않습니다.
- 목적이 겹치는 새 파일을 만들기 전에 기존 문서를 갱신할 수 있는지 먼저 판단합니다.
- CSS/HTML 전체 재작성보다 필요한 블록 수정으로 해결합니다.

## Commit Message Style

가능하면 다음 형식을 사용합니다.

```text
docs: update AI collaboration context
feat: refine report viewer interaction
fix: sync report message data paths
style: adjust matcha report layout
```
