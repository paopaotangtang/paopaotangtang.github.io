import React, { Component } from 'react';
import apis from "../server/api";

function getdata(method,Com){
    return  class Fetchdata extends Component {
        constructor(props){
            super(props);
            this.state={
                data:{}
            };
        }
        componentDidMount(){
            apis[method]().then((data)=>{
                this.setState({data});
            })

        }
        render() {
            return (
                <div>
                    <Com  data={this.state.data} {...this.props}/>
                </div>
            )
        }
    }
    
}

    
export default getdata;