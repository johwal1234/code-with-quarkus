function validateAndShowModal() {
let valid = true;

const username = document.getElementById('username').value.trim();
const password = document.getElementById('password').value;
const passwordConfirm = document.getElementById('passwordConfirm').value;
const email    = document.getElementById('email').value.trim();
const phone    = document.getElementById('phone').value.trim();
// ①아이디: 4~20자영문/숫자
const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;
if (!usernameRegex.test(username)) {
showError('username', '아이디는4~20자영문/숫자만가능합니다.');
valid = false;
} else {
clearError('username');
}
// ②패스워드: 8자이상, 영문+숫자+특수문자
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
if (!passwordRegex.test(password)) {
showError('password', '8자이상, 영문+숫자+특수문자를포함필요.');
valid = false;
} else {
clearError('password');
}
// ③패스워드확인
if (password !== passwordConfirm) {
showError('passwordConfirm', '패스워드가일치하지않습니다.');
valid = false;
} else {
clearError('passwordConfirm');
}
}