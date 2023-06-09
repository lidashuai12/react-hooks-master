import React, { useState } from 'react';
import { Space, Table, Tag, Input } from 'antd';
import { InputClass } from './style.js'
export default function useTable() {
 const [columns, useColumns] = useState([
  {
   title: 'Name',
   dataIndex: 'name',
   key: 'name',
   render: (text) => <a>{text}</a>,
  },
  {
   title: 'Age',
   dataIndex: 'age',
   key: 'age',
  },
  {
   title: 'Address',
   dataIndex: 'address',
   key: 'address',
  },
  {
   title: 'Tags',
   key: 'tags',
   dataIndex: 'tags',
   render: (_, { tags }) => (
    <>
     {tags.map((tag) => {
      let color = tag.length > 5 ? 'geekblue' : 'green';

      if (tag === 'loser') {
       color = 'volcano';
      }

      return (
       <Tag color={color} key={tag}>
        {tag.toUpperCase()}
       </Tag>
      );
     })}
    </>
   ),
  },
  {
   title: 'Action',
   key: 'action',
   render: (_, record) => (
    <Space size="middle">
     <a>Invite {record.name}</a>
     <a>Delete</a>
    </Space>
   ),
  },
 ])
 const [data] = useState([
  {
   key: '1',
   name: 'John Brown',
   age: 32,
   address: 'New York No. 1 Lake Park',
   tags: ['nice', 'developer'],
  },
  {
   key: '2',
   name: 'Jim Green',
   age: 42,
   address: 'London No. 1 Lake Park',
   tags: ['loser'],
  },
  {
   key: '3',
   name: 'Joe Black',
   age: 32,
   address: 'Sidney No. 1 Lake Park',
   tags: ['cool', 'teacher'],
  },
 ])
 const useSearchChange = () => {
  console.info('1111111111');
  useColumns([])
 }
 const [data1] = useState([
  {
   name: '1'
  },
  {
   name: '1'
  },
  {
   name: '2'
  }
 ])
 return <div>
  <InputClass>
   <Input placeholder="Basic usage" onChange={useSearchChange} />
  </InputClass>
  <Table columns={columns} dataSource={data} />;
  <li>
   {
    //map方法专门用于加工数组，React中大量使用map方法
    data1.map((item, index) => {
     return <li >{item.name}</li>
    })

   }
  </li>
 </div>
}
