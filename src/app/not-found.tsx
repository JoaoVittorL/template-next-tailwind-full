import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/logo_loading.svg';

function Error() {
  return (
    <div className="max-w-5xl mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6">
      <div>
        <h1 className="text-4xl text-blue-dark-900 m-2 font-bold text-center">
          Ops!
        </h1>
        <div className="flex justify-center items-center mb-10">
          <div className="w-20 h-20 animate-spin">
            <Image
              style={{ display: 'block', margin: 'auto', marginBottom: '40px' }}
              src={Logo}
              width={200}
              height={200}
              alt="Logotipo da empresa EcoElétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
            />
          </div>
        </div>

        {/* <Image src={Loading} alt="teste" /> */}
        <p className="text-blue-800"> Página não encontrada</p>
      </div>
      <button className="bg-blue-dark-900 transition ease-in duration-600  rounded w-full h-12 px-2">
        <Link className="no-underline text-white" href={'/'}>
          Voltar para tela anterior
        </Link>
      </button>
    </div>
  );
}

export default Error;
