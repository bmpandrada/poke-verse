import { useCallback, useEffect, useState } from "react";
import { VirtualContext } from "./PokeVirtualApi";

export const VirtualProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const getColumnCount = useCallback(() => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }, []);

  const [columnCount, setColumnCount] = useState(getColumnCount());
  const [rowHeight] = useState(280);

  const updateColumns = useCallback(() => {
    setColumnCount(getColumnCount());
  }, [getColumnCount]);

  useEffect(() => {
    const handleResize = () => updateColumns();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateColumns]);

  return (
    <VirtualContext.Provider
      value={{
        columnCount,
        rowHeight,
        updateColumns,
      }}
    >
      {children}
    </VirtualContext.Provider>
  );
};
