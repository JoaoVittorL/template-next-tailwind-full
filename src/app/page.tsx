export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 min-h-screen ">
        <aside className="col-span-2 min-h-screen bg-green-dark">
          <div className="flex flex-col justify-center mx-auto w-16 pt-10">
            <div className="bg-gray h-16 w-16">teste</div>
            <a href="https://www.google.com.br/?hl=pt-BR">Gerenciar</a>:
          </div>
        </aside>
        <div className="col-span-10 bg-blue">teste</div>
      </div>
    </div>
  );
}
