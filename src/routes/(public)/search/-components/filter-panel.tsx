import { getRouteApi, Link } from "@tanstack/react-router";
import { useState } from "react";
import type { SearchParams } from "../-types/searchSchema";

/* 
*    Para traernos los valores de la url pasada, podriamos traerlos mediante props...
*    Pero tanstack nos permite consultar el FileRoute (route) creado en el padre o cualquier url, poder tener acceso a los Route.useLoaderData() u
*    otros... evitando tener que crear un contexto, para poder leer estas props...
*/

const searchRouterApi = getRouteApi("/(public)/search");

export const FilterPanel = () => {

    const { filter, page, sort } = searchRouterApi.useSearch();

    const [filterInput, setFilterInput] = useState(filter);
    const [pageInput, setPageInput] = useState(page.toString());

    const getSearchParams = (updates:Partial<SearchParams>) => {
        return {
            filter: updates.filter !== undefined ? updates.filter : filter,
            page: updates.page !== undefined ? updates.page : page,
            sort: updates.sort !== undefined ? updates.sort : sort,
        };
    };
  return (
    <div className="space-y-3">
        <div>
            <label className="label">
                Filter: 
                <input 
                    type="text" 
                    className="input"
                    value={filterInput}
                    onChange={(e)=> setFilterInput(e.target.value)}
                />
            </label>
            <Link className="outlined-button" to="/search" search={getSearchParams({filter: filterInput})}>
                Apply Filter
            </Link>
        </div>
    </div>     
  )
}
