import React, { Component } from 'react';
// react-dom 是react将template render
import ReactDOM from 'react-dom';
// react+react-dom = vue
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
class Users extends Component {
  constructor () {
    super()
    this.state = {
      'users' : [
      {name: 'Jerry', age: 21, gender: 'male'},
      {name: 'Tomy', age: 22, gender: 'male'},
      {name: 'Lily', age: 19, gender: 'female'}
    ]}
  }
  render() {
    const usersElement = []
    for(let user of this.state.users) {
      usersElement.push(
        <div>
          <div>姓名：{user.name}</div>
          <div>年龄：{user.age}</div>
          <div>性别：{user.gender}</div>
          <hr/>
        </div>
      )
    }
    return (
      <div>
        {usersElement}
      </div>
    )
  }
}
class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }
  constructor () {
    super()
    this.state = {
      name: 'Tomy',
      isLiked: false,
    }
  }
  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render () {
    const likedText
      = this.props.likedText || '取消'
    const unlikedText
      = this.props.unlikedText || '点赞'
    return (
      <button
      onClick=
      {this.handleClickOnLikeButton.bind(this)}>
      {this.state.isLiked?likedText:unlikedText}
      </button>
    )
  }
}
class Index extends Component {
  render () {
    return (
      <div>
        <LikeButton likedText='已赞' unlikedText='赞'/>
        <Users />
      </div>
    )
  }
}
// 挂载组件
ReactDOM.render(<Index />,
   document.getElementById('root'));
// registerServiceWorker();
