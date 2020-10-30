import React, { Component } from 'react';
import './App.scss';
class App extends Component {
  // TODO GTB-知识点: - 需要联通后端，从API获取数据，每次点击分组都应该随机生成新的分组
  // TODO GTB-知识点: - 数据结构设计： studentList和listNumber冗余了
  state = {
    students: [
        {id:'1', name:'成吉思汗'}, {id:'2', name:'鲁班七号'},{id:'3', name:'太乙真人'},
        {id:'4', name:'钟无艳'}, {id:'5', name:'花木兰'},{id:'6', name:'雅典娜'},
        {id:'7', name:'芈月'}, {id:'8', name:'白起'},{id:'9', name:'刘禅'},
        {id:'10', name:'庄周'}, {id:'11', name:'马超'},{id:'12', name:'刘备'},
        {id:'13', name:'哪吒'}, {id:'14', name:'大乔'},{id:'15', name:'蔡文姬'}],

      studentList: {
                    1: [{id:'10', name:'庄周'},{id:'12', name:'刘备'}, {id:'3', name:'太乙真人'}],
                    2: [{id:'7', name:'芈月'}, {id:'5', name:'花木兰'},{id:'10', name:'庄周'}],
                    3: [{id:'8', name:'白起'}, {id:'4', name:'钟无艳'},{id:'15', name:'蔡文姬'}],
                    4: [{id:'6', name:'雅典娜'},{id:'9', name:'刘禅'}],
                    5: [{id:'13', name:'哪吒'},{id:'2', name:'鲁班七号'}, ],
                    6: [{id:'11', name:'马超'}, {id:'14', name:'大乔'}]
                  },

      listNumber: [
        {number:'1'}, {number:'2'}, {number:'3'}, {number:'4'}, {number:'5'}, {number:'6'}],

      groupStudentsVisiable: false,

      addStudentVisiable: false,
      id:'',
      name:'',
  }

  groupStudents = () => {
    this.setState ({
      groupStudentsVisiable: true,
    });
    this.showGroupStudents();
  }

  addStudent= () => {
    this.setState ({
      addStudentVisiable: true,
    });
    this.showaddStudent();
  }

  showGroupStudents() {
    if(this.state.groupStudentsVisiable) {
        return (
          <div>
            {this.state.listNumber.map((item) => (
              <section  className="groups-info">
                    <p className="title-info">{item.number}组</p>
                    {this.state.studentList[item.number].map((res) => (
                      <section className="show-studentname">
                        <button className="students-info">{res.id}.{res.name}</button>
                      </section>
                    ))}

              </section>
              ))}

          </div>
        )
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    const newSTudeng = {
        id: event.is,
        name: event.name,
    }
    this.setState({
      students: students.push(newSTudeng),
    })
    console.log('this.state.students:', this.state.students)
}

  showaddStudent() {
    if(this.state.addStudentVisiable) {
      // TODO GTB-知识点: - 过渡设计需求
      return (
        <div>
           <form className='myForm' onSubmit={this.handleSubmit}>
              <label className='baseicLabe'>ID</label>
              <input type='text' name='id' className="imputName"
                  onChange={this.handleChange}
                  value={this.state.id} placeholder="id"/>
              <label className="baseicLabe"> 姓名</label>
              <input type='text' name='name' className="imputName"
                  onChange={this.handleChange}
                  value={this.state.name} placeholder="name"/>
              <input className='submit' type='submit' value='提 交'
              disabled={!this.state.name || !this.state.id
              } />
            </form>
        </div>
      )
  }

  }

  render() {
    return (
      <div className="grouping">
        <div className="row">
          <p className="grouping-title">分组列表</p>
          <button className="grouping-button" onClick={this.groupStudents}>分组学员</button>
        </div>
        {this.showGroupStudents()}
        <div>
          <p className="list-title">学员列表</p>
          <section className="students">
            {this.state.students.map((item) => (
              // TODO GTB-知识点: - html标签不合理，学员是不可以点击的，不应该使用button
              <button className="student-name">{item.id}.{item.name}</button>
            ))}
            <button className="add-student" onClick={this.addStudent}>+添加学员</button>
          </section>
          {this.showaddStudent()}
        </div>
      </div>
    );
  }
}

export default App;
// TODO GTB-知识点: - 组件划分不合理，学员列表和分组列表明显可以划分成两个组件
// TODO GTB-综合实践: - 没有fix eslint
