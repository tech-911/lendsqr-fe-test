"use client";

import { Icon } from "@iconify/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Payment } from "./columns";
import styles from "./table.module.scss";

export function DataTable({
  data,
  columns,
}: {
  data: Payment[];
  columns: ColumnDef<Payment>[];
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const pageNumberArr = [1, 2, 3, 4, 15, 16];

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tablewrapper}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup, id) => (
              <TableRow key={id} className="border-none hover:bg-white">
                {headerGroup.headers.map((header, id) => {
                  return (
                    <TableHead key={id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, id) => (
                <TableRow
                  className="border-[#213F7D1A]"
                  key={id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, id) => (
                    <TableCell key={id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className={styles.pagination}>
        <div className="flex items-center space-x-2">
          <p className="text-[#545F7D] text-[14px] leading-[16.42px] font-[400]">
            Showing
          </p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-[30px] w-fit gap-[18px] bg-[#213F7D1A]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 20, 50, 100, 150, 200, 250, 300, 400, 500].map(
                (pageSize, id) => (
                  <SelectItem key={id} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
          <p className="text-[#545F7D] text-[14px] leading-[16.42px] font-[400]">
            out of {table.getFilteredRowModel().rows.length}
          </p>
        </div>
        <div className="flex flex-row items-center gap-[7px]">
          <Button
            variant="outline"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="w-6 h-6 p-0 bg-[#213F7D1A] rounded-[4px]"
          >
            <Icon
              icon="ic:round-arrow-back-ios"
              className="text-[#213F7D] text-[12px] group-hover:text-[#21407d7e]"
            />
          </Button>
          {pageNumberArr?.map((value) => {
            if (value === 4) {
              return (
                <div
                  key={value}
                  className="w-6 h-6 p-0 bg-transparent rounded-[4px] flex flex-row items-end justify-center"
                >
                  <Icon
                    icon="mi:options-horizontal"
                    className="text-[#213F7D] text-[12px] group-hover:text-[#21407d7e]"
                  />
                </div>
              );
            } else {
              return (
                <Button
                  key={value}
                  variant="default"
                  onClick={() => table.setPageIndex(value)}
                  disabled={!table.getCanNextPage()}
                  className={`w-6 h-6 p-0 hover:bg-[#213F7D1A] rounded-[4px] flex flex-row items-center justify-center text-[#545F7D] text-[16px] leading-[18.77px] font-[400] ${
                    table.getState().pagination.pageIndex === value
                      ? "bg-[#213F7D1A]"
                      : "bg-transparent"
                  }`}
                >
                  {value}
                </Button>
              );
            }
          })}
          <Button
            variant="outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="w-6 h-6 p-0 bg-[#213F7D1A] rounded-[4px]"
          >
            <Icon
              icon="material-symbols:arrow-forward-ios-rounded"
              className="text-[#213F7D] text-[12px] group-hover:text-[#21407d7e]"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
