import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';
import {Table, Button, Container, NavLink, Alert} from 'reactstrap';

const api = 'https://hapi5-api.herokuapp.com/boards';

class ListAPI extends Component {
  constructor(props) {
    super(props) {
      this.state = {
        Get_Boards: [], 
        response: '',
        display: 'none'
      }
    }
    
    componentDidMount() {
      axios.get(api).then(res=>{
        this.setState({
          Get_Boards: res.data.values
        })
      })
    }

    render() {
      return (
        <Container>
          <h2>Data Boards</h2>
          <hr/>
          <Table className="table-bordered">
            <thead>
              <tr>
                <th>Table</th>
                <th>Description</th>
                <th>CreatedAt</th>
                <th>UpdateAt</th>
                <th>Action</th>
              </tr>
              <tbody>
                {this.state.Get_Boards.map(Get_Boards => 
                  <tr key={Get_Boards.id_Boar}>
                    <td>{Get_Boards.title}</td>
                    <td>{Get_Boards.description}</td>
                    <td>{Get_Boards.createdAt}</td>
                    <td>{Get_Boards.updateAt}</td>
                    <td>Edit | Hapus</td>
                  </tr>
                  )}
              </tbody>
            </thead>
          </Table>
        </Container>
      );
    }
  }
}

export default ListAPI;
