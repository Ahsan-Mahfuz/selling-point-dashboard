import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { RiEdit2Line } from 'react-icons/ri'

const ServiceCard = ({ service, onEdit, onDelete }) => {
  const getDisplayTags = (tags) => {
    return tags.slice(0, 3)
  }

  return (
    <div className="card glass w-80 shadow-md py-4 px-3 rounded-xl">
      <figure>
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover rounded-md"
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

        {/* Types */}
        <div className="mb-2">
          <p className="text-sm text-gray-500 mb-1">Types:</p>
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

        {/* Tools */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">Tools:</p>
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
