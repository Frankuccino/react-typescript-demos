import type { ReactNode } from "react";

interface ChildrenProp {
  children: ReactNode;
}

const Children = ({ children }: ChildrenProp) => {
  return <>{children}</>;
};

export default Children;
