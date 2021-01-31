import getData from '../controller'
import { InputAdornment } from '@material-ui/core';
import Cards from './cards';

console.log(getData);

function Body() {
  return (<>
     <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row tm-mb-90 tm-gallery">
            {getData.map(item => {
                console.log(item.id);
                return (
                    <Cards 
                    alt_description = {item.alt_description}
                    urls = {item.urls.regular}
                    likes = {item.likes}
                    author = {item.user.first_name+' '+item.user.last_name}
                    />
                 
                )
           
               
            })}

{/* <h1>sdfss</h1> */}
          
         </div> 
     </div>
  </>   
  );
}

export default Body;
