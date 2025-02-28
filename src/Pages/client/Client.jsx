import React, { useState } from 'react'
import { Table, Button, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import deleteUser from '../../assets/delete-user.png'
import { IoIosWarning } from 'react-icons/io'
import { MdBlock } from 'react-icons/md'
import coin from '../../assets/coin.svg'

const Client = ({ dashboardHome }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const fullData = [
    {
      key: '1',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      userName: 'Roosevelt Kozey',
      contactNumber: '388-790-9022',
      email: 'Eloise24@yahoo.com',
      credits: 300,
      joined: '2025-01-10',
      status: 'Blocked',
    },
    {
      key: '2',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      userName: 'Russell Veum',
      contactNumber: '983-842-7095',
      email: 'Nigelt@hotmail.com',
      credits: 500,
      joined: '2025-01-10',
      status: 'Active',
    },
  ]

  const [data, setData] = useState(fullData)

  const columns = [
    {
      title: 'Client Name',
      dataIndex: 'clientName',
      key: 'clientName',
      render: (text, record) => (
        <div className="flex items-center space-x-3">
          <img src={record.image} alt="" className="w-12 h-12 rounded-full" />
          <span className="text-gray-900 font-medium">{text}</span>
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
      title: 'Joined',
      dataIndex: 'joined',
      key: 'joined',
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

  const Navigate = useNavigate()

  return (
    <div className="mb-20">
      {!dashboardHome && (
        <h1
          className="text-xl font-semibold cursor-pointer mt-5"
          onClick={() => Navigate(-1)}
        >
          ← Client
        </h1>
      )}
      <Table
        columns={columns}
        dataSource={data}
        pagination={dashboardHome ? false : { position: ['bottomCenter'] }}
        className="mt-5"
      />

      {selectedUser && (
        <Modal
          visible={isModalVisible}
          onCancel={handleCloseModal}
          footer={null}
          className="modal-profile px-2 py-2 "
          centered
          width={450}
        >
          <div className="flex flex-col items-center text-center text-gray-600 ">
            <img
              src={selectedUser.image}
              alt={selectedUser.userName}
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{selectedUser.userName}</h2>
            <p className="text-gray-600">{selectedUser.contactNumber}</p>
            <p className="text-gray-600">{selectedUser.email}</p>
            <p className="text-gray-600">{selectedUser.status}</p>
            <div className=" rounded-md flex  text-[16px]     ">
              <div className="bg-[#65acaa] flex px-3 py-1 gap-1  !items-center !justify-center rounded-md">
                <div>
                  <img src={coin} alt="coin" />
                </div>
                <div className="mb-0.5 text-black">{selectedUser.credits}</div>
              </div>
            </div>

            <div className="grid grid-cols-2  border-black mt-4">
              <div className="text-center border-r border-t  border-black  p-5">
                <span className="text-xl font-bold">{3}</span>
                <p>Total Hired</p>
              </div>
              <div className="text-center border-t border-black  p-5">
                <span className="text-xl font-bold">{3}</span>{' '}
                <p>Upcoming Bookings</p>
              </div>
              <div className="text-center border-r border-t  border-black  p-5">
                <span className="text-xl font-bold">{8}</span>{' '}
                <p>Completed Works</p>
              </div>
              <div className="text-center border-t  border-black  p-5">
                <span className="text-xl font-bold">{1}</span>{' '}
                <p>Cancelled Bookings</p>
              </div>
            </div>
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

export default Client
