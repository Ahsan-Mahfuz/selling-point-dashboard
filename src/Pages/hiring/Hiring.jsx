import React, { useState } from 'react'
import { Table, Avatar, Tag, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

const Hiring = () => {
  const [data, setData] = useState([
    {
      key: '1',
      clientImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      clientName: 'Marvin McKinney',
      talentImage: 'https://randomuser.me/api/portraits/men/44.jpg',
      talentName: 'Marvin McKinney',
      hiringDate: '2025-01-10',
      service: 'Videography',
      location: '456 Party Ln, NY',
      amount: '$500',
      status: 'Completed',
    },
    {
      key: '2',
      clientImage: 'https://randomuser.me/api/portraits/women/22.jpg',
      clientName: 'Jane Cooper',
      talentImage: 'https://randomuser.me/api/portraits/men/44.jpg',
      talentName: 'Marvin McKinney',
      hiringDate: '2025-01-10',
      service: 'Videography',
      location: '456 Party Ln, NY',
      amount: '$500',
      status: 'Completed',
    },
    {
      key: '3',
      clientImage: 'https://randomuser.me/api/portraits/men/62.jpg',
      clientName: 'Corbin Carroll',
      talentImage: 'https://randomuser.me/api/portraits/men/44.jpg',
      talentName: 'Marvin McKinney',
      hiringDate: '2025-01-10',
      service: 'Videography',
      location: '456 Party Ln, NY',
      amount: '$500',
      status: 'Completed',
    },
    {
      key: '4',
      clientImage: 'https://randomuser.me/api/portraits/women/32.jpg',
      clientName: 'Eleanor Pena',
      talentImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      talentName: 'Eleanor Pena',
      hiringDate: '2025-01-10',
      service: 'Videography',
      location: '123 Wedding Blvd, CA',
      amount: '$500',
      status: 'Pending',
    },
    {
      key: '5',
      clientImage: 'https://randomuser.me/api/portraits/men/52.jpg',
      clientName: 'Robert Fox',
      talentImage: 'https://randomuser.me/api/portraits/women/63.jpg',
      talentName: 'Kathryn Murphy',
      hiringDate: '2025-01-10',
      service: 'Videography',
      location: '123 Wedding Blvd, CA',
      amount: '$500',
      status: 'Pending',
    },
    {
      key: '6',
      clientImage: 'https://randomuser.me/api/portraits/men/33.jpg',
      clientName: 'Jacob Jones',
      talentImage: 'https://randomuser.me/api/portraits/men/53.jpg',
      talentName: 'Robert Fox',
      hiringDate: '2025-01-10',
      service: 'Videography',
      location: '123 Wedding Blvd, CA',
      amount: '$500',
      status: 'Pending',
    },
    {
      key: '7',
      clientImage: 'https://randomuser.me/api/portraits/women/12.jpg',
      clientName: 'Brooklyn Simmons',
      talentImage: 'https://randomuser.me/api/portraits/women/63.jpg',
      talentName: 'Kathryn Murphy',
      hiringDate: '2025-01-10',
      service: 'Videography',
      location: '456 Party Ln, NY',
      amount: '$500',
      status: 'Completed',
    },
    {
      key: '8',
      clientImage: 'https://randomuser.me/api/portraits/women/42.jpg',
      clientName: 'Darlene Robertson',
      talentImage: 'https://randomuser.me/api/portraits/women/23.jpg',
      talentName: 'Esther Howard',
      hiringDate: '2025-01-10',
      service: 'Videography',
      location: '456 Party Ln, NY',
      amount: '$500',
      status: 'Completed',
    },
    {
      key: '9',
      clientImage: 'https://randomuser.me/api/portraits/men/33.jpg',
      clientName: 'Jacob Jones',
      talentImage: 'https://randomuser.me/api/portraits/women/73.jpg',
      talentName: 'Dianne Russell',
      hiringDate: '2025-01-10',
      service: 'Videography',
      location: '456 Party Ln, NY',
      amount: '$500',
      status: 'Completed',
    },
    {
      key: '10',
      clientImage: 'https://randomuser.me/api/portraits/women/82.jpg',
      clientName: 'Theresa Webb',
      talentImage: 'https://randomuser.me/api/portraits/women/82.jpg',
      talentName: 'Theresa Webb',
      hiringDate: '2025-01-10',
      service: 'Videography',
      location: '123 Wedding Blvd, CA',
      amount: '$500',
      status: 'Canceled',
    },
  ])

  const columns = [
    {
      title: 'Client Name',
      dataIndex: 'clientName',
      key: 'clientName',
      render: (text, record) => (
        <Space>
          <Avatar src={record.clientImage} />
          {text}
        </Space>
      ),
    },
    {
      title: 'Talent Name',
      dataIndex: 'talentName',
      key: 'talentName',
      render: (text, record) => (
        <Space>
          <Avatar src={record.talentImage} />
          {text}
        </Space>
      ),
    },
    {
      title: 'Hiring Date',
      dataIndex: 'hiringDate',
      key: 'hiringDate',
    },
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
      render: (text) => <Tag color="cyan">{text}</Tag>,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
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
      render: (status) => {
        let color = ''

        switch (status) {
          case 'Completed':
            color = 'success'
            break
          case 'Pending':
            color = 'processing'
            break
          case 'Canceled':
            color = 'error'
            break
          default:
            color = 'default'
        }

        return (
          <div>
            <Tag
              color={color}
              className="w-[100px] flex items-center justify-center"
            >
              {status}
            </Tag>
          </div>
        )
      },
    },
  ]

  const Navigate = useNavigate()

  return (
    <div className="mb-20">
      <h1
        className="text-xl font-semibold cursor-pointer my-5"
        onClick={() => Navigate(-1)}
      >
        ← Hiring
      </h1>

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10, position: ['bottomCenter'] }}
        bordered={false}
      />
    </div>
  )
}

export default Hiring
