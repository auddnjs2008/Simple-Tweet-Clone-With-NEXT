import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import PostBox, { ITweet } from '../components/Post/PostBox'
import useMutate from '../lib/client/useMutate'
import useUser from '../lib/client/useUser'


interface ITweetForm {
  message: string;
}

interface ITweetsResult {
  ok: boolean;
  tweets: ITweet[];
}

const Home: NextPage = () => {

  const { user } = useUser();
  const { register, handleSubmit } = useForm<ITweetForm>();
  const [mutate, { result, loading }] = useMutate("/api/tweet/write");
  const { data, mutate: writeMutate } = useSWR<ITweetsResult>("/api/tweet/allTweet");

  const router = useRouter();

  const onValid = (data: ITweetForm) => {
    const { message } = data;
    if (!message || loading) return;
    mutate(data);
    writeMutate();
  }

  const onTextAreaResize = (e: ChangeEvent) => {
    const target = (e.currentTarget as HTMLElement);
    target.style.height = "1px";
    target.style.height = `${15 + target.scrollHeight}px`;
  }

  useEffect(() => {
    if (result && result.ok) {
      router.push(`/tweet/${result.tweet.id}`);
    }
  }, [result])


  return (
    <div className="">
      <main className="border-r-[1px] md:ml-48 ml-24 md:w-[37.5rem] w-96">
        <div className="bg-[rgba(255,255,255,0.9)] backdrop-blur-sm   flex  px-5 py-3 justify-between items-center fixed top-0 md:w-[37.5rem] w-96">
          <div className="text-xl font-semibold">Home</div>
          <div>✨</div>
        </div>
        <div className="w-full border-b-[1px]   px-5  mt-14  flex space-x-5">
          <div className="h-12 w-12 rounded-full  bg-green-600 text-white flex justify-center items-center text-sm ">{user?.name}</div>
          <form onSubmit={handleSubmit(onValid)} className="w-[88%]">
            <textarea {...register("message", { required: true })} onChange={onTextAreaResize} className="w-full  resize-none text-xl placeholder:text-gray-600 font-medium py-4 outline-none" placeholder="What's happeneing?" />
            <div className="flex text-sm space-x-1 font-semibold pb-5 border-b-[1px] text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Everyone can reply</span>
            </div>
            <div className="flex justify-between align-center py-5">
              <ul className="flex space-x-2">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </li>
              </ul>
              <button className="bg-blue-700 text-white text-semibold py-2 px-5 rounded-3xl">Tweet</button>
            </div>
          </form>
        </div>
        {data && <PostBox tweets={data.tweets} />}
      </main>
    </div>
  )
}
export default Home
