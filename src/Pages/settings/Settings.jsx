import { useState } from 'react'
import { Select, Input, Button, Form, Tag } from 'antd'
import toast from 'react-hot-toast'

const { Option } = Select

const Settings = () => {
  const [deliveryTimes, setDeliveryTimes] = useState([])
  const [languages, setLanguages] = useState([])
  const [locations, setLocations] = useState([])
  const [newLocation, setNewLocation] = useState('')

  const handleAddLocation = () => {
    if (newLocation && !locations.includes(newLocation)) {
      setLocations([...locations, newLocation])
      setNewLocation('')
    }
  }

  const handleSubmit = () => {
    console.log('Saved Settings:', {
      deliveryTimes,
      languages,
      locations,
    })
    toast.success('Update All the settings')
  }

  return (
    <div className="p-6 mt-5 rounded-md  bg-white  space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Configuration</h2>

      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Available Delivery Times">
          <Select
            mode="tags"
            placeholder="Enter time slots like 10AM-12PM, 2PM-4PM"
            value={deliveryTimes}
            onChange={setDeliveryTimes}
          />
        </Form.Item>

        <Form.Item label="Available Languages">
          <Select
            mode="multiple"
            placeholder="Select supported languages"
            value={languages}
            onChange={setLanguages}
            allowClear
          >
            <Option value="English">English</Option>
            <Option value="Bangla">Bangla</Option>
            <Option value="Spanish">Spanish</Option>
            <Option value="Arabic">Arabic</Option>
            <Option value="French">French</Option>
          </Select>
        </Form.Item>

        {/* Locations */}
        <Form.Item label="Available Locations">
          <div className="flex gap-2 mb-2">
            <Input
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
              placeholder="Enter a location"
            />
            <Button type="primary" onClick={handleAddLocation}>
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {locations.map((loc, idx) => (
              <Tag
                key={idx}
                closable
                onClose={() => setLocations(locations.filter((l) => l !== loc))}
              >
                {loc}
              </Tag>
            ))}
          </div>
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="mt-4">
            Save Configuration
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Settings
