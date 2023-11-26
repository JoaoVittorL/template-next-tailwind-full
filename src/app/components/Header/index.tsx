import Image from 'next/image';

import Logo from '../../../../public/logo.svg';

const Header = () => {
  return (
    <>
      <header className="w-full row-span-1 p-4">
        <Image
          style={{ display: 'block', margin: 'auto' }}
          src={Logo}
          width={160}
          height={160}
          alt="Logotipo da empresa EcoElétrica, contendo uma folha estilizada que se assemelha a um raio, com as cores azul e verde."
        />
      </header>
    </>
  );
};

export default Header;
