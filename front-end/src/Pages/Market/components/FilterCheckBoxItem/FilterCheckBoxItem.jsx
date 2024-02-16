// import React, { useState, useContext } from 'react'
// import { FilterContext } from "../../context/FilterContext"

// const FilterCheckBoxItem = ({ item, type, category, setCategory, platform, setPlatform }) => {

//     console.log("item ren")
//     const { filter, setFilter } = useContext(FilterContext)
//     console.log("pl", platform)
//     console.log("cat", category)

//     // console.log("filter", filter)

//     // const checkBoxHandler = (e) => {
//     //     if (filter.includes(e.target.value)) {
//     //         const temp = filter.filter((word) => {
//     //             return word !== e.target.value
//     //         })
//     //         setFilter(temp)
//     //     } else {
//     //         setFilter(prev => [...prev, e.target.value])
//     //     }
//     //     console.log("filter",filter)


//     // }

//     const checkBoxHandler = (e) => {
//         // let catData = filter.category
//         // let platData = filter.platform

//         // if (type === "category") {
//         //     if (category.includes(e.target.value)) {
//         //         const temp = category.filter((word) => {
//         //             return word !== e.target.value
//         //         })
//         //         setCategory(temp)
//         //     } else {
//         //         setCategory([...category, e.target.value])
//         //     }


//         // }
//         // if (type === "platform") {
//         //     if (platform.includes(e.target.value)) {
//         //         const temp = platform.filter((word) => {
//         //             return word !== e.target.value
//         //         })
//         //         setPlatform(temp)
//         //     } else {
//         //         setPlatform([...platform, e.target.value])
//         //     }

//         // }
//         // setFilter({
//         //     category: catData,
//         //     platform: platData
//         // })


//     }
//     return (
//         <label className="checkbox " >
//             <input type="checkbox" className='mr-1 my-1'
//                 value={itedm} 
//             />
//             {item}
//         </label>
//     )
// }

// export default FilterCheckBoxItem