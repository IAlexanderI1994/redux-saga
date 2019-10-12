import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { requestApiData } from '../actions';


const mapStateToProps = (state: any) => ({
  data: state.dataReducer.data
});

const mapDispatchToProps = (dispatch: Dispatch) => (dispatch: Dispatch) => bindActionCreators({requestApiData}, dispatch);

type Person = {

  id: {
    value: string
  },
  gender: string,
  name: {
    first: string,
    second: string
  },
  picture: {
    medium: string,
  }
}

interface Props{
  requestApiData: () => any
  data: any
}

class Home extends Component<Props>{

  componentDidMount(): void{
    this.props.requestApiData();
  }

  person = (p: Person, i: number) => (
    <div key={p.id.value}>
      <h2>{p.gender} </h2>
      <h2>{p.name.first} </h2>
      <h2>{p.name.second} </h2>
      <img src={p.picture.medium} alt=""/>
    </div>
  );

  render(){

    const {results = []} = this.props.data;
    return (results).map(this.person);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
