import { Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import hye_logo from '../../assets/hye_logo.svg'
import { useRef, useState } from 'react'
const SendOtp = () => {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(Array(6).fill(''))
  const inputRefs = useRef([])

  const handleChange = (index, e) => {
    const value = e.target.value.replace(/\D/g, '')
    if (!value) return

    const newOtp = [...otp]
    newOtp[index] = value.charAt(0)
    setOtp(newOtp)

    if (index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const onFinishOtp = (values) => {
    console.log(values)
    navigate('/reset-password')
  }

  return (
    <div className="h-screen flex items-center justify-center w-[500px] mx-auto">
      <div className=" shadow bg-white flex flex-col justify-center items-center w-full  p-12 rounded-md">
        <img src={hye_logo} alt="logo" className="mb-3 w-[250px]" />

        <h1 className="text-3xl font-bold  mb-2 ">Check your email</h1>
        <p className="text-lg  m-5">Please enter your OTP</p>

        <Form
          layout="vertical"
          onFinish={onFinishOtp}
          className="w-full max-w-sm"
        >
          <Form.Item
            name="otp"
            rules={[{ required: true, message: 'Please enter the OTP!' }]}
            style={{ textAlign: 'center' }}
          >
            <div className="flex gap-2 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  maxLength={1}
                  className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>
          </Form.Item>

          <Form.Item >
            <button
              type="submit"
              className="w-full mt-5 button-color text-white h-[42px] rounded-md"
            >
              Next
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

export default SendOtp
