export type detailNavLinkType = {
  id: number;
  heading: string;
  link: string;
};

export const detailNavLinkData: detailNavLinkType[] = [
  {
    id: 0,
    heading: "General Details",
    link: "/user-details/general",
  },
  {
    id: 1,
    heading: "Documents",
    link: "/user-details/documents",
  },
  {
    id: 2,
    heading: "Bank Details",
    link: "/user-details/bank-details",
  },
  {
    id: 3,
    heading: "Loans",
    link: "/user-details/loans",
  },
  {
    id: 4,
    heading: "Savings",
    link: "/user-details/savings",
  },
  {
    id: 5,
    heading: "App and System",
    link: "/user-details/app-system",
  },
];
