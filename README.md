# 🎨 블로그형 그림일기 웹 서비스 (Drawing Diary)

복잡한 다이어리 설정 없이, 직접 그림을 그리거나 글을 남겨 블로그 피드처럼 한눈에 모아볼 수 있는 나만의 웹 그림일기장입니다.

---

## 🛠️ 사용 기술 (Tech Stack)
* **Frontend:** React, Vite, JavaScript (ES6+)
* **Styling:** Inline CSS / CSS Modules
* **Backend & Storage (예정):** Supabase (PostgreSQL, Supabase Storage)
* **Version Control:** Git & GitHub

---

## 📂 프로젝트 폴더 구조 (Folder Structure)
```text
src/
 ┣ components/   # 버튼, 카드 등 재사용 가능한 UI 조각들
 ┣ pages/        # 화면 단위 컴포넌트 (목록, 쓰기, 상세 등)
 ┣ data/         # 테스트용 가짜 데이터 (mockData.js)
 ┣ App.jsx       # 전체 화면 라우팅 및 상태 관리 메인 컴포넌트
 ┣ main.jsx      # 리액트 진입점
