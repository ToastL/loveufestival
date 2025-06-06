import { artiesten, stages } from "../assets/dummyData";

function Home() {

  return (
    <>
      <div className="space-y-10 px-10 pt-10">
        <h1 className="uppercase text-center text-xl text-black">
          Welcome to
          <br />
          <span className="text-neutral-500">U festival</span>
        </h1>

        <div className="space-y-5">
          <h2 className="ml-2 text-[#f03228] text-xl font-bold">Artiesten</h2>
          <div className="space-y-2">
            {artiesten.map((artiest, index) => {
              return (
                <div
                  key={index}
                  className="flex h-20 bg-neutral-100 border border-neutral-200 rounded-xl shadow overflow-hidden"
                >
                  <img className="min-w-20" src={artiest.img} alt="" />
                  <div className="w-full pl-2 pt-2">
                    <h1 className="font-semibold">{artiest.name}</h1>
                  </div>
                </div>
              );
            })}
            <a className="flex justify-center w-full px-2 py-2 bg-[#f03228] text-white rounded-md" href="/lineup">Alle artiesten zien</a>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="ml-2 text-[#f03228] text-xl font-bold">Stages</h2>
          <div className="space-y-2">
            {stages.map((stage, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-evenly h-36 bg-neutral-100 border border-neutral-200 rounded-xl shadow overflow-hidden"
                >
                  <div className="relative h-4/6 overflow-hidden">
                    <img className="absolute top-1/2 -translate-y-1/2" src={stage.img} alt="" />
                  </div>
                  <div className="flex items-center h-2/6 pl-2">
                    <h1 className="font-semibold">{stage.name}</h1>
                  </div>
                </div>
              );
            })}
            <a className="flex justify-center w-full px-2 py-2 bg-[#f03228] text-white rounded-md" href="/lineup">Alle artiesten zien</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
