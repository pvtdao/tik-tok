export type ItemType = {
  icon?: React.ReactElement;
  title: string;
  to?: string;
  children?: SubmenuType;
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
