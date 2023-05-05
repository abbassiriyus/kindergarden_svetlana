// import React, { Component } from 'react'
// import axios from 'axios'

// export default class RestApi extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             posts: []
//         }
//     }
//     componentDidMount() {
//         axios.get('https://backend-school-0u75.onrender.com/child')
//             .then(response => {
//                 this.setState({
//                     posts: response.data
//                 })
//                 console.log(response.data);
//             })
//     }
//     render() {
//         const { posts } = this.state
//         return (
//             <div>
//                 <h1>rest</h1>
//                 {
//                     posts.map(post => <div key={post.id}>{posts.title}</div>)
//                 }
//             </div>
//         )
//     }
// }


import axios from 'axios'
import React, { Component } from 'react'

export default class RestApi extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body: ''
      }
    }

    // componentDidMount() {
    //     axios.get('https://backend-school-0u75.onrender.com/child')
    //     .then(response => {
    //         this.setState({
    //             posts: response.data
    //         })
    //         console.log(response.data);
    //     })
    // }

    handleChange=(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://backend-school-0u75.onrender.com/', this.state)
        .then(response => {
            console.log(response);
        })
    }
    

  render() {
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>User Id</label>
                <input 
                type="text"
                name='userId'
                value={userId}
                onChange={this.handleChange}
                />
            </div>
            <div>
                <label>Title</label>
                <input 
                type="text"
                name='title'
                value={title}
                onChange={this.handleChange}
                />
            </div>
            <div>
                <label>Body</label>
                <input 
                type="text"
                name='body'
                value={body}
                onChange={this.handleChange}
                />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
