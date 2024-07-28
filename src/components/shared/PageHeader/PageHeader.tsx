import React from "react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  children: React.ReactNode;
  url: string;
  label: string;
}

const PageHeader = ({ children, url, label }: PageHeaderProps) => {
  return (
    <header className="flex w-full bg-base-200 rounded md:py-6 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-600 md:mb-2 mb-1">{children}</h2>
        <div className="flex items-center gap-2 text-gray-400">
          <Link to={"/"}>Home</Link> {'/'}
          <Link to={url} className="text-primary-color text-opacity-75">{label}</Link>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
