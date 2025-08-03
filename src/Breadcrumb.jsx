import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Breadcrumb() {
  const { pathname } = useLocation(); 
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-500 pt-3 flex items-center gap-1 flex-wrap">
      <Link to="/" className="hover:underline text-blue-600">
        Dashbord
      </Link>

      {segments.map((seg, i) => {
        const isLast = i === segments.length - 1;

        return (
          <span key={i} className="flex items-center gap-1">
            <span>/</span>
            {isLast ? (
              <span className="capitalize text-gray-800 font-medium">
                {formatSegment(seg)}
              </span>
            ) : (
              <Link to="/" className="capitalize hover:underline text-blue-600">
                {formatSegment(seg)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

// Optional helper to clean up segment names like "user-profile" → "User Profile"
function formatSegment(seg) {
  return seg
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
