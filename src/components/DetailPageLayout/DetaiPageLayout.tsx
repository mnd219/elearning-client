import type { ReactNode } from "react";
import { PageTitle } from "../PageTitleLayout/PageTitleLayout";
import "./DetailPageLayout.css";

type DetailPageLayoutProps = {
    title: string;
    children: ReactNode;
};


export function DetailPageLayout({
    title,
    children,
}: DetailPageLayoutProps) {
    return (
        <div className="list-page">
            <PageTitle>{title}</PageTitle>

            <div className="list-content">
                {children}
            </div>
        </div>
    );
}