import React from 'react'
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
      <div className="individualDiscussion" style={{backgroundColor:'red'}}>
          <div className="header" style={{display:'grid',gridTemplateColumns:'55% 1fr',alignItems:'center'}}>
            <div className="nameOfuserReciever" style={{display:'flex',alignItems:'center',paddingBottom: '30px'}}>
              <img src={User} alt="" srcset="" style={{height:'50px',width:'50px',borderRadius:'50%'}}/>
              <h2  style={{padding:'0',margin:'0'}}>Bistro Giovanni</h2>
            </div>
            <div className="btnUpdate" style={{padding:'0 10px 5px 30px'}}>
              <button style={{height:'50px',borderRadius:'10px'}}>MODIFIER LA LISTE DES PRODUITS PERSONNALISEE</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Chats
