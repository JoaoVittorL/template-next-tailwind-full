'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import Button from '../../components/Button';
import Input from '../../components/Input';

import Logo from '../../../../public/logo.svg';

function Page() {
  return (
    <div className=" flex min-h-screen">
      <form className="max-w-[460px] w-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 ">
        <Image
          style={{ display: 'block', margin: 'auto', marginBottom: '40px' }}
          src={Logo}
          width={200}
          height={200}
          alt="Logotipo da empresa EcoElétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
        />
        <Input
          type="text"
          placeholder="Digite o seu e-mail..."
          icon={<FaUser />}
          title="EMAIL"
        />
        <Input
          type="password"
          placeholder="Digite sua senha..."
          icon={<FaLock />}
          title="SENHA"
        />
        <Button color="green" type="submit">
          Entrar
        </Button>
        <div className="flex justify-center items-center gap-4 border border-gray rounded h-12 mt-2 cursor-pointer">
          <FcGoogle className="text-xl" />
          <span className="text-base">Fazer login com o Google</span>
        </div>
        <Link
          className="flex justify-center mt-5 font-bold text-blue-dark"
          href={'/auth/register'}
        >
          Solicitar acesso
        </Link>
      </form>
    </div>
  );
}

export default Page;
