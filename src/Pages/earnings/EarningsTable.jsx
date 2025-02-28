import React, { useState } from 'react'
import { Table, Button, Modal, Avatar, Space, Image } from 'antd'
import { FaStar, FaUserCircle } from 'react-icons/fa'
import { MdBlock } from 'react-icons/md'
import { IoIosWarning } from 'react-icons/io'
import deleteUser from '../../assets/delete-user.png'
import coin from '../../assets/coin.svg'

const EarningsTable = () => {
  const data = [
    {
      key: '1',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'Charlotte Mante',
      email: 'frostman@mac.com',
      type: 'credit bay',
      date: '16/08/2013',
      userType: 'Client',
      amount: '$29',
      status: 'Blocked',
      credits: 300,
      contactNumber: '388-790-9022',
    },
    {
      key: '2',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      name: 'Margaret Hessel II',
      email: 'chronos@aol.com',
      type: 'credit bay',
      date: '28/10/2012',
      userType: 'Talent',
      amount: '$290',
      status: 'Active',
      credits: 500,
      contactNumber: '388-790-9022',
    },
  ]

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'name',
      key: 'name',
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
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'User Type',
      dataIndex: 'userType',
      key: 'userType',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
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

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [dataState, setData] = useState(data)

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
      dataState.map((item) =>
        item.key === user.key ? { ...item, status: user.status } : item
      )
    )
    setIsDeleteModalVisible(false)
    setSelectedUser(null)
  }

  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold py-5 bg-white mb-2 px-2">
        Earnings History{' '}
      </h1>
      <Table
        columns={columns}
        dataSource={dataState}
        pagination={{ pageSize: 4, position: ['bottomCenter'] }}
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
          selectedUser?.status === 'Active' ? 'Yes, block' : 'Yes, unblock'
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

export default EarningsTable
