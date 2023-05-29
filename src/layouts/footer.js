import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/layouts/footer.css'

function Footer() {
  return (
    <>
      <footer className='footer'>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_642_1746)">
          <path class="stroke-svg" d="M5.77542 1.77176C6.89522 1.6838 8.28487 1.59426 9.94516 1.52173H25.0548C26.7152 1.59426 28.1048 1.6838 29.2245 1.77176C31.2891 1.93383 32.9195 3.98318 33.1028 6.66221C33.2914 9.41674 33.4783 13.2096 33.4783 17.4222C33.4783 21.6348 33.2914 25.4277 33.1028 28.1822C32.9195 30.8613 31.2891 32.9105 29.2245 33.0727C26.6958 33.2713 22.7908 33.4783 17.5 33.4783C12.2091 33.4783 8.3042 33.2713 5.77542 33.0727C3.71089 32.9105 2.08048 30.8613 1.89713 28.1821C1.7086 25.4277 1.52173 21.6348 1.52173 17.4222C1.52173 13.2096 1.7086 9.41674 1.89713 6.66221C2.08048 3.98318 3.7109 1.93383 5.77542 1.77176Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
          <mask id="path-2-outside-1_642_1746" maskUnits="userSpaceOnUse" x="6.38318" y="6.28601" width="21" height="21" fill="black">
          <rect fill="white" x="6.38318" y="6.28601" width="21" height="21"/>
          <path d="M16.7135 11.2096C17.4038 11.2968 17.7406 11.0027 17.7241 10.3273C17.7214 10.2086 17.7201 10.1475 17.7201 10.144C17.728 9.30711 17.9706 8.58758 18.448 7.98543C18.6391 7.74457 18.8852 7.55912 19.1862 7.42909C19.4515 7.31477 19.7465 7.26896 20.0711 7.29165C20.3984 7.31434 20.7143 7.38415 21.0189 7.50109C21.4151 7.65381 21.7057 7.79606 21.8907 7.92783C22.0809 8.06397 22.231 8.23807 22.341 8.45013C22.4387 8.63863 22.4741 8.85549 22.447 9.10072C22.3973 9.55713 22.2467 9.98431 21.9954 10.3823C21.7336 10.7968 21.5957 11.2506 21.5818 11.7436C21.5765 11.9304 21.6664 12.039 21.8514 12.0696C22.2528 12.135 22.6578 12.1808 23.0662 12.207C23.6587 12.2454 24.0602 12.3 24.2705 12.3707C25.1301 12.6586 25.597 13.2721 25.6711 14.2111C25.6999 14.5785 25.6327 14.9259 25.4696 15.2531C25.3072 15.5778 25.0952 15.8727 24.8334 16.138C24.4538 16.5238 24.1693 16.9627 23.9799 17.4549C23.8682 17.7446 23.8368 18.0435 23.8856 18.3516C24.0209 19.2033 24.4228 19.877 25.0912 20.3727C25.4508 20.6389 25.7471 20.8719 25.9801 21.0717C26.3152 21.3597 26.5347 21.6586 26.6385 21.9684C26.8549 22.6107 26.6664 23.1858 26.073 23.6937C25.7344 23.9834 25.3491 24.1842 24.9171 24.2959C23.6788 24.6153 22.5696 24.442 21.5896 23.7762C21.0835 23.4315 20.6619 23.1522 20.3251 22.9384C19.7631 22.5815 19.3032 22.3864 18.9454 22.3533C18.2996 22.2922 17.7612 22.5745 17.33 23.2002C17.1433 23.4707 16.9583 23.743 16.775 24.017C16.5263 24.3897 16.3308 24.655 16.1886 24.8129C15.3115 25.7816 14.2512 26.1525 13.0077 25.9256C12.2851 25.7938 11.6773 25.5159 11.1842 25.0917C10.6501 24.6327 10.2845 24.0358 10.0872 23.301C9.74863 22.0435 9.93407 20.871 10.6436 19.7837C10.7116 19.6789 10.7945 19.5275 10.8923 19.3294C10.9891 19.1313 11.0354 18.9677 11.031 18.8385C11.0206 18.5855 10.8875 18.3852 10.6318 18.2377C9.93363 17.8345 9.23374 17.4335 8.53211 17.0347C8.21183 16.8523 7.92952 16.5787 7.68517 16.2139C7.44256 15.8527 7.34613 15.4783 7.39587 15.0908C7.443 14.7234 7.62103 14.4149 7.92996 14.1653C8.41604 13.7717 9.00684 13.6897 9.70237 13.9192C10.2033 14.0842 10.6654 14.3246 11.0886 14.6405C11.497 14.9451 11.9264 15.2143 12.3767 15.4482C13.0714 15.8095 13.687 15.7724 14.2237 15.3369C14.3965 15.1973 14.4938 15.0354 14.5156 14.8513C14.5401 14.6479 14.4982 14.4485 14.39 14.253C14.2346 13.9703 14.0431 13.715 13.8153 13.4873C13.0814 12.7525 12.9994 12.0115 13.5692 11.2645C13.7342 11.0481 13.9135 10.9011 14.1072 10.8234C14.3446 10.7274 14.589 10.7169 14.8403 10.792C15.5323 10.9997 16.1567 11.1389 16.7135 11.2096ZM16.2684 11.923L14.5444 11.529C14.4999 11.5185 14.4567 11.5237 14.4227 11.542C14.1269 11.7044 13.9807 11.9409 13.9842 12.2515C13.9868 12.4226 14.0518 12.591 14.1792 12.7568C14.2805 12.8895 14.4053 13.0282 14.5536 13.1731C14.7735 13.3878 14.9529 13.6417 15.0916 13.9349C15.2339 14.2369 15.3019 14.534 15.2958 14.8264C15.2854 15.4015 15.0218 15.8322 14.5052 16.1184C13.5714 16.6359 12.6293 16.5787 11.679 15.9469C10.7033 15.2994 10.0637 14.8927 9.75997 14.7269C9.51911 14.596 9.25905 14.5401 8.97979 14.5593C8.67784 14.5803 8.44964 14.6833 8.29517 14.8683C8.09009 15.1144 8.10711 15.4207 8.34622 15.7872C8.53123 16.07 8.74591 16.2785 8.99026 16.4129C9.39344 16.6328 10.0589 17.0146 10.9865 17.5583C11.4674 17.8393 11.7357 18.2294 11.7916 18.7286C11.8134 18.931 11.7776 19.154 11.6842 19.3975C11.6022 19.6122 11.5049 19.8199 11.3923 20.0206C11.1052 20.532 10.9451 20.8335 10.9119 20.9251C10.6553 21.6364 10.6313 22.3629 10.8399 23.1046C11.1471 24.2016 11.8671 24.8779 12.9998 25.1336C13.8568 25.3274 14.6082 25.1642 15.2539 24.6441C15.4503 24.4861 15.6794 24.2239 15.9412 23.8573C16.2178 23.469 16.4155 23.1801 16.5342 22.9908C16.83 22.516 17.1734 22.1504 17.5644 21.8938C18.0452 21.5788 18.5954 21.4836 19.215 21.6084C19.8041 21.7271 20.312 21.937 20.7387 22.2381C21.2484 22.5967 21.7044 22.8991 22.1067 23.1452C22.4784 23.3713 22.8039 23.5166 23.0832 23.5811C23.4262 23.6614 23.7875 23.6854 24.1671 23.6531C24.7675 23.6025 25.268 23.3865 25.6685 23.0052C25.8518 22.8306 25.9443 22.6408 25.946 22.4357C25.9478 22.1896 25.854 21.9763 25.6646 21.7956C25.4552 21.5967 25.2021 21.3898 24.9054 21.1751C24.5371 20.9081 24.2853 20.7022 24.1501 20.5573C23.684 20.0555 23.3568 19.4638 23.1683 18.7823C22.9964 18.1592 23.0452 17.5588 23.3149 16.981C23.5034 16.5752 23.7443 16.2039 24.0375 15.8671C24.2818 15.5861 24.5113 15.2937 24.726 14.99C24.8945 14.7518 24.9481 14.4651 24.887 14.13C24.8129 13.7259 24.6344 13.4297 24.3516 13.2412C24.1762 13.1242 23.866 13.0509 23.4209 13.0212C22.4924 12.961 21.8793 12.8834 21.5818 12.7882C21.0931 12.632 20.8422 12.2939 20.8291 11.7737C20.8134 11.1498 20.967 10.5734 21.2898 10.0445C21.4792 9.73559 21.6158 9.42361 21.6996 9.10857C21.7589 8.88516 21.69 8.71325 21.4927 8.59282C21.1515 8.38163 20.7889 8.218 20.4049 8.10193C20.103 8.01117 19.8198 8.0151 19.5554 8.11371C19.3215 8.20185 19.1177 8.37377 18.9441 8.62947C18.7207 8.95847 18.5902 9.33067 18.5527 9.74607C18.5326 9.96424 18.5143 10.1824 18.4977 10.4006C18.4741 10.6947 18.4388 10.9094 18.3917 11.0446C18.1901 11.6276 17.735 11.9365 17.0264 11.9714C16.7296 11.9862 16.477 11.9701 16.2684 11.923Z"/>
          </mask>
          <path class="fill-svg" d="M16.7135 11.2096C17.4038 11.2968 17.7406 11.0027 17.7241 10.3273C17.7214 10.2086 17.7201 10.1475 17.7201 10.144C17.728 9.30711 17.9706 8.58758 18.448 7.98543C18.6391 7.74457 18.8852 7.55912 19.1862 7.42909C19.4515 7.31477 19.7465 7.26896 20.0711 7.29165C20.3984 7.31434 20.7143 7.38415 21.0189 7.50109C21.4151 7.65381 21.7057 7.79606 21.8907 7.92783C22.0809 8.06397 22.231 8.23807 22.341 8.45013C22.4387 8.63863 22.4741 8.85549 22.447 9.10072C22.3973 9.55713 22.2467 9.98431 21.9954 10.3823C21.7336 10.7968 21.5957 11.2506 21.5818 11.7436C21.5765 11.9304 21.6664 12.039 21.8514 12.0696C22.2528 12.135 22.6578 12.1808 23.0662 12.207C23.6587 12.2454 24.0602 12.3 24.2705 12.3707C25.1301 12.6586 25.597 13.2721 25.6711 14.2111C25.6999 14.5785 25.6327 14.9259 25.4696 15.2531C25.3072 15.5778 25.0952 15.8727 24.8334 16.138C24.4538 16.5238 24.1693 16.9627 23.9799 17.4549C23.8682 17.7446 23.8368 18.0435 23.8856 18.3516C24.0209 19.2033 24.4228 19.877 25.0912 20.3727C25.4508 20.6389 25.7471 20.8719 25.9801 21.0717C26.3152 21.3597 26.5347 21.6586 26.6385 21.9684C26.8549 22.6107 26.6664 23.1858 26.073 23.6937C25.7344 23.9834 25.3491 24.1842 24.9171 24.2959C23.6788 24.6153 22.5696 24.442 21.5896 23.7762C21.0835 23.4315 20.6619 23.1522 20.3251 22.9384C19.7631 22.5815 19.3032 22.3864 18.9454 22.3533C18.2996 22.2922 17.7612 22.5745 17.33 23.2002C17.1433 23.4707 16.9583 23.743 16.775 24.017C16.5263 24.3897 16.3308 24.655 16.1886 24.8129C15.3115 25.7816 14.2512 26.1525 13.0077 25.9256C12.2851 25.7938 11.6773 25.5159 11.1842 25.0917C10.6501 24.6327 10.2845 24.0358 10.0872 23.301C9.74863 22.0435 9.93407 20.871 10.6436 19.7837C10.7116 19.6789 10.7945 19.5275 10.8923 19.3294C10.9891 19.1313 11.0354 18.9677 11.031 18.8385C11.0206 18.5855 10.8875 18.3852 10.6318 18.2377C9.93363 17.8345 9.23374 17.4335 8.53211 17.0347C8.21183 16.8523 7.92952 16.5787 7.68517 16.2139C7.44256 15.8527 7.34613 15.4783 7.39587 15.0908C7.443 14.7234 7.62103 14.4149 7.92996 14.1653C8.41604 13.7717 9.00684 13.6897 9.70237 13.9192C10.2033 14.0842 10.6654 14.3246 11.0886 14.6405C11.497 14.9451 11.9264 15.2143 12.3767 15.4482C13.0714 15.8095 13.687 15.7724 14.2237 15.3369C14.3965 15.1973 14.4938 15.0354 14.5156 14.8513C14.5401 14.6479 14.4982 14.4485 14.39 14.253C14.2346 13.9703 14.0431 13.715 13.8153 13.4873C13.0814 12.7525 12.9994 12.0115 13.5692 11.2645C13.7342 11.0481 13.9135 10.9011 14.1072 10.8234C14.3446 10.7274 14.589 10.7169 14.8403 10.792C15.5323 10.9997 16.1567 11.1389 16.7135 11.2096ZM16.2684 11.923L14.5444 11.529C14.4999 11.5185 14.4567 11.5237 14.4227 11.542C14.1269 11.7044 13.9807 11.9409 13.9842 12.2515C13.9868 12.4226 14.0518 12.591 14.1792 12.7568C14.2805 12.8895 14.4053 13.0282 14.5536 13.1731C14.7735 13.3878 14.9529 13.6417 15.0916 13.9349C15.2339 14.2369 15.3019 14.534 15.2958 14.8264C15.2854 15.4015 15.0218 15.8322 14.5052 16.1184C13.5714 16.6359 12.6293 16.5787 11.679 15.9469C10.7033 15.2994 10.0637 14.8927 9.75997 14.7269C9.51911 14.596 9.25905 14.5401 8.97979 14.5593C8.67784 14.5803 8.44964 14.6833 8.29517 14.8683C8.09009 15.1144 8.10711 15.4207 8.34622 15.7872C8.53123 16.07 8.74591 16.2785 8.99026 16.4129C9.39344 16.6328 10.0589 17.0146 10.9865 17.5583C11.4674 17.8393 11.7357 18.2294 11.7916 18.7286C11.8134 18.931 11.7776 19.154 11.6842 19.3975C11.6022 19.6122 11.5049 19.8199 11.3923 20.0206C11.1052 20.532 10.9451 20.8335 10.9119 20.9251C10.6553 21.6364 10.6313 22.3629 10.8399 23.1046C11.1471 24.2016 11.8671 24.8779 12.9998 25.1336C13.8568 25.3274 14.6082 25.1642 15.2539 24.6441C15.4503 24.4861 15.6794 24.2239 15.9412 23.8573C16.2178 23.469 16.4155 23.1801 16.5342 22.9908C16.83 22.516 17.1734 22.1504 17.5644 21.8938C18.0452 21.5788 18.5954 21.4836 19.215 21.6084C19.8041 21.7271 20.312 21.937 20.7387 22.2381C21.2484 22.5967 21.7044 22.8991 22.1067 23.1452C22.4784 23.3713 22.8039 23.5166 23.0832 23.5811C23.4262 23.6614 23.7875 23.6854 24.1671 23.6531C24.7675 23.6025 25.268 23.3865 25.6685 23.0052C25.8518 22.8306 25.9443 22.6408 25.946 22.4357C25.9478 22.1896 25.854 21.9763 25.6646 21.7956C25.4552 21.5967 25.2021 21.3898 24.9054 21.1751C24.5371 20.9081 24.2853 20.7022 24.1501 20.5573C23.684 20.0555 23.3568 19.4638 23.1683 18.7823C22.9964 18.1592 23.0452 17.5588 23.3149 16.981C23.5034 16.5752 23.7443 16.2039 24.0375 15.8671C24.2818 15.5861 24.5113 15.2937 24.726 14.99C24.8945 14.7518 24.9481 14.4651 24.887 14.13C24.8129 13.7259 24.6344 13.4297 24.3516 13.2412C24.1762 13.1242 23.866 13.0509 23.4209 13.0212C22.4924 12.961 21.8793 12.8834 21.5818 12.7882C21.0931 12.632 20.8422 12.2939 20.8291 11.7737C20.8134 11.1498 20.967 10.5734 21.2898 10.0445C21.4792 9.73559 21.6158 9.42361 21.6996 9.10857C21.7589 8.88516 21.69 8.71325 21.4927 8.59282C21.1515 8.38163 20.7889 8.218 20.4049 8.10193C20.103 8.01117 19.8198 8.0151 19.5554 8.11371C19.3215 8.20185 19.1177 8.37377 18.9441 8.62947C18.7207 8.95847 18.5902 9.33067 18.5527 9.74607C18.5326 9.96424 18.5143 10.1824 18.4977 10.4006C18.4741 10.6947 18.4388 10.9094 18.3917 11.0446C18.1901 11.6276 17.735 11.9365 17.0264 11.9714C16.7296 11.9862 16.477 11.9701 16.2684 11.923Z" fill="white"/>
          <path class="stroke-svg" d="M16.7135 11.2096C17.4038 11.2968 17.7406 11.0027 17.7241 10.3273C17.7214 10.2086 17.7201 10.1475 17.7201 10.144C17.728 9.30711 17.9706 8.58758 18.448 7.98543C18.6391 7.74457 18.8852 7.55912 19.1862 7.42909C19.4515 7.31477 19.7465 7.26896 20.0711 7.29165C20.3984 7.31434 20.7143 7.38415 21.0189 7.50109C21.4151 7.65381 21.7057 7.79606 21.8907 7.92783C22.0809 8.06397 22.231 8.23807 22.341 8.45013C22.4387 8.63863 22.4741 8.85549 22.447 9.10072C22.3973 9.55713 22.2467 9.98431 21.9954 10.3823C21.7336 10.7968 21.5957 11.2506 21.5818 11.7436C21.5765 11.9304 21.6664 12.039 21.8514 12.0696C22.2528 12.135 22.6578 12.1808 23.0662 12.207C23.6587 12.2454 24.0602 12.3 24.2705 12.3707C25.1301 12.6586 25.597 13.2721 25.6711 14.2111C25.6999 14.5785 25.6327 14.9259 25.4696 15.2531C25.3072 15.5778 25.0952 15.8727 24.8334 16.138C24.4538 16.5238 24.1693 16.9627 23.9799 17.4549C23.8682 17.7446 23.8368 18.0435 23.8856 18.3516C24.0209 19.2033 24.4228 19.877 25.0912 20.3727C25.4508 20.6389 25.7471 20.8719 25.9801 21.0717C26.3152 21.3597 26.5347 21.6586 26.6385 21.9684C26.8549 22.6107 26.6664 23.1858 26.073 23.6937C25.7344 23.9834 25.3491 24.1842 24.9171 24.2959C23.6788 24.6153 22.5696 24.442 21.5896 23.7762C21.0835 23.4315 20.6619 23.1522 20.3251 22.9384C19.7631 22.5815 19.3032 22.3864 18.9454 22.3533C18.2996 22.2922 17.7612 22.5745 17.33 23.2002C17.1433 23.4707 16.9583 23.743 16.775 24.017C16.5263 24.3897 16.3308 24.655 16.1886 24.8129C15.3115 25.7816 14.2512 26.1525 13.0077 25.9256C12.2851 25.7938 11.6773 25.5159 11.1842 25.0917C10.6501 24.6327 10.2845 24.0358 10.0872 23.301C9.74863 22.0435 9.93407 20.871 10.6436 19.7837C10.7116 19.6789 10.7945 19.5275 10.8923 19.3294C10.9891 19.1313 11.0354 18.9677 11.031 18.8385C11.0206 18.5855 10.8875 18.3852 10.6318 18.2377C9.93363 17.8345 9.23374 17.4335 8.53211 17.0347C8.21183 16.8523 7.92952 16.5787 7.68517 16.2139C7.44256 15.8527 7.34613 15.4783 7.39587 15.0908C7.443 14.7234 7.62103 14.4149 7.92996 14.1653C8.41604 13.7717 9.00684 13.6897 9.70237 13.9192C10.2033 14.0842 10.6654 14.3246 11.0886 14.6405C11.497 14.9451 11.9264 15.2143 12.3767 15.4482C13.0714 15.8095 13.687 15.7724 14.2237 15.3369C14.3965 15.1973 14.4938 15.0354 14.5156 14.8513C14.5401 14.6479 14.4982 14.4485 14.39 14.253C14.2346 13.9703 14.0431 13.715 13.8153 13.4873C13.0814 12.7525 12.9994 12.0115 13.5692 11.2645C13.7342 11.0481 13.9135 10.9011 14.1072 10.8234C14.3446 10.7274 14.589 10.7169 14.8403 10.792C15.5323 10.9997 16.1567 11.1389 16.7135 11.2096ZM16.2684 11.923L14.5444 11.529C14.4999 11.5185 14.4567 11.5237 14.4227 11.542C14.1269 11.7044 13.9807 11.9409 13.9842 12.2515C13.9868 12.4226 14.0518 12.591 14.1792 12.7568C14.2805 12.8895 14.4053 13.0282 14.5536 13.1731C14.7735 13.3878 14.9529 13.6417 15.0916 13.9349C15.2339 14.2369 15.3019 14.534 15.2958 14.8264C15.2854 15.4015 15.0218 15.8322 14.5052 16.1184C13.5714 16.6359 12.6293 16.5787 11.679 15.9469C10.7033 15.2994 10.0637 14.8927 9.75997 14.7269C9.51911 14.596 9.25905 14.5401 8.97979 14.5593C8.67784 14.5803 8.44964 14.6833 8.29517 14.8683C8.09009 15.1144 8.10711 15.4207 8.34622 15.7872C8.53123 16.07 8.74591 16.2785 8.99026 16.4129C9.39344 16.6328 10.0589 17.0146 10.9865 17.5583C11.4674 17.8393 11.7357 18.2294 11.7916 18.7286C11.8134 18.931 11.7776 19.154 11.6842 19.3975C11.6022 19.6122 11.5049 19.8199 11.3923 20.0206C11.1052 20.532 10.9451 20.8335 10.9119 20.9251C10.6553 21.6364 10.6313 22.3629 10.8399 23.1046C11.1471 24.2016 11.8671 24.8779 12.9998 25.1336C13.8568 25.3274 14.6082 25.1642 15.2539 24.6441C15.4503 24.4861 15.6794 24.2239 15.9412 23.8573C16.2178 23.469 16.4155 23.1801 16.5342 22.9908C16.83 22.516 17.1734 22.1504 17.5644 21.8938C18.0452 21.5788 18.5954 21.4836 19.215 21.6084C19.8041 21.7271 20.312 21.937 20.7387 22.2381C21.2484 22.5967 21.7044 22.8991 22.1067 23.1452C22.4784 23.3713 22.8039 23.5166 23.0832 23.5811C23.4262 23.6614 23.7875 23.6854 24.1671 23.6531C24.7675 23.6025 25.268 23.3865 25.6685 23.0052C25.8518 22.8306 25.9443 22.6408 25.946 22.4357C25.9478 22.1896 25.854 21.9763 25.6646 21.7956C25.4552 21.5967 25.2021 21.3898 24.9054 21.1751C24.5371 20.9081 24.2853 20.7022 24.1501 20.5573C23.684 20.0555 23.3568 19.4638 23.1683 18.7823C22.9964 18.1592 23.0452 17.5588 23.3149 16.981C23.5034 16.5752 23.7443 16.2039 24.0375 15.8671C24.2818 15.5861 24.5113 15.2937 24.726 14.99C24.8945 14.7518 24.9481 14.4651 24.887 14.13C24.8129 13.7259 24.6344 13.4297 24.3516 13.2412C24.1762 13.1242 23.866 13.0509 23.4209 13.0212C22.4924 12.961 21.8793 12.8834 21.5818 12.7882C21.0931 12.632 20.8422 12.2939 20.8291 11.7737C20.8134 11.1498 20.967 10.5734 21.2898 10.0445C21.4792 9.73559 21.6158 9.42361 21.6996 9.10857C21.7589 8.88516 21.69 8.71325 21.4927 8.59282C21.1515 8.38163 20.7889 8.218 20.4049 8.10193C20.103 8.01117 19.8198 8.0151 19.5554 8.11371C19.3215 8.20185 19.1177 8.37377 18.9441 8.62947C18.7207 8.95847 18.5902 9.33067 18.5527 9.74607C18.5326 9.96424 18.5143 10.1824 18.4977 10.4006C18.4741 10.6947 18.4388 10.9094 18.3917 11.0446C18.1901 11.6276 17.735 11.9365 17.0264 11.9714C16.7296 11.9862 16.477 11.9701 16.2684 11.923Z" stroke="white" stroke-width="0.6" mask="url(#path-2-outside-1_642_1746)"/>
          </g>
          <defs>
          <clipPath id="clip0_642_1746">
          <rect width="35" height="35" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        Collection
        </NavLink>
        <NavLink
          to="/scan"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
            }
          >
          <svg width="35" height="30" viewBox="0 0 35 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_642_392)">
            <path class="stroke-svg" d="M9.57933 5.03828C7.93335 5.09357 6.55568 5.16183 5.44554 5.22889C3.39881 5.35245 1.78245 6.91478 1.60068 8.95715C1.41377 11.0571 1.22852 13.9486 1.22852 17.16C1.22852 20.3716 1.41377 23.2631 1.60068 25.3629C1.78245 27.4054 3.3988 28.9676 5.44553 29.0913C7.95251 29.2427 11.8238 29.4005 17.069 29.4005C22.3143 29.4005 26.1856 29.2427 28.6925 29.0913C30.7392 28.9676 32.3556 27.4054 32.5374 25.363C32.7243 23.2631 32.9096 20.3716 32.9096 17.16C32.9096 13.9486 32.7243 11.0571 32.5374 8.95715C32.3556 6.91478 30.7392 5.35245 28.6925 5.22889C27.5824 5.16183 26.2048 5.09357 24.5587 5.03828L23.4566 2.76715C22.9201 1.66152 21.8781 0.889051 20.6527 0.796641C19.7385 0.727704 18.5267 0.668106 17.069 0.668106C15.6114 0.668106 14.3995 0.727704 13.4854 0.796641C12.2599 0.889051 11.218 1.66152 10.6815 2.76715L9.57933 5.03828Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path class="stroke-svg" d="M17.0691 23.2974C20.8184 23.2974 23.8579 20.258 23.8579 16.5086C23.8579 12.7593 20.8184 9.71983 17.0691 9.71983C13.3197 9.71983 10.2803 12.7593 10.2803 16.5086C10.2803 20.258 13.3197 23.2974 17.0691 23.2974Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_642_392">
            <rect width="34.1379" height="30" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          Scan
        </NavLink>
        <NavLink
            to="/search"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
        <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg" className='search__icon'>
          <path class="stroke-svg" d="M27.3468 23.3737C28.5951 21.2832 29.3123 18.839 29.3123 16.2273C29.3123 8.51725 23.0621 2.26704 15.3521 2.26704C7.6421 2.26704 1.39185 8.51725 1.39185 16.2273C1.39185 23.9373 7.6421 30.1875 15.3521 30.1875C18.0008 30.1875 20.4773 29.4499 22.5873 28.1687C22.6068 28.1924 22.6265 28.2161 22.6461 28.2397C23.828 29.6656 24.9912 31.0689 26.2937 32.4528C27.4597 33.6915 29.2195 33.8497 30.4557 32.681C30.6767 32.4721 30.9166 32.2391 31.1766 31.9791C31.4366 31.7191 31.6697 31.4791 31.8786 31.2582C33.0471 30.022 32.889 28.2623 31.6503 27.0963C30.2665 25.7937 28.863 24.6305 27.4372 23.4487C27.4071 23.4237 27.377 23.3987 27.3468 23.3737Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path class="stroke-svg" d="M15.3522 22.6705C18.9107 22.6705 21.7954 19.7857 21.7954 16.2273C21.7954 12.6688 18.9107 9.78409 15.3522 9.78409C11.7938 9.78409 8.90906 12.6688 8.90906 16.2273C8.90906 19.7857 11.7938 22.6705 15.3522 22.6705Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Recherche
        </NavLink>
      </footer>
    </>
  );
}

export default Footer;