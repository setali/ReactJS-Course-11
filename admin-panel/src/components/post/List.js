import { EyeOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setPosts } from '../../redux/actions/post'
import request from '../../tools/request'
import Table from '../utils/Table'

class Posts extends Component {
  columns = [
    { key: 'id', title: 'شناسه' },
    { key: 'title', title: 'عنوان' },
    {
      key: 'actions',
      title: 'عملیات',
      render: (_, record) => (
        <>
          <Link to={`/post/${record.id}`}>
            <EyeOutlined />
          </Link>
        </>
      )
    }
  ]

  getData () {
    request('/posts').then(({ data: posts }) => this.props.setItems(posts))
  }

  componentDidMount () {
    this.getData()
  }

  render () {
    return (
      <div>
        <div>
          آخرین مقاله بازدید شده:
          {this.props.post.title}
        </div>
        <Table data={this.props.posts} columns={this.columns} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    post: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItems: data => dispatch(setPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
