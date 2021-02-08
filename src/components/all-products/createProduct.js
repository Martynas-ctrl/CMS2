// // import gql from "graphql-tag";

// // function add () {
// //  const ADD_PROJECT = gql`
// //     mutation {
// //       createProduct(data: {
// //         name: "The Last of as Part 2", 
// //         description: "PS4 exclusive game", 
// //         price: 60,
// //         savedProducts: {
// //           connect: {
// //             id: "ckju15w1c0p3g0948phdqs905"
// //           }
// //         }
// //       }) 
// //     }
// // `;
// //   }

// // export default add;




// // {projectData.parameters.map((parameter)  => {     
// //     return (
// //         <div key={parameter} className="col-12">
// //             <p  className="lead">
// //                 {parameter}
// //             </p>
// //         </div>
// //     )
// // })}  


// import {React, useState, useEffect} from 'react'
// import { gql, useMutation } from '@apollo/client';

// const ADD_PROJECT = gql`
//   mutation AddProject($name: String!, $description: String!, $price: String!){
//     __typename
//     createProject(data: {
//         name: $name, 
//         description: $description, 
//         price: $price, 
//         savedProducts: {
//         connect: {
//         id: "ckju15w1c0p3g0948phdqs905"
//       }
//     }
//   })
// }
// `;



// function Newprojectmodal() { 
//     let name, description, price;
//     const [createProject, { data }] = useMutation(ADD_PROJECT);
//     // const [publishProject, { publishData }] = useMutation(PUBLISH_PROJECT);
      


//     // const handleChange = (e) =>{
//     //     const value = e.target.value;
//     //     setProjectData({
//     //         ...projectData,
//     //         [e.target.name]: value
//     //     });
//     // }

//     return (
//         <div>
//             <div className="d-grid gap-2">
//                 <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#newProjectModal">
//                     <h3>New Project</h3>
//                 </button>
//             </div>

//             <div className="modal-body ">
//                     <form onSubmit={e =>{
//                         e.preventDefault();
//                         createProject({variables: {name: name.value, description: description.value, price: price.value}},{data})
//                         console.log(data)
//                     }}>
//                         <div>
//                             <label htmlFor="newProjectTitle" >Project Title</label>
//                             <input type="text" className="form-control border-primary" id="newProjectTitle" aria-describedby="titleHelp" ref={ value => name = value} />
//                         </div>
//                         <div>
//                             <label htmlFor="newProjectDescription" className="form-label">Description</label>
//                             <input type="text" className="form-control border-primary" id="newProjectDescription" ref={ value => description = value}/>
//                         </div>
//                         <div>
//                             <label htmlFor="newProjectParameters" className="form-label">Parameters</label>
//                             <div>                               
//                                 <input type="text" className="form-control border-primary" aria-label="Recipient's username" aria-describedby="button-addon2" ref={ value => price = value}/>
//                                 <button className="btn btn-primary" type="button" id="button-addon2">Add</button>
//                             </div>
//                         </div>
//                     </form>
//                </div> 
                        

// {/* 
//             <div className="modal fade" id="newProjectModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="newProjectModalLabel">New Project</h5>
//                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div className="modal-body ">
//                     <form onSubmit={e =>{
//                         e.preventDefault();
//                         createProject({variables: {name: name.value, description: description.value, price: price.value}},{data})
//                         console.log(data)
//                     }}>
//                         <div className="mb-3">
//                             <label htmlFor="newProjectTitle" 
//                             className="form-label">Project Title</label>
//                             <input type="text" className="form-control border-primary" id="newProjectTitle" aria-describedby="titleHelp" ref={ value => name = value} />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="newProjectDescription" className="form-label">Description</label>
//                             <input type="text" className="form-control border-primary" id="newProjectDescription" ref={ value => description = value}/>
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="newProjectParameters" className="form-label">Parameters</label>
//                             <div className="input-group mb-3">                               
//                                 <input type="text" className="form-control border-primary" aria-label="Recipient's username" aria-describedby="button-addon2" ref={ value => price = value}/>
//                                 <button className="btn btn-primary" type="button" id="button-addon2">Add</button>
//                             </div>
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="newProjectImages" className="form-label">Example images</label>
//                             <input className="form-control" type="file" id="newProjectImages" multiple name='exampleImages'/>
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="newProjectTags" className="form-label">Tags</label>

//                             <select className="form-select" aria-label="Default select example" id='newProjectTags' name='tags'>
//                                 <option defaultValue>Select tags</option>
//                                 <option value="1">html</option>
//                                 <option value="2">css</option>
//                                 <option value="3">javascript</option>
//                             </select>
//                         </div>                            
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="submit" className="btn btn-primary">Create New Project</button>
//                         </div>
                        
//                     </form>
//                 </div>
                
//                 </div>
//             </div>
//             </div> */}
//         </div>
//     )
// }

// export default Newprojectmodal