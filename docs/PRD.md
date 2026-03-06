# Mini HD Map Viewer 프로젝트 계획서

## 기술 스택

| 항목 | 내용 |
| ---- | ---- |
| 프레임워크 | React 18 + TypeScript |
| 번들러 | Vite |
| 3D 엔진 | Babylon.js (npm 패키지) |

---

## 프로젝트 개요

### 목적

정밀도로지도(HD Map) 개념을 기반으로
간단한 지도 렌더링 시스템을 직접 구현하여 **지도 엔진 구조를 이해한다.**

이 프로젝트는 **지도 엔진 개발 온보딩 과정의 마지막 단계 실습**이다.

### 핵심 학습 목표

- 지도 좌표계 → 3D 엔진 좌표 변환 이해
- 지도 데이터 로딩 및 파싱 구조 이해
- 지도 렌더링 파이프라인 경험
- 간단한 지도 엔진 구조 설계

### 개발 기간

일주일(워킹데이 약 5일)

---

## 구현 목표

### Mini HD Map Viewer

특정 지역의 도로 데이터를 로드하여
3D 엔진(Babylon.js)에서 렌더링하는 **간단한 지도 뷰어**를 구현한다.

---

## 렌더링 대상 지역

서울 교대역 주변 반경 500m
(Seoul National University of Education Station)

### 선정 이유

- 도로 구조가 비교적 단순
- 데이터 규모가 작음
- 1주일 실습 범위에 적절

---

## 데이터 소스

### OpenStreetMap

지도 데이터는 **OpenStreetMap**을 사용한다.

#### Overpass Turbo

데이터 추출은 **Overpass Turbo**를 이용한다.

##### 쿼리 예시

교대역(37.4930, 127.0140) 반경 500m 도로 추출:

```overpassql
[out:json][timeout:30];
(
  way["highway"](around:500,37.4930,127.0140);
);
out body;
>;
out skel qt;
```

---

## 데이터 타입

사용 데이터는 **도로 중심선(centerline)**이다.

| 요소   | 표현 방식       |
| ------ | --------------- |
| 도로   | Line / Polyline |
| 교차로 | Line 연결       |
| 차선   | 생략            |

구현은 두 단계로 진행한다.

1. **Line 렌더링** (Day 3) — 좌표 변환 검증용. `MeshBuilder.CreateLines`로 도로 중심선을 선으로 표시.
2. **Road Mesh** (Day 4~5) — 핵심 목표. Polyline → Triangle Strip으로 도로 폭을 반영한 Mesh 생성.

데이터 포맷: GeoJSON (OpenStreetMap export)

---

## 좌표 변환 구조

OpenStreetMap 데이터는 **WGS84 좌표**이다.

렌더링을 위해 **Babylon World 좌표계**로 변환한다.

### 변환 파이프라인

WGS84 (lat, lon)
→ Local Origin 기준 좌표
→ Babylon World 좌표

#### Origin

교대역 좌표

#### 변환 방식 (단순 Local 변환)

```
x = (lon - originLon) * scale
z = (lat - originLat) * scale
y = 0
```

scale

```
100000 // (위도/경도 degree → meter scale 근사 변환)
```

> **근사 오차**: 서울 위도(37.5°)에서 1° 경도 ≈ 88.8km이므로 실제 거리 대비 최대 ~12% 오차 발생.
> 이 프로젝트는 학습 목적이므로 ±수십m 수준의 오차를 허용한다.

---

## 렌더링 방식

렌더링 엔진

```
Babylon.js
```

기본 렌더링 방식

```
MeshBuilder.CreateLines
```

도로 Geometry

```
Road: Line / Polyline
```

---

## 지도 엔진 구조

실습 목적상 **간단한 지도 엔진 구조**를 구성한다.

```
MapEngine
 ├ CoordinateSystem  // WGS84 → Engine 좌표 변환
 ├ MapLoader        // 지도 데이터 로딩
 ├ MapRenderer      // Babylon geometry 생성
 └ TileManager (optional)
```

---

## 프로젝트 구조

```text
/
 ├ src
 │   ├ engine
 │   │   ├ MapEngine.ts
 │   │   ├ CoordinateSystem.ts
 │   │   ├ MapLoader.ts
 │   │   ├ MapRenderer.ts
 │   │   └ TileManager.ts
 │   ├ viewer
 │   │   └ MapViewer.tsx
 │   └ app
 │       └ main.tsx
 ├ data
 │   └ roads.geojson
 ├ index.html
 ├ vite.config.ts
 └ package.json
```

---

## Tile 시스템 (옵션)

시간 여유가 있을 경우 **간단한 타일 로딩 구조**를 추가한다.

실제 지도 타일 시스템 대신 **데이터 분할 방식**으로 구현한다.

예시

```
tile_0_0.json
tile_0_1.json
tile_1_0.json
```

카메라 위치 기반으로

```
TileManager
→ 필요한 tile load
```

---

## 카메라 구조

지도 뷰어는 **3D perspective 카메라**로 구현한다.

```
Camera
- Babylon ArcRotateCamera
- Top-down perspective
```

목적

- 실제 지도 엔진 구조와 유사한 환경 구성
- Frustum / LOD 이해

---

## 확장 가능 항목

다음 기능은 **설계상 언제든지 확장 가능**하다.

```
Lane Geometry
Tile Streaming
LOD
Vector Tile
Road Marking
HD Map Lane Graph
```

현재 설계는 **확장 가능한 구조**를 목표로 한다.

---

## 개발 일정

### Day 1

환경 구축

```
React
Babylon.js
Scene
Camera
Grid
```

---

### Day 2

지도 데이터 준비

```
OSM 데이터 다운로드
GeoJSON 생성
데이터 파싱
```

---

### Day 3

좌표 변환

```
WGS84 → Babylon 좌표
도로 라인 렌더링
```

---

### Day 4

Road Mesh 구현

```
Polyline → Triangle Strip Mesh
도로 폭(width) 반영
MapRenderer 확장
```

---

### Day 5

엔진 구조 정리 및 마무리

```
MapEngine / MapLoader / MapRenderer / CoordinateSystem 구조 정리
코드 정리
(옵션) Tile 시스템
```

---

## 최종 결과

브라우저에서 “교대역 주변 500m 도로”를 **3D viewport에서 렌더링**한다.

기본 기능

- 카메라 이동
- 도로 렌더링
- 좌표 변환

---

## 완료 기준 (Done Criteria)

- 브라우저에서 앱이 에러 없이 실행됨
- 교대역 주변 도로 라인이 3D 뷰포트에 렌더링됨
- ArcRotateCamera로 회전 · 줌 가능
- 브라우저 콘솔에 에러 없음
