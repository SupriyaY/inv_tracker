// import React from 'react';
// import styled from 'styled-components';
// import {SingleOwnerContainer} from './StyledComponents/Containers'


// const New = styled.div`
// text-align: center;

// `


// const UserCard = styled.div`
// top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     margin: auto;
//     width: 45vh;
//     height: 70vh;
//     background-color: #fff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 3px solid white;
//     box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.5);
//     border-radius: 5px;

// `;


// const CardButton = styled.button`
//         color:#F7F9F9;
//         background-color:#FFC857;
//         font-size: 1em;
//       margin: 1em;
//        padding: 0.25em 1em;
//         border-radius:3px;
//         display: flex;
//         align-items: center;
//         justify-content:center;
//         border-radius: 5;
//         border: 2px black solid;
//         :hover {
//             color:#FFC857;
//             background-color:#2E4052;
//             outline-style:none;
//         }
// `;

// const UserAdd = styled.div`
// margin: 0 auto;     
// display: flex;     
// justify-content: flex-end;
// flex-direction: column;
// align-items: center;    
// text-align: right;
// padding: 20px;
// color: black;
// font-size: 3vh;
 
// input {
//   padding: 7px 0;
//   width: 100%;
//   font-family: inherit;
//   font-size: 14px;
//   margin-bottom: 10px;
//   border-top: 0;
//   border-right: 0;
//   border-bottom: 1px solid #ddd;
//   border-left: 0;
//   transition: border-bottom-color .25s ease-in;
// overflow: hidden;
//              } 

// `;




// const EditUser = (props) => {

// return(
//     <SingleOwnerContainer>

//         <UserCard>
//             <UserAdd>
//                 <form onSubmit={this.handleEdit} >
//                     <div>
//                         <New>
//                             <h1>Edit Owner</h1>
//                         </New>
//                         <input name="name" placeholder="Name" type="text" onChange={props.handleChange} value={props.business_owner.name} />
//                         <input name="business_name" placeholder="Business Name" type="text" onChange={props.handleChange} value={props.business_owner.business_name}  />
//                         <input name="business_description" placeholder="Business Description" type="text" onChange={props.handleChange} value={props.business_owner.business_description}  />
//                         <input name="business_address" placeholder="Business Address" type="text" onChange={props.handleChange} value={props.business_owner.business_address}  />
//                         <input name="business_email" placeholder="Business Email" type="text" onChange={props.handleChange} value={props.business_owner.business_email}  />
//                         <input name="business_phone" placeholder="Business Phone" type="text" onChange={props.handleChange} value={props.business_owner.business_phone} />
//                     </div>
//                     <CardButton type="submit" value="submit">Submit</CardButton>

//                 </form>
//             </UserAdd>
//         </UserCard>
//     </SingleOwnerContainer>





// )


// }


// export default EditUser;