import { Menu } from 'antd'
// import Kanban from '../kanban'
import { NavLink } from 'react-router-dom'



function LeftMenu() {
  return (
    <div className='left_menu'>
      <Menu mode={'inline'}>
        <Menu.Item key={'kanban'}>
          <NavLink
            to={'/project/:id/kanban'}
            className='link_title'
            style={{ color: 'black', fontSize: '16px' }}>kan ban</NavLink>
        </Menu.Item>

        <Menu.Item key={'epic'}>
          <NavLink
            to={'/project/:id/epic'}
            className='link_title'
            style={{ color: 'black', fontSize: '16px' }}>ren wu lan</NavLink>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default LeftMenu