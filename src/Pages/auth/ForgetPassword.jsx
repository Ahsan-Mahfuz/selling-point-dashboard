import { Form, Input, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import hye_logo from '../../assets/hye_logo.svg'
const ForgetPassword = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log(values)
    navigate('/send-otp')
  }

  return (
    <div className="h-screen flex items-center justify-center w-[500px] mx-auto">
      <div className=" shadow bg-white flex flex-col justify-center items-center w-full  p-12 rounded-md">
        <img src={hye_logo} alt="logo" className="mb-3 w-[250px]" />

        <h1 className="text-3xl font-bold  mb-2 ">Forget Password</h1>
        <p className="text-lg  m-5">Please enter your email address</p>
        <Form layout="vertical" onFinish={onFinish} className="w-full max-w-sm">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input
              placeholder="Enter email"
              className="h-[42px] px-4 border-gray-300 rounded-md"
            />
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full button-color  disabled:bg-gray-400 text-white h-[42px] rounded-md"
            >
              Send OTP
            </button>
          </Form.Item>
        </Form>

        <div className="text-center app-default-color  poppins-text">
          <Link
            to="/login"
            className=" poppins-text app-default-color  hover:underline "
          >
            Sign in instead
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
