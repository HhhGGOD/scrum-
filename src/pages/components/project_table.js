import { Space, Table } from 'antd';
import dayjs from 'dayjs';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';



const columns = [
  {
    title: 'shou cang',
    dataIndex: 'collect',
    key: 'collect',
    render: text => <div className='iconfont icon-shoucang shoucang-item'></div>,
    width: '10%'
  },
  {
    title: 'xiang mu ming chang',
    dataIndex: 'name',
    key: 'name',
    render: (text, data) => {
      // console.log(text, data)
      return <NavLink to={`/project/${data._id}/kanban`}>{text}</NavLink>
    },
    sorter: (a, b) => a.title - b.title,
    width: '30%',
  },
  {
    title: 'bu men',
    dataIndex: 'organization',
    key: 'organization',
    width: '15%'
  },
  {
    title: 'fu ze ren',
    dataIndex: 'owner',
    key: 'owner',
    render: text => <div>{text}</div>,
    width: '15%'
  },
  {
    title: 'chuang jian shi jian',
    key: 'created',
    dataIndex: 'created',
    render: (_, record) => (
      <Space size="middle">
        <div>{dayjs(record.created).format('DD/MM/YYYY')}</div>
      </Space>
    ),
  },
  {
    title: 'cao zuo',
    key: 'created',
    dataIndex: 'created',
    render: text => <div className='iconfont icon-caozuo caozuo-item'></div>,

  },
];


const data = [{
  collect: 'false',
  name: 'shu ju',
  organization: 'yan fa',
  owner: 'james',
  creat: '2024-4-23'
}]

function ProjectTable() {

  return (
    <>
      <Table rowKey="created" className='project_table_css' dataSource={data} columns={columns} />

    </>
  )
}

export default ProjectTable