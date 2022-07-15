import { ITweet } from './PostBox';

interface IPost {
    tweet: ITweet;
}

const Post = ({ tweet }: IPost) => {

    return (
        <li className="grid grid-cols-[2fr_11fr] p-4 border-b-[1px]">
            <div className="w-10 h-10 rounded-full bg-blue-600" />
            <div className="space-y-3">
                <div>
                    <div>
                        <span className="font-semibold">{tweet.writer.name}</span>
                        <span className="text-gray-600 ml-3">@{tweet.writer.email.split("@")[0]}</span></div>
                    <p>{tweet.message}</p>
                </div>
                <ul className="flex text-gray-600 text-sm justify-between">
                    <li className="flex space-x-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>2</span>
                    </li>

                    <li className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                    </li>
                </ul>
            </div>

        </li>
    )
}

export default Post;