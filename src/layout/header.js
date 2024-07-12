// import { getStorage, setStorage } from 'kind-tiger';
// import pb from '@/api/pocketbase';
// import defaultAuthData from '@/api/defaultAuthData';

// // IIAFE
// (async function () {
//   if (!localStorage.getItem('auth')) {
//     setStorage('auth', defaultAuthData);
//   }

//   const { isAuth, user } = await getStorage('auth');

//   class Header extends HTMLElement {
//     constructor() {
//       super();
//       this.attachShadow({ mode: 'open' });
//       const style = document.createElement('style');
//       style.textContent = `@import '/src/styles/layout/_header.scss';`;

//       this.shadowRoot.innerHTML = `
//         <style>
//           ${style.textContent}
//         </style>
//         <header class="header">

//           <nav class="nav">
//             <h1 class="header__logo">
//               <a class="header__logo__link" href="/index.html">
//                 <img class="logo1" src="http://yooniverse.pockethost.io/api/files/icon/996jh1fp64lu2vq/logo_l_MphmumOKiy.svg" alt="타잉" />
//               </a>
//             </h1>

//           ${
//             isAuth
//               ? `
//             <ul class="header__menu">
//               <li class="menu__list">
//                 <a class="list__live" href="/">
//                   <img src="http://yooniverse.pockethost.io/api/files/icon/vsuow0zcx91pfqg/live_default_l_8NVNkMwyE1.svg" alt="라이브 아이콘" />
//                   <span>실시간</span>
//                 </a>
//               </li>
//               <li class="menu__list">
//                 <a class="list__tv" href="/">
//                   <span>TV프로그램</span>
//                 </a>
//               </li>
//               <li class="menu__list">
//                 <a class="list__movie" href="/">
//                   <span>영화</span>
//                 </a>
//               </li>
//               <li class="menu__list">
//                 <a class="list__paramount" href="/">
//                   <img src="http://yooniverse.pockethost.io/api/files/icon/j6wg5zoak4wtc9v/paramount_default_l_dSYjrp1WcT.svg" alt="파라마운트" />
//                 </a>
//               </li>
//             </ul>

//             <div class="header__actions">
//               <img class="actions__search" src="http://yooniverse.pockethost.io/api/files/icon/d3s11y4bei09eke/search_defualt_l_uO5dv62LBJ.svg" alt="프로필" />
//               <img class="actions__profile" src="http://yooniverse.pockethost.io/api/files/icon/i83gshb0uge1p8p/profile_img_l_Y5H1GQixSN.svg" alt="프로필" />
//             </div>
//             `
//               : ` `
//           }
          
//           </nav>
//         </header>
//       `;

//       this.logout = this.shadowRoot.querySelector('.logout');
//     }

//     connectedCallback() {
//       this.logout?.addEventListener('click', this.logOut.bind(this));
//     }

//     logOut(e) {
//       e.preventDefault();

//       pb.authStore.clear();
//       setStorage('auth', defaultAuthData);

//       location.reload();
//     }
//   }

//   customElements.define('c-header', Header);
// })();
