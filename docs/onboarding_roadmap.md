# 3D 정밀지도 프로젝트를 위한 신규 입사자 온보딩 로드맵

## 1. 3D 개발 기본 개념 (Graphics)

GPU 렌더링과 3D 수학 구조를 이해하고, 엔진을 제어할 수 있는 상태 만들기

---

### 3D 기하구조

- Mesh
- Vertex / Index Buffer
- Normal
- Transform : World, Local
- Matrix
- Bounding

---

### Texture & UV

- Texture
- UV mapping
  - 구에서 텍스쳐가 찌그러져 보이는 이유
- 렌더링 과정
- 예제

---

### glTF / glb

- glTF 구조
- glb

---

### Shader

#### GPU 파이프라인

1. vertex shading
2. rasterization
3. fragment shading

#### Space

- Local Space
- World Space
- View Space
- Clip Space
- Screen Space

#### Material 추상화

---

### Uniform

- Camera
- Light

---

### 성능 기초

- Draw call
- Instancing
- LOD
- Frustum culling
- Depth Pre-pass

---

## 2. 3D 지도 기초

“글로벌 좌표 → 타일 시스템 → 로컬 3D 엔진” 전체 흐름을 이해하기

---

### 지도 좌표계 체계

---

#### Geographic Coordinate System (GCS)

---

#### Projected Coordinate System (PCS)

##### Web Mercator (EPSG:3857)

##### UTM52N

---

#### Geocentric 체계

##### ECEF (Earth-Centered, Earth-Fixed)

---

#### Local 체계

##### ENU (East-North-Up)

---

#### Engine Coordinate System

babylonjs 기준

---

#### 좌표계 적용 파이프라인

- 위성 타일 :
  WGS84 → WebMercator → Tile → Babylon
- 3D 모델 :
  UTM52N → WGS84 → ECEF → ENU → Babylon

---

### 타일 시스템

#### 타일 피라미드

#### xyz 타일 인덱스

#### Slippy map

#### 타일 종류

- Raster Tile
- Vector Tile
- Terrain Tile
- 3D Tile

#### LOD

---

### 지형 타일 & Terrain

#### DEM (Digital Elevation Model)

#### Heightmap

#### Terrain mesh

#### Quantized mesh

---

## 3. 정밀도로지도 (HD Map)

### HD Map의 특징

- 정밀도
- 차선 단위 데이터(lane level)
- 3D 기반 공간 표현
- 차량 기준 좌표 체계
- Sementic 정보

---

### HD Map 데이터 모델

- 기본 구성 요소
- 기하 정보(Geometry)
- 연결 구조(Topology)
- 속성 데이터(Attribute/Semantic)
- 좌표 저장 방식

---

### HD Map Local Frame

#### Local ENU (East-North-Up)

#### 좌표 변환 흐름

#### Frame

---

### 정밀도 문제

#### 원인

#### 문제 현상

- Geometry jitter
- z-fighting
- 위치 계산 오차

#### 해결 전략

- Local ENU
- Origin Shifting
- RTC

---

### HD Map 렌더링 구조

- Lane Geometry 생성
- Polyline → Mesh
  - Line Rendering 문제
- Road Marking 표현
  - Geometry
  - Decal
  - Overlay

---

### 성능 설계

- 타일 단위 데이터 로딩
- Web Worker 파싱
- Binary 포맷
- GPU Instancing
- LOD

---

## 4. 토이 프로젝트 만들기

### 목표

학습한 좌표계, 렌더링, HD Map 개념을 이용해 간단한 HD Map Viewer를 자유롭게 구현

### 주의

완성도가 목표가 아니라 개념 체득이 목적
