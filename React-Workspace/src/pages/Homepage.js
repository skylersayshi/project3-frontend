
import { Fragment, useState, useEffect } from 'react'

import { getPosts } from '../actions/posts'
import { useDispatch } from 'react-redux'
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
import Posts from '../components/Posts/Posts';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: true },
  { name: 'Communities', href: '/communities', icon: UserGroupIcon, current: false },
]

const communities = [
  { name: 'Fitness', href: 'communities' },
  { name: 'Recipes', href: 'communities' },
  { name: 'Sports', href: 'communities' },
  { name: 'Health', href: 'communities' },
  { name: 'Sleep', href: 'communities' },
  { name: 'Meditation', href: 'communities' },
  { name: 'Tips', href: 'communities' },
  { name: 'Yoga', href: 'communities' },
]
const tabs = [
  { name: 'Recent', href: '#', current: true },
  { name: 'Most Liked', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Homepage() {


  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(()=>{
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const posts = useSelector((state)=>state.posts);

  const [postOrderRecent, setPostOrderRecent] = useState(true);
  const [activeTab, setActiveTab] = useState(true);
  const newSort = () => {
    setPostOrderRecent(!postOrderRecent)
    setActiveTab(!activeTab)
  }

  let sortedPosts = []
    for(let i = posts.length-1; i >= 0; i--){
      sortedPosts.push(posts[i])
    }    

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts;

  if(postOrderRecent === true){
    currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  } else {
    const rankedPosts = sortedPosts.sort((a,b) => b.likes.length - a.likes.length)
    currentPosts = rankedPosts.slice(indexOfFirstPost, indexOfLastPost);}

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="min-h-full">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        
        <div className="py-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
              <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
                <div className="pb-8 space-y-1">
                  {navigation.map((item) => (
                    <Link to={item.href}
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50',
                        'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                          'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="pt-10">
                  <p
                    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    id="communities-headline"
                  >
                    My communities
                  </p>
                  <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
                    {communities.map((community) => (
                      <Link to="/communities"
                        key={community.name}
                        className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                      >
                        <span className="truncate">{community.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
            <main className="lg:col-span-9 xl:col-span-6">
              <div className="px-4 sm:px-0">
                <div className="hidden sm:block">
                  <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                    {/* {tabs.map((tab, tabIdx) => ( */}
                      <a
                        
                        key="recent"
                        onClick={newSort}
                        // aria-current={tab.current ? 'page' : undefined}
                        className={classNames(
                          activeTab===true ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                          'rounded-l-lg',
                          'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                        )}
                      >
                        <span>Recent</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                          activeTab===true ? 'bg-indigo-500' : 'bg-transparent',
                            'absolute inset-x-0 bottom-0 h-0.5'
                          )}

                        />
                      </a>

                      <a
                        
                        key="mostliked"
                        onClick={newSort}
                        // aria-current={tab.current ? 'page' : undefined}
                        className={classNames(
                          activeTab===false ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                          'rounded-r-lg',
                          'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                        )}
                      >
                        <span>Most Liked</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            activeTab===false ? 'bg-indigo-500' : 'bg-transparent',
                            'absolute inset-x-0 bottom-0 h-0.5'
                          )}
                        />
                      </a>
                    {/* ))} */}
                  </nav>
                </div>
              </div>
{/* post */}
            
              <div className="mt-4">
                <h1 className="sr-only">Recent</h1>
                <ul role="list" className="space-y-4">
                  <Posts currentId={currentId} setCurrentId={setCurrentId} posts={currentPosts} />
                  <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
                  
                </ul>
              </div>
            
            </main>
            
          </div>
        </div>
      </div>
    </>
  )
}
