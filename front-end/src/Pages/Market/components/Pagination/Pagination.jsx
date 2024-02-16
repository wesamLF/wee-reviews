import React from 'react'
import "./Pagination.css"
const Pagination = ({ paginationData, setPaginationPage }) => {
    return (
        <nav className="pagination is-small py-3" role="navigation" aria-label="pagination">

            <ul className="pagination-list">

                {[...Array(paginationData.pageCount)].map((e, i) => {
                    const currPage = i + 1
                    return (
                        <li key={i}>
                            <a className={`pagination-link ${currPage == paginationData.page && "is-current"}`}
                                onClick={() => setPaginationPage(currPage)}
                            >

                                {currPage}
                            </a>
                        </li>)
                }
                )
                }
                
            </ul>
        </nav>
    )
}

export default Pagination