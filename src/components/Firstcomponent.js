import React from 'react';
import PropTypes from 'prop-types';
import Print from '../components/Print'
export default function Firstcomponent(props) {
  // const name = 'miral';
  // const element = <h1> Hello {name}</h1>
  return (
    <div>
      {/* <h1>Title: {props.title} </h1> 
       {props.display ? <p>first component works!</p> : "" }
       {element} */}
      {/* {props.person.map((detail) => {
         return <Print key={detail.id} detail = {detail}  />
        })} */}
      
      {props.person.map((item) => (
          <Print item={item}/>
      ))}
    </div>

  )
}
Firstcomponent.propTypes = {
  title: PropTypes.string.isRequired
};
Firstcomponent.defaultProps = {
  title: "My title"
};
