// import { Image } from 'antd'
// import React from 'react'
// import { FaTrashAlt } from 'react-icons/fa'
// import { RiEdit2Line } from 'react-icons/ri'

// const ServiceCard = ({ service, onEdit, onDelete }) => {
//   const getDisplayTags = (tags) => {
//     return tags.slice(0, 3)
//   }

//   return (
//     <div className="card glass w-80 shadow-md py-4 px-3 rounded-xl">
//       <figure>
//         <Image
//           src={service.image}
//           alt={service.name}
//           preview
//           className="!w-full object-cover rounded-md"
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title text-3xl font-bold my-3">{service.name}</h2>

//         {/* Styles */}
//         <div className="mb-2">
//           <p className="text-sm text-gray-500 mb-1">Styles:</p>
//           <div className="flex flex-wrap gap-2">
//             {getDisplayTags(service.styles).map((style, index) => (
//               <span
//                 key={index}
//                 className="button-color text-white text-xs px-2 py-1 rounded-full"
//               >
//                 {style}
//               </span>
//             ))}
//             {service.styles.length > 3 && (
//               <span className="text-gray-500 text-xs">
//                 +{service.styles.length - 3} more
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Types */}
//         <div className="mb-2">
//           <p className="text-sm text-gray-500 mb-1">Types:</p>
//           <div className="flex flex-wrap gap-2">
//             {getDisplayTags(service.types).map((type, index) => (
//               <span
//                 key={index}
//                 className="button-color text-white text-xs px-2 py-1 rounded-full"
//               >
//                 {type}
//               </span>
//             ))}
//             {service.types.length > 3 && (
//               <span className="text-gray-500 text-xs">
//                 +{service.types.length - 3} more
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Tools */}
//         <div className="mb-4">
//           <p className="text-sm text-gray-500 mb-1">Tools:</p>
//           <div className="flex flex-wrap gap-2">
//             {getDisplayTags(service.tools).map((tool, index) => (
//               <span
//                 key={index}
//                 className="button-color text-white text-xs px-2 py-1 rounded-full"
//               >
//                 {tool}
//               </span>
//             ))}
//             {service.tools.length > 3 && (
//               <span className="text-gray-500 text-xs">
//                 +{service.tools.length - 3} more
//               </span>
//             )}
//           </div>
//         </div>

//         <div className="card-actions justify-between border-t pt-3 flex border-gray-300">
//           <button
//             onClick={() => onEdit(service)}
//             className="btn btn-primary text-xl border-r w-full border-red-600"
//           >
//             <RiEdit2Line className="app-default-color" />
//           </button>
//           <button
//             onClick={() => onDelete(service.id)}
//             className="btn btn-secondary text-md w-full flex justify-end"
//           >
//             <FaTrashAlt className="text-red-500" />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ServiceCard

import { Image } from 'antd'
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { RiEdit2Line } from 'react-icons/ri'

const ServiceCard = ({ service, onEdit, onDelete }) => {
  const getDisplayTags = (tags) => {
    return tags.slice(0, 3)
  }

  // Determine if this is a white collar service
  const isWhiteCollar = service.serviceType === 'white'

  return (
    <div className="card glass w-80 shadow-md py-4 px-3 rounded-xl">
      <figure>
        {/* Service type indicator */}
        <div className="absolute top-2 right-2 flex items-center bg-white bg-opacity-80 rounded-full px-2 py-1">
          <div
            className={`w-3 h-3 rounded-full ${
              isWhiteCollar
                ? 'bg-gray-100 border border-gray-300'
                : 'bg-blue-500'
            } mr-1`}
          ></div>
          <span className="text-xs font-medium">
            {isWhiteCollar ? 'White Collar' : 'Blue Collar'}
          </span>
        </div>

        <Image
          src={service.image}
          alt={service.name}
          preview
          className="!w-full object-cover rounded-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold my-3">{service.name}</h2>

        {/* Styles */}
        <div className="mb-2">
          <p className="text-sm text-gray-500 mb-1">Styles:</p>
          <div className="flex flex-wrap gap-2">
            {getDisplayTags(service.styles).map((style, index) => (
              <span
                key={index}
                className="button-color text-white text-xs px-2 py-1 rounded-full"
              >
                {style}
              </span>
            ))}
            {service.styles.length > 3 && (
              <span className="text-gray-500 text-xs">
                +{service.styles.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Types/Format */}
        <div className="mb-2">
          <p className="text-sm text-gray-500 mb-1">
            {isWhiteCollar ? 'Format:' : 'Types:'}
          </p>
          <div className="flex flex-wrap gap-2">
            {getDisplayTags(service.types).map((type, index) => (
              <span
                key={index}
                className="button-color text-white text-xs px-2 py-1 rounded-full"
              >
                {type}
              </span>
            ))}
            {service.types.length > 3 && (
              <span className="text-gray-500 text-xs">
                +{service.types.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Tools/Software */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">
            {isWhiteCollar ? 'Software:' : 'Tools:'}
          </p>
          <div className="flex flex-wrap gap-2">
            {getDisplayTags(service.tools).map((tool, index) => (
              <span
                key={index}
                className="button-color text-white text-xs px-2 py-1 rounded-full"
              >
                {tool}
              </span>
            ))}
            {service.tools.length > 3 && (
              <span className="text-gray-500 text-xs">
                +{service.tools.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="card-actions justify-between border-t pt-3 flex border-gray-300">
          <button
            onClick={() => onEdit(service)}
            className="btn btn-primary text-xl border-r w-full border-red-600"
          >
            <RiEdit2Line className="app-default-color" />
          </button>
          <button
            onClick={() => onDelete(service.id)}
            className="btn btn-secondary text-md w-full flex justify-end"
          >
            <FaTrashAlt className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
