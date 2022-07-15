import { Fav, Tweet, User } from '@prisma/client';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import useMutate from '../../lib/client/useMutate';

interface TweetWithFavUser extends Tweet {
    fav: Fav;
    writer: User;
}

interface IDetailResult {
    ok: boolean;
    tweetInfo: TweetWithFavUser
    isLiked: boolean;
}


const TweetDetail = () => {
    const router = useRouter();
    const { data, mutate } = useSWR<IDetailResult>(router.query.id ? `/api/tweet/${router.query.id}/detail` : "");
    const [toggleFav] = useMutate(router.query.id ? `/api/tweet/${router.query.id}/fav` : "");

    const onBackClick = () => {
        router.back();
    }

    const onFavClick = () => {
        toggleFav({});
        mutate(prev => ({ ...prev!, isLiked: !prev?.isLiked }), false);
    }

    return (
        <main className="border-r-[1px] md:ml-48 ml-24 md:w-[37.5rem] w-96">
            <div className="bg-[rgba(255,255,255,0.9)] backdrop-blur-sm  flex  px-5 py-3 justify-start items-center fixed top-0 md:w-[37.5rem] w-96">
                <div onClick={onBackClick} className="mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                </div>
                <div className="text-xl font-semibold">NextWeet</div>
            </div>
            <div className="mt-20 grid grid-cols-[2fr_11fr] p-4 border-[1px]">
                <div className="w-10 h-10 rounded-full bg-blue-600" />
                <div className="space-y-3">
                    <div className="space-y-2">
                        <div>
                            <span className="font-semibold">{data?.tweetInfo?.writer.name}</span>
                            <span className="text-gray-600 ml-3">@{data?.tweetInfo?.writer.email.split("@")[0]}</span></div>
                        <p>{data?.tweetInfo?.message.split("\n").map((item: string) => <p>{item}</p>)}</p>
                    </div>
                    <ul className="flex text-gray-600 text-sm justify-between">
                        <li className="flex space-x-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>2</span>
                        </li>
                        <li className="flex space-x-2 cursor-pointer">
                            <button onClick={onFavClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={data?.isLiked ? "text-red-500 h-5 g-5 fill-red-500" : "text-gray-600 h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>

                        </li>
                        <li className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className={"text-gray-600 h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )


}


export default TweetDetail;