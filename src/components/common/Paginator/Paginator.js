import React, {useState} from 'react';
import classes from "./Paginator.module.css";

const Paginator = ({totalItemsCount, pageSize, currentPage, changePage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize );
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (

        <div>
            <div className={classes.pageNumberBlock}>
                { portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber-1)}}> {'<'} </button>}
                {
                    pages
                        .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                        .map(p => {
                        return <span key={p} onClick={() => {changePage(p)}} className={currentPage === p && classes.selectedPage}>{p}</span>
                    })
                }
                { portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber+1)}}>{'>'}</button>}
            </div>
        </div>
    )
}

export default Paginator;