class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');

    style.textContent = `@import '/docs/assets/main-MxLk8JDM.css';`;

    console.log(style.textContent);

    this.shadowRoot.innerHTML = `
    <style>
      ${style.textContent}
    </style>
    <footer class="footer">
      <section class="footer_contents">
        <nav class="footer_util">
          <span><a href="/">고객센터</a></span>
          <span><a href="/">이용약관</a></span>
          <span><a href="/">개인정보처리방침</a></span>
          <span><a href="/">청소년 보호정책</a></span>
          <span><a href="/">법적고지</a></span>
          <span><a href="/">이벤트</a></span>
          <span><a href="/">인재채용</a></span>
        </nav>
        <div class="copyright_container">
          <p>
            <span>대표이사 : YANG JIEUL</span>
            <span>사업자정보확인</span>
            <span>사업자등록번호 : 188-88-01893</span>
            <span>통신판매신고번호 : 2020-서울마포-3641호</span>
          </p>
          <p>
            <span
              >사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브
              15층(상암동)</span
            >
            <span>호스팅사업자 : 씨제이올리브네트웍스(주)</span>
          </p>
          <p>
            <span>고객문의 바로가기</span>
            <span>대표메일 : tving@cj.net</span>
            <span>고객센터 : 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)</span>
          </p>
          <p>
            <span
              >ENM 시청자 상담실(편성 문의 및 시청자 의견) : 080-080-0780</span
            >
            <span>Mnet 고객센터(방송편성문의) : 185501631</span>
          </p>
        </div>
        <div class="SNS">
          <div class="SNS_icon youtube">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="30"
                viewBox="0 0 34 30"
                fill="none"
              >
                <path
                  d="M31.9906 7.27049C31.6307 5.88475 30.5705 4.79338 29.2243 4.42301C26.7843 3.75 16.9999 3.75 16.9999 3.75C16.9999 3.75 7.21566 3.75 4.77555 4.42301C3.42937 4.79344 2.36913 5.88475 2.00928 7.27049C1.35547 9.78223 1.35547 15.0227 1.35547 15.0227C1.35547 15.0227 1.35547 20.2632 2.00928 22.775C2.36913 24.1607 3.42937 25.2066 4.77555 25.577C7.21566 26.25 16.9999 26.25 16.9999 26.25C16.9999 26.25 26.7842 26.25 29.2243 25.577C30.5705 25.2066 31.6307 24.1607 31.9906 22.775C32.6444 20.2632 32.6444 15.0227 32.6444 15.0227C32.6444 15.0227 32.6444 9.78223 31.9906 7.27049ZM13.7999 19.7807V10.2647L21.9777 15.0229L13.7999 19.7807Z"
                  fill="#6B6B6B"
                />
              </svg>
            </a>
          </div>
          <div class="SNS_icon instagram">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="38"
                viewBox="0 0 34 38"
                fill="none"
              >
                <g clip-path="url(#clip0_93_7377)">
                  <path
                    d="M17.0065 10.7073C12.4202 10.7073 8.72085 14.4066 8.72085 18.993C8.72085 23.5793 12.4202 27.2786 17.0065 27.2786C21.5928 27.2786 25.2922 23.5793 25.2922 18.993C25.2922 14.4066 21.5928 10.7073 17.0065 10.7073ZM17.0065 24.3797C14.0427 24.3797 11.6198 21.964 11.6198 18.993C11.6198 16.0219 14.0355 13.6062 17.0065 13.6062C19.9775 13.6062 22.3933 16.0219 22.3933 18.993C22.3933 21.964 19.9703 24.3797 17.0065 24.3797ZM27.5637 10.3684C27.5637 11.4428 26.6984 12.301 25.6311 12.301C24.5566 12.301 23.6985 11.4356 23.6985 10.3684C23.6985 9.30111 24.5639 8.43577 25.6311 8.43577C26.6984 8.43577 27.5637 9.30111 27.5637 10.3684ZM33.0514 12.3298C32.9288 9.74099 32.3375 7.44783 30.441 5.5585C28.5516 3.66917 26.2585 3.07785 23.6697 2.94805C21.0015 2.79661 13.0043 2.79661 10.3362 2.94805C7.75455 3.07064 5.46139 3.66196 3.56485 5.55129C1.66831 7.44062 1.0842 9.73378 0.954397 12.3226C0.802962 14.9907 0.802962 22.988 0.954397 25.6561C1.07699 28.2449 1.66831 30.5381 3.56485 32.4274C5.46139 34.3167 7.74734 34.9081 10.3362 35.0379C13.0043 35.1893 21.0015 35.1893 23.6697 35.0379C26.2585 34.9153 28.5516 34.324 30.441 32.4274C32.3303 30.5381 32.9216 28.2449 33.0514 25.6561C33.2029 22.988 33.2029 14.998 33.0514 12.3298ZM29.6045 28.5189C29.042 29.9323 27.9531 31.0212 26.5325 31.5909C24.4052 32.4346 19.3574 32.2399 17.0065 32.2399C14.6557 32.2399 9.60062 32.4274 7.48053 31.5909C6.06713 31.0284 4.97824 29.9396 4.40856 28.5189C3.56485 26.3916 3.75955 21.3438 3.75955 18.993C3.75955 16.6421 3.57206 11.5871 4.40856 9.46697C4.97103 8.05358 6.05992 6.96468 7.48053 6.395C9.60783 5.55129 14.6557 5.74599 17.0065 5.74599C19.3574 5.74599 24.4124 5.5585 26.5325 6.395C27.9459 6.95747 29.0348 8.04636 29.6045 9.46697C30.4482 11.5943 30.2535 16.6421 30.2535 18.993C30.2535 21.3438 30.4482 26.3989 29.6045 28.5189Z"
                    fill="#6B6B6B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_93_7377">
                    <rect
                      width="32.3062"
                      height="36.9213"
                      fill="white"
                      transform="translate(0.84668 0.539551)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div class="SNS_icon twitter">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clip-path="url(#clip0_93_7387)">
                  <path
                    d="M28.7106 9.48201C28.7309 9.76626 28.7309 10.0506 28.7309 10.3348C28.7309 19.0048 22.132 28.9947 10.0711 28.9947C6.35531 28.9947 2.90356 27.9185 0 26.0506C0.527938 26.1114 1.0355 26.1318 1.58375 26.1318C4.64969 26.1318 7.47206 25.0963 9.72588 23.3298C6.84263 23.2688 4.42638 21.3805 3.59388 18.7815C4 18.8424 4.40606 18.883 4.8325 18.883C5.42131 18.883 6.01019 18.8018 6.55838 18.6597C3.55331 18.0505 1.29944 15.4109 1.29944 12.2231V12.1419C2.1725 12.6293 3.18781 12.9338 4.26388 12.9744C2.49738 11.7967 1.34006 9.78657 1.34006 7.51245C1.34006 6.2942 1.66488 5.17745 2.23344 4.20282C5.46188 8.18251 10.3147 10.7814 15.7563 11.0658C15.6548 10.5784 15.5938 10.0709 15.5938 9.56326C15.5938 5.94901 18.5177 3.00488 22.1522 3.00488C24.0405 3.00488 25.7461 3.79676 26.9441 5.07595C28.4263 4.7917 29.8476 4.24345 31.1065 3.4922C30.6191 5.01507 29.5836 6.29426 28.2233 7.10638C29.5431 6.96432 30.8223 6.59876 31.9999 6.0912C31.1066 7.39063 29.9898 8.54795 28.7106 9.48201Z"
                    fill="#6B6B6B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_93_7387">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div class="SNS_icon facebook">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="36"
                viewBox="0 0 22 36"
                fill="none"
              >
                <g clip-path="url(#clip0_93_7397)">
                  <path
                    d="M19.0814 20.1707L20.046 13.8853H14.015V9.80646C14.015 8.08689 14.8575 6.41074 17.5586 6.41074H20.3004V1.0594C20.3004 1.0594 17.8123 0.634766 15.4334 0.634766C10.4666 0.634766 7.22014 3.64519 7.22014 9.09489V13.8853H1.69922V20.1707H7.22014V35.3652H14.015V20.1707H19.0814Z"
                    fill="#6B6B6B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_93_7397">
                    <rect
                      width="21.7065"
                      height="34.7305"
                      fill="white"
                      transform="translate(0.146484 0.634766)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <p class="copyright">Copyright © 주식회사 티빙 All right reserved.</p>
      </section>
    </footer>
    `;
  }
}

customElements.define('c-footer', Footer);
