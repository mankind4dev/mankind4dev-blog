"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeCompo = ({children}) => {
  const { theme, setThem } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      <div className={theme}>
        <div className="text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-900 min-h-screen">{children}</div>
      </div>
    </>
  );
};

export default ThemeCompo;
