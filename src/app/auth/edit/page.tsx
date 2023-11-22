import { FaUser } from 'react-icons/fa';

import Button from '../../components/Button';
import Input from '../../components/Input';
function Edit() {
  return (
    <div className=" flex min-h-screen">
      <form className="max-w-[600px] w-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 ">
        <div className="flex justify-center p-1 mb-10 ">
          <FaUser size={40} style={{}} />
        </div>
        <Input type="text" icon title="Nome" disabled />
        <Input type="text" icon title="Email" disabled />
        <div className="flex justify-between gap-2 ">
          <Input type="password" icon title="Senha atual" />
          <Input type="password" icon title="Nova senha" />
        </div>
        <div className="flex justify-between gap-2">
          <Button background="#E8232F" type="submit" title="Voltar" />
          <Button background="#32B768" type="submit" title="Alterar" />
        </div>
      </form>
    </div>
  );
}

export default Edit;
