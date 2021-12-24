import "./newprofile.css";
import Avatar from "@mui/material/Avatar";
import { Container, Box } from "@mui/material";



function Profile() {
  return (
    <div class="maincontainer">
      <div class="container-md ">
        <Container maxWidth="sm" class="profilecontainer">
          <Box
            sx={{
              bgcolor: "white",
              height: "120px",
              borderRadius: "0.5em",
              paddingTop: "1em",
            }}
          >
            <div class="container">
              <div class="row justify-content-start">
              
                <div class="col-3">
                  <Avatar
                    sx={{ width: "60px", height: "60px" }}
                   
                  />
                </div>
                <div class="col-7">
                  <span class="uname">Username</span>
                  
                    
                  <div class="row justify-content-center">
                    <div class="col">
                      <span class="mainfollowers">
                        <b>Followers</b>
                      </span>
                    </div>
                    <div class="col">
                      <span class="mainfollowing">
                        <b>Following</b>
                      </span>
                    </div>
                  </div>
                  <div class="row justify-content-end">
                    <div class="col">
                      <span class="followercount">0</span>
                    </div>
                    <div class="col">
                      <span class="followingcount">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Container>
        <br />
        <Container maxWidth="sm" class="infocontainer">
          <Box sx={{ bgcolor: "white", height: "650px", paddingTop:"1em", borderRadius:"0.5em"}} >
              <div class="row">
                <span class="genres">Intrested Geners</span>
                <hr/>
                <div class="col" style={{marginLeft:"1.2em"}}>
                    Technology, Coding
                </div>
                <br/><br/>
                <span class="email">Email</span>
                <hr/>
                <div class="col" style={{marginLeft:"1.2em"}}>
                   group8@gmail.com
                </div>
                <br/><br/>
                <span class="bio">Bio</span>
                <hr/>
                <div class="col" style={{marginLeft:"1.2em", overflowY:"auto"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis sed velit eget fringilla. Morbi tincidunt, ipsum hendrerit lobortis maximus, nisl lacus fringilla sapien, quis sollicitudin justo lorem ut purus. Sed odio neque, accumsan molestie urna sed, pretium viverra orci. Curabitur nec vulputate felis. Nunc et venenatis massa, non condimentum tortor. Proin posuere ex ac cursus semper. Fusce quis commodo elit. Maecenas egestas vestibulum odio, non semper diam. Sed ut dolor lobortis, interdum quam tincidunt, blandit leo. Donec quis libero vitae mi convallis interdum a feugiat sem. Nam nec pellentesque arcu.
                </div>
                <br/><br/>
            

                
              </div>
          </Box>
          <button type="button" class="btn btn-success">Follow</button>

          
          
          
        </Container>
      </div>
    </div>
  );
}

export default Profile;
