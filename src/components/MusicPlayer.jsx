/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { ModalContent } from "./modalContent";

export const MusicPlayer = ({ isOpenPopUp, setIsOpenPopUp }) => {
  const audioRef = useRef(null);
  const [isPlayed, setIsPlayed] = useState(false);
  if (!audioRef.current) {
    audioRef.current = new Audio("https://live.hitfm.uz/hitfmuz");
    audioRef.current.title = "hitfm.uz";
  }

  useEffect(() => {
    const audio = audioRef.current;

    const handlePlay = () => setIsPlayed(true);
    const handlePause = () => setIsPlayed(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // To prevent the default scrolling behavior of the space key
        if (isPlayed) {
          audio.pause();
        } else {
          audio.play();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listeners when the component unmounts
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlayed]);

  const playSong = () => {
    if (isPlayed) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <div className="container z-[999]">
      <div className=" justify-end mb-[12px] md:flex hidden">
        <div
          className={`w-[436px] h-[248px] rounded-[22px] modal ${
            isOpenPopUp ? "modal-open" : "modal-close"
          }`}
          style={{
            background: "rgba(1, 36, 52, 0.61)",
            backdropFilter: "blur(16.5px)",
          }}>
          <ModalContent />
        </div>
      </div>
      <div
        style={{
          borderRadius: "22px",
          background: "rgba(1, 36, 52, 0.61)",
          backdropFilter: "blur(16.5px)",
        }}
        className="w-full md:h-[99px] h-[217px] flex md:justify-between md:flex-row flex-col items-center md:px-[32px] md:pt-[0px] pt-[24px]">
        <div className="flex md:w-[33%] w-[100%] md:gap-[20px] gap-[18px] items-center md:flex-row justify-center ">
          <div>
            {/* <svg
              width={52}
              height={52}
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.33325 13C4.33325 8.21354 8.21345 4.33334 12.9999 4.33334H30.3333C35.1197 4.33334 38.9999 8.21354 38.9999 13V30.3333C38.9999 35.1198 35.1197 39 30.3333 39H12.9999C8.21345 39 4.33325 35.1198 4.33325 30.3333V13ZM20.0417 11.375C19.1442 11.375 18.4167 12.1025 18.4167 13V22.1174C17.7532 21.8275 17.0204 21.6667 16.25 21.6667C13.2585 21.6667 10.8333 24.0918 10.8333 27.0833C10.8333 30.0749 13.2585 32.5 16.25 32.5C19.2415 32.5 21.6667 30.0749 21.6667 27.0833V14.7679C25.9773 15.5354 29.25 19.3022 29.25 23.8333C29.25 24.7308 29.9775 25.4583 30.875 25.4583C31.7725 25.4583 32.5 24.7308 32.5 23.8333C32.5 16.9528 26.9222 11.375 20.0417 11.375ZM21.6667 47.6667C18.0295 47.6667 14.9157 45.4262 13.63 42.25H30.3334C36.9148 42.25 42.25 36.9148 42.25 30.3334V13.63C45.4262 14.9157 47.6667 18.0295 47.6667 21.6667V39C47.6667 43.7865 43.7865 47.6667 39 47.6667H21.6667Z"
                fill="white"
              />
            </svg> */}
            <img
              src="/logo.svg"
              alt="logo"
              className="w-[71px] h-[63px] object-cover"
            />
          </div>
          <div className="flex flex-col translate-y-[-4px]">
            <div className="title-top xl:text-[36px]  md:text-[25px] text-[36px]">
              <h2>HIT FM 90.8</h2>
            </div>
            <div className="title-bottom">
              <h3>Megapolis ritmida bo’l!</h3>
            </div>
          </div>
        </div>
        <div className="play-button md:w-[33%] md:pt-0 pt-[23px] w-full flex justify-center">
          <div
            onClick={playSong}
            className="play-icon-wrapper flex justify-center items-center cursor-pointer">
            {isPlayed ? (
              // <svg
              //   xmlns="http://www.w3.org/2000/svg"
              //   width={30}
              //   height={26}
              //   viewBox="0 0 30 26"
              //   fill="none">
              //   <path
              //     fillRule="evenodd"
              //     clipRule="evenodd"
              //     d="M2.33325 0.166504C1.22868 0.166504 0.333252 1.06193 0.333252 2.1665V23.8332C0.333252 24.9377 1.22868 25.8332 2.33325 25.8332H9.33325C10.4378 25.8332 11.3333 24.9377 11.3333 23.8332V2.1665C11.3333 1.06193 10.4378 0.166504 9.33325 0.166504H2.33325ZM20.6666 0.166504C19.562 0.166504 18.6666 1.06193 18.6666 2.1665V23.8332C18.6666 24.9377 19.562 25.8332 20.6666 25.8332H27.6666C28.7712 25.8332 29.6666 24.9377 29.6666 23.8332V2.1665C29.6666 1.06193 28.7712 0.166504 27.6666 0.166504H20.6666Z"
              //     fill="#28303F"
              //   />
              // </svg>
              <svg
                width={44}
                height={44}
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.33325 9.1665C8.22868 9.1665 7.33325 10.0619 7.33325 11.1665V32.8332C7.33325 33.9377 8.22868 34.8332 9.33325 34.8332H16.3333C17.4378 34.8332 18.3333 33.9377 18.3333 32.8332V11.1665C18.3333 10.0619 17.4378 9.1665 16.3333 9.1665H9.33325ZM27.6666 9.1665C26.562 9.1665 25.6666 10.0619 25.6666 11.1665V32.8332C25.6666 33.9377 26.562 34.8332 27.6666 34.8332H34.6666C35.7712 34.8332 36.6666 33.9377 36.6666 32.8332V11.1665C36.6666 10.0619 35.7712 9.1665 34.6666 9.1665H27.6666Z"
                  fill="#28303F"
                />
              </svg>
            ) : (
              // <svg
              //   xmlns="http://www.w3.org/2000/svg"
              //   width={26}
              //   height={30}
              //   style={{
              //     transform: "translateX(2px)",
              //   }}
              //   viewBox="0 0 26 30"
              //   fill="none">
              //   <path
              //     d="M22.6278 16.7365L2.99228 27.9568C1.65896 28.7187 0 27.756 0 26.2203V15V3.77971C0 2.24407 1.65897 1.28134 2.99228 2.04323L22.6278 13.2635C23.9714 14.0313 23.9714 15.9687 22.6278 16.7365Z"
              //     fill="#28303F"
              //   />
              // </svg>
              <svg
                width={44}
                height={44}
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M33.6278 23.7368L13.9923 34.9571C12.659 35.719 11 34.7563 11 33.2206V22.0003V10.78C11 9.24437 12.659 8.28164 13.9923 9.04353L33.6278 20.2638C34.9714 21.0316 34.9714 22.969 33.6278 23.7368Z"
                  fill="#28303F"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="w-[33%]  justify-end md:flex hidden">
          <button
            onClick={() => setIsOpenPopUp(!isOpenPopUp)}
            className={`menu-button cursor-pointer  `}>
            <svg
              width={25}
              height={21}
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.0415039 1.83333C0.0415039 0.935866 0.769041 0.208328 1.6665 0.208328H12.4998C13.3973 0.208328 14.1248 0.935866 14.1248 1.83333C14.1248 2.73079 13.3973 3.45833 12.4998 3.45833H1.6665C0.769041 3.45833 0.0415039 2.73079 0.0415039 1.83333Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.0415039 10.5C0.0415039 9.60254 0.769041 8.875 1.6665 8.875H23.3332C24.2306 8.875 24.9582 9.60254 24.9582 10.5C24.9582 11.3975 24.2306 12.125 23.3332 12.125H1.6665C0.769041 12.125 0.0415039 11.3975 0.0415039 10.5Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.875 19.1667C10.875 18.2692 11.6025 17.5417 12.5 17.5417L23.3333 17.5417C24.2308 17.5417 24.9583 18.2692 24.9583 19.1667C24.9583 20.0641 24.2308 20.7917 23.3333 20.7917L12.5 20.7917C11.6025 20.7917 10.875 20.0641 10.875 19.1667Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
