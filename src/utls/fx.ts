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

// ------------------------------Generate phone number randomly-------------------------
function generateRandomPhoneNumber() {
  const prefixes = ["080", "090", "091", "081", "070", "071"];
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const numberLength = 8; // Number of digits after the prefix

  let phoneNumber = randomPrefix;

  for (let i = 0; i < numberLength; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    phoneNumber += randomDigit;
  }

  return phoneNumber;
}

// ------------------------------Generate a unique ID randomly-------------------------

export function generateId(): string {
  return `Lends${Math.random().toString(36).substring(2, 8)}`;
}

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

  const users = [];

  for (let i = 0; i < n; i++) {
    const username = getRandomElement(usernames);
    users.push({
      id: i,
      organization: getRandomElement(organizations),
      username: username,
      email: `${username.toLowerCase()}@${domain}`,
      phoneNumber: `${generateRandomPhoneNumber()}`,
      dateJoined: getRandomDate(new Date(2018, 0, 1), new Date()),
      status: getRandomElement(statuses),
    });
  }

  return users;
}

//-------------------Capitalize first letter of string----------
export function capitalizeFirst(str: string) {
  if (!str) {
    return str; // Return the string as is if it's empty
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
