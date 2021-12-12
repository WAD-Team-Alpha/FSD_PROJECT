import React from "react";
import { withStyles } from "@mui/styles";

import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import ChatSharpIcon from '@mui/icons-material/ChatSharp';
const styles = muiBaseTheme => ({
    btn: {
        marginLeft: 200,
    }
});

const imgLink = "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function Comment(classes) {
    return (

        <div className="container mt-2 ">
            <div><h1 className="text-light"> Comments</h1></div>
            <div className="d-flex justify-content-center row mt-5">
                <div className="col-md-12">
                    <div className="bg-light p-2 ">
                        <div className="d-flex flex-row align-items-start"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
                        <div className="mt-2 text-right ml-5"><Button style={{maxWidth: '110px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' , marginLeft:"40px"}} variant="contained" sx={4} endIcon={<SendIcon />}>Comment</Button></div>
                    </div>

                    <div className="d-flex flex-column comment-section mt-4">
                        <div className="bg-white p-2">
                            <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                            </div>
                            <div className="mt-2">
                                <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="d-flex flex-row fs-12">
                            <div className="like p-2 cursor"><a href="#" className="text-decoration-none text-dark"><ThumbUpIcon/><span className="ml-1">Like</span></a></div>
                                <div className="like p-2 cursor"><a href="#" className="text-decoration-none text-dark "><ChatSharpIcon/><span className="ml-1">Comment</span></a></div>
                                <div className="like p-2 cursor"><a href="#"  className="text-decoration-none text-dark"><ReplyIcon xs={2}/><span className="ml-1">Share</span></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column comment-section mt-4">
                        <div className="bg-white p-2">
                            <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                            </div>
                            <div className="mt-2">
                                <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="d-flex flex-row fs-12">
                            <div className="like p-2 cursor"><a href="#" className="text-decoration-none "><ThumbUpIcon/><span className="ml-1">Like</span></a></div>
                                <div className="like p-2 cursor"><a href="#" className="text-decoration-none text-dark "><ChatSharpIcon/><span className="ml-1">Comment</span></a></div>
                                <div className="like p-2 cursor"><a href="#"  className="text-decoration-none text-dark"><ReplyIcon xs={2}/><span className="ml-1">Share</span></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column comment-section mt-4">
                        <div className="bg-white p-2">
                            <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                            </div>
                            <div className="mt-2">
                                <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="d-flex flex-row fs-12">
                            <div className="like p-2 cursor"><a href="#" className="text-decoration-none text-dark"><ThumbUpIcon/><span className="ml-1">Like</span></a></div>
                                <div className="like p-2 cursor"><a href="#" className="text-decoration-none text-dark "><ChatSharpIcon/><span className="ml-1">Comment</span></a></div>
                                <div className="like p-2 cursor"><a href="#"  className="text-decoration-none text-dark"><ReplyIcon xs={2}/><span className="ml-1">Share</span></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column comment-section mt-4">
                        <div className="bg-white p-2">
                            <div className="d-flex flex-row user-info"><img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                <div className="d-flex flex-column justify-content-start ml-2"><span className="d-block font-weight-bold name">Marry Andrews</span><span className="date text-black-50">Shared publicly - Jan 2020</span></div>
                            </div>
                            <div className="mt-2">
                                <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="d-flex flex-row fs-12">
                            <div className="like p-2 cursor"><a href="#" className="text-decoration-none "><ThumbUpIcon/><span className="ml-1">Like</span></a></div>
                                <div className="like p-2 cursor"><a href="#" className="text-decoration-none text-dark "><ChatSharpIcon/><span className="ml-1">Comment</span></a></div>
                                <div className="like p-2 cursor"><a href="#"  className="text-decoration-none text-dark"><ReplyIcon xs={2}/><span className="ml-1">Share</span></a></div>
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
