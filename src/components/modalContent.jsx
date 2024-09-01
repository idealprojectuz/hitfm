/* eslint-disable react/no-unescaped-entities */
export const ModalContent = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mx-[24px] mt-[12px]">
      <h2 className="popup-title ">Biz haqimizda</h2>
      <p className="popup-description mt-[18px] md:text-[18px] text-[16px]">
        HIT FM 90.8 manzilidan o'rin egallagan, zamonaviy, kayfiyatni
        ko'taruvchi radio.
      </p>
      <div className="social-media md:mt-[24px] mt-[12px]">
        <a
          href="https://www.instagram.com/hitfm.uz/"
          target="_blank"
          className="social-media-item">
          <svg
            width={37}
            height={36}
            viewBox="0 0 37 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 3C6.63401 3 3.5 6.13401 3.5 10V26C3.5 29.866 6.63401 33 10.5 33H26.5C30.366 33 33.5 29.866 33.5 26V10C33.5 6.13401 30.366 3 26.5 3H10.5ZM27.5 10.5C28.3284 10.5 29 9.82843 29 9C29 8.17157 28.3284 7.5 27.5 7.5C26.6716 7.5 26 8.17157 26 9C26 9.82843 26.6716 10.5 27.5 10.5ZM26 18C26 22.1421 22.6421 25.5 18.5 25.5C14.3579 25.5 11 22.1421 11 18C11 13.8579 14.3579 10.5 18.5 10.5C22.6421 10.5 26 13.8579 26 18ZM18.5 22.5C20.9853 22.5 23 20.4853 23 18C23 15.5147 20.9853 13.5 18.5 13.5C16.0147 13.5 14 15.5147 14 18C14 20.4853 16.0147 22.5 18.5 22.5Z"
              fill="white"
            />
          </svg>
        </a>
        <a
          href="https://t.me/yangiradio"
          target="_blank"
          className="social-media-item">
          <svg
            width={37}
            height={36}
            viewBox="0 0 37 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.84456 16.1946L27.9276 6.21863C29.0131 5.7495 30.1892 6.66238 30.0041 7.83034L26.8481 27.7443C26.6531 28.9744 25.1308 29.4448 24.2758 28.5392L19.0965 23.0529C18.0808 21.977 18.0012 20.3212 18.909 19.1529L22.566 14.4463C22.775 14.1772 22.4449 13.8232 22.1619 14.0131L14.891 18.8908C13.6571 19.7185 12.16 20.059 10.6895 19.8464L5.22492 19.056C3.72794 18.8395 3.45612 16.7946 4.84456 16.1946Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <p className="md:mt-[24px] mt-[17px] copywrite-text">
        © {year}{" "}
        <a href="https://jetmedia.uz/" className="copywrite-link">
          JET Media.
        </a>{" "}
        All rights reserved
      </p>
    </div>
  );
};
