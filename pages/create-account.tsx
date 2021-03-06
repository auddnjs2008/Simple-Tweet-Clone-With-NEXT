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
        // api μ μ©
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
            <div className="text-4xl ">π§</div>
            <h1 className="text-3xl font-semibold">ν­ν°μ νμκ°μνκΈ°</h1>
            <form onSubmit={handleSubmit(valid, inValid)} className="w-full space-y-5">
                <input {...register("name", { required: true, maxLength: { value: 3, message: "μ΅λ 3κΈμ κΉμ§ κ°λ₯ν©λλ€." } })} className="border-2 text-lg py-3 px-1 rounded-md w-full" placeholder="μ΄λ¦μ μλ ₯ν΄μ£ΌμΈμ" />
                <input {...register("email", { required: true, pattern: { value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "μ΄λ©μΌ νμμ΄ λ§μ§ μμ΅λλ€." } })} className="border-2 text-lg py-3 px-1 rounded-md w-full" placeholder="emailμ μλ ₯ν΄μ£ΌμΈμ" />
                <input {...register("password", { required: true, minLength: { value: 8, message: "μ΅μ 8κΈμ μ΄μμ΄μ¬μΌ ν©λλ€." } })} className="border-2 text-lg py-3 px-1 rounded-md w-full" placeholder="λΉλ°λ²νΈλ₯Ό μλ ₯ν΄μ£ΌμΈμ" />
                <input {...register("confirm", { required: true, validate: (value) => value === watch("password") || "λΉλ°λ²νΈκ° μΌμΉνμ§ μμ΅λλ€" })} className="border-2 text-lg py-3 px-1 rounded-md w-full" placeholder="λΉλ°λ²νΈλ₯Ό λ€μ μλ ₯ν΄μ£ΌμΈμ" />
                <button className="w-full rounded-2xl  bg-slate-900 text-white py-1">νμκ°μ</button>
            </form>
        </div>
    )
}

export default CreateAccount