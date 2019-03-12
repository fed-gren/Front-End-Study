# MVC

MVC란 Model View Controller의 약자로 에플리케이션을 세가지의 역할로 구분한 개발 방법론입니다. 아래 그림처럼 사용자가 Controller를 조작하면 Controller는 Model을 통해서 데이터를 가져오고 그 정보를 바탕으로 시각적인 표현을 담당하는 View를 제어해서 사용자에게 전달하게 됩니다.

![MVC](https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/327/1262.png)


## Web과 MVC

MVC 패턴을 웹에 적용하면 아래와 같습니다.
1. 사용자가 웹사이트에 접속한다. (Uses)
2. Controller는 사용자가 요청한 웹페이지를 서비스 하기 위해서 모델을 호출한다. (Manipulates)
3. 모델은 데이터베이스나 파일과 같은 데이터 소스를 제어한 후에 그 결과를 리턴한다.
4. Controller는 Model이 리턴한 결과를 View에 반영한다. (Updates)
5. 데이터가 반영된 VIew는 사용자에게 보여진다. (Sees)




## 참고

- [생활코딩 - CodeIgniter](https://opentutorials.org/module/327/3828)