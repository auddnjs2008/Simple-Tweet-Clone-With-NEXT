import Link from 'next/link';
import Post from './Post';

export interface ITweet {
    id: number;
    like: number;
    message: string;
    userId: number;
    writer: { name: string, email: string };
}


interface IPostBox {
    tweets: ITweet[]
}


const PostBox = ({ tweets }: IPostBox) => {

    return (
        <ul className="">
            {tweets.map(tweet => <Link href={`/tweet/${tweet.id}`}><a><Post tweet={tweet}></Post></a></Link>)}
        </ul>
    )
}

export default PostBox;