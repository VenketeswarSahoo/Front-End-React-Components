// Breadcrumbs.js

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <div>
      <Link to="/" className="text-sm text-zinc-500">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast
          ? <span key={name} className="text-sm text-zinc-500">
              {" > "}
              {name}
            </span>
          : <span key={name}>
              <Link to={routeTo}>{name}</Link> {">"}
            </span>;
      })}
    </div>
  );
};

export default Breadcrumbs;
