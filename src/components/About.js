import React, { useState } from 'react'

export default function About() {
    const [myStyle, changestyle] = useState({
        backgroundColor: "black",
        color: 'white',
    })
    const [enablbtn, chgbtn] = useState("enable dark mode")



    const chageStyle = () => {
        if (myStyle.color === 'white') {
            changestyle({
                backgroundColor: 'white',
                color: 'black'
            })
            chgbtn("enable Darkmode")
        } else {
            changestyle({
                backgroundColor: "black",
                color: 'white',
            })
            chgbtn("enable Lightmode")
        }
    }
    return ( 
    <div className = "container-fluid" style = { myStyle } >
         < h1 className = "container-fluid my-2 py-2" > About Us </h1> 
           <div className = "accordion" id = "accordionExample" >
              <div className = "accordion-item" >
                <h2 className = "accordion-header" id = "headingOne" >
                 <button style = { myStyle} className = "accordion-button" type = "button" data-bs-toggle = "collapse" data-bs-target = "#collapseOne" aria-expanded = "true"aria-controls = "collapseOne" >
                      Accordion Item #1
                  </button>
               </h2>
               <div id= "collapseOne" style = { myStyle } className = "accordion-collapse collapse show" aria-labelledby = "headingOne" data-bs-parent = "#accordionExample" >
                  <div className = "accordion-body" >
                       <strong > This is the first item 's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'
                        s also worth noting that just about any HTML can go within the < code > .accordion - body </code>, though the transition does limit overflow. 
                  </div> 
                </div> 
              </div> 
               <div className = "accordion-item" >
                  <h2 className = "accordion-header" id = "headingTwo" >
                    <button className = "accordion-button collapsed" style = { myStyle }type = "button" data-bs-toggle = "collapse" data-bs-target = "#collapseTwo" aria-expanded = "false" aria-controls = "collapseTwo" >
                     Accordion Item #2
                    </button>
                  </h2>
                  <div id= "collapseTwo" style = { myStyle } className = "accordion-collapse collapse" aria-labelledby = "headingTwo" data-bs-parent = "#accordionExample" >
                    <div className = "accordion-body" >
                       <strong > This is the second item 's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'
                            s also worth noting that just about any HTML can go within the < code > .accordion - body </code>, though the transition does limit overflow. 
                      </div> 
                    </div> 
                  </div> 
                  <div className = "accordion-item" >
                  <h2 className = "accordion-header" id = "headingTwo" >
                    <button className = "accordion-button collapsed" style = { myStyle }type = "button" data-bs-toggle = "collapse" data-bs-target = "#collapseTwo" aria-expanded = "false" aria-controls = "collapseTwo" >
                     Accordion Item #2
                    </button>
                  </h2>
                  <div id= "collapseTwo" style = { myStyle } className = "accordion-collapse collapse" aria-labelledby = "headingTwo" data-bs-parent = "#accordionExample" >
                    <div className = "accordion-body" >
                       <strong > This is the second item 's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It'
                            s also worth noting that just about any HTML can go within the < code > .accordion - body </code>, though the transition does limit overflow. 
                      </div> 
                    </div> 
                  </div> 
               </div> 
               <button className = "btn btn-dark text-light mt-3" onClick = { chageStyle } > { enablbtn } </button> 
             </div>
    )
}