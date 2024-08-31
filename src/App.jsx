import { Header } from "./components/header";
import { MusicPlayer } from "./components/MusicPlayer";

function App() {
  return (
    <>
      <main className="bg-[url(/desktop-banner.png)] bg-no-repeat bg-cover bg-center  h-[100svh] w-full">
        <div className="container md:pt-[80px] pt-[20px] pb-[80px] flex flex-col justify-between  h-[100%]">
          <Header />
          <MusicPlayer />
        </div>
      </main>
    </>
  );
}

export default App;
