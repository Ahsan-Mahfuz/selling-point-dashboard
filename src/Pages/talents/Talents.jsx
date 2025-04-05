import React, { useState } from 'react'
import {
  Table,
  Button,
  Modal,
  Tabs,
  Avatar,
  Tag,
  Image,
  Select,
  Rate,
  Space,
} from 'antd'
import { useNavigate } from 'react-router-dom'
import { FaStar, FaUserCircle } from 'react-icons/fa'
import deleteUser from '../../assets/delete-user.png'
import { IoIosWarning } from 'react-icons/io'
import coin from '../../assets/coin.svg'
import { MdBlock } from 'react-icons/md'

const Talents = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const fullData = [
    {
      key: '1',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      talentName: 'Roosevelt Kozey',
      contactNumber: '388-790-9022',
      email: 'Eloise24@yahoo.com',
      address: 'Rancho Santa Margarita, CA 92688',
      joined: '2025-01-10',
      status: 'Blocked',
      credits: 200,
      isVerified: 'yes',
      documents: ['document.png', 'document.png'],
      bio: `
I'm sorry, but I need more specific instructions to generate the code you need. Could you please provide more details?
      `,
      category: 'videography',
      subCategory: [
        'Musician',
        'Dancer',
        'Dancer',
        'Dancer',
        'Dancer',
        'Dancer',
        'Dancer',
      ],
      rating: 4.5,
      totalHired: 10,
      completedWork: 105,
      cancelledWork: 20,
      totalReviews: 87,
    },
    {
      key: '2',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      talentName: 'Roosevelt Kozey',
      contactNumber: '388-790-9022',
      email: 'Eloise24@yahoo.com',
      address: 'Rancho Santa Margarita, CA 92688',
      joined: '2025-01-10',
      status: 'Active',
      credits: 200,
      isVerified: 'no',
      documents: ['document.png', 'document.png'],
      bio: `
      I'm sorry, but I need more specific instructions to generate the code you need. Could you please provide more details?
            `,
      category: 'dj',
      subCategory: ['Musician', 'Dancer'],
      rating: 4.5,
      totalHired: 10,
      completedWork: 105,
      cancelledWork: 20,
      totalReviews: 87,
    },
  ]

  const [data, setData] = useState(fullData)

  const columns = [
    {
      title: 'Talent Name',
      dataIndex: 'talentName',
      key: 'talentName',
      render: (text, record) => (
        <div className="flex items-center space-x-3">
          <Space>
            <Image
              preview
              className="!w-[30px] !h-[30px] rounded-full "
              src={record.image}
            />
            {text}
          </Space>
        </div>
      ),
    },
    {
      title: 'Contact Number',
      dataIndex: 'contactNumber',
      key: 'contactNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Joined',
      dataIndex: 'joined',
      key: 'joined',
    },
    {
      title: 'Is Verified?',
      dataIndex: 'isVerified',
      key: 'isVerified',
      render: (text) => (
        <div
          className={`px-3 py-1 w-[100px] flex items-center justify-center rounded-md ${
            text === 'yes' ? 'bg-green-200' : 'bg-red-300'
          }`}
        >
          {text === 'yes' ? 'Verified ' : 'Unverified'}
        </div>
      ),
    },
    {
      title: 'Credits',
      dataIndex: 'credits',
      key: 'credits',
      render: (text) => (
        <div className=" rounded-md flex  text-[16px]     ">
          <div className="bg-[#65acaa] flex px-3 py-1 gap-1  !items-center !justify-center rounded-md">
            <div>
              <img src={coin} alt="coin" />
            </div>
            <div className="mb-0.5">{text}</div>
          </div>
        </div>
      ),
    },

    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <div
          className={`badge ${
            text === 'Active' ? 'button-color ' : 'bg-red-500'
          } text-white py-1 px-3 rounded w-[100px] flex items-center justify-center`}
        >
          {text}
        </div>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div className="flex space-x-2">
          <Button
            type="primary"
            icon={<FaUserCircle />}
            className="button-color text-white"
            onClick={() => handleViewProfile(record)}
          />
          <Button
            type="primary"
            icon={<MdBlock />}
            className={
              selectedUser?.key === record.key
                ? 'button-color text-white'
                : 'bg-red-500 text-white'
            }
            onClick={() => confirmDeleteUser(record)}
          />
        </div>
      ),
    },
  ]

  const handleViewProfile = (user) => {
    setSelectedUser(user)
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
    setSelectedUser(null)
  }

  const confirmDeleteUser = (user) => {
    setSelectedUser(user)
    setIsDeleteModalVisible(true)
  }

  const handleDeleteUser = () => {
    const user = { ...selectedUser }
    user.status = user.status === 'Active' ? 'Blocked' : 'Active'
    setData(
      data.map((item) =>
        item.key === user.key ? { ...item, status: user.status } : item
      )
    )
    setIsDeleteModalVisible(false)
    setSelectedUser(null)
  }

  const items = [
    {
      key: '1',
      label: 'All Talent',
      children: (
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ position: ['bottomCenter'] }}
          />
        </div>
      ),
    },
    {
      key: '2',
      label: 'New Talent',
      children: (
        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ position: ['bottomCenter'] }}
          />
        </div>
      ),
    },
    {
      key: '3',
      label: 'Verified Talent',
      children: (
        <div>
          <Table
            columns={columns}
            dataSource={data.filter((item) => item.isVerified === 'yes')}
            pagination={{ position: ['bottomCenter'] }}
          />
        </div>
      ),
    },
    {
      key: '4',
      label: 'Unverified Talent',
      children: (
        <Table
          columns={columns}
          dataSource={data.filter((item) => item.isVerified === 'no')}
          pagination={{ position: ['bottomCenter'] }}
        />
      ),
    },
  ]

  const Navigate = useNavigate()

  return (
    <div className="mb-20">
      <h1
        className="text-xl mb-5 font-semibold cursor-pointer mt-5"
        onClick={() => Navigate(-1)}
      >
        ← Talents
      </h1>
      <Tabs defaultActiveKey="1" items={items} />

      {selectedUser && (
        <Modal
          visible={isModalVisible}
          onCancel={handleCloseModal}
          footer={null}
          className="modal-profile px-2 py-2 "
          centered
          width={550}
        >
          <div className="px-7 !text-xl">
            <div className="flex items-center justify-center">
              <Image
                src={selectedUser.image}
                alt={selectedUser.talentName}
                className="w-32 h-32 rounded-full mb-4"
                preview
                
              />
            </div>
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  key: '1',
                  label: 'General',
                  children: (
                    <div>
                      <div>
                        <div className=" font-bold text-[16px]">Name</div>
                        <div className="text-gray-600 text-[17px] mb-3">
                          {selectedUser.talentName}
                        </div>
                      </div>

                      <div>
                        <div className=" font-bold text-[16px]">Email</div>
                        <div className="text-gray-600 text-[17px] mb-3">
                          {selectedUser.email}
                        </div>
                      </div>

                      <div>
                        <div className=" font-bold text-[16px]">Address</div>
                        <div className="text-gray-600 text-[17px] mb-3">
                          {selectedUser.address}
                        </div>
                      </div>

                      <div>
                        <div className=" font-bold text-[16px]">Contact</div>
                        <div className="text-gray-600 text-[17px] mb-3">
                          {selectedUser.contactNumber}
                        </div>
                      </div>

                      <div>
                        <div className=" font-bold text-[16px]">Bio</div>
                        <div className="text-gray-600 text-[17px] mb-3">
                          {selectedUser.bio}
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  key: '2',
                  label: 'Talent',
                  children: (
                    <div className="!text-[16px]">
                      <div className="mb-4 ">
                        <h2 className=" font-bold">Talent Category</h2>
                        <Tag
                          color="blue"
                          className="text-base px-2 py-0.5 mt-2"
                        >
                          {selectedUser.category}
                        </Tag>
                      </div>

                      {/* Sub Categories */}
                      <div className="mb-4">
                        <h2 className=" font-bold">Sub Category</h2>
                        <div className="flex flex-wrap gap-1  mt-2">
                          {selectedUser.subCategory.map((sub, index) => (
                            <Tag
                              key={index}
                              color="cyan"
                              className="text-base px-2 py-0.5"
                            >
                              {sub}
                            </Tag>
                          ))}
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="mb-4">
                        <h2 className=" font-bold">Rating</h2>
                        <div className="flex items-center mt-2">
                          <Rate
                            disabled
                            allowHalf
                            defaultValue={selectedUser.rating}
                            className="text-yellow-400"
                          />
                          <span className="ml-2 text-gray-600 text-sm">
                            {selectedUser.rating}
                          </span>
                        </div>
                      </div>

                      {/* Verification Status */}
                      <div className="mb-4">
                        <h2 className=" font-bold">Verification Status</h2>

                        <Select
                          placeholder="Select one"
                          className="w-full mt-2"
                          value={
                            selectedUser.isVerified == 'yes' ? 'true' : 'false'
                          }
                        >
                          <Select.Option value="true">Verified</Select.Option>
                          <Select.Option value="false">
                            Unverified
                          </Select.Option>
                        </Select>
                      </div>

                      {/* Verification Documents */}
                      <div className="mb-4">
                        <h2 className=" font-bold">Verification Document</h2>
                        <div className="flex gap-3 mt-2">
                          {selectedUser.documents.map((doc, index) => (
                            // <Image
                            //   key={index}
                            //   src={doc}
                            //   width={50}
                            //   height={50}
                            //   preview={false}
                            //   className="border rounded-lg"
                            // />
                            <div
                              key={index}
                              className="border rounded-lg px-2 py-0.5 bg-gray-100"
                            >
                              {doc}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  key: '3',
                  label: 'Talent Statistics',
                  children: (
                    <div>
                      <div>
                        <div className="font-bold text-[16px]">Credits</div>
                        <div className=" rounded-md flex  text-[16px]     ">
                          <div className="bg-[#65acaa] flex px-3 py-1 gap-1  !items-center !justify-center rounded-md">
                            <div>
                              <img src={coin} alt="coin" />
                            </div>
                            <div className="mb-0.5 text-black">
                              {selectedUser.credits}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2  border-black mt-4">
                        <div className="text-center border-r border-t  border-black  p-5">
                          <span className="text-xl font-bold">{3}</span>
                          <p className="text-gray-600 ">Total Hired</p>
                        </div>
                        <div className="text-center border-t border-black  p-5">
                          <span className="text-xl font-bold">{3}</span>{' '}
                          <p className="text-gray-600 ">Upcoming Bookings</p>
                        </div>
                        <div className="text-center border-r border-t  border-black  p-5">
                          <span className="text-xl font-bold">{8}</span>{' '}
                          <p className="text-gray-600 ">Completed Works</p>
                        </div>
                        <div className="text-center border-t  border-black  p-5">
                          <span className="text-xl font-bold">{1}</span>{' '}
                          <p className="text-gray-600 ">Cancelled Bookings</p>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </Modal>
      )}

      <Modal
        visible={isDeleteModalVisible}
        onCancel={() => setIsDeleteModalVisible(false)}
        onOk={handleDeleteUser}
        okText={
          selectedUser?.status === 'Active' ? `Yes, block ` : `Yes, unblock `
        }
        cancelText="Cancel"
        centered
        okButtonProps={{
          style: { backgroundColor: 'red', borderColor: 'red' },
        }}
        cancelButtonProps={{
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
            <IoIosWarning className="text-7xl text-yellow-400" />
          </div>
          <div className="font-bold text-5xl text-center">Warning</div>
          <div className="p-5 text-center text-red-700">
            Are you sure you want to{' '}
            {selectedUser?.status === 'Active' ? 'block' : 'unblock'} this user?
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Talents
