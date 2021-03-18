import React, { useState } from 'react'
import { Pagination } from 'semantic-ui-react'
interface IProps 
{
  pageChange: (page:number)=> void
  maxItem:number
}
const TablePagination:React.FC<IProps> = ({pageChange,maxItem}) => {
  const [page, setPage] = useState({ activePage:1 })
  const {activePage} = page
  const onChange = (e: any, { activePage }: any) => {
    setPage({ ...page, activePage: activePage });
    pageChange(activePage);
  };

    return (
      <div className="pagination-table">
        <Pagination 
        boundaryRange={0}
        ellipsisItem={null}
   
        siblingRange={1}
        totalPages={maxItem}
        activePage={activePage}
        onPageChange={onChange}
      />
      
      </div>
    )
}

export default TablePagination
