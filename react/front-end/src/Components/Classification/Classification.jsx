import React from 'react';


const Classification = () => {
    document.title = "Movie Classification"

    return( 

        <> 
        <body style={{marginLeft: "9%", MarginRight: "auto"}}>
        <h1> Age Rating and Classification</h1>

        <p class="heading"> Our Cinema follows a strict age rating classification for its films under the BFFC. You can visit their <a href="https://www.bbfc.co.uk"> website   </a> here!
        With that in mind, for entry to age-restricted films proof of age is an essential requirement. Sorry!
        </p>

        
        <div class="container"> 
           <div class="img-col"></div>
              <img src={"https://images.savoysystems.co.uk/global/images/bbfc/lrg/U.png"} alt="universal logo" id="universal-logo" /> 

           <div class ="text-col"> </div>
           <p> A U film is suitable for all ages. Anyone can watch it, even your dog!</p>
           
           
        </div>
        <div class ="container">
            <div class="img-col"></div>
              <img src={"https://www.odeon.co.uk/media/4ctbvgsp/bbfc-pg_rgb-200px.png"} alt="pg logo" id="pg-logo"/>

            <div class="text-col"> </div>  
            <p> Suitable for general viewing and unacompannied children may watch, although parents are responsible for deciding the content that their child is viewing. </p>


        </div>
        <div class="container">
            <div class="img-col"></div>
               <img src={"https://www.odeon.co.uk/media/ik2h1go3/bbfc-12a_rgb-200px.png"} alt ="12A logo" id="12a-logo"/>

            

            <div class="text-col"></div>
            <p> Contains content that is generally unsuitable for young children. No one under 12 may view a 12A rated film unless uncompannied by an adult.</p>

        </div>
        <div class="container"> 
            <div class="img-col"></div>
              <img src={"https://vignette.wikia.nocookie.net/rating-system/images/8/84/BBFC_12.svg/revision/latest/scale-to-width-down/216?cb=20161112011405"} alt="12 logo" id="12-logo"/>

            
            <div class="text-col"></div>
               <p> Contains content that is generally unsuitable for young children. No one under 12 may view a 12 rated film even if with an adult. That won't work this time!</p>

        
        </div>    

        <div class="container"> 
          <div class="img-col"></div>
            <img src={"https://www.odeon.co.uk/media/0daldexe/bbfc-15_rgb-200px.png"} alt="15 logo" id="15-logo" />
            
     


          <div class="text-col"></div>  
          <p> No one younger than 15 may see a 15 film in a cinema. Even if you look at little older...</p>
        
        
        </div>
        <div class="container">
            <div class="img-col"></div>
              <img src={"https://www.odeon.co.uk/media/54rb0heh/bbfc-18_rgb-200px.png"} alt="18 logo" id="18-log0" />



           <div class="text-col"></div>
           <p> No one younger than 18 may see an 18 film in a cinema. Even if you are old enough check if you've got the stomache for it!</p>




        </div>
        <div class="container">
            <div class="img-col"></div>
              <img src={"https://www.odeon.co.uk/media/zmgkvgzl/bbfc-tbc-generic_rgb-200px.png"} alt="TBC logo" id="TBC-log0" />
            



           <div class="text-col"></div>
           <p> Some movie classifications are yet to be confirmed. So do keep your eyes peeled.</p>




        </div>
        </body>
        
        




            
        </>



    )}




   
    














export default Classification;









