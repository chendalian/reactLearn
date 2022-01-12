/*
应用根组件
 */
import React,{Component} from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Login from './pages/login/index'
import Admin from './pages/admin/index';

export default class App extends Component{
  render() {
      return (
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login/>}></Route>
                  <Route path='/admin' element={<Admin/>}></Route>
              </Routes>
          </BrowserRouter>
      );
  }
}
