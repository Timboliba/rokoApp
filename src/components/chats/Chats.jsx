import React, { useState } from 'react'
import User from './user.png'
const Discussions=()=>{
  
  return<>
    <div className="discussionBlock" style={{display:'flex',alignItems:'center',borderBottom:'1px solid silver',borderTop:'1px solid silver',padding:'5px 0 5px 0'}}>
      {/* <div className="profilImg"> */}
        <img src={User} alt="" srcset="" style={{height:'50px',width:'50px',borderRadius:'50%'}}/>
      {/* </div> */}
      <div className="nameAndLastChat">
        <h2  style={{padding:'0',margin:'0'}}>Bistro Giovanni</h2>
        <p style={{padding:'0',margin:'0'}}>Sopia vous a envoyé une commande</p>
      </div>
    </div>
  </>
}


const Chats = () => {
  const [msgSend,setMsgSend]=useState('')
  const handlerSubmit=()=>{
    let msg=document.getElementById('msg').value
    setMsgSend(msg)

  }
  return (
    <div className="chatsContainer" style={{display:'grid',gridTemplateColumns:'30% 1fr',height:'100%'}}>
      <div className="listOfDifusion" style={{borderRight:'1px solid grey'}}>
        <div className="titleDiscusion" style={{paddingTop:'15px',paddingBottom:'15px'}}>
          <h1 style={{padding:'0',margin:'0'}}>DISCUSSIONS</h1>
        </div>
        <div className="searchContainer" style={{padding:'10px 5px 10px 5px'}}>
          <input type="search" name="search" placeholder='Rechercher...' style={{height:'50px',width:'100%',borderRadius:'10px'}}/>
        </div>
        <div className="discussionsList" style={{overflowY:'auto',height:'585px'}}>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
            <Discussions/>
        </div>
      </div>
      <div className="individualDiscussion">
          <div className="header" style={{display:'grid',gridTemplateColumns:'55% 1fr',alignItems:'center',elevation:1,backgroundColor:'teal'}}>
            <div className="nameOfuserReciever" style={{display:'flex',alignItems:'center',paddingBottom: '30px'}}>
              <img src={User} alt="" srcset="" style={{height:'50px',width:'50px',borderRadius:'50%'}}/>
              <h2  style={{padding:'0',margin:'0'}}>Bistro Giovanni</h2>
            </div>
            <div className="btnUpdate" style={{padding:'0 10px 5px 30px'}}>
              <button style={{height:'50px',borderRadius:'10px'}}>MODIFIER LA LISTE DES PRODUITS PERSONNALISEE</button>
            </div>
          </div>
          <div className="discutionContaint" style={{overflowY:'scroll',height:'585px'}}>
              <div className="sender">

              </div>
              <div className="receiver">
                
              </div>
          </div>
          <div className="inputSender" style={{height:'50px',padding:'5px',margin:'0',display:'grid',gridTemplateColumns:'70px 1fr 30px',alignItems:'center',gap:'10px',borderTop:'1px solid silver',alignItems:'center'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-fill"  style={{backgroundColor:'blue',borderRadius:'20/2',padding:'10px'}} viewBox="0 0 16 16">
  <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
  <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
            <input type="text" name="" id="msg"  style={{height:'30px',borderRadius:'10px'}} />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16" style={{backgroundColor:'red',borderRadius:'20/2',padding:'5px'}} onClick={handlerSubmit}>
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
          </div>
      </div>
    </div>
  )
}

export default Chats
