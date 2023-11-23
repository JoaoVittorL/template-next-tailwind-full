import Image from 'next/image';
import Link from 'next/link';

import Button from '../../components/Button';
import Input from '../../components/Input';

import Logo from '../../../../public/logo.svg';

function Register() {
  return (
    <div className=" flex min-h-screen">
      <form className="max-w-[460px] w-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6">
        <Image
          style={{ display: 'block', margin: 'auto', marginBottom: '40px' }}
          src={Logo}
          width={200}
          height={200}
          alt="Logotipo da empresa EcoElétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
        />
        <Input type="text" title="NOME" placeholder="Digite o seu nome" />
        <Input type="email" title="E-MAIL" placeholder="Digite o seu e-mail" />
        <label className="block text-center font-bold">SETOR</label>
        <select className="w-full outline-none border border-solid text-blue-dark-900 border-gray rounded px-2 h-12 my-2">
          <option value="Escolha">Escolha</option>
          <option value="RH">RH</option>
          <option value="FINANCEIRO">FINANCEIRO</option>
          <option value="FROTA">FROTA</option>
          <option value="SESMT">SESMT</option>
          <option value="GESTÃO">GESTÃO</option>
          <option value="PRODUÇÃO">PRODUÇÃO</option>
          <option value="ALMOXARIFADO">ALMOXARIFADO</option>
        </select>
        <Button color="green">Cadastrar</Button>
        <Link
          className="flex justify-center mt-5 font-bold text-blue-dark"
          href={'/auth/login'}
        >
          Já tenho conta
        </Link>
      </form>
    </div>
  );
}

export default Register;
