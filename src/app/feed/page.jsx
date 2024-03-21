'use client';
import { IconHeart, IconMessage, IconShare, IconTrash } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Feed = () => {

    const [postArray, setPostArray] = useState([]);

    const fetchPostData = () => {

        fetch('http://localhost:5000/post/getall')
            .then((response) => {
                console.log(response.status);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setPostArray(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchPostData();
    }, []);

    const deletePost = (id) => {
        fetch('http://localhost:5000/post/delete/' + id, {
            method: 'DELETE'
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log('Post Deleted');
                    fetchPostData();
                    toast.success("Post Deleted Successfully");
                }
            }).catch((err) => {
                console.log(err);
            });

    }
    const updatePost = (id, dataToUpdate) => {
        fetch('http://localhost:5000/post/update/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToUpdate)
        })
        .then((response) => {
            if (response.status === 200) {
                fetchPostData();
                toast.success('Post was Liked');
            }
        }).catch((err) => {
            console.log(err);
        });
    }     


    return (
        <div>
            <div className='container py-4'>
                <h1 className='text-center'>Trending Posts</h1>
                <hr />
                <div className='col-md-6 mx-auto'>
                    {
                        postArray.map((post) => <div key={post._id} className='card shadow mb-5'>
                            <div className="card-header d-flex justify-content-between">
                                <h4>{post.title}</h4>
                                <button className='btn btn-danger' onClick={() => (deletePost(post._id))}>
                                    <IconTrash></IconTrash></button>
                            </div>
                            <img onDoubleClick={() => updatePost(post._id, {likes : post.likes+1})} className='card-img-top' src={post.image} alt="" />
                            <div className="card-footer">
                                <div className='d-flex g-4 '>
                                    <button className='btn btn-outline-warning w-100 ' onClick={()=> updatePost(post._id, {likes : post.likes+1})}>{post.likes} <IconHeart></IconHeart> </button>
                                    <button className='btn btn-outline-warning w-100 '>{post.shares} <IconShare></IconShare> </button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Feed;