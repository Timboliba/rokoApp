import React from 'react'

const MarketingSent = () => {
  return (
    <div className='marketingSentContainer'>
      <div className="marketingSentContainerHeader" style={{display:'flex',gap:'5px',alignItems:'center'}}>
        <h1>Communication Passer</h1>
        <section className="marketingSentConatinerSelect" style={{display:'flex',alignItems:'center'}}>
          <span>Sent by</span>
          <select name="sentBy" id="" style={{border:'none'}}>
          <option value="1">1</option>
        </select>
        </section>
      </div>
      <div className="marketingSentContainerCards">
        <div className="marketingSentContainerCardItem">
          <div className="marketingSentContainerCardItemLeft">
            <div className='itemSentDate'>
              <p>You sent on 9/21/2023 10:20AM</p>
            </div>
            <div className='itemDescriptionOfProduct'>
                <div className="picture">
                  <img src="" alt="Picture" srcset="" />
                </div>
                <div className="descriptionDetails">
                  <h1>Kumquats</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Provident labore officia, harum ratione fugit!
                  </p>
                </div>
            </div>
            <div className='itemEtiquette'>
              <div className="itemETiquette">
                <p>1Produit(s)</p>
              </div>
              <div className="itemETiquette">
                1 image |attachement
              </div>
            </div>
          </div>
          <div className="marketingSentContainerCardItemMidle"></div>
          <div className="marketingSentContainerCardItemRight"></div>
        </div>
        <div className="marketingSentContainerCardItem">
          <div className="marketingSentContainerCardItemLeft">
            <div className='itemSentDate'>
              <p>You sent on 9/21/2023 10:20AM</p>
            </div>
            <div className='itemDescriptionOfProduct'>
                <div className="picture">
                  <img src="" alt="Picture" srcset="" />
                </div>
                <div className="descriptionDetails">
                  <h1>Kumquats</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Provident labore officia, harum ratione fugit!
                  </p>
                </div>
            </div>
            <div className='itemEtiquette'>
              <div className="itemETiquette">
                <p>1Produit(s)</p>
              </div>
              <div className="itemETiquette">
                1 image |attachement
              </div>
            </div>
          </div>
          <div className="marketingSentContainerCardItemMidle"></div>
          <div className="marketingSentContainerCardItemRight"></div>
        </div>
        
      </div>
    </div>
  )
}

export default MarketingSent