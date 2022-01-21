import React from 'react'
import './Cards.css';
function Cards() {
    return (
        
            
        <div  className='cardsbody'>
            
            <div className="container">
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAAwMDCTk5OWlpbc3NyGhoZLS0t3d3fi4uIeHh50dHT8/PxRUVF6enpUVFSNjY3Pz89GRkb19fVISEgsLCy/v7+bm5sjIyM7OzsWFhZgYGDw8PBbW1tvb2/GxsaNzirGAAAExElEQVR4nO2dcV/aMBCGKaDoEGVO1G06v/+33KC0SdpLe0mT3LV7n79GxdDnl3u5KwhbrQAAAABQnFfpE8jNttpIn0JetlW1bMVNdeYofRr52FY1i93FRnCxipuqWraiLbjILG4rl8XtYldwcYqbnuDCCtUS/LnIXbRKdL961Kv49Oubj+r70C86gqvVnVrFFyJLDUOGVoneXQ5Yu6gri7s4w84OntG6i3GGhKBaxSjDXonW6Hy6iTH0CCrNYoQhWaI1Ggs13HBAUKVisKG3RGv0FWqooSVodvDh8aH9t7pdDDQkS/ThqTroVQwzpDN4+HdzZ24qUwwypDP4fDnwbA7oymKIIV2ih+shrYUaYEiX6FN78GAOalLkG9Ilav/+izmsqFDZhuOCPkXhXeQa+tqEi8YsMg39baKjaH6oRXHAcP3R3utojvbahIu+puE3PP1o78TdwTM7bYXqNTyZHRxrEy7asugzXJsdJIdtzw5edtHcSYOix5AWHMlgg64s0oZjGey1CRdVhUoaRmewVTR3FVekDEdLdOhl5BpFhUoYnsaeZIamhIYXU6jCA1z/bMdKdCSDDWqy2DMczaC/TXQUza+IKnYNJ7UJFyVZ7BiOtgnuDp7RMcC5hpPbhIuKLDqGo6Ma51nUxhrgxJ5R7XNO0Ae7KMiiZThxVKORL1RjmDiDraJZQEaxNcxQojXShdoYRl7RcxBuGlfDRKMajWwWdyzBCTt4RvSq/2KYcFSjkczi2TDpqEYjWKi7bG1Ci+JuvERDRzUasbdtnukr+uSCvizm38XfOduEi1ChmkcNfeE3QtEsuy+oSAgmbBMuogNcjkbfR3CAy9cmXMSaRv4MNggNcCUy2CCSxVyjGo1AoZbKYKtoHqSMYt5JhqJwoaZ52TCMom/b5B7VaApmsUyjJxTNg+VVLNkmXAplsWybcCkywJVuEy4FslhuVKPJ/rZN2le2Y8icRZk24ZK1UGUz2Cqah06tKF+iNdkKld7BvKMaTaamoSGDDVmyKDWq0WS46pcb1WiSZ1FyVKNJXKg62oRLUsXyV/QcEr5to6UPdkn2to2mNuGSqFA1ZrAhyQCnrU24JGgauhp9n8kDnOYSrZmYRekreg6TBjjdGWyYkEV9oxpNdKHqz2BDZNPQOarRRA1wcxKM+ri03lGNJjiL2ht9n8As8j+krIegpjGXNuESMMDNp024sLP4an46kww20AMc8b3h7R6quqLnQGWRLNNrL7R28FPqnAP5NKd8/UtGz7Pp5bnU/tqxk+RpB3Cyzvmi6J1rtp2vHVtLnzqTtX3Sj4Mt//jHuTlLw9U+4OWMeRqGAEMtwBCG+oEhDPUDQxjqB4Yw1A8MYagfGMJQPzCMM9zfchl67+PAXmU/sEoew3v2Km8Dq7yxV7kvbnjDXqX/n8oZtuxVbmAYBQx5wJAHDOOAIQ8Y8oBhHDDkAUMeMIwDhjxgyAOGccCQBwx5wDAOGPKAIQ8YxgFDHjDkAcM4YMgDhjzmanh7z+V1YBXNhmmAIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwvB/MHxPYrgZWCUN79GGbxsvxw/2Kl9H/zJp4H+qHwAAAAAAKOUv7JGAQN3NGzkAAAAASUVORK5CYII=" />
                    <h3>Maison</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>Vous décidez, vous choisissez, et nos intervenants appliquent vos instructions. Plutôt que de vous imposer quoi que ce soit, nous validons avec vous quelles sont les tâches ménagères que vous souhaitez.</p>
                    
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <img src="data:image/png;base64,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" />
                    <h3>Garde</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>Nous mettons tout en œuvre pour vous assurer la tranquillité pendant nos prestations de service.Vous êtes sûrs que votre enfant sera gardé par une personne digne de confiance, compétente et responsable.</p>
                    
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="face face1">
                  <div className="content">
                    <img src="https://previews.123rf.com/images/leremy/leremy1509/leremy150900014/45961706-soins-aux-personnes-%C3%A2g%C3%A9es-soins-infirmiers-old-folks-maison-de-retraite-centre-pictogramme.jpg" />
                    <h3>Séniors</h3>
                  </div>
                </div>
                <div className="face face2">
                  <div className="content">
                    <p>Personne agée a besoin de l'aide, infermier .. vous étes sur le bon chemin!</p>
                   
                  </div>
                </div>
              </div>
            </div>
      
              </div>
        
    )
}

export default Cards
