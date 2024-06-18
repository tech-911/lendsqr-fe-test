// --------------function for color selection--------------

export const minCardColor = (color: string) => {
  switch (color) {
    case "1":
      return "#FFC700";
    case "2":
      return "#FF3D57";
    case "3":
      return "#0081FF";
    case "4":
      return "#008124";
    case "5":
      return "#561F37";
    default:
      return "#ED7D3A";
  }
};

// -----------------function to auto generate n objects for an array--------------

export function generateRandomUserData(n: number) {
  const organizations = ["Lendsqr", "TechCorp", "InnovateX", "NextGen"];
  const usernames = ["Adedeji", "Chukwu", "Adeola", "Ifeoma", "Adewale"];
  const statuses = ["inactive", "pending", "blacklisted", "active"];
  const domain = "lendsqr.com";

  function getRandomElement(arr: any[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getRandomDate(start: any, end: any) {
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  function generateId() {
    return "Lends" + Math.random().toString(36).substring(2, 8);
  }

  const users = [];

  for (let i = 0; i < n; i++) {
    const username = getRandomElement(usernames);
    users.push({
      id: i,
      organization: getRandomElement(organizations),
      username: username,
      email: `${username.toLowerCase()}@${domain}`,
      phoneNumber: `${username.toLowerCase()}@${domain}`,
      dateJoined: getRandomDate(new Date(2018, 0, 1), new Date()),
      status: getRandomElement(statuses),
    });
  }

  return users;
}
