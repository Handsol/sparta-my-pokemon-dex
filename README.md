# 🦸‍♂️ My Pokemon Dex 🦸‍♀️

## 📍 프로젝트 소개
"**My Pokemon Dex**"는 151마리의 포켓몬 중 원하는 포켓몬을 6마리까지 선택할 수 있는 React 웹 애플리케이션입니다. 사용자는 포켓몬을 추가하고, 마음이 바뀌면 기존 포켓몬을 삭제할 수 있습니다. 포켓몬의 디테일 페이지에서 자세한 정보를 확인할 수 있습니다.

🌐 **[프로젝트 페이지 바로가기](https://sparta-my-pokemon-dex.vercel.app/)**

## 🚀 구현 기능
- ✅ 포켓몬 추가 및 제거
- ✅ 포켓몬 디테일 페이지 보기
- ✅ 토스트 메시지 기능
- ✅ 로컬스토리지 활용한 데이터 유지

## 🗓 프로젝트 기간
**2025년 2월 3일** ~ **2025년 2월 11일** (8일)

## 🔧 트러블 슈팅

### 1️⃣ [React 상태 관리 문제 해결](https://sol09-29.tistory.com/77)
- **문제:** 포켓몬 추가 및 제거 시 상태 관리가 원활하지 않음.
- **해결:** Context API를 활용하여 상태를 전역적으로 관리하도록 수정.

### 2️⃣ [Styled-components 적용 문제 해결](https://sol09-29.tistory.com/79)
- **문제:** 스타일이 일부 컴포넌트에서 제대로 적용되지 않음.
- **해결:** Styled-components로 스타일을 재정의하고, 스타일링이 적용되는 방식 검토.

### 3️⃣ [LocalStorage 데이터 유지 문제 해결](https://sol09-29.tistory.com/81)
- **문제:** 페이지 새로고침 시 추가한 포켓몬 정보가 사라짐.
- **해결:** LocalStorage를 사용하여 데이터를 저장하고, 페이지 로드 시 복원하도록 구현.

### 4️⃣ [토스트 메시지 구현 문제 해결](https://sol09-29.tistory.com/82)
- **문제:** 토스트 메시지가 정상적으로 표시되지 않음.
- **해결:** `react-toastify` 라이브러리를 사용하여 메시지 표시 기능을 개선.

## 🏗 프로젝트 구조
```plaintext
sparta-my-pokemon-dex/
├── public/
├── src/
│ ├── assets/
│ │ └── react.svg
│ ├── components/
│ │ ├── Dashboard.jsx
│ │ ├── PokemonCard.jsx
│ │ └── PokemonList.jsx
│ ├── data/
│ │ └── MockData.js
│ ├── pages/
│ │ ├── Dex.jsx
│ │ ├── Home.jsx
│ │ └── PokemonDetail.jsx
│ ├── shared/
│ │ └── Router.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── package.json
└── README.md
```

## 📂 주요 파일 설명
- **App.jsx**: 애플리케이션의 주요 컴포넌트로, 앱 전체의 구조를 관리합니다.
- **PokemonCard.jsx**: 각 포켓몬을 카드 형태로 보여주는 컴포넌트입니다.
- **PokemonList.jsx**: 선택된 포켓몬 목록을 관리하고 보여주는 컴포넌트입니다.
- **PokemonDetail.jsx**: 포켓몬의 상세 정보를 보여주는 페이지입니다.

## 💻 기술 스택
- **React**
- **Context API**
- **Styled-components**
- **LocalStorage**

## 📑 사용 방법
1. 포켓몬을 추가하고 싶다면 목록에서 선택하여 **추가** 버튼을 클릭하세요.
2. 마음에 드는 포켓몬을 제거하려면 목록에서 해당 포켓몬을 삭제할 수 있습니다.
3. 각 포켓몬의 **디테일 페이지**에서 더 많은 정보를 확인할 수 있습니다.
