import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { MusicPlayer } from "./components/MusicPlayer";
import gsap from "gsap";
gsap.registerPlugin();
function App() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      "#bulut1",
      {
        right: "-100%",
        y: 120,
      },
      {
        right: "110%",
        duration: 25,
        ease: "linear",
        repeat: -1,
        // repeatDelay: 2, // Ekrandan chiqib ketgandan keyin biroz to'xtab turadi
        // yoyo: true, // Yana boshidan takrorlash uchun
      }
    );
    gsap.fromTo(
      "#bulut2",
      {
        right: "-130%",
        // y: 120,
      },
      {
        right: "110%",
        duration: 30,
        ease: "linear",
        repeat: -1,
        // repeatDelay: 1, // Ekrandan chiqib ketgandan keyin biroz to'xtab turadi
        // yoyo: true, // Yana boshidan takrorlash uchun
      }
    );
    gsap.fromTo(
      "#bulut3",
      {
        right: "-140%",
        // y: 120,
      },
      {
        right: "100%",
        duration: 35,
        ease: "linear",
        repeat: -1,
        // repeatDelay: 1, // Ekrandan chiqib ketgandan keyin biroz to'xtab turadi
        // yoyo: true, // Yana boshidan takrorlash uchun
      }
    );
    gsap.fromTo(
      "#bulut4",
      {
        right: "-120%",
        // y: 120,
      },
      {
        right: "100%",
        duration: 25,
        ease: "linear",
        repeat: -1,
        // repeatDelay: 1, // Ekrandan chiqib ketgandan keyin biroz to'xtab turadi
        // yoyo: true, // Yana boshidan takrorlash uchun
      }
    );
  }, []);

  return (
    <>
      <main className="bg-[url(/desktop-banner.png)] relative overflow-hidden bg-no-repeat bg-cover bg-center  h-[100svh] w-full">
        <div
          className={` md:pt-[80px] pt-[0px] md:pb-[80px] transition-all ${
            isOpenPopUp ? "pb-[12px]" : "pb-[129px]"
          } flex flex-col justify-between  h-[100%]`}>
          <Header isOpenPopUp={isOpenPopUp} setIsOpenPopUp={setIsOpenPopUp} />
          <MusicPlayer
            isOpenPopUp={isOpenPopUp}
            setIsOpenPopUp={setIsOpenPopUp}
          />
        </div>

        <div
          style={{
            zIndex: -1,
          }}
          className="w-full overflow-hidden">
          <img
            src="/bulut-center.png"
            id="bulut1"
            className="absolute md:w-auto md:h-auto w-[400px] h-[350px] bg-cover  md:bottom-[0%] bottom-[70%] right-[-10%]"
            // className={"absolute bottom-0 right-[-10%]"}
            alt=""
          />
          <img
            src="/bulut2.png"
            id="bulut2"
            className="absolute  top-[0px] right-[-70%]"
            // className={"absolute bottom-0 right-[-10%]"}
            alt=""
          />

          <img
            src="/bulut2.png"
            id="bulut3"
            className="absolute  bottom-[-20%] right-[-20%]"
            // className={"absolute bottom-0 right-[-10%]"}
            alt=""
          />
          <img
            src="/bulut2.png"
            id="bulut4"
            className="absolute bottom-[18%] right-[-30%]"
            // className={"absolute bottom-0 right-[-10%]"}
            alt=""
          />
        </div>
      </main>
    </>
  );
}

export default App;
