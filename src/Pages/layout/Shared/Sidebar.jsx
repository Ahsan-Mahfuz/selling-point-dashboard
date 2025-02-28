import { FaHome, FaShieldAlt } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaUserGroup } from 'react-icons/fa6'
import { CgProfile } from 'react-icons/cg'
import { CiLogout } from 'react-icons/ci'
import { SiFuturelearn } from 'react-icons/si'
import hye_logo from '../../../assets/hye_logo.svg'
import { GrServices } from 'react-icons/gr'
import { PiUsersFourFill } from 'react-icons/pi'

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', link: '/', icon: <FaHome /> },
    {
      name: 'Clients',
      link: '/clients',
      icon: <PiUsersFourFill />,
    },
    { name: 'Talents', link: '/talents', icon: <FaUserGroup /> },

    {
      name: 'Earnings',
      link: '/earnings',
      icon: <SiFuturelearn />,
    },
    {
      name: 'Service Category',
      link: '/service-category',
      icon: <GrServices />,
    },

    {
      name: 'Profile Settings',
      link: '/profile',
      icon: <CgProfile />,
    },
    { name: 'Privacy Policy', link: '/privacy-policy', icon: <FaShieldAlt /> },
    {
      name: 'Terms & condition',
      link: '/terms-and-condition',
      icon: <FaShieldAlt />,
    },
    { name: 'Log out', link: '/login', icon: <CiLogout /> },
  ]
  const Navigate = useNavigate()
  return (
    <div className=" w-[250px] h-[96vh] overflow-y-scroll px-3 bg-white  ">
      <div
        className="flex flex-col justify-center items-center cursor-pointer"
        onClick={() => Navigate('/')}
      >
        <img src={hye_logo} alt="logo" className="my-5 w-[250px]" />
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <NavLink
            to={item?.link}
            key={index}
            className={({ isActive }) =>
              `flex items-center  py-3 rounded-3xl my-1 pl-6 hover:bg-[#0F5E5B] cursor-pointer hover:text-white ${
                isActive ? 'button-color text-white' : ''
              }`
            }
          >
            <span className="mr-4 text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
