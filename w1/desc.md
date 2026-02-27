# 3d 개발 학습 데모

## 목표

웹 프론트엔드 개발자가 처음으로 3d개발을 위한 학습중이야.
학습한 내용을 기반으로 간단한 데모코드를 짜보고,
결과물을 보여주면서 학습내용을 간단히 발표하려고해(10분 내외)
학습에 사용한 로드맵은 아래에 있어.

### 학습 로드맵

1️⃣ Mesh

🎯 목표 : “3D 객체가 정점 데이터의 집합이라는 것을 이해하고, 직접 만들어볼 수 있다.”

반드시 이해해야 할 것

- Vertex / Index
- Normal
- Local vs World Transform
- Matrix (position / rotation / scale)

실습 목표

- Box를 만들고
- 직접 position / rotation 변경
- Wireframe 모드로 확인
- pivot 변경해보기

통과 기준

- “Mesh는 GPU로 전달되는 정점 데이터 묶음이다”를 설명할 수 있다
- transform이 matrix 연산이라는 걸 말로 설명 가능

2️⃣ Texture & UV Map

🎯 목표 : “이미지가 3D 표면에 매핑되는 과정을 설명할 수 있다.”

반드시 이해해야 할 것

- UV 좌표는 0~1 범위
- Texture wrapping
- 반복/offset

실습 목표

- 박스에 텍스처 입히기
- UV를 조정해서 일부만 보이게 만들기
- texture repeat 적용

통과 기준

- UV가 “3D→2D 좌표 매핑”이라는 걸 설명 가능
- 왜 텍스처가 찌그러지는지 설명 가능

3️⃣ glTF / glb

🎯 목표 : “3D 에셋 파이프라인을 이해한다.”

반드시 이해해야 할 것

- glTF 구조 (mesh / material / texture)
- glb 차이
- scene graph 구조

실습 목표

- Babylon에서 import, export
- 특정 mesh만 선택해서 색 변경

통과 기준

- glb 내부에 무엇이 들어있는지 설명 가능

4️⃣ Shader (입문)

🎯 목표 : “Shader가 GPU에서 색과 위치를 계산하는 프로그램이라는 걸 이해한다.”

반드시 이해해야 할 것

- Vertex Shader vs Fragment Shader
- Material과 Shader 관계

실습 목표

- emissive color 변경
- 선택 시 highlight 효과 구현

통과 기준

- “왜 shader가 필요한지” 설명 가능
- Material이 결국 shader wrapper라는 걸 이해

## 데모 개발 환경

html
babylonjs
cdn으로 경량 개발
