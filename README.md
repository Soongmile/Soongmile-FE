# Soongmile-FE

```
yarn start
```

## 👩🏻‍💻 Members

| <img src="https://avatars.githubusercontent.com/u/94633589?v=4" width=200> | <img src="https://avatars.githubusercontent.com/u/78731710?v=4" width=200> |
| :------------------------------------------------------------------------: | :------------------------------------------------------------------------: |
|                                 **서채연**                                 |                                 **이수민**                                 |
|                [@seocylucky](https://github.com/seocylucky)                |                 [@intersoom](https://github.com/intersoom)                 |

## ⚒️ Frontend Stack

| Stack            | Version  |
| ---------------- | -------- |
| React            | 추가예정 |
| Typescript       | 추가예정 |
| yarn             | 추가예정 |
| Recoil           | 추가예정 |
| React-Query      | 추가예정 |
| Styled-Component | 추가예정 |

## 🌱 Commit Convention

- 커밋 메시지 규칙
  - `commit convention`: `commit message`
  - 예시) `feat: 로그인 구현`

| Tag Name | Description |
|:---------|:------------|
Feat |	새로운 기능 추가
Design |	CSS 등 사용자 UI 디자인 변경
Style |	코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
Comment |	필요한 주석 추가, 변경 및 삭제
Fix |	버그 수정
Refactor |	프로덕션 코드 리팩토링, 새로운 기능이나 버그 수정없이 현재 구현을 개선한 경우
Docs |	README.md 수정
Rename |	파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
Remove |	파일을 삭제하는 작업만 수행한 경우
Test |	테스트 코드, 리펙토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음
Chore |	빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음
!BREAKING | CHANGE	커다란 API 변경의 경우
!HOTFIX |	급하게 치명적인 버그를 고쳐야하는 경우

## 🪵 Branch Convention

- Issue를 생성한다. (작업의 단위, 번호 부여)
- Issue의 Feature Branch를 생성한다.
  - `{접두사}/#이슈번호_{작업명}`
  - 예시: feat/#12_카카오로그인
- Add - Commit - Push - Pull Request 의 과정
- Pull Request가 작성되면 다른 팀원이 Code Review를 한다.
- Code Review가 완료되고, 다른 팀원이 Approve 하면 Pull Request
- 작성자가 develop Branch로 merge 한다. (Conflicts 방지)
- 다른 팀원은 merge된 작업물을 pull하고 다시 각자 맡은 작업을 이어나간다.

## 🌳 PR Convention

- 기능 단위로 PR 날리기
- PR Template 사용
  - 타이틀
  - 작업사항
  - 변경로직
  - 필요한 후속 작업
  - 실행 화면
- 상호 리뷰 태그 걸면 1일 안에 해주기