// import React, { useState } from 'react'
// import { IoAddCircleOutline } from 'react-icons/io5'
// import { useNavigate } from 'react-router-dom'
// import { Modal, Input, Form, message, Upload } from 'antd'
// import { UploadOutlined } from '@ant-design/icons'
// import ServiceCard from './ServiceCard'
// import { IoIosWarning } from 'react-icons/io'
// import deleteUser from '../../assets/delete-user.png'

// const servicesData = [
//   {
//     id: 1,
//     name: 'Musician',
//     styles: ['Mediterranean', 'Mexican', 'Asian'],
//     types: ['Live', 'Studio', 'Vocal'],
//     tools: ['Piano', 'Guitar', 'Microphone'],
//     image:
//       'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     id: 2,
//     name: 'Dancer',
//     styles: ['Ballet', 'Jazz', 'Contemporary'],
//     types: ['Solo', 'Group', 'Choreography'],
//     tools: ['Studios', 'Music', 'Shoes'],
//     image:
//       'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
// ]

// const ServiceCategory = () => {
//   const [services, setServices] = useState(servicesData)
//   const [isModalVisible, setIsModalVisible] = useState(false)
//   const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
//   const [editingService, setEditingService] = useState(null)
//   const [form] = Form.useForm()
//   const [deleteId, setDeleteId] = useState(null)
//   const [imagePreview, setImagePreview] = useState('')
//   const [imageFile, setImageFile] = useState(null)

//   const Navigate = useNavigate()

//   const handleEdit = (service) => {
//     setEditingService(service)
//     form.setFieldsValue({
//       name: service.name,
//       styles: service.styles.join(', '),
//       types: service.types.join(', '),
//       tools: service.tools.join(', '),
//     })
//     setImagePreview(service.image)
//     setIsModalVisible(true)
//   }

//   const handleDelete = (id) => {
//     setDeleteId(id)
//     setIsDeleteModalVisible(true)
//   }

//   const handleAddNew = () => {
//     setEditingService(null)
//     form.resetFields()
//     setImagePreview('')
//     setIsModalVisible(true)
//   }

//   const handleModalOk = () => {
//     form
//       .validateFields()
//       .then((values) => {
//         const { name, styles, types, tools } = values
//         const stylesList = styles.split(',').map((style) => style.trim())
//         const typesList = types.split(',').map((type) => type.trim())
//         const toolsList = tools.split(',').map((tool) => tool.trim())

//         if (editingService) {
//           setServices(
//             services.map((service) =>
//               service.id === editingService.id
//                 ? {
//                     ...service,
//                     name,
//                     styles: stylesList,
//                     types: typesList,
//                     tools: toolsList,
//                     image: imageFile
//                       ? URL.createObjectURL(imageFile)
//                       : editingService.image,
//                   }
//                 : service
//             )
//           )
//           message.success('Service updated successfully!')
//         } else {
//           const newService = {
//             id: services.length + 1,
//             name,
//             styles: stylesList,
//             types: typesList,
//             tools: toolsList,
//             image: imageFile ? URL.createObjectURL(imageFile) : '',
//           }
//           setServices([...services, newService])
//           message.success('Service added successfully!')
//         }
//         setIsModalVisible(false)
//       })
//       .catch((info) => {
//         console.log('Validate Failed:', info)
//       })
//     setImageFile(null)
//     setImagePreview('')
//   }

//   const handleModalCancel = () => {
//     setIsModalVisible(false)
//   }

//   const handleDeleteOk = () => {
//     setServices(services.filter((service) => service.id !== deleteId))
//     message.success('Service deleted successfully!')
//     setIsDeleteModalVisible(false)
//   }

//   const handleDeleteCancel = () => {
//     setIsDeleteModalVisible(false)
//   }

//   const handleImageChange = (info) => {
//     if (info.file) {
//       setImageFile(info.file)
//       setImagePreview(URL.createObjectURL(info.file))
//     }
//   }

//   return (
//     <div className="mb-20">
//       <div className="mb-6 flex justify-between items-center">
//         <h1
//           className="text-xl font-semibold cursor-pointer mt-5"
//           onClick={() => Navigate(-1)}
//         >
//           ← Services
//         </h1>
//       </div>

//       <div className="flex items-center flex-wrap gap-x-5 gap-y-5">
//         {services.map((service) => (
//           <ServiceCard
//             key={service.id}
//             service={service}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//         ))}

//         <div className="card bg-gray-200 w-[320px] h-[490px] p-6 rounded-lg flex flex-col justify-center items-center">
//           <button
//             onClick={handleAddNew}
//             className="app-default-color text-xl px-4 py-2 rounded-md flex items-center gap-2"
//           >
//             <IoAddCircleOutline className="text-[100px]" />
//           </button>
//           <h1 className="text-bold text-xl">Add New Service Category</h1>
//         </div>
//       </div>

//       {/* Add/Edit Modal */}
//       <Modal
//         visible={isModalVisible}
//         onOk={handleModalOk}
//         onCancel={handleModalCancel}
//         centered
//         okButtonProps={{
//           style: {
//             backgroundColor: 'var(--main-color)',
//             color: 'white',
//           },
//         }}
//       >
//         <Form
//           form={form}
//           layout="vertical"
//           requiredMark={false}
//           className="p-5"
//         >
//           <div className="text-3xl font-bold text-center mb-2">
//             {editingService ? 'Edit Service Category' : 'Add Service Category'}
//           </div>
//           <p className="text-gray-500 mb-3 text-center">
//             Please fill out the details below to add a new service category.
//           </p>
//           <Form.Item
//             name="image"
//             rules={[
//               { required: true, message: 'Please upload the service image!' },
//             ]}
//             className="mt-5"
//           >
//             <Upload
//               name="image"
//               listType="picture-card"
//               showUploadList={false}
//               onChange={handleImageChange}
//               beforeUpload={() => false}
//             >
//               {imagePreview ? (
//                 <img
//                   src={imagePreview}
//                   alt="preview"
//                   style={{ width: '100%' }}
//                 />
//               ) : (
//                 <div>
//                   <UploadOutlined />
//                   <div>Upload</div>
//                 </div>
//               )}
//             </Upload>
//           </Form.Item>

//           <Form.Item
//             name="name"
//             label="Service Category Name"
//             rules={[
//               { required: true, message: 'Please enter the category name!' },
//             ]}
//           >
//             <Input className="h-[48px]" placeholder="Beverages" />
//           </Form.Item>

//           <Form.Item
//             name="styles"
//             label="Add Service Style (comma separated)"
//             rules={[
//               {
//                 required: true,
//                 message:
//                   'Note: Please add your Service Style separated by ( , ) commas ',
//               },
//             ]}
//           >
//             <Input
//               className="h-[48px]"
//               placeholder="Animation, Streaming, Vlogs"
//             />
//           </Form.Item>

//           <Form.Item
//             name="types"
//             label="Service Type (comma separated)"
//             rules={[
//               {
//                 required: true,
//                 message:
//                   'Note: Please add your Service Type separated by ( , ) commas ',
//               },
//             ]}
//           >
//             <Input className="h-[48px]" placeholder="FLV, AVI, MP4 " />
//           </Form.Item>

//           <Form.Item
//             name="tools"
//             label="Add Service Tool (comma separated)"
//             rules={[
//               {
//                 required: true,
//                 message:
//                   'Note: Please add your Service Tool separated by ( , ) commas ',
//               },
//             ]}
//           >
//             <Input
//               className="h-[48px]"
//               placeholder="I Movie, Da Vinci, Capcut "
//             />
//           </Form.Item>
//         </Form>
//       </Modal>

//       {/* Delete Confirmation Modal */}
//       <Modal
//         visible={isDeleteModalVisible}
//         onOk={handleDeleteOk}
//         onCancel={handleDeleteCancel}
//         okText="Yes"
//         cancelText="No"
//         centered
//         okButtonProps={{
//           style: {
//             backgroundColor: 'var(--main-color)',
//             color: 'white',
//           },
//         }}
//       >
//         <div
//           className="text-lg bg-no-repeat bg-left-top bg-contain h-[200px] object-contain"
//           style={{
//             backgroundImage: `url(${deleteUser})`,
//           }}
//         >
//           <div className="flex justify-center items-end">
//             <IoIosWarning className="text-7xl text-red-700" />
//           </div>
//           <div className="font-bold text-5xl text-center">Warning</div>
//           <div className="p-5 text-center text-red-700">
//             Are you sure you want to delete the service{' '}
//             <strong>
//               {services.find((service) => service.id === deleteId)?.name}
//             </strong>
//             ?
//           </div>
//         </div>
//       </Modal>
//     </div>
//   )
// }

// export default ServiceCategory

import React, { useState } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { Modal, Input, Form, message, Upload, Select } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import ServiceCard from './ServiceCard'
import { IoIosWarning } from 'react-icons/io'
import deleteUser from '../../assets/delete-user.png'

const { Option } = Select

const servicesData = [
  {
    id: 1,
    name: 'Musician',
    styles: ['Mediterranean', 'Mexican', 'Asian'],
    types: ['Live', 'Studio', 'Vocal'],
    tools: ['Piano', 'Guitar', 'Microphone'],
    image:
      'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    serviceType: 'blue', // Default to blue collar
  },
  {
    id: 2,
    name: 'Dancer',
    styles: ['Ballet', 'Jazz', 'Contemporary'],
    types: ['Solo', 'Group', 'Choreography'],
    tools: ['Studios', 'Music', 'Shoes'],
    image:
      'https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    serviceType: 'blue', // Default to blue collar
  },
]

const ServiceCategory = () => {
  const [services, setServices] = useState(servicesData)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [form] = Form.useForm()
  const [deleteId, setDeleteId] = useState(null)
  const [imagePreview, setImagePreview] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [serviceType, setServiceType] = useState('blue') // Default to blue collar

  const Navigate = useNavigate()

  const handleEdit = (service) => {
    setEditingService(service)
    setServiceType(service.serviceType || 'blue')
    form.setFieldsValue({
      name: service.name,
      styles: service.styles.join(', '),
      types: service.types.join(', '),
      tools: service.tools.join(', '),
      serviceType: service.serviceType || 'blue',
    })
    setImagePreview(service.image)
    setIsModalVisible(true)
  }

  const handleDelete = (id) => {
    setDeleteId(id)
    setIsDeleteModalVisible(true)
  }

  const handleAddNew = () => {
    setEditingService(null)
    setServiceType('blue') // Reset to default
    form.resetFields()
    form.setFieldsValue({
      serviceType: 'blue', // Set default value
    })
    setImagePreview('')
    setIsModalVisible(true)
  }

  const handleServiceTypeChange = (value) => {
    setServiceType(value)
  }

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values) => {
        const {
          name,
          styles,
          types,
          tools,
          serviceType: selectedServiceType,
        } = values
        const stylesList = styles.split(',').map((style) => style.trim())
        const typesList = types.split(',').map((type) => type.trim())
        const toolsList = tools.split(',').map((tool) => tool.trim())

        if (editingService) {
          setServices(
            services.map((service) =>
              service.id === editingService.id
                ? {
                    ...service,
                    name,
                    styles: stylesList,
                    types: typesList,
                    tools: toolsList,
                    image: imageFile
                      ? URL.createObjectURL(imageFile)
                      : editingService.image,
                    serviceType: selectedServiceType,
                  }
                : service
            )
          )
          message.success('Service updated successfully!')
        } else {
          const newService = {
            id: services.length + 1,
            name,
            styles: stylesList,
            types: typesList,
            tools: toolsList,
            image: imageFile ? URL.createObjectURL(imageFile) : '',
            serviceType: selectedServiceType,
          }
          setServices([...services, newService])
          message.success('Service added successfully!')
        }
        setIsModalVisible(false)
      })
      .catch((info) => {
        console.log('Validate Failed:', info)
      })
    setImageFile(null)
    setImagePreview('')
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
  }

  const handleDeleteOk = () => {
    setServices(services.filter((service) => service.id !== deleteId))
    message.success('Service deleted successfully!')
    setIsDeleteModalVisible(false)
  }

  const handleDeleteCancel = () => {
    setIsDeleteModalVisible(false)
  }

  const handleImageChange = (info) => {
    if (info.file) {
      setImageFile(info.file)
      setImagePreview(URL.createObjectURL(info.file))
    }
  }

  return (
    <div className="mb-20">
      <div className="mb-6 flex justify-between items-center">
        <h1
          className="text-xl font-semibold cursor-pointer mt-5"
          onClick={() => Navigate(-1)}
        >
          ← Services
        </h1>
      </div>

      <div className="flex items-center flex-wrap gap-x-5 gap-y-5">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}

        <div className="card bg-gray-200 w-[320px] h-[490px] p-6 rounded-lg flex flex-col justify-center items-center">
          <button
            onClick={handleAddNew}
            className="app-default-color text-xl px-4 py-2 rounded-md flex items-center gap-2"
          >
            <IoAddCircleOutline className="text-[100px]" />
          </button>
          <h1 className="text-bold text-xl">Add New Service Category</h1>
        </div>
      </div>

      {/* Add/Edit Modal */}
      <Modal
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        centered
        okButtonProps={{
          style: {
            backgroundColor: 'var(--main-color)',
            color: 'white',
          },
        }}
      >
        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="p-5"
        >
          <div className="text-3xl font-bold text-center mb-2">
            {editingService ? 'Edit Service Category' : 'Add Service Category'}
          </div>
          <p className="text-gray-500 mb-3 text-center">
            Please fill out the details below to add a new service category.
          </p>

          {/* Service Type Selection */}
          <Form.Item
            name="serviceType"
            label="Service Type"
            rules={[{ required: true, message: 'Please select service type!' }]}
            initialValue="blue"
          >
            <Select onChange={handleServiceTypeChange} className="h-[48px]">
              <Option value="blue">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                  Blue Collar Service
                </div>
              </Option>
              <Option value="white">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-gray-100 border border-gray-300 mr-2"></div>
                  White Collar Service
                </div>
              </Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="image"
            rules={[
              { required: true, message: 'Please upload the service image!' },
            ]}
            className="mt-5"
          >
            <Upload
              name="image"
              listType="picture-card"
              showUploadList={false}
              onChange={handleImageChange}
              beforeUpload={() => false}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="preview"
                  style={{ width: '100%' }}
                />
              ) : (
                <div>
                  <UploadOutlined />
                  <div>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <Form.Item
            name="name"
            label="Service Category Name"
            rules={[
              { required: true, message: 'Please enter the category name!' },
            ]}
          >
            <Input className="h-[48px]" placeholder="Beverages" />
          </Form.Item>

          <Form.Item
            name="styles"
            label="Add Service Style (comma separated)"
            rules={[
              {
                required: true,
                message:
                  'Note: Please add your Service Style separated by ( , ) commas ',
              },
            ]}
          >
            <Input
              className="h-[48px]"
              placeholder="Animation, Streaming, Vlogs"
            />
          </Form.Item>

          <Form.Item
            name="types"
            label={
              serviceType === 'white'
                ? 'Format (comma separated)'
                : 'Service Type (comma separated)'
            }
            rules={[
              {
                required: true,
                message:
                  serviceType === 'white'
                    ? 'Note: Please add your Format separated by ( , ) commas'
                    : 'Note: Please add your Service Type separated by ( , ) commas',
              },
            ]}
          >
            <Input
              className="h-[48px]"
              placeholder={
                serviceType === 'white' ? 'PDF, DOCX, XLS' : 'FLV, AVI, MP4'
              }
            />
          </Form.Item>

          <Form.Item
            name="tools"
            label={
              serviceType === 'white'
                ? 'Software (comma separated)'
                : 'Add Service Tool (comma separated)'
            }
            rules={[
              {
                required: true,
                message:
                  serviceType === 'white'
                    ? 'Note: Please add your Software separated by ( , ) commas'
                    : 'Note: Please add your Service Tool separated by ( , ) commas',
              },
            ]}
          >
            <Input
              className="h-[48px]"
              placeholder={
                serviceType === 'white'
                  ? 'MS Office, Adobe, Figma'
                  : 'I Movie, Da Vinci, Capcut'
              }
            />
          </Form.Item>
        </Form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        visible={isDeleteModalVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
        okText="Yes"
        cancelText="No"
        centered
        okButtonProps={{
          style: {
            backgroundColor: 'var(--main-color)',
            color: 'white',
          },
        }}
      >
        <div
          className="text-lg bg-no-repeat bg-left-top bg-contain h-[200px] object-contain"
          style={{
            backgroundImage: `url(${deleteUser})`,
          }}
        >
          <div className="flex justify-center items-end">
            <IoIosWarning className="text-7xl text-red-700" />
          </div>
          <div className="font-bold text-5xl text-center">Warning</div>
          <div className="p-5 text-center text-red-700">
            Are you sure you want to delete the service{' '}
            <strong>
              {services.find((service) => service.id === deleteId)?.name}
            </strong>
            ?
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ServiceCategory
