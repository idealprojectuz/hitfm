/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ModalContent } from "./modalContent";

export const Header = ({ setIsOpenPopUp, isOpenPopUp }) => {
  return (
    <div className="relative z-[999]">
      <div className="container   md:pt-0 pt-[20px]">
        <div className="flex items-center justify-between">
          <div id="logo ">
            <img
              src="/logo.svg"
              alt="logo"
              className="w-[99px] h-[99px] object-cover"
            />
          </div>
          <div
            onClick={() => setIsOpenPopUp(!isOpenPopUp)}
            className="mobile-top-menu  cursor-pointer md:hidden flex">
            <button>
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

      <div
        className={`w-[100%] min-h-[359px] h-fit pb-[32px] absolute top-0 rounded-b-[22px] md:hidden modal ${
          isOpenPopUp ? "modal-open-header" : "modal-close-header"
        }`}
        style={{
          background: "rgba(1, 36, 52, 0.61)",
          backdropFilter: "blur(16.5px)",
          zIndex: 9999,
        }}>
        <div className="container md:pt-0 pt-[20px]">
          <div className="flex items-center justify-between ">
            <div id="logo">
              <img src="/logo.svg" alt="logo" />
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.11)",
                backdropFilter: "blur(11px)",
              }}
              onClick={() => setIsOpenPopUp(!isOpenPopUp)}
              className="mobile-top-menu cursor-pointer   md:hidden flex">
              <button>
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
        <ModalContent />
      </div>
    </div>
  );
};
