import React, { Component } from 'react'

export default class UserGreeting extends Component {
    constructor(){
        super()
        this.state={
            isLoggedIn:true
        }
    }
    render() {
       return this.state.isLoggedIn && <div>Welcome Pavan</div>
        //   return(
        //     this.state.isLoggedIn ? 
        //     <div>Welcome Pavan</div> :
        //     <div>Welcome Guest</div> 
            
        //   )
        // if(this.state.isLoggedIn){
        //     return (
        //         <>
        //             <div>
        //                 Welcome Pavan
        //             </div>

        //         </>
    
        //     ) 
        // }
        // else{
        //     return (
        //         <>
        //             <div>
        //                 Welcome Guest
        //             </div>

        //         </>
    
        //     )  
        // }
       
    }
}
