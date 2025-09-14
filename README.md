# 매머드 오더 클론앱
2025.04.28 ~ 2025.05.06 (약 1.5주)

이 프로젝트는 부트캠프에서 Java와 Spring을 학습한 뒤, 짧은 기간 동안 진행한 풀스택 실습 프로젝트입니다.
<br>
실제 매머드 오더 앱의 기능을 참고하여 주문·메뉴·회원 관리 등의 백엔드 로직을 구현하고 프론트엔드는 React를 사용하여 화면을 구성하였습니다.

<br>

## 팀원
| 김민정 | 정채빈 |
|:------:|:------:|
| <img src="https://github.com/yeongchul.png" width="100"> | <img src="https://github.com/coq-j01.png" width="100"> |
| BE | FE |
| [GitHub](https://github.com/yeongchul) | [GitHub](https://github.com/coq-j01) |

<br>

## 기능 소개
### 로그인
<img height="514" alt="image" src="https://github.com/user-attachments/assets/2362cd19-a967-4f67-bedc-762af1bf40ab" />

- 카카오톡 로그인 지원

### 홈
<img height="514" alt="home" src="https://github.com/user-attachments/assets/e2654400-ebbe-4c64-8c72-46daaf18776b" />

- 이벤트 배너, 이달의 추천 메뉴 조회

### 설정
<img height="514" alt="setting" src="https://github.com/user-attachments/assets/6247b88c-135f-4066-805e-fe4d8c8f2933" />

- 사용자, 카페 정보 조회
- 로그아웃 가능

### 카페 선택
<img height="514" alt="cafe" src="https://github.com/user-attachments/assets/0eef29ad-33b4-459c-9c51-35594175674c" />

- 카페 매장 조회
- 카페 매장 북마크 저장, 삭제
- MY 매장 조회

### 메뉴 선택
<img height="514" alt="menu" src="https://github.com/user-attachments/assets/a55345c7-e4b6-4dc5-b99f-a1cbe17108e6" />

- 탭 선택을 통해 종류 확인 가능
- 변경 버튼으로 매장 재선택 가능

### 메뉴 상세
<img height="514" alt="menudetails" src="https://github.com/user-attachments/assets/8ebda116-1e53-4e9d-bbd8-e0ac42e23df9" />

- 음료 종류의 따라 컵 종류, ice/hot, 컵사이즈, 우유 종류, 개수 등 선택이 가능
- 하단 버튼을 통해 장바구니에 담거나 바로 주문 가능

### 장바구니 & 바로 구매
<img height="514" alt="cart" src="https://github.com/user-attachments/assets/5f55d0aa-fef4-4781-a16a-7aa18f688c9d" />

- 장바구니는 DB, 바로 구매는 세션으로 사용자가 담은 음료들의 이름, 옵션, 가격, 수량 조회 가능
- 삭제 버튼을 통해 장바구니 삭제 가능

### 결제
<img height="514" alt="payment" src="https://github.com/user-attachments/assets/3080276c-a8d4-4f8c-a932-6e4ca73cf101" />

- 요청 사항, 포인트 적용, 카드 결제 선택을 한 후 이용약관에 동의를 누르면 결제
- 결제버튼을 누르면 결제가 되고 적립된 포인트 부여

### 기타
<img height="514" alt="etc" src="https://github.com/user-attachments/assets/d3603f19-dbb9-4ebd-952a-2d5bde72345a" />

- 홈화면의 바코드, 알림 버튼을 누르면 나오는 페이지

### 관리자 상품 목록
<img height="514" alt="productlist" src="https://github.com/user-attachments/assets/78da2ded-e6b9-4168-b656-7baec73dd3a9" />

- 메뉴 정보 조회, 수정, 삭제 가능

### 관리자 상품 상제 조회
<img height="514" alt="productdetails" src="https://github.com/user-attachments/assets/61f8624c-6ef1-475b-b39c-4f17efc452d5" />

- 메뉴의 상제 정보 조회
- 정보 수정 가능

### 관리자 회원 목록
<img width="600" alt="userlist" src="https://github.com/user-attachments/assets/02de766e-2e39-499f-ab3a-4992652195ac" />

- 가입한 회원들의 목록 조회 가능
- 수정과 삭제 가능

### 관리자 회원 상세
<img height="600" alt="userdetails" src="https://github.com/user-attachments/assets/0f40d5ce-dd4c-488c-b6ad-9f76b3312c2b" />

- 회원의 상세 정보를 조회
- 회원의 이름, 이메일, 사진을 수정 가능
- 다른 정보는 수정 불가능

<br>

## 기술 스택
### FrontEnd
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)

### BackEnd
![Java](https://img.shields.io/badge/Java-007396.svg?&style=for-the-badge&logo=OpenJDK&logoColor=white)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)](https://spring.io/projects/spring-security)
![Session](https://img.shields.io/badge/Session-808080?style=for-the-badge&logoColor=white&color=808080)
![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white)

<br>

## DB 구조
<img width="1071" height="597" alt="mammoth_erd" src="https://github.com/user-attachments/assets/1ad6a52d-11c4-409f-8df2-68a089797ff3" />

<br>

## API 명세서
<img width="2592" height="868" alt="api" src="https://github.com/user-attachments/assets/42beddfc-b90e-4ccf-82e7-4c66d44d35a1" />

<br>

## 백엔드 프로젝트 구조
```plaintext
📁 src\main
 ┣ 📁 java\com\project\mammoth_order_backend
 ┃ ┣ 📁 admin                   # 관리
 ┃ ┣ 📁 auth                    # 보안
 ┃ ┣ 📁 order                   # 주문
 ┃ ┣ 📁 store                   # 가게 매장
 ┃ ┗ 📄 PjaApplication.java     # 메인 애플리케이션
 ┣ 📁 resources
 ┃ ┣ 📁 templates               # 관리자 메뉴, 회원 관리 페이지
 ┃ ┣ 📄 application.properties  # Spring 설정
 ┃ ┗ 📄 db.sql                  # DB 테이블 구조
```
