interface HeaderItemProps {
  id: number;
  name: string;
  menu: {
    id: number;
    title: string;
    description: string;
    path: string;
  }[];
}

export const headerItems: HeaderItemProps[] = [
  {
    id: 1,
    name: 'Product',
    menu: [
      {
        id: 1,
        title: 'Product One',
        description:
          'Detailed description of product one Detailed description of product one Detailed description of product one',
        path: 'test1',
      },
      {
        id: 2,
        title: 'Product Two',
        description: 'Detailed description of product two',
        path: 'test2',
      },
      {
        id: 3,
        title: 'Product Three',
        description: 'Detailed description of product three',
        path: 'test3',
      },
      {
        id: 4,
        title: 'Product Four',
        description: 'Detailed description of product four',
        path: 'test4',
      },
    ],
  },
  {
    id: 2,
    name: 'Design',
    menu: [
      {
        id: 1,
        title: 'Buttons',
        description: 'Button ETC...',
        path: 'test5',
      },
      {
        id: 2,
        title: 'Inputs',
        description: 'Input ETC...',
        path: 'test6',
      },
      {
        id: 3,
        title: 'Toggles',
        description: 'Toggle ETC...',
        path: 'test7',
      },
      {
        id: 4,
        title: 'Cards',
        description: 'Card ETC...',
        path: 'test8',
      },
      {
        id: 5,
        title: 'Alerts',
        description: 'alert ETC...',
        path: 'test9',
      },
    ],
  },
];
