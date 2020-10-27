import React, {Component} from 'react';
import styles from '../styles/List.css'

class List extends Component {

   showNoProducts = () => {
    
     if(this.state.cleartrolleys) {
      return (<p>暂无商品，请添加商品</p>)
     } 
     return(
       <div>
          <section className="row">
            <p className="label">商品:</p>
            <p className="label">数量</p>
            <p className="label">{}</p>
          </section>
          <section className="row">
            <p className="text">可乐</p>
            <p className="text">1</p>
            <p className="text">删除</p>
          </section>
          <section className="row">
              <p className="text">雪碧</p>
              <p className="text">2</p>
              <p className="text">删除</p>
          </section>
      </div>    
     )
   }
  
   clearTrolley = () => {
    this.setState({
      cleartrolleys: true
    })
    this.showNoProducts()
   } 
 
    render() {
      return (
        <section className="list">
            <p className="list">Hello</p>       
        </section>     
      )
    }
  }
  
  export default Trolley
