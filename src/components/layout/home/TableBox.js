import React, { useRef,useState, useEffect} from 'react';

import {usePagination, Pagination } from "pagination-react-js";

// import {AiOutlineDelete,AiOutlineEdit} from "react-icons/ai";
import {CiRead} from "react-icons/ci";
import EmployeeModal from "./EmployeeModal";

const TableBox = ({tableData}) => {

    const [dataId, setDataId]=useState(); //employee ID
    const { currentPage, entriesPerPage, entries } = usePagination(1, 10); //pagination

    const empTable = useRef([]);  //employee table ref
    const modalHandle = useRef(null); //popup modal ref

    // console.log(empTable);

    useEffect(() => {
        // applying click event to every table row
        empTable.current.forEach((i)=>{
            i.addEventListener('click',(e)=>{
                setDataId(e.target.id);
                modalHandle.current.classList.add('show-modal');
            })
        })
    }, [empTable]);
  return (
        <div className='descriptive-tb'>
            <EmployeeModal refHandle={modalHandle} dataId={dataId}/>
            <table className='table table-responsive'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Employee Name</td>
                        <td>Address</td>
                        <td>Age</td>
                        <td>Department</td>                        
                        <td>Employee Status</td>                        
                        <td>Added</td>
                        <td>Action</td>
                    </tr>
        
                </thead>
                <tbody>
                    {
                        tableData.slice(entries.indexOfFirst, entries.indexOfLast).map((data)=>(
                            
                            <tr key={data._id} id={data._id} style={{"cursor":"pointer"}} ref={(element)=>empTable.current.push(element)}>                               
                                <td id={data._id}>{data._id}</td>
                                <td id={data._id}>{data.employeeName}</td>
                                <td id={data._id}>{data.address}</td>
                                <td id={data._id}>{data.age?data.age:<strong>N/A</strong>}</td>
                                <td id={data._id}>{data.department?data.department:<strong>N/A</strong>}</td>
                                <td id={data._id}>{data.employeeStatus?data.employeeStatus:<strong>N/A</strong>}</td>
                                <td id={data._id}>{data.createdAt?data.createdAt.split('T')[0]:<strong>N/A</strong>}</td>
                                <td className='action-icon pr-center' id={data._id}>
                                    <a href='http://localhost:3000'><CiRead/></a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                   <tr>
                        {/* <td colSpan={8}>
                            <div className="pagination pr-center">
                                <a href='http://localhost:4000/' className='nav-link btn m-2'>Prev</a>
                                <a href='http://localhost:4000/' className='nav-link btn m-2'>1</a>
                                <a href='http://localhost:4000/' className='nav-link btn m-2'>2</a>
                                <a href='http://localhost:4000/' className='nav-link btn m-2'>3</a>
                                <a href='http://localhost:4000/' className='nav-link btn m-2'>Next</a>
                            </div>
                        </td> */}
                        <td colSpan={9}>
                            <Pagination
                                entriesPerPage={entriesPerPage.get}
                                totalEntries={tableData.length}
                                currentPage={{ get: currentPage.get, set: currentPage.set }}
                                offset={3}
                                classNames={{
                                wrapper: "pagination m-auto pr-center",
                                item: "pagination-item",
                                itemActive: "pagination-item-active",
                                navPrev: "pagination-item nav-item",
                                navNext: "pagination-item nav-item",
                                navStart: "pagination-item nav-item",
                                navEnd: "pagination-item nav-item",
                                navPrevCustom: "pagination-item",
                                navNextCustom: "pagination-item"
                                }}
                                showFirstNumberAlways={true}
                                showLastNumberAlways={true}
                                navStart="&#171;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
                                navEnd="&#187;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
                                navPrev="Prev" // Here you can pass anything (Text, HTML Tag, React Component, ...)
                                navNext="Next" // Here you can pass anything (Text, HTML Tag, React Component, ...)
                                navPrevCustom={{ steps: 5, content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */ }}
                                navNextCustom={{ steps: 5, content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */ }}
                            />
                        </td>
                   </tr>
                </tfoot>
            </table>
           
        </div>
  )
}

export default TableBox