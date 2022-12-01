export function filterUser(user, searchValue) {
  if (user.name.toLowerCase().includes(searchValue.toLowerCase())) return user;
}
