import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useMutate from '../lib/client/useMutate';


interface ICreateUserForm {
    name: string;
    email: string;
    password: string;
    confirm: string;
}

const CreateAccount: NextPage = () => {

    const router = useRouter();
    const { register, handleSubmit, watch } = useForm<ICreateUserForm>();
    const [mutate, { result: createData, loading, error }] = useMutate("/api/user/create");

    const valid = (data: ICreateUserForm) => {
        // api 적용
        if (loading) return;
        mutate(data);
    }

    const inValid = (e: any) => {
        const errorMessage = (Object.entries(e)[0][1] as any).message;
        alert(errorMessage);
    }

    useEffect(() => {
        if (createData && createData.ok) {
            router.push("/log-in");
        }
    }, [createData])


    return (
        <div className="pt-1 max-w-xs m-auto h-screen flex flex-col items-center space-y-10">
            {/* <div className="relative w-60 h-60 ">
                <Image layout="fill" objectFit='contain' src="/img/house.png" />
            </div> */}
            <div className="text-4xl ">🐧</div>
            <h1 className="text-3xl font-semibold">펭터에 회원가입하기</h1>
            <form onSubmit={handleSubmit(valid, inValid)} className="w-full space-y-5">
                <input {...register("name", { required: true, maxLength: { value: 3, message: "최대 3글자 까지 가능합니다." } })} className="border-2 text-lg py-3 px-1 rounded-md w-full" placeholder="이름을 입력해주세요" />
                <input {...register("email", { required: true, pattern: { value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "이메일 형식이 맞지 않습니다." } })} className="border-2 text-lg py-3 px-1 rounded-md w-full" placeholder="email을 입력해주세요" />
                <input {...register("password", { required: true, minLength: { value: 8, message: "최소 8글자 이상이여야 합니다." } })} className="border-2 text-lg py-3 px-1 rounded-md w-full" placeholder="비밀번호를 입력해주세요" />
                <input {...register("confirm", { required: true, validate: (value) => value === watch("password") || "비밀번호가 일치하지 않습니다" })} className="border-2 text-lg py-3 px-1 rounded-md w-full" placeholder="비밀번호를 다시 입력해주세요" />
                <button className="w-full rounded-2xl  bg-slate-900 text-white py-1">회원가입</button>
            </form>
        </div>
    )
}

export default CreateAccount