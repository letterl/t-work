import React from "react";
import { api } from "~/trpc/server";

export default async function Card(limit: number, cursor: string) {

  const page = await api.firms.timeLine.query(
    {
      limit: limit,
      cursor: cursor
    }
  )

  return (
    <React.Fragment>
      {page.items.map((item) => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </React.Fragment>
    
  )
}
