import React from 'react'

function CoolButton(props) {
    
        
        if(props.isDanger){
       return  <button className="button is-rounded my-class is-danger is-small">Button 1</button>
        }else{
            return <button class="button is-small is-success">Button 2</button>
       
 
 }
}
                
export default CoolButton