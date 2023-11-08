import React from 'react';
import '../styles/BottomPagination.scss';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

function BottomPagination({ dataLength }) {

    //router options

    const navigate = useNavigate();

    // pagination options

    function handlePageClick(event) {
        navigate(`?page=${event.selected % dataLength + 1}`);
    };

    return (
        <div className="BottomPagination gap-05">
            <div className="tools gap-3">
                <div className="pagination">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={window.innerWidth > 767 ? 5 : 3}
                        pageCount={dataLength ? Math.ceil(dataLength) : 10}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    )
}

export default BottomPagination