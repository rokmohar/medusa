import { Filter } from ".."
import { DataTableFilter } from "../data-table-filter"
import { DataTableOrderBy, DataTableOrderByKey } from "../data-table-order-by"
import { DataTableSearch } from "../data-table-search"

export interface DataTableQueryProps<TData> {
  search?: boolean | "autofocus"
  orderBy?: DataTableOrderByKey<TData>[]
  filters?: Filter[]
  prefix?: string
}

export const DataTableQuery = <TData,>({
  search,
  orderBy,
  filters,
  prefix,
}: DataTableQueryProps<TData>) => {
  return (
    (search || orderBy || filters || prefix) && (
      <div className="flex flex-col-reverse gap-x-4 gap-y-2 px-6 py-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="w-full empty:hidden sm:max-w-[60%] sm:empty:block">
          {filters && filters.length > 0 && (
            <DataTableFilter filters={filters} prefix={prefix} />
          )}
        </div>
        <div className="flex shrink-0 items-center gap-x-2">
          {search && (
            <DataTableSearch
              prefix={prefix}
              autofocus={search === "autofocus"}
            />
          )}
          {orderBy && <DataTableOrderBy keys={orderBy} prefix={prefix} />}
        </div>
      </div>
    )
  )
}
