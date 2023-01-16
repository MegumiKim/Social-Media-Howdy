export function profilesFilter(user, searchValue) {
  if (user.name.toLowerCase().includes(searchValue.toLowerCase())) return user;
}
