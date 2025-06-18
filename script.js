// script.js

// 폼 검증 함수
function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var code = document.getElementById("code").value;

    // 아이디가 8자리 이상인지 확인
    if (username.length < 8) {
        alert("아이디는 8자리 이상이어야 합니다.");
        return false;  // 폼 제출 방지
    }

    // 패스워드가 6자리 이상인지 확인
    if (password.length < 6) {
        alert("패스워드는 6자리 이상이어야 합니다.");
        return false;  // 폼 제출 방지
    }

    // 추천인 코드가 6자리 이상인지 확인 (선택 사항이지만 예시로 추가)
    if (code && code.length < 6) {
        alert("추천인 코드는 6자리 이상이어야 합니다.");
        return false;  // 폼 제출 방지
    }

    // 모든 검증이 통과하면 폼을 제출
    return true;
}
