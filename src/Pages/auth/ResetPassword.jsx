import { Form, Input, Checkbox } from 'antd'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import hye_logo from '../../assets/hye_logo.svg'
const ResetPassword = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log(values)
    toast.success('Password reset successfully!')
    navigate('/login')
  }

  return (
    <div className="h-screen flex items-center justify-center w-[500px] mx-auto">
      <div className=" shadow bg-white flex flex-col justify-center items-center w-full  p-12 rounded-md">
        <img src={hye_logo} alt="logo" className="mb-3 w-[250px]"  />
        
        <p className="text-3xl  mb-8 font-bold">Set new password</p>

        <Form layout="vertical" onFinish={onFinish} className="w-full max-w-sm">
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please enter your new password!' },
              {
                min: 6,
                message: 'Password must be at least 6 characters long!',
              },
            ]}
          >
            <Input.Password
              placeholder="New password"
              className="h-[42px] px-4 border-gray-300 rounded-md"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your new password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Passwords do not match!'))
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="confirm password"
              className="h-[42px] px-4 border-gray-300 rounded-md"
            />
          </Form.Item>

          <Form.Item>
            <Checkbox className="text-gray-700">Keep me logged in</Checkbox>
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full button-color text-white h-[42px] rounded-md"
            >
              Reset Password
            </button>
          </Form.Item>
        </Form>

        <div className="text-center">
          <Link to="/login" className="app-default-color hover:underline ">
            Sign in instead
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
