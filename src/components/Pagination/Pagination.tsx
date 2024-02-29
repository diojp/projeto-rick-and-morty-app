import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ info, currentPage, namePage }: { info: any, currentPage: any, namePage: string; }) => {

    return (
        <nav aria-label="...">
            <ul className="pagination justify-content-center mt-2 ">
                <li className={info.prev === null ? "page-item disabled" : "page-item"}>
                    <Link className="page-link" to={`/${namePage}/1`} >Fist</Link>
                </li>

                <li className={info.prev === null ? "page-item disabled" : "page-item "}>
                    <Link className="page-link" to={`/${namePage}/${parseInt(currentPage) - 1}`} >Previous</Link>
                </li>
                {info.prev && <li className="page-item"><Link className="page-link" to={`/${namePage}/${parseInt(currentPage) - 1}`}>{currentPage && parseInt(currentPage) - 1}</Link></li>}
                <li className="page-item active" aria-current="page">
                    <Link className="page-link" to={''}>{currentPage}</Link>
                </li>
                {info.next && <li className="page-item"><Link className="page-link" to={`/${namePage}/${parseInt(currentPage) + 1}`}>{currentPage && parseInt(currentPage) + 1}</Link></li>}
                <li className={info.next === null ? "page-item disabled" : "page-item"}>
                    <Link className="page-link" to={`/${namePage}/${parseInt(currentPage) + 1}`}>Next</Link>
                </li>

                <li className={info.next === null ? "page-item disabled" : "page-item"}>
                    <Link className="page-link" to={`/${namePage}/${info.pages}`}>Final</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;