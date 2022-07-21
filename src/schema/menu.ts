export type ItemType = {
  icon?: React.ReactElement;
  title: string;
  to?: string;
  children?: SubmenuType;
  separate?: boolean;
};

type SubmenuType = {
  title?: string;
  data: {
    type: string;
    value: string;
    title: string;
    children?: SubmenuType;
  }[];
};
