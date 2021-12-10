import React from "react";
import ReactDOM from "react-dom";

import { Divider, Avatar, Grid, Paper } from "@material-ui/core";

import { withStyles } from "@mui/styles";
import { classNameNames } from "@emotion/react";



const styles = muiBaseTheme => ({
btn:{
    marginLeft:200,
}
});

const imgLink = "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function Comment(classes) {
    return (
          
        <div className="container mt-2 ">
             <div><h1 className="text-light"> Comments</h1></div>
    <div className="d-flex justify-content-center row mt-5">
        <div className="col-md-12">
        <div className="bg-light p-2">
                    <div className="d-flex flex-row align-items-start"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
                    <div className="mt-2 text-right"><button className="btn btn-primary btn-sm shadow-none " className={classes.btn} type="button">Post comment</button></div>
                </div>

            <div className="d-flex flex-column comment-section mt-4">
                <div className="bg-white p-2">
                    <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                        <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                    </div>
                    <div className="mt-2">
                        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="d-flex flex-row fs-12">
                        <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                        <div className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>
                        <div className="like p-2 cursor"><i className="fa fa-share"></i><span className="ml-1">Share</span></div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column comment-section mt-4">
                <div className="bg-white p-2">
                    <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                        <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                    </div>
                    <div className="mt-2">
                        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="d-flex flex-row fs-12">
                        <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                        <div className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>
                        <div className="like p-2 cursor"><i className="fa fa-share"></i><span className="ml-1">Share</span></div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column comment-section mt-4">
                <div className="bg-white p-2">
                    <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                        <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                    </div>
                    <div className="mt-2">
                        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="d-flex flex-row fs-12">
                        <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                        <div className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>
                        <div className="like p-2 cursor"><i className="fa fa-share"></i><span className="ml-1">Share</span></div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column comment-section mt-4">
                <div className="bg-white p-2">
                    <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                        <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                    </div>
                    <div className="mt-2">
                        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="d-flex flex-row fs-12">
                        <div className="like p-2 cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                        <div className="like p-2 cursor"><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>
                        <div className="like p-2 cursor"><i className="fa fa-share"></i><span className="ml-1">Share</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

const Diso = withStyles(styles)(Comment);
export default Diso
