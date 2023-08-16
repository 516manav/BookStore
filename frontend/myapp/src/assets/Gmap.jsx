// import React from "react";
// import GoogleMapReact from "google-map-react";
// import { DiCodeigniter } from "react-icons/di"; 
// const AnyReactComponent = ({ text }) => (
//   <div>
//     {text} <DiCodeigniter className="text-xl" />
//   </div>
// );

// export default function SimpleMap() {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: "100%", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyDLTJsXrSXcm_gtbGQAVkVz1G4-x8SVel4" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={10.99835602}
//           lng={77.01502627}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }
