export type generalInfoDataType<T> = {
  heading: string;
  withBorder?: boolean;
  list: T[];
};

export const generalnfoData: generalInfoDataType<{
  head1: string;
  head2: string;
}>[] = [
  {
    heading: "Personal Information",
    list: [
      {
        head1: "full Name",
        head2: "Grace Effiom",
      },
      {
        head1: "Phone Number",
        head2: "07060780922",
      },
      {
        head1: "Email Address",
        head2: "grace@gmail.com",
      },
      {
        head1: "Bvn",
        head2: "07060780922",
      },
      {
        head1: "Gender",
        head2: "Female",
      },
      {
        head1: "Marital status",
        head2: "Single",
      },
      {
        head1: "Children",
        head2: "None",
      },
      {
        head1: "Type of residence",
        head2: "Parent’s Apartment",
      },
    ],
  },
  {
    heading: "Education and Employment",
    list: [
      {
        head1: "level of education",
        head2: "B.Sc",
      },
      {
        head1: "employment status",
        head2: "Employed",
      },
      {
        head1: "sector of employment",
        head2: "FinTech",
      },
      {
        head1: "Duration of employment",
        head2: "2 years",
      },
      {
        head1: "office email",
        head2: "grace@lendsqr.com",
      },
      {
        head1: "Monthly income",
        head2: "₦200,000.00- ₦400,000.00",
      },
      {
        head1: "loan repayment",
        head2: "40,000",
      },
    ],
  },
  {
    heading: "Socials",
    list: [
      {
        head1: "Twitter",
        head2: "@grace_effiom",
      },
      {
        head1: "Facebook",
        head2: "Grace Effiom",
      },
      {
        head1: "Instagram",
        head2: "@grace_effiom",
      },
    ],
  },
  {
    heading: "Guarantor",
    withBorder: false,
    list: [
      {
        head1: "full Name",
        head2: "Debby Ogana",
      },
      {
        head1: "Phone Number",
        head2: "07060780922",
      },
      {
        head1: "Email Address",
        head2: "debby@gmail.com",
      },
      {
        head1: "Relationship",
        head2: "Sister",
      },
    ],
  },
];
