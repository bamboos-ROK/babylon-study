# 환경 설정 기록

Mini HD Map Viewer 토이 프로젝트 개발 환경 구축 절차.

---

## 1단계 — Vite 프로젝트 초기화

루트 폴더에서 실행:

```bash
npm create vite@latest . -- --template react-ts
```

생성되는 파일:

```text
index.html
vite.config.ts
tsconfig.json
tsconfig.app.json
tsconfig.node.json
package.json
src/
 ├ main.tsx
 ├ App.tsx
 ├ App.css
 ├ index.css
 └ assets/
public/
 └ vite.svg
```

---

## 2단계 — 의존성 설치 + Babylon.js 추가

```bash
npm install
npm install @babylonjs/core
```

---

## 3단계 — Vite 기본 파일 정리

Vite 템플릿이 생성한 불필요한 파일 제거:

```bash
# 삭제 대상
src/App.css
src/index.css
src/assets/
public/vite.svg
```

---

## 4단계 — PRD 기준 디렉토리 구조 생성

```bash
mkdir -p src/engine src/viewer src/app data
```

최종 구조:

```text
/
 ├ src
 │   ├ engine/
 │   ├ viewer/
 │   └ app/
 ├ data/
 ├ index.html
 ├ vite.config.ts
 └ package.json
```

---

## 5단계 — 기본 Babylon.js Scene 동작 확인

Day 1 목표: 브라우저에서 빈 Babylon.js 씬 렌더링 확인

구현 대상:

- `<canvas>` 마운트
- `Engine` + `Scene` 초기화
- `ArcRotateCamera` (top-down)
- `HemisphericLight`
- 바닥 Grid (`CreateGround` 또는 `GridMaterial`)

```bash
npm run dev
# → http://localhost:5173
```

확인 기준:

- 브라우저에서 빈 씬이 렌더링됨
- 마우스로 카메라 회전 · 줌 가능
- 콘솔 에러 없음

---

## 진행 상태

- Vite 프로젝트 초기화 ✅
- 의존성 설치 + Babylon.js ✅
- 불필요한 파일 정리 ✅
- 디렉토리 구조 생성 ✅
- 기본 Scene 동작 확인 ✅
