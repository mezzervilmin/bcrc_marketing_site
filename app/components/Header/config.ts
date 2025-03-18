export type MenuItems = {
  menu: {
    title: string;
    link: string | null;
    children: null | { title: string; link: string }[];
  }[];
};

export const config: MenuItems = {
  menu: [
    {
      title: "Community",
      link: null,
      children: [
        {
          title: "Wednesday Run Club",
          link: "/wednesday-run-club",
        },
        {
          title: "Saturday Run Club",
          link: "/saturday-run-club",
        },
        {
          title: "Trail Run Sundays",
          link: "/trail-run-sundays",
        },
        {
          title: "Bull City Track Club",
          link: "/track-club",
        },
      ],
    },
    {
      title: "Training Programs",
      link: null,
      children: [
        {
          title: "Half/Full Marathon",
          link: "/marathon-training",
        },
        {
          title: "No Bull Speed Training",
          link: "/no-bull",
        },
        {
          title: "Run Buds",
          link: "/run-buds",
        },
        {
          title: "Kids Run",
          link: "/kids-run",
        },
      ],
    },
    {
      title: "Racing",
      link: null,
      children: [
        {
          title: "Our races",
          link: "/races",
        },
        {
          title: "Race Timing and Management",
          link: "/race-management",
        },
      ],
    },
    {
      title: "About Us",
      link: "/about",
      children: null,
    },
    {
      title: "Join Our Team",
      link: "/join-bcrc",
      children: null,
    },
  ],
};
