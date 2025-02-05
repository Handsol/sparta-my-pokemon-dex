- [v] 프로젝트 셋업

  - [v] Vite를 사용해 리액트 프로젝트 설정
  - [v] react-router-dom 설치하여 라우팅 설정
  - [v] Home 페이지와 Dex 페이지 추가
  - [v] '/' 라우터는 Home.jsx가 되도록 설정
  - [v] Home.jsx 에 "포켓몬 도감 시작하기" 버튼 추가
  - [v] 버튼 클릭 시 도감페이지(/dex)로 이동하게 구성

- [v] 기본 컴포넌트 구성

  - [v] Dashboard 기본 UI 작성, 스타일 추가
  - [v] PokemonList 기본 UI 작성, 스타일 추가
  - [v] PokemonCard 기본 UI 작성, 스타일 추가

- [v] 포켓몬 리스트 출력

  - [v] MOCK_DATA에서 데이터 가져오기
  - [v] DATA를 PokemonList에 전달
  - [v] 포켓몬 리스트를 PokemonCard 형태로 구현

- [v] 포켓몬 선택 기능 구현

  - [v] addPokemon 함수로 포켓몬 선택 기능 추가
  - [v] 선택한 포켓몬이 Dashboard에 추가되는 기능 구현
  - [v] 최대 6마리의 포켓몬만 선택되게 유효성 검사 추가

- [ ] 포켓몬 삭제 기능

  - [ ] removePokemon 함수로 포켓몬을 Dashboard에서 선택 해제
  - [ ] 중복된 포켓몬 선택 시 alert 메세지 띄우기
  - [ ] 6마리 이상 선택 시 alert 메세지 띄우기

- [ ] 포켓몬 디테일 페이지 구현

  - [ ] PokemonDetail 컴포넌트 생성
  - [ ] queryString으로 포켓몬 ID 가져오기
  - [ ] 포켓몬카드 클릭 시 상세 정보 표시
  - [ ] 상세정보에서 이전 페이지로 돌아가는 "뒤로가기" 버튼 추가

- [ ] Context API 적용

  - [ ] PokemonContext 컴포넌트 만들기
  - [ ] addPokemon, removePokemon 함수를 Context API로 관리
  - [ ] prop drilling 없애고 전역 상태 관리 구현

- [ ] 전체 UI 일관성 맞추기

  - [ ] 포켓몬 카드와 대시보드 스타일링

- [ ] RTK 적용

  - [ ] PokemonContext 부분을 RTK로 새롭게 구성한 store로 대체

- [ ] 데이터 유지 기능 구현
- [ ] UI 라이브러리를 사용한 alert(modal) 구현

  - [ ] 외부 라이브러리(react-toastify, sweetalert2, sooner) 활용

- [ ] 검토 및 배포
  - [ ] UI의 전체적인 디자인 수정
  - [ ] Vercel을 이용해 프로젝트 배포
