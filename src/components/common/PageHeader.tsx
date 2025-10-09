import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 brand-h">{title}</h1>
      {subtitle && (
        <p className="text-xl brand-sub max-w-3xl mx-auto">{subtitle}</p>
      )}
      {children}
    </div>
  );
};

export default PageHeader;
