const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
let ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
if (userPassword === 'jqueryismyjam') {
  message = 'Добро пожаловать!';
} else if (userPassword === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
console.log(message);
alert(message);
