// import React, { useEffect } from "react";

// const RabatAndMdina = (props) => {
//   useEffect(() => {
//     if (Object.keys(props).length > 0) {
//       // console.log("RabatAndMdina_data", props.data);
//     }
//   }, [props]);

//   return (
//     <>
//       {Object.keys(props).length > 0 ? (
//         <>
//           <div className="rabatandadina-sec" id={props.data?.id}>
//             <div className="rabatandadina-inner">
//               <div className="rabatandadina-left">
//                 <div className="count-col anim-scroll-up">
//                   <span className="count-number">01</span>
//                   <p className="count-title">{props.data?.data.sub_title}</p>
//                 </div>
//               </div>
//               <div className="rabatandadina-right">
//                 <div>
//                   <h2 className="innerpage_h2 anim-text-enter">{props.data?.data.title}</h2>
//                   <p className="anim-text-enter">{props.data?.data.description}</p>
//                   <button className="btn">a day in the life</button>
//                 </div>
//               </div>
//             </div>

//             <div className="rabatandadina-bottom-inner">
//               <div className="rabatandadina-bottom-left">
//                 <div className="anim-parallax" data-parallax="70">
//                   <img src={props.data?.data.image_2?.url} />
//                 </div>
//                 <div className="anim-parallax">
//                   <img src={props.data?.data.image_3?.url} alt="" />
//                 </div>
//               </div>
//               <div className="rabatandadina-bottom-right">
//                 <div className="anim-parallax" data-parallax="20">
//                   <img src={props.data?.data.image_1?.url} alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : null}
//     </>
//   );
// };

// export default RabatAndMdina;
