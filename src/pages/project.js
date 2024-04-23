import { Input, Select } from "antd"
import ProjectTable from "./components/project_table"



function Project() {
  return (
    <div className='project_body_wrap'>
      <div className='project_title_wrap'>
        <h1>xiang mu lie biao</h1>
        <button>chuang jian xiang mu</button>
      </div>
      <div className="search_wrap_select">
        <Input placeholder={'ren wu ming'} className='search_wrap_input' />
        <Select
          className="search_wrap_select"
          defaultValue="luky"
          style={{ width: 120 }}
          options={[
            {
              value: 'jack',
              label: 'jack',
            },
            {
              value: 'lucy',
              label: 'lucy',
            },
            {
              value: 'disabled',
              disabled: true,
              label: 'Disabled',
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe',
            },
          ]}
        />
      </div>
      <div className="project_table_wrap">
        <ProjectTable />
      </div>
    </div>
  )
}

export default Project