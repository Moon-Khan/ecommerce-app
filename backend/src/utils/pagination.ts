// utils/pagination.ts

import { Order } from "sequelize";

export function getPagination(query: any) {
    const page = query.page ? parseInt(query.page) : 1;
    const limit = query.limit ? parseInt(query.limit) : 10;
    const sort = query.sort === "desc" ? "DESC" : "ASC";
    const sortField = query.sortCol || "createdAt";

    const offset = (page - 1) * limit;
    const order: Order = [[sortField, sort]];

  
    return {
        page,
        limit,
        offset,
        order,
      };
  }

  // utils/paginationResponse.ts
export function formatPaginationResponse<T>(
    data: { rows: T[]; count: number },
    page: number,
    limit: number
  ) {
    const pageCount = Math.ceil(data.count / limit);
  
    return {
      data: data.rows,
      meta: {
        page,
        limit,
        offset: (page - 1) * limit,
        total: data.count,
        pageCount,
        hasNextPage: page < pageCount,
        hasPrevPage: page > 1,
      },
    };
  }