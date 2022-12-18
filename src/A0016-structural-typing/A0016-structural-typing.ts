type VerfiyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const VerfiyUser: VerfiyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'joao', password: '12345' };
const sentUser = { username: 'joao', password: '12345' };
const loggedIn = VerfiyUser(bdUser, sentUser);
console.log(loggedIn);
