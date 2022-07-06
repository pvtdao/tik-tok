export type RouteSchema = {
  path: string;
  component: React.ElementType;
  layout?: React.ElementType | null;
};
