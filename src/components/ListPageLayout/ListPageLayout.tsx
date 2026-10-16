import type { ReactNode } from "react";
import "./ListPageLayout.css";
import { PageTitle } from "../PageTitleLayout/PageTitleLayout";

type ListPageLayoutProps = {
  title: string;
  search?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
};

export function ListPageLayout({
  title,
  search,
  action,
  children,
}: ListPageLayoutProps) {
  return (
    <div className="list-page">
      <PageTitle>{title}</PageTitle>

      <div className="list-toolbar">
        <div>{search}</div>
        <div>{action}</div>
      </div>

      <div className="list-content">
        {children}
      </div>
    </div>
  );
}