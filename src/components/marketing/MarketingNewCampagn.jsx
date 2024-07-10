import React, { useState } from 'react'

const MarketingNewCampagn = () => {
  const [step,setStep]=useState(1)
  const handleNext=()=>{
    setStep(step+1)
  };
  const handlePreview=()=>{
    setStep(step-1)
  };
  return (
    <div className='newMarketingCampagnContainer'>
      {step===1 &&(
        <div className="newMarketingCampagnContainerStepOneContainer">
          <div className="stepOneMokup">

          </div>
          <div className="stepOneRightSection">
            <div className="stepOneRightSectionHeader">
                <h2>Step 1 of 3</h2>
                <div className="progressBar" style={{display:'grid',gridTemplateColumns:'repeat(3,150px)'}}>
                  <div className="progressBarLeft" style={{backgroundColor:'blue'}}>1</div>
                  <div className="progressBarMidle">2</div>
                  <div className="progressBarRight">3</div>
                </div>
            </div>
            <div className="stepOneRightSectionMain">
                <div className="campagnTitleContainer">
                  <p>Titre de la campagne</p>
                  <input type="text" name='titre'/>
                </div>
                <div className="campagnMessageContainer">
                  <p>
                    Message de la campagne 
                    <span style={{color:'blue'}}>*</span>
                  </p>
                  <textarea name="message" id="" cols="30" rows="10" style={{resize:'none'}}></textarea>
                </div>
                <div className="campagnDeadlineContainer">
                  <p>Date limite de la campagne</p>
                </div>
            </div>
            <div className="stepOneRightSectionFooter">
                  <button onClick={handleNext}>Suivant</button>
            </div>
          </div>
        </div>
      )}
      {step===2 &&(
        <div className="newMarketingCampagnContainerStepOneContainer">
          <div className="stepOneMokup">

          </div>
          <div className="stepOneRightSection">
            <div className="stepOneRightSectionHeader">
                <h2>Step 2 of 3</h2>
                <div className="progressBar" style={{display:'grid',gridTemplateColumns:'repeat(3,150px)',textAlign:'center'}}>
                  <div className="progressBarLeft" style={{backgroundColor:'blue'}}>1</div>
                  <div className="progressBarMidle" style={{backgroundColor:'blue'}}>2</div>
                  <div className="progressBarRight">3</div>
                </div>
            </div>
            <div className="stepOneRightSectionMain">
                <div className="campagnTitleContainer">
                  <p>Titre de la campagne</p>
                  <input type="text" name='titre'/>
                </div>
                <div className="campagnMessageContainer">
                  <p>
                    Message de la campagne 
                    <span style={{color:'blue'}}>*</span>
                  </p>
                  <textarea name="message" id="" cols="30" rows="10" style={{resize:'none'}}></textarea>
                </div>
                <div className="campagnDeadlineContainer">
                  <p>Date limite de la campagne</p>
                </div>
            </div>
            <div className="stepOneRightSectionFooter">
                <button onClick={handlePreview}>Précedent</button>
                <button onClick={handleNext}>Suivant</button>
            </div>
          </div>
        </div>
      )}
      {step===3 &&(
        <div className="newMarketingCampagnContainerStepOneContainer">
          <div className="stepOneMokup">

          </div>
          <div className="stepOneRightSection">
            <div className="stepOneRightSectionHeader">
                <h2>Step 3 of 3</h2>
                <div className="progressBar" style={{display:'grid',gridTemplateColumns:'repeat(3,150px)'}}>
                  <div className="progressBarLeft" style={{backgroundColor:'blue'}}>1</div>
                  <div className="progressBarMidle" style={{backgroundColor:'blue'}}>2</div>
                  <div className="progressBarRight" style={{backgroundColor:'blue'}}>3</div>
                </div>
            </div>
            <div className="stepOneRightSectionMain">
                <div className="campagnTitleContainer">
                  <p>Titre de la campagne</p>
                  <input type="text" name='titre'/>
                </div>
                <div className="campagnMessageContainer">
                  <p>
                    Message de la campagne 
                    <span style={{color:'blue'}}>*</span>
                  </p>
                  <textarea name="message" id="" cols="30" rows="10" style={{resize:'none'}}></textarea>
                </div>
                <div className="campagnDeadlineContainer">
                  <p>Date limite de la campagne</p>
                </div>
            </div>
            <div className="stepOneRightSectionFooter">
                <button onClick={handlePreview}>Précedent</button>
                <button >Envoyer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MarketingNewCampagn