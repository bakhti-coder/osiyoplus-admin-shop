"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableTwo from "@/components/Tables/TableTwo";

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Buyurtmalar" />
      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </>
  );
};

export default TablesPage;
