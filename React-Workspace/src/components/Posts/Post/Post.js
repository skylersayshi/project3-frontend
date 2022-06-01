import React, {useEffect} from 'react'
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from '@heroicons/react/solid'
import { BellIcon, FireIcon, HomeIcon, MenuIcon, TrendingUpIcon, UserGroupIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, updatePost } from '../../../actions/posts';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Post = ({post, currentId, setCurrentId}) => {
  
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () =>{
    if (post?.likes?.length > 0){
      return post.likes.find((like)=> like === (user?.result?._id))
      ?(<div>{post.likes.length > 2 ? `You and ${post.likes.length-1} others` : `${post.likes.length} like${post.likes.length>1?'s':''}`}</div>)
      :<div>{post.likes.length} {post.likes.length ===1 ? 'Like' : 'Likes'}</div>
    }
    return <div>Like</div>
  }

  return (
    <div>
      
                    <li key={post.id} className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                      <article aria-labelledby={'question-title-' + post.id}>
                        <div>
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src={post.profilePic} alt="" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                <a href={post.id}  className="hover:underline">
                                  {post.name}
                                </a>
                              </p>
                              <p className="text-sm text-gray-500">
                                <a href={post.id} to={post.id} className="hover:underline">
                                  <time dateTime={post.createdAt}>{moment(post.createdAt).fromNow()}</time>
                                </a>
                              </p>
                            </div>
                            <div className="flex-shrink-0 self-center flex">
                            {(user?.result?._id === post?.creator) && (
                              <Menu as="div" className="relative inline-block text-left">
                                <div>
                                  <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                                    <span className="sr-only">Open options</span>
                                    <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                
                                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
{/* Edit Button */}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                              'flex px-4 py-2 text-sm'
                                            )}
                                            onClick={()=>setCurrentId(post._id)}
                                          >
                                            <StarIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span>Edit Post</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                              'flex px-4 py-2 text-sm'
                                            )}
// Delete Button
                                            onClick={()=>dispatch(deletePost(post._id))}
                                          >
                                            <CodeIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span>Delete Post</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                              'flex px-4 py-2 text-sm'
                                            )}
                                          >
                                            <FlagIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <span>Report content</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                
                                </Transition>
                              </Menu>
                              )}
                            </div>
                          </div>
                          <h2 id={'question-title-' + post.id} className="mt-4 text-base font-medium text-gray-900">
                            {post.title}
                          </h2>
                        </div>
                        <div
                          className="mt-2 text-sm text-gray-700 space-y-4"
                          dangerouslySetInnerHTML={{ __html: post.message }}
                        />
                        <img
                          className="mx-auto mt-4 text-sm text-gray-700 space-y-4 shadow  sm:rounded-lg"
                          src={post.selectedFile ? post.selectedFile : null}
                        />
                        <div className="mt-6 flex justify-between space-x-8">
                          <div className="flex space-x-6">
                            <span className="inline-flex items-center text-sm">
                              <button disabled={!user?.result} onClick={()=>dispatch(likePost(post._id))}type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900"><Likes/></span>
                                <span className="sr-only">likes</span>
                              </button>
                            </span>
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">{post.tags.map((tag) => `#${tag} `)}</span>
                                <span className="sr-only">tags</span>
                              </button>
                            </span>
                            {/* <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <EyeIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">{question.views}</span>
                                <span className="sr-only">views</span>
                              </button>
                            </span> */}
                          </div>
                          <div className="flex text-sm">
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ShareIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">Share</span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </article>
                    </li>
                  
    </div>
  )
}

export default Post