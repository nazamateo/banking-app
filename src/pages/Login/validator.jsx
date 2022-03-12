const adminAccount = { username: abc123, password: abc123 };

localStorage.setItem("admin", JSON.stringify(adminAccount));

function getAdminAccounts() {
  return JSON.parse(localStorage.getItem("admin"));
}

export default getAdminAccounts;
