export function userProfileTemplate(profile) {
  return `
  <div class="card col-12 col-lg-4 m-auto p-4">
  <img class="rounded-circle m-auto" src="${profile.avatar}" alt="${profile.name}" width="140" height="140">
  <h2>${profile.name}</h2>
  <p>${profile.email}.</p>
  <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
</div>
`;
}
