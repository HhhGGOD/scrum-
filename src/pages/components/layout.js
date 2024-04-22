import { Outlet, useLocation } from "react-router-dom"
import Header from "./header"
import LeftMenu from "./left_menu"


function Layout() {

  let location = useLocation()
  let is_project_page = location.pathname === '/project'

  return (
    //类BEM命名
    <div className="layout_wrap">
      <div className="header_wrap">
        <Header />
      </div>
      <div className="layout_wrap_project">

        {
          is_project_page ? null :
            <div className="project_side_menu_wrap">
              <LeftMenu />
            </div>
        }

        <div className="project_wrap">
          {/* <子组件> */}
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default Layout