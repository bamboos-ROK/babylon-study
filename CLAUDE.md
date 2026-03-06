# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

웹 프론트엔드 개발자를 위한 3D 그래픽 입문 학습 프로젝트.
최종 단계는 학습한 좌표계·렌더링·HD Map 개념을 이용해 **Mini HD Map Viewer**를 구현하는 토이 프로젝트다.

## 참조 문서

- 학습 로드맵: `docs/onboarding_roadmap.md`
- 토이 프로젝트 상세 스펙: `docs/PRD.md`
- 환경 설정 기록: `docs/SETUP.md`

## 기술 스택

### 토이 프로젝트 (루트)

- **프레임워크** — React 18 + TypeScript
- **번들러** — Vite
- **3D 엔진** — Babylon.js (npm 패키지)

### 학습 데모 (`graphics_demo/`) — 참조 금지. 수정 금지

이전 학습 자료. 참조하지 않는다. 수정하지 않는다.

## 작업 경계

<!-- 구현을 진행하면서 채워나간다 -->

- `graphics_demo/` — 수정 금지
- TODO: 패키지 추가 시 사용자 확인 여부
- TODO: 커밋 자동화 허용 여부
- TODO: 파일 생성/삭제 범위

## CSS 컨벤션

- **전역 reset** — `src/index.css` 한 파일로 관리 (`box-sizing`, `margin`, `padding`, `overflow` 등)
- **컴포넌트 스타일** — 인라인 스타일로 처리. 별도 CSS 파일 생성하지 않는다.

## 개발 명령어

```bash
npm install       # 의존성 설치
npm run dev       # 개발 서버 실행 (Vite, 기본 포트 5173)
npm run build     # 프로덕션 빌드
```
