import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useMutate from '../lib/client/useMutate';

interface ILoginForm {
    email: string;
    password: string;
}

const Login: NextPage = () => {

    const router = useRouter();
    const { register, handleSubmit } = useForm<ILoginForm>();
    const [mutate, { result, loading }] = useMutate("/api/user/enter");

    const onValid = (data: ILoginForm) => {
        if (loading) return;
        mutate(data);
    }

    useEffect(() => {
        if (result && result.ok) {
            router.push("/");
        }
        if (result && !result.ok) {
            alert(result.error);
        }
    }, [result])


    return (
        <div className="py-20 max-w-xs m-auto h-screen flex flex-col items-center space-y-10">
            <div className="text-4xl">🐧</div>
            <h1 className="text-3xl font-semibold">펭터에 로그인하기</h1>
            <form onSubmit={handleSubmit(onValid)} className="w-full space-y-5">
                <input {...register("email", { required: true })} className="border-2 text-lg py-3 px-1 rounded-md w-full" placeholder="email을 입력해주세요" />
                <input {...register("password", { required: true })} className="border-2 text-lg py-3 px-1 rounded-md w-full" placeholder="비밀번호를 입력해주세요" />
                <button className="w-full rounded-2xl bg-slate-900 text-white py-1">로그인 하기</button>
            </form>
        </div>
    )
}


export default Login;