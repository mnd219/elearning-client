import "./PageTitleLayout.css";

type PageTitleProps = {
  children: React.ReactNode;
};

export function PageTitle({ children }: PageTitleProps) {
  return (
    <div className="page-title">
      <span className="page-title-accent" />
      <h1>{children}</h1>
    </div>
  );
}