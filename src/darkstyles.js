const darkstyles = `

    html {
        background-color: #17171f !important;
    }
    html, body, input, textarea, select, button {
        background-color: #4a4747;
    }
    html, body, input, textarea, select, button {
        border-color: white;
        color: #e8e6e3;
    }
    a {
        color: #3391ff;
    }
    table {
        border-color: #545b5e;
    }
    ::placeholder {
        color: #b2aba1;
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        background-color: #555b00 !important;
        color: #e8e6e3 !important;
    }
    ::-webkit-scrollbar {
        background-color: #202324;
        color: #aba499;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #454a4d;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #575e62;
    }
    ::-webkit-scrollbar-thumb:active {
        background-color: #484e51;
    }
    ::-webkit-scrollbar-corner {
        background-color: #181a1b;
    }
    ::selection {
        background-color: #004daa !important;
        color: #e8e6e3 !important;
    }
    ::-moz-selection {
        background-color: #004daa !important;
        color: #e8e6e3 !important;
    }

    /* Invert Style */
    .jfk-bubble.gtx-bubble, .captcheck_answer_label > input + img, span#closed_text > img[src^="https://www.gstatic.com/images/branding/googlelogo"], span[data-href^="https://www.hcaptcha.com/"] > #icon, #bit-notification-bar-iframe, ::-webkit-calendar-picker-indicator {
        filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
    }

    /* Variables Style */
    :root {
    --darkreader-neutral-background: #131516;
    --darkreader-neutral-text: #d8d4cf;
    --darkreader-selection-background: #004daa;
    --darkreader-selection-text: #e8e6e3;
    }

    /* Modified CSS */
    :root {
        --bs-blue: #0d6efd; --bs-indigo: #6610f2; --bs-purple: #6f42c1; --bs-pink: #d63384; --bs-red: #dc3545; --bs-orange: #fd7e14; --bs-yellow: #ffc107; --bs-green: #198754; --bs-teal: #20c997; --bs-cyan: #0dcaf0; --bs-white: #fff; --bs-gray: #6c757d; --bs-gray-dark: #343a40; --bs-gray-100: #f8f9fa; --bs-gray-200: #e9ecef; --bs-gray-300: #dee2e6; --bs-gray-400: #ced4da; --bs-gray-500: #adb5bd; --bs-gray-600: #6c757d; --bs-gray-700: #495057; --bs-gray-800: #343a40; --bs-gray-900: #212529; --bs-primary: #0d6efd; --bs-secondary: #6c757d; --bs-success: #198754; --bs-info: #0dcaf0; --bs-warning: #ffc107; --bs-danger: #dc3545; --bs-light: #f8f9fa; --bs-dark: #212529; --darkreader-bg--bs-primary-rgb: 13,110,253; --darkreader-text--bs-primary-rgb: 13,110,253; --darkreader-bg--bs-secondary-rgb: 108,117,125; --darkreader-text--bs-secondary-rgb: 108,117,125; --darkreader-bg--bs-success-rgb: 25,135,84; --darkreader-text--bs-success-rgb: 25,135,84; --darkreader-bg--bs-info-rgb: 13,202,240; --darkreader-text--bs-info-rgb: 13,202,240; --darkreader-bg--bs-warning-rgb: 255,193,7; --darkreader-text--bs-warning-rgb: 255,193,7; --darkreader-bg--bs-danger-rgb: 220,53,69; --darkreader-text--bs-danger-rgb: 220,53,69; --darkreader-bg--bs-light-rgb: 248,249,250; --darkreader-text--bs-light-rgb: 248,249,250; --darkreader-bg--bs-dark-rgb: 33,37,41; --darkreader-text--bs-dark-rgb: 33,37,41; --darkreader-bg--bs-white-rgb: 255,255,255; --darkreader-text--bs-white-rgb: 255,255,255; --darkreader-bg--bs-black-rgb: 0,0,0; --darkreader-text--bs-black-rgb: 0,0,0; --darkreader-text--bs-body-color-rgb: 33,37,41; --darkreader-bg--bs-body-bg-rgb: 255,255,255; --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",
        monospace;
        --darkreader-bgimg--bs-gradient: linear-gradient(180deg,
        rgba(24, 26, 27, 0.15),
        rgba(24, 26, 27, 0));
        --bs-body-font-family: var(--bs-font-sans-serif);
        --bs-body-font-size: 1rem;
        --bs-body-font-weight: 400;
        --bs-body-line-height: 1.5;
        --darkreader-text--bs-body-color: #d1cdc7;
        --darkreader-bg--bs-body-bg: #181a1b;
    }
    body {
        color: var(--darkreader-text--bs-body-color);
        background-color: #17171f;
        -webkit-tap-highlight-color: transparent;
    }
    hr {
        color: inherit;
        background-color: currentcolor;
        border-color: initial;
    }
    abbr[data-bs-original-title],
    abbr[title] {
        text-decoration-color: initial;
    }
    .mark,
    mark {
        background-color: rgb(63, 54, 7);
    }
    a {
        color: rgb(35, 148, 253);
        text-decoration-color: initial;
    }
    a:hover {
        color: rgb(85, 169, 247);
    }
    a:not([href]):not([class]),
    a:not([href]):not([class]):hover {
        color: inherit;
        text-decoration-color: initial;
    }
    pre code {
        color: inherit;
    }
    code {
        color: rgb(218, 70, 143);
    }
    a > code {
        color: inherit;
    }
    kbd {
        color: rgb(232, 230, 227);
        background-color: rgb(28, 30, 31);
    }
    caption {
        color: rgb(158, 150, 137);
    }
    tbody,
    td,
    tfoot,
    th,
    thead,
    tr {
        border-color: inherit;
    }
    button:focus:not(:focus-visible) {
        outline-color: initial;
    }
    fieldset {
        border-color: initial;
    }
    iframe {
        border-color: initial;
    }
    .list-unstyled {
        list-style-image: initial;
    }
    .list-inline {
        list-style-image: initial;
    }
    .blockquote-footer {
        color: rgb(158, 150, 137);
    }
    .img-thumbnail {
        background-color: rgb(24, 26, 27);
        border-color: rgb(56, 61, 63);
    }
    .figure-caption {
        color: rgb(158, 150, 137);
    }
    .row {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
    }
    .g-0,
    .gx-0 {
        --bs-gutter-x: 0;
    }
    .g-0,
    .gy-0 {
        --bs-gutter-y: 0;
    }
    .g-1,
    .gx-1 {
        --bs-gutter-x: 0.25rem;
    }
    .g-1,
    .gy-1 {
        --bs-gutter-y: 0.25rem;
    }
    .g-2,
    .gx-2 {
        --bs-gutter-x: 0.5rem;
    }
    .g-2,
    .gy-2 {
        --bs-gutter-y: 0.5rem;
    }
    .g-3,
    .gx-3 {
        --bs-gutter-x: 1rem;
    }
    .g-3,
    .gy-3 {
        --bs-gutter-y: 1rem;
    }
    .g-4,
    .gx-4 {
        --bs-gutter-x: 1.5rem;
    }
    .g-4,
    .gy-4 {
        --bs-gutter-y: 1.5rem;
    }
    .g-5,
    .gx-5 {
        --bs-gutter-x: 3rem;
    }
    .g-5,
    .gy-5 {
        --bs-gutter-y: 3rem;
    }
    @media (min-width: 576px) {
        .g-sm-0,
        .gx-sm-0 {
            --bs-gutter-x: 0;
        }
        .g-sm-0,
        .gy-sm-0 {
            --bs-gutter-y: 0;
        }
        .g-sm-1,
        .gx-sm-1 {
            --bs-gutter-x: 0.25rem;
        }
        .g-sm-1,
        .gy-sm-1 {
            --bs-gutter-y: 0.25rem;
        }
        .g-sm-2,
        .gx-sm-2 {
            --bs-gutter-x: 0.5rem;
        }
        .g-sm-2,
        .gy-sm-2 {
            --bs-gutter-y: 0.5rem;
        }
        .g-sm-3,
        .gx-sm-3 {
            --bs-gutter-x: 1rem;
        }
        .g-sm-3,
        .gy-sm-3 {
            --bs-gutter-y: 1rem;
        }
        .g-sm-4,
        .gx-sm-4 {
            --bs-gutter-x: 1.5rem;
        }
        .g-sm-4,
        .gy-sm-4 {
            --bs-gutter-y: 1.5rem;
        }
        .g-sm-5,
        .gx-sm-5 {
            --bs-gutter-x: 3rem;
        }
        .g-sm-5,
        .gy-sm-5 {
            --bs-gutter-y: 3rem;
        }
    }
    @media (min-width: 768px) {
        .g-md-0,
        .gx-md-0 {
            --bs-gutter-x: 0;
        }
        .g-md-0,
        .gy-md-0 {
            --bs-gutter-y: 0;
        }
        .g-md-1,
        .gx-md-1 {
            --bs-gutter-x: 0.25rem;
        }
        .g-md-1,
        .gy-md-1 {
            --bs-gutter-y: 0.25rem;
        }
        .g-md-2,
        .gx-md-2 {
            --bs-gutter-x: 0.5rem;
        }
        .g-md-2,
        .gy-md-2 {
            --bs-gutter-y: 0.5rem;
        }
        .g-md-3,
        .gx-md-3 {
            --bs-gutter-x: 1rem;
        }
        .g-md-3,
        .gy-md-3 {
            --bs-gutter-y: 1rem;
        }
        .g-md-4,
        .gx-md-4 {
            --bs-gutter-x: 1.5rem;
        }
        .g-md-4,
        .gy-md-4 {
            --bs-gutter-y: 1.5rem;
        }
        .g-md-5,
        .gx-md-5 {
            --bs-gutter-x: 3rem;
        }
        .g-md-5,
        .gy-md-5 {
            --bs-gutter-y: 3rem;
        }
    }
    @media (min-width: 992px) {
        .g-lg-0,
        .gx-lg-0 {
            --bs-gutter-x: 0;
        }
        .g-lg-0,
        .gy-lg-0 {
            --bs-gutter-y: 0;
        }
        .g-lg-1,
        .gx-lg-1 {
            --bs-gutter-x: 0.25rem;
        }
        .g-lg-1,
        .gy-lg-1 {
            --bs-gutter-y: 0.25rem;
        }
        .g-lg-2,
        .gx-lg-2 {
            --bs-gutter-x: 0.5rem;
        }
        .g-lg-2,
        .gy-lg-2 {
            --bs-gutter-y: 0.5rem;
        }
        .g-lg-3,
        .gx-lg-3 {
            --bs-gutter-x: 1rem;
        }
        .g-lg-3,
        .gy-lg-3 {
            --bs-gutter-y: 1rem;
        }
        .g-lg-4,
        .gx-lg-4 {
            --bs-gutter-x: 1.5rem;
        }
        .g-lg-4,
        .gy-lg-4 {
            --bs-gutter-y: 1.5rem;
        }
        .g-lg-5,
        .gx-lg-5 {
            --bs-gutter-x: 3rem;
        }
        .g-lg-5,
        .gy-lg-5 {
            --bs-gutter-y: 3rem;
        }
    }
    @media (min-width: 1200px) {
        .g-xl-0,
        .gx-xl-0 {
            --bs-gutter-x: 0;
        }
        .g-xl-0,
        .gy-xl-0 {
            --bs-gutter-y: 0;
        }
        .g-xl-1,
        .gx-xl-1 {
            --bs-gutter-x: 0.25rem;
        }
        .g-xl-1,
        .gy-xl-1 {
            --bs-gutter-y: 0.25rem;
        }
        .g-xl-2,
        .gx-xl-2 {
            --bs-gutter-x: 0.5rem;
        }
        .g-xl-2,
        .gy-xl-2 {
            --bs-gutter-y: 0.5rem;
        }
        .g-xl-3,
        .gx-xl-3 {
            --bs-gutter-x: 1rem;
        }
        .g-xl-3,
        .gy-xl-3 {
            --bs-gutter-y: 1rem;
        }
        .g-xl-4,
        .gx-xl-4 {
            --bs-gutter-x: 1.5rem;
        }
        .g-xl-4,
        .gy-xl-4 {
            --bs-gutter-y: 1.5rem;
        }
        .g-xl-5,
        .gx-xl-5 {
            --bs-gutter-x: 3rem;
        }
        .g-xl-5,
        .gy-xl-5 {
            --bs-gutter-y: 3rem;
        }
    }
    @media (min-width: 1400px) {
        .g-xxl-0,
        .gx-xxl-0 {
            --bs-gutter-x: 0;
        }
        .g-xxl-0,
        .gy-xxl-0 {
            --bs-gutter-y: 0;
        }
        .g-xxl-1,
        .gx-xxl-1 {
            --bs-gutter-x: 0.25rem;
        }
        .g-xxl-1,
        .gy-xxl-1 {
            --bs-gutter-y: 0.25rem;
        }
        .g-xxl-2,
        .gx-xxl-2 {
            --bs-gutter-x: 0.5rem;
        }
        .g-xxl-2,
        .gy-xxl-2 {
            --bs-gutter-y: 0.5rem;
        }
        .g-xxl-3,
        .gx-xxl-3 {
            --bs-gutter-x: 1rem;
        }
        .g-xxl-3,
        .gy-xxl-3 {
            --bs-gutter-y: 1rem;
        }
        .g-xxl-4,
        .gx-xxl-4 {
            --bs-gutter-x: 1.5rem;
        }
        .g-xxl-4,
        .gy-xxl-4 {
            --bs-gutter-y: 1.5rem;
        }
        .g-xxl-5,
        .gx-xxl-5 {
            --bs-gutter-x: 3rem;
        }
        .g-xxl-5,
        .gy-xxl-5 {
            --bs-gutter-y: 3rem;
        }
    }
    .table {
        --darkreader-bg--bs-table-bg: rgba(0, 0, 0, 0);
        --darkreader-bg--bs-table-accent-bg: rgba(0, 0, 0, 0);
        --darkreader-text--bs-table-striped-color: #d1cdc7;
        --darkreader-bg--bs-table-striped-bg: rgba(0, 0, 0, 0.05);
        --darkreader-text--bs-table-active-color: #d1cdc7;
        --darkreader-bg--bs-table-active-bg: rgba(0, 0, 0, 0.1);
        --darkreader-text--bs-table-hover-color: #d1cdc7;
        --darkreader-bg--bs-table-hover-bg: rgba(0, 0, 0, 0.07);
        color: rgb(209, 205, 199);
        border-color: rgb(56, 61, 63);
    }
    .table > :not(caption) > * > * {
        background-color: var(--darkreader-bg--bs-table-bg);
        box-shadow: inset 0 0 0 9999px var(--darkreader-bg--bs-table-accent-bg);
    }
    .table > :not(:first-child) {
        border-top-color: currentcolor;
    }
    .table-striped > tbody > tr:nth-of-type(2n+1) > * {
        --darkreader-bg--bs-table-accent-bg: var(--darkreader-bg--bs-table-striped-bg);
        color: var(--darkreader-text--bs-table-striped-color);
    }
    .table-active {
        --darkreader-bg--bs-table-accent-bg: var(--darkreader-bg--bs-table-active-bg);
        color: var(--darkreader-text--bs-table-active-color);
    }
    .table-hover > tbody > tr:hover > * {
        --darkreader-bg--bs-table-accent-bg: var(--darkreader-bg--bs-table-hover-bg);
        color: var(--darkreader-text--bs-table-hover-color);
    }
    .table-primary {
        --darkreader-bg--bs-table-bg: #26292a;
        --darkreader-bg--bs-table-striped-bg: #2c3032;
        --darkreader-text--bs-table-striped-color: #e8e6e3;
        --darkreader-bg--bs-table-active-bg: #333739;
        --darkreader-text--bs-table-active-color: #e8e6e3;
        --darkreader-bg--bs-table-hover-bg: #2f3335;
        --darkreader-text--bs-table-hover-color: #e8e6e3;
        color: rgb(232, 230, 227);
        border-color: rgb(35, 58, 96);
    }
    .table-secondary {
        --darkreader-bg--bs-table-bg: #282b2c;
        --darkreader-bg--bs-table-striped-bg: #2e3233;
        --darkreader-text--bs-table-striped-color: #e8e6e3;
        --darkreader-bg--bs-table-active-bg: #35393b;
        --darkreader-text--bs-table-active-color: #e8e6e3;
        --darkreader-bg--bs-table-hover-bg: #313537;
        --darkreader-text--bs-table-hover-color: #e8e6e3;
        color: rgb(232, 230, 227);
        border-color: rgb(62, 67, 70);
    }
    .nav{
        background-color: #121217;
        border: 2px solid white;
        border-radius: 5px;
    }
    .nav_glav{
        background-color: #a7a1a1;
    }
    .table-success {
        --darkreader-bg--bs-table-bg: #203d33;
        --darkreader-bg--bs-table-striped-bg: #2a4139;
        --darkreader-text--bs-table-striped-color: #e8e6e3;
        --darkreader-bg--bs-table-active-bg: #31463f;
        --darkreader-text--bs-table-active-color: #e8e6e3;
        --darkreader-bg--bs-table-hover-bg: #2d443c;
        --darkreader-text--bs-table-hover-color: #e8e6e3;
        color: rgb(232, 230, 227);
        border-color: rgb(64, 69, 72);
    }
    .table-info {
        --darkreader-bg--bs-table-bg: #05404d;
        --darkreader-bg--bs-table-striped-bg: #15424b;
        --darkreader-text--bs-table-striped-color: #e8e6e3;
        --darkreader-bg--bs-table-active-bg: #20464e;
        --darkreader-text--bs-table-active-color: #e8e6e3;
        --darkreader-bg--bs-table-hover-bg: #1a444c;
        --darkreader-text--bs-table-hover-color: #e8e6e3;
        color: rgb(232, 230, 227);
        border-color: rgb(38, 84, 93);
    }
    .table-warning {
        --darkreader-bg--bs-table-bg: #513e00;
        --darkreader-bg--bs-table-striped-bg: #4e4011;
        --darkreader-text--bs-table-striped-color: #e8e6e3;
        --darkreader-bg--bs-table-active-bg: #50431c;
        --darkreader-text--bs-table-active-color: #e8e6e3;
        --darkreader-bg--bs-table-hover-bg: #4e4117;
        --darkreader-text--bs-table-hover-color: #e8e6e3;
        color: rgb(232, 230, 227);
        border-color: rgb(96, 81, 34);
    }
    .table-danger {
        --darkreader-bg--bs-table-bg: #430c11;
        --darkreader-bg--bs-table-striped-bg: #44191d;
        --darkreader-text--bs-table-striped-color: #e8e6e3;
        --darkreader-bg--bs-table-active-bg: #462527;
        --darkreader-text--bs-table-active-color: #e8e6e3;
        --darkreader-bg--bs-table-hover-bg: #442023;
        --darkreader-text--bs-table-hover-color: #e8e6e3;
        color: rgb(232, 230, 227);
        border-color: rgb(85, 45, 47);
    }
    .table-light {
        --darkreader-bg--bs-table-bg: #1b1e1f;
        --darkreader-bg--bs-table-striped-bg: #222526;
        --darkreader-text--bs-table-striped-color: #e8e6e3;
        --darkreader-bg--bs-table-active-bg: #2a2d2f;
        --darkreader-text--bs-table-active-color: #e8e6e3;
        --darkreader-bg--bs-table-hover-bg: #26292b;
        --darkreader-text--bs-table-hover-color: #e8e6e3;
        color: rgb(232, 230, 227);
        border-color: rgb(57, 61, 64);
    }
    .table-dark {
        --darkreader-bg--bs-table-bg: #1c1e1f;
        --darkreader-bg--bs-table-striped-bg: #242729;
        --darkreader-text--bs-table-striped-color: #e8e6e3;
        --darkreader-bg--bs-table-active-bg: #2c3032;
        --darkreader-text--bs-table-active-color: #e8e6e3;
        --darkreader-bg--bs-table-hover-bg: #282c2d;
        --darkreader-text--bs-table-hover-color: #e8e6e3;
        color: rgb(232, 230, 227);
        border-color: rgb(121, 112, 99);
    }
    .form-text {
        color: rgb(158, 150, 137);
    }
    .form-control {
        color: rgb(209, 205, 199);
        background-color: #111314;
        border-color: rgb(60, 65, 68);
    }
    .form-control:focus {
        color: rgb(209, 205, 199);
        background-color: rgb(24, 26, 27);
        border-color: rgb(1, 57, 137);
        outline-color: initial;
        box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
    }
    .form-control::placeholder {
        color: rgb(158, 150, 137);
    }
    .form-control:disabled,
    .form-control[readonly] {
        background-color: rgb(35, 38, 39);
    }
    .form-control::-webkit-file-upload-button {
        color: rgb(209, 205, 199);
        background-color: rgb(35, 38, 39);
        border-color: inherit;
    }
    .form-control::file-selector-button {
        color: rgb(209, 205, 199);
        background-color: rgb(35, 38, 39);
        border-color: inherit;
    }
    .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
        background-color: rgb(42, 45, 47);
    }
    .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
        background-color: rgb(42, 45, 47);
    }
    .form-control::-webkit-file-upload-button {
        color: rgb(209, 205, 199);
        background-color: rgb(35, 38, 39);
        border-color: inherit;
    }
    .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
        background-color: rgb(42, 45, 47);
    }
    .form-control-plaintext {
        color: rgb(209, 205, 199);
        background-color: transparent;
        border-color: transparent;
    }
    .form-select {
        color: rgb(209, 205, 199);
        background-color: rgb(24, 26, 27);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
        border-color: rgb(60, 65, 68);
    }
    .form-select:focus {
        border-color: rgb(1, 57, 137);
        outline-color: initial;
        box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
    }
    .form-select[multiple],
    .form-select[size]:not([size="1"]) {
        background-image: none;
    }
    .form-select:disabled {
        background-color: rgb(35, 38, 39);
    }
    .form-check-input {
        background-color: rgb(24, 26, 27);
        border-color: rgba(140, 130, 115, 0.25);
    }
    .form-check-input:focus {
        border-color: rgb(1, 57, 137);
        outline-color: initial;
        box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
    }
    .form-check-input:checked {
        background-color: rgb(2, 80, 196);
        border-color: rgb(1, 71, 174); 
    }
    .form-check-input:checked[type="checkbox"] {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"); 
    }
    .form-check-input:checked[type="radio"] {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e"); 
    }
    .form-check-input[type="checkbox"]:indeterminate {
        background-color: rgb(2, 80, 196);
        border-color: rgb(1, 71, 174);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
    }
    .form-switch .form-check-input {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
    }
    .form-switch .form-check-input:focus {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
    }
    .form-switch .form-check-input:checked {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    }
    .form-range {
        background-color: transparent;
    }
    .form-range:focus {
        outline-color: initial;
    }
    .form-range:focus::-webkit-slider-thumb {
        box-shadow: rgb(24, 26, 27) 0px 0px 0px 1px,
        rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
    }
    .form-range::-webkit-slider-thumb {
        background-color: rgb(2, 80, 196);
        border-color: initial;
    }
    .form-range::-webkit-slider-thumb:active {
        background-color: rgb(45, 49, 51);
    }
    .form-range::-webkit-slider-runnable-track {
        color: transparent;
        background-color: rgb(40, 44, 45);
        border-color: transparent;
    }
    .form-range:disabled::-webkit-slider-thumb {
        background-color: rgb(66, 71, 74);
    }
    .form-floating > label {
        border-color: transparent;
    }
    .form-floating > .form-control::placeholder {
        color: transparent;
    }
    .input-group-text {
        color: rgb(209, 205, 199);
        background-color: rgb(35, 38, 39);
        border-color: rgb(60, 65, 68);
    }
    .valid-feedback {
        color: rgb(117, 230, 178);
    }
    .valid-tooltip {
        color: rgb(232, 230, 227);
        background-color: rgba(20, 108, 67, 0.9);
    }
    .form-control.is-valid,
    .was-validated .form-control:valid {
        border-color: rgb(32, 175, 109);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    }
    .form-control.is-valid:focus,
    .was-validated .form-control:valid:focus {
        border-color: rgb(32, 175, 109);
        box-shadow: rgba(20, 108, 67, 0.25) 0px 0px 0px 0.25rem;
    }
    .form-select.is-valid,
    .was-validated .form-select:valid {
        border-color: rgb(32, 175, 109);
    }
    .form-select.is-valid:not([multiple]):not([size]),
    .form-select.is-valid:not([multiple])[size="1"],
    .was-validated .form-select:valid:not([multiple]):not([size]),
    .was-validated .form-select:valid:not([multiple])[size="1"] {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),
        url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    }
    .form-select.is-valid:focus,
    .was-validated .form-select:valid:focus {
        border-color: rgb(32, 175, 109);
        box-shadow: rgba(20, 108, 67, 0.25) 0px 0px 0px 0.25rem;
    }
    .form-check-input.is-valid,
    .was-validated .form-check-input:valid {
        border-color: rgb(32, 175, 109);
    }
    .form-check-input.is-valid:checked,
    .was-validated .form-check-input:valid:checked {
        background-color: rgb(20, 108, 67);
    }
    .form-check-input.is-valid:focus,
    .was-validated .form-check-input:valid:focus {
        box-shadow: rgba(20, 108, 67, 0.25) 0px 0px 0px 0.25rem;
    }
    .form-check-input.is-valid ~ .form-check-label,
    .was-validated .form-check-input:valid ~ .form-check-label {
        color: rgb(117, 230, 178);
    }
    .invalid-feedback {
        color: rgb(223, 70, 85);
    }
    .invalid-tooltip {
        color: rgb(232, 230, 227);
        background-color: rgba(165, 29, 42, 0.9);
    }
    .form-control.is-invalid,
    .was-validated .form-control:invalid {
        border-color: rgb(148, 26, 37);
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMTInIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNkYzM1NDUnJTNlJTNjY2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8lM2UlM2NwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvJTNlJTNjY2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nJTIzZGMzNTQ1JyBzdHJva2U9J25vbmUnLyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+");
    }
    .form-control.is-invalid:focus,
    .was-validated .form-control:invalid:focus {
        border-color: rgb(148, 26, 37);
        box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.25rem;
    }
    .form-select.is-invalid,
    .was-validated .form-select:invalid {
        border-color: rgb(148, 26, 37);
    }
    .form-select.is-invalid:not([multiple]):not([size]),
    .form-select.is-invalid:not([multiple])[size="1"],
    .was-validated .form-select:invalid:not([multiple]):not([size]),
    .was-validated .form-select:invalid:not([multiple])[size="1"] {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"),
        url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiPjxkZWZzPjxmaWx0ZXIgaWQ9ImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4yNDkgLTAuNjE0IC0wLjY3MiAwLjAwMCAxLjAzNSAtMC42NDYgMC4yODggLTAuNjY0IDAuMDAwIDEuMDIwIC0wLjYzNiAtMC42MDkgMC4yNTAgMC4wMDAgMC45OTQgMC4wMDAgMC4wMDAgMC4wMDAgMS4wMDAgMC4wMDAiIC8+PC9maWx0ZXI+PC9kZWZzPjxpbWFnZSB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbHRlcj0idXJsKCNkYXJrcmVhZGVyLWltYWdlLWZpbHRlcikiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMTInIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPSclMjNkYzM1NDUnJTNlJTNjY2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8lM2UlM2NwYXRoIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J001LjggMy42aC40TDYgNi41eicvJTNlJTNjY2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nJTIzZGMzNTQ1JyBzdHJva2U9J25vbmUnLyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+");
    }
    .form-select.is-invalid:focus,
    .was-validated .form-select:invalid:focus {
        border-color: rgb(148, 26, 37);
        box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.25rem;
    }
    .form-check-input.is-invalid,
    .was-validated .form-check-input:invalid {
        border-color: rgb(148, 26, 37);
    }
    .form-check-input.is-invalid:checked,
    .was-validated .form-check-input:invalid:checked {
        background-color: rgb(165, 29, 42);
    }
    .form-check-input.is-invalid:focus,
    .was-validated .form-check-input:invalid:focus {
        box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.25rem;
    }
    .form-check-input.is-invalid ~ .form-check-label,
    .was-validated .form-check-input:invalid ~ .form-check-label {
        color: rgb(223, 70, 85);
    }
    .btn {
        color: rgb(209, 205, 199);
        text-decoration-color: initial;
        background-color: transparent;
        border-color: transparent;
    }
    .btn:hover {
        color: rgb(209, 205, 199);
    }
    .btn-check:focus + .btn,
    .btn:focus {
        outline-color: initial;
        box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
    }
    .btn-primary {
        color: rgb(232, 230, 227);
        background-color: #111314;
        border-color: white;
    }
    .btn-primary:hover {
        color: rgb(232, 230, 227);
        background-color: #807C7C;
        border-color: white;
    }
    .btn-check:focus + .btn-primary,
    .btn-primary:focus {
        color: rgb(232, 230, 227);
        background-color: #807C7C;
        border-color: white;
        box-shadow: white 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-primary,
    .btn-check:checked + .btn-primary,
    .btn-primary.active,
    .btn-primary:active,
    .show > .btn-primary.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: #807C7C;
        border-color: white;
    }
    .btn-check:active + .btn-primary:focus,
    .btn-check:checked + .btn-primary:focus,
    .btn-primary.active:focus,
    .btn-primary:active:focus,
    .show > .btn-primary.dropdown-toggle:focus {
        box-shadow: white 0px 0px 0px 0.25rem;
    }
    .btn-primary.disabled,
    .btn-primary:disabled {
        color: rgb(232, 230, 227);
        background-color: #807C7C;
        border-color: rgb(1, 71, 174);
    }
    .btn-secondary {
        color: rgb(232, 230, 227);
        background-color: rgb(88, 95, 99);
        border-color: rgb(102, 94, 83);
    }
    .btn-secondary:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(75, 81, 84);
        border-color: rgb(109, 102, 90);
    }
    .btn-check:focus + .btn-secondary,
    .btn-secondary:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(75, 81, 84);
        border-color: rgb(109, 102, 90);
        box-shadow: rgba(90, 98, 102, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-secondary,
    .btn-check:checked + .btn-secondary,
    .btn-secondary.active,
    .btn-secondary:active,
    .show > .btn-secondary.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(70, 76, 79);
        border-color: rgb(111, 103, 91);
    }
    .btn-check:active + .btn-secondary:focus,
    .btn-check:checked + .btn-secondary:focus,
    .btn-secondary.active:focus,
    .btn-secondary:active:focus,
    .show > .btn-secondary.dropdown-toggle:focus {
        box-shadow: rgba(90, 98, 102, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-secondary.disabled,
    .btn-secondary:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(88, 95, 99);
        border-color: rgb(102, 94, 83);
    }
    .btn-success {
        color: rgb(232, 230, 227);
        background-color: #111314;
        border-color: white;
    }
    .btn-success:hover {
        color: rgb(232, 230, 227);
        background-color: #807C7C;
        border-color: white;
    }
    .btn-check:focus + .btn-success,
    .btn-success:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(17, 92, 57);
        border-color: rgb(34, 183, 113);
        box-shadow: rgba(48, 122, 88, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-success,
    .btn-check:checked + .btn-success,
    .btn-success.active,
    .btn-success:active,
    .show > .btn-success.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(16, 86, 54);
        border-color: rgb(35, 184, 115);
    }
    .btn-check:active + .btn-success:focus,
    .btn-check:checked + .btn-success:focus,
    .btn-success.active:focus,
    .btn-success:active:focus,
    .show > .btn-success.dropdown-toggle:focus {
        box-shadow: rgba(48, 122, 88, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-success.disabled,
    .btn-success:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(20, 108, 67);
        border-color: rgb(32, 175, 109);
    }
    .btn-info {
        color: rgb(232, 230, 227);
        background-color: rgb(10, 162, 192);
        border-color: rgb(9, 143, 170);
    }
    .btn-info:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(11, 145, 172);
        border-color: rgb(10, 136, 162);
    }
    .btn-check:focus + .btn-info,
    .btn-info:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(11, 145, 172);
        border-color: rgb(10, 136, 162);
        box-shadow: rgba(9, 138, 163, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-info,
    .btn-check:checked + .btn-info,
    .btn-info.active,
    .btn-info:active,
    .show > .btn-info.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(10, 139, 164);
        border-color: rgb(10, 136, 162);
    }
    .btn-check:active + .btn-info:focus,
    .btn-check:checked + .btn-info:focus,
    .btn-info.active:focus,
    .btn-info:active:focus,
    .show > .btn-info.dropdown-toggle:focus {
        box-shadow: rgba(9, 138, 163, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-info.disabled,
    .btn-info:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(10, 162, 192);
        border-color: rgb(9, 143, 170);
    }
    .btn-warning {
        color: rgb(232, 230, 227);
        background-color: rgb(200, 150, 0);
        border-color: rgb(176, 132, 0);
    }
    .btn-warning:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(178, 133, 0);
        border-color: rgb(169, 126, 0);
    }
    .btn-check:focus + .btn-warning,
    .btn-warning:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(178, 133, 0);
        border-color: rgb(169, 126, 0);
        box-shadow: rgba(174, 131, 5, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-warning,
    .btn-check:checked + .btn-warning,
    .btn-warning.active,
    .btn-warning:active,
    .show > .btn-warning.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(170, 127, 0);
        border-color: rgb(169, 126, 0);
    }
    .btn-check:active + .btn-warning:focus,
    .btn-check:checked + .btn-warning:focus,
    .btn-warning.active:focus,
    .btn-warning:active:focus,
    .show > .btn-warning.dropdown-toggle:focus {
        box-shadow: rgba(174, 131, 5, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-warning.disabled,
    .btn-warning:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(200, 150, 0);
        border-color: rgb(176, 132, 0);
    }
    .btn-danger {
        color: rgb(232, 230, 227);
        background-color: rgb(165, 29, 42);
        border-color: rgb(148, 26, 37);
    }
    .btn-danger:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(150, 36, 47);
        border-color: rgb(153, 37, 48);
    }
    .btn-check:focus + .btn-danger,
    .btn-danger:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(150, 36, 47);
        border-color: rgb(153, 37, 48);
        box-shadow: rgba(147, 26, 38, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-danger,
    .btn-check:checked + .btn-danger,
    .btn-danger.active,
    .btn-danger:active,
    .show > .btn-danger.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(141, 34, 44);
        border-color: rgb(156, 38, 49);
    }
    .btn-check:active + .btn-danger:focus,
    .btn-check:checked + .btn-danger:focus,
    .btn-danger.active:focus,
    .btn-danger:active:focus,
    .show > .btn-danger.dropdown-toggle:focus {
        box-shadow: rgba(147, 26, 38, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-danger.disabled,
    .btn-danger:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(165, 29, 42);
        border-color: rgb(148, 26, 37);
    }
    .btn-light {
        color: black;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }
    .btn-light:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(27, 29, 30);
        border-color: rgb(49, 54, 56);
    }
    .btn-check:focus + .btn-light,
    .btn-light:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(27, 29, 30);
        border-color: rgb(49, 54, 56);
        box-shadow: rgba(48, 52, 54, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-light,
    .btn-check:checked + .btn-light,
    .btn-light.active,
    .btn-light:active,
    .show > .btn-light.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(27, 29, 30);
        border-color: rgb(49, 54, 56);
    }
    .btn-check:active + .btn-light:focus,
    .btn-check:checked + .btn-light:focus,
    .btn-light.active:focus,
    .btn-light:active:focus,
    .show > .btn-light.dropdown-toggle:focus {
        box-shadow: rgba(48, 52, 54, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-light.disabled,
    .btn-light:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(27, 30, 31);
        border-color: rgb(50, 54, 56);
    }
    .btn-dark {
        color: rgb(232, 230, 227);
        background-color: rgb(28, 30, 31);
        border-color: rgb(128, 119, 105);
    }
    .btn-dark:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(24, 26, 27);
        border-color: rgb(130, 121, 107);
    }
    .btn-check:focus + .btn-dark,
    .btn-dark:focus {
        color: rgb(232, 230, 227);
        background-color: rgb(24, 26, 27);
        border-color: rgb(130, 121, 107);
        box-shadow: rgba(52, 57, 59, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-dark,
    .btn-check:checked + .btn-dark,
    .btn-dark.active,
    .btn-dark:active,
    .show > .btn-dark.dropdown-toggle {
        color: rgb(232, 230, 227);
        background-color: rgb(22, 24, 25);
        border-color: rgb(131, 121, 107);
    }
    .btn-check:active + .btn-dark:focus,
    .btn-check:checked + .btn-dark:focus,
    .btn-dark.active:focus,
    .btn-dark:active:focus,
    .show > .btn-dark.dropdown-toggle:focus {
        box-shadow: rgba(52, 57, 59, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-dark.disabled,
    .btn-dark:disabled {
        color: rgb(232, 230, 227);
        background-color: rgb(28, 30, 31);
        border-color: rgb(128, 119, 105);
    }
    .btn-outline-primary {
        color: rgb(35, 148, 253);
        border-color: rgb(1, 71, 174);
    }
    .btn-outline-primary:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(2, 80, 196);
        border-color: rgb(1, 71, 174);
    }
    .btn-check:focus + .btn-outline-primary,
    .btn-outline-primary:focus {
        box-shadow: rgba(2, 80, 196, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-outline-primary,
    .btn-check:checked + .btn-outline-primary,
    .btn-outline-primary.active,
    .btn-outline-primary.dropdown-toggle.show,
    .btn-outline-primary:active {
        color: rgb(232, 230, 227);
        background-color: rgb(2, 80, 196);
        border-color: rgb(1, 71, 174);
    }
    .btn-check:active + .btn-outline-primary:focus,
    .btn-check:checked + .btn-outline-primary:focus,
    .btn-outline-primary.active:focus,
    .btn-outline-primary.dropdown-toggle.show:focus,
    .btn-outline-primary:active:focus {
        box-shadow: rgba(2, 80, 196, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-outline-primary.disabled,
    .btn-outline-primary:disabled {
        color: rgb(35, 148, 253);
        background-color: transparent;
    }
    .btn-outline-secondary {
        color: rgb(158, 150, 137);
        border-color: rgb(102, 94, 83);
    }
    .btn-outline-secondary:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(88, 95, 99);
        border-color: rgb(102, 94, 83);
    }
    .btn-check:focus + .btn-outline-secondary,
    .btn-outline-secondary:focus {
        box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-outline-secondary,
    .btn-check:checked + .btn-outline-secondary,
    .btn-outline-secondary.active,
    .btn-outline-secondary.dropdown-toggle.show,
    .btn-outline-secondary:active {
        color: rgb(232, 230, 227);
        background-color: rgb(88, 95, 99);
        border-color: rgb(102, 94, 83);
    }
    .btn-check:active + .btn-outline-secondary:focus,
    .btn-check:checked + .btn-outline-secondary:focus,
    .btn-outline-secondary.active:focus,
    .btn-outline-secondary.dropdown-toggle.show:focus,
    .btn-outline-secondary:active:focus {
        box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-outline-secondary.disabled,
    .btn-outline-secondary:disabled {
        color: rgb(158, 150, 137);
        background-color: transparent;
    }
    .btn-outline-success {
        color: rgb(117, 230, 178);
        border-color: rgb(32, 175, 109);
    }
    .btn-outline-success:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(20, 108, 67);
        border-color: rgb(32, 175, 109);
    }
    .btn-check:focus + .btn-outline-success,
    .btn-outline-success:focus {
        box-shadow: rgba(20, 108, 67, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-outline-success,
    .btn-check:checked + .btn-outline-success,
    .btn-outline-success.active,
    .btn-outline-success.dropdown-toggle.show,
    .btn-outline-success:active {
        color: rgb(232, 230, 227);
        background-color: rgb(20, 108, 67);
        border-color: rgb(32, 175, 109);
    }
    .btn-check:active + .btn-outline-success:focus,
    .btn-check:checked + .btn-outline-success:focus,
    .btn-outline-success.active:focus,
    .btn-outline-success.dropdown-toggle.show:focus,
    .btn-outline-success:active:focus {
        box-shadow: rgba(20, 108, 67, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-outline-success.disabled,
    .btn-outline-success:disabled {
        color: rgb(117, 230, 178);
        background-color: transparent;
    }
    .btn-outline-info {
        color: rgb(39, 209, 243);
        border-color: rgb(9, 143, 170);
    }
    .btn-outline-info:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(10, 162, 192);
        border-color: rgb(9, 143, 170);
    }
    .btn-check:focus + .btn-outline-info,
    .btn-outline-info:focus {
        box-shadow: rgba(10, 162, 192, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-outline-info,
    .btn-check:checked + .btn-outline-info,
    .btn-outline-info.active,
    .btn-outline-info.dropdown-toggle.show,
    .btn-outline-info:active {
        color: rgb(232, 230, 227);
        background-color: rgb(10, 162, 192);
        border-color: rgb(9, 143, 170);
    }
    .btn-check:active + .btn-outline-info:focus,
    .btn-check:checked + .btn-outline-info:focus,
    .btn-outline-info.active:focus,
    .btn-outline-info.dropdown-toggle.show:focus,
    .btn-outline-info:active:focus {
        box-shadow: rgba(10, 162, 192, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-outline-info.disabled,
    .btn-outline-info:disabled {
        color: rgb(39, 209, 243);
        background-color: transparent;
    }
    .btn-outline-warning {
        color: rgb(255, 199, 30);
        border-color: rgb(176, 132, 0);
    }
    .btn-outline-warning:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(200, 150, 0);
        border-color: rgb(176, 132, 0);
    }
    .btn-check:focus + .btn-outline-warning,
    .btn-outline-warning:focus {
        box-shadow: rgba(200, 150, 0, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-outline-warning,
    .btn-check:checked + .btn-outline-warning,
    .btn-outline-warning.active,
    .btn-outline-warning.dropdown-toggle.show,
    .btn-outline-warning:active {
        color: rgb(232, 230, 227);
        background-color: rgb(200, 150, 0);
        border-color: rgb(176, 132, 0);
    }
    .btn-check:active + .btn-outline-warning:focus,
    .btn-check:checked + .btn-outline-warning:focus,
    .btn-outline-warning.active:focus,
    .btn-outline-warning.dropdown-toggle.show:focus,
    .btn-outline-warning:active:focus {
        box-shadow: rgba(200, 150, 0, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-outline-warning.disabled,
    .btn-outline-warning:disabled {
        color: rgb(255, 199, 30);
        background-color: transparent;
    }
    .btn-outline-danger {
        color: rgb(223, 70, 85);
        border-color: rgb(148, 26, 37);
    }
    .btn-outline-danger:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(165, 29, 42);
        border-color: rgb(148, 26, 37);
    }
    .btn-check:focus + .btn-outline-danger,
    .btn-outline-danger:focus {
        box-shadow: rgba(165, 29, 42, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-outline-danger,
    .btn-check:checked + .btn-outline-danger,
    .btn-outline-danger.active,
    .btn-outline-danger.dropdown-toggle.show,
    .btn-outline-danger:active {
        color: rgb(232, 230, 227);
        background-color: rgb(165, 29, 42);
        border-color: rgb(148, 26, 37);
    }
    .btn-check:active + .btn-outline-danger:focus,
    .btn-check:checked + .btn-outline-danger:focus,
    .btn-outline-danger.active:focus,
    .btn-outline-danger.dropdown-toggle.show:focus,
    .btn-outline-danger:active:focus {
        box-shadow: rgba(165, 29, 42, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-outline-danger.disabled,
    .btn-outline-danger:disabled {
        color: rgb(223, 70, 85);
        background-color: transparent;
    }
    .btn-outline-light {
        color: rgb(228, 226, 222);
        border-color: rgb(50, 54, 56);
    }
    .btn-outline-light:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(27, 30, 31);
        border-color: rgb(50, 54, 56);
    }
    .btn-check:focus + .btn-outline-light,
    .btn-outline-light:focus {
        box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-outline-light,
    .btn-check:checked + .btn-outline-light,
    .btn-outline-light.active,
    .btn-outline-light.dropdown-toggle.show,
    .btn-outline-light:active {
        color: rgb(232, 230, 227);
        background-color: rgb(27, 30, 31);
        border-color: rgb(50, 54, 56);
    }
    .btn-check:active + .btn-outline-light:focus,
    .btn-check:checked + .btn-outline-light:focus,
    .btn-outline-light.active:focus,
    .btn-outline-light.dropdown-toggle.show:focus,
    .btn-outline-light:active:focus {
        box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-outline-light.disabled,
    .btn-outline-light:disabled {
        color: rgb(228, 226, 222);
        background-color: transparent;
    }
    .btn-outline-dark {
        color: rgb(209, 205, 199);
        border-color: rgb(128, 119, 105);
    }
    .btn-outline-dark:hover {
        color: rgb(232, 230, 227);
        background-color: rgb(28, 30, 31);
        border-color: rgb(128, 119, 105);
    }
    .btn-check:focus + .btn-outline-dark,
    .btn-outline-dark:focus {
        box-shadow: rgba(28, 30, 31, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-check:active + .btn-outline-dark,
    .btn-check:checked + .btn-outline-dark,
    .btn-outline-dark.active,
    .btn-outline-dark.dropdown-toggle.show,
    .btn-outline-dark:active {
        color: rgb(232, 230, 227);
        background-color: rgb(28, 30, 31);
        border-color: rgb(128, 119, 105);
    }
    .btn-check:active + .btn-outline-dark:focus,
    .btn-check:checked + .btn-outline-dark:focus,
    .btn-outline-dark.active:focus,
    .btn-outline-dark.dropdown-toggle.show:focus,
    .btn-outline-dark:active:focus {
        box-shadow: rgba(28, 30, 31, 0.5) 0px 0px 0px 0.25rem;
    }
    .btn-outline-dark.disabled,
    .btn-outline-dark:disabled {
        color: rgb(209, 205, 199);
        background-color: transparent;
    }
    .btn-link {
        color: rgb(35, 148, 253);
        text-decoration-color: initial;
    }
    .btn-link:hover {
        color: rgb(85, 169, 247);
    }
    .btn-link.disabled,
    .btn-link:disabled {
        color: rgb(158, 150, 137);
    }
    .dropdown-toggle::after {
        border-top-color: initial;
        border-right-color: transparent;
        border-bottom-color: initial;
        border-left-color: transparent;
    }
    .dropdown-menu {
        color: rgb(209, 205, 199);
        list-style-image: initial;
        background-color: rgb(24, 26, 27);
        border-color: rgba(140, 130, 115, 0.15);
    }
    .dropdown-menu-start {
        --bs-position: start;
    }
    .dropdown-menu-end {
        --bs-position: end;
    }
    @media (min-width: 576px) {
        .dropdown-menu-sm-start {
            --bs-position: start;
        }
        .dropdown-menu-sm-end {
            --bs-position: end;
        }
    }
    @media (min-width: 768px) {
        .dropdown-menu-md-start {
            --bs-position: start;
        }
        .dropdown-menu-md-end {
            --bs-position: end;
        }
    }
    @media (min-width: 992px) {
        .dropdown-menu-lg-start {
            --bs-position: start;
        }
        .dropdown-menu-lg-end {
            --bs-position: end;
        }
    }
    @media (min-width: 1200px) {
        .dropdown-menu-xl-start {
            --bs-position: start;
        }
        .dropdown-menu-xl-end {
            --bs-position: end;
        }
    }
    @media (min-width: 1400px) {
        .dropdown-menu-xxl-start {
            --bs-position: start;
        }
        .dropdown-menu-xxl-end {
            --bs-position: end;
        }
    }
    .dropup .dropdown-toggle::after {
        border-top-color: initial;
        border-right-color: transparent;
        border-bottom-color: initial;
        border-left-color: transparent;
    }
    .dropend .dropdown-toggle::after {
        border-top-color: transparent;
        border-right-color: initial;
        border-bottom-color: transparent;
        border-left-color: initial;
    }
    .dropstart .dropdown-toggle::before {
        border-top-color: transparent;
        border-right-color: initial;
        border-bottom-color: transparent;
    }
    .dropdown-divider {
        border-top-color: rgba(140, 130, 115, 0.15);
    }
    .dropdown-item {
        color: rgb(209, 205, 199);
        text-decoration-color: initial;
        background-color: transparent;
        border-color: initial;
    }
    .dropdown-item:focus,
    .dropdown-item:hover {
        color: rgb(211, 207, 201);
        background-color: rgb(35, 38, 39);
    }
    .dropdown-item.active,
    .dropdown-item:active {
        color: rgb(232, 230, 227);
        text-decoration-color: initial;
        background-color: rgb(2, 80, 196);
    }
    .dropdown-item.disabled,
    .dropdown-item:disabled {
        color: rgb(185, 179, 170);
        background-color: transparent;
    }
    .dropdown-header {
        color: rgb(158, 150, 137);
    }
    .dropdown-item-text {
        color: rgb(209, 205, 199);
    }
    .dropdown-menu-dark {
        color: rgb(214, 210, 205);
        background-color: rgb(44, 47, 49);
        border-color: rgba(140, 130, 115, 0.15);
    }
    .dropdown-menu-dark .dropdown-item {
        color: rgb(214, 210, 205);
    }
    .dropdown-menu-dark .dropdown-item:focus,
    .dropdown-menu-dark .dropdown-item:hover {
        color: rgb(232, 230, 227);
        background-color: rgba(24, 26, 27, 0.15);
    }
    .dropdown-menu-dark .dropdown-item.active,
    .dropdown-menu-dark .dropdown-item:active {
        color: rgb(232, 230, 227);
        background-color: rgb(2, 80, 196);
    }
    .dropdown-menu-dark .dropdown-item.disabled,
    .dropdown-menu-dark .dropdown-item:disabled {
        color: rgb(185, 179, 170);
    }
    .dropdown-menu-dark .dropdown-divider {
        border-color: rgba(140, 130, 115, 0.15);
    }
    .dropdown-menu-dark .dropdown-item-text {
        color: rgb(214, 210, 205);
    }
    .dropdown-menu-dark .dropdown-header {
        color: rgb(185, 179, 170);
    }
    .nav {
        list-style-image: initial;
    }
    .nav-link {
        color: rgb(35, 148, 253);
        text-decoration-color: initial;
    }
    .nav-link:focus,
    .nav-link:hover {
        color: rgb(85, 169, 247);
    }
    .nav-link.disabled {
        color: rgb(158, 150, 137);
    }
    .nav-tabs {
        border-bottom-color: rgb(56, 61, 63);
    }
    .nav-tabs .nav-link {
        background-image: initial;
        background-color: initial;
        border-color: transparent;
    }
    .nav-tabs .nav-link:focus,
    .nav-tabs .nav-link:hover {
        border-color: rgb(53, 58, 60) rgb(53, 58, 60) rgb(56, 61, 63);
    }
    .nav-tabs .nav-link.disabled {
        color: rgb(158, 150, 137);
        background-color: transparent;
        border-color: transparent;
    }
    .nav-tabs .nav-item.show .nav-link,
    .nav-tabs .nav-link.active {
        color: rgb(181, 175, 166);
        background-color: rgb(24, 26, 27);
        border-color: rgb(56, 61, 63) rgb(56, 61, 63) rgb(48, 52, 54);
    }
    .nav-pills .nav-link {
        background-image: initial;
        background-color: initial;
        border-color: initial;
    }
    .nav-pills .nav-link.active,
    .nav-pills .show > .nav-link {
        color: rgb(232, 230, 227);
        background-color: rgb(2, 80, 196);
    }
    .navbar-brand {
        text-decoration-color: initial;
    }
    .navbar-nav {
        list-style-image: initial;
    }
    .navbar-toggler {
        background-color: transparent;
        border-color: transparent;
    }
    .navbar-toggler:hover {
        text-decoration-color: initial;
    }
    .navbar-toggler:focus {
        text-decoration-color: initial;
        outline-color: initial;
    }
    @media (min-width: 576px) {
        .navbar-expand-sm .offcanvas {
            background-color: transparent;
            border-right-color: initial;
            border-left-color: initial;
        }
        .navbar-expand-sm .offcanvas-bottom,
        .navbar-expand-sm .offcanvas-top {
            border-top-color: initial;
            border-bottom-color: initial;
        }
    }
    @media (min-width: 768px) {
        .navbar-expand-md .offcanvas {
            background-color: transparent;
            border-right-color: initial;
            border-left-color: initial;
        }
        .navbar-expand-md .offcanvas-bottom,
        .navbar-expand-md .offcanvas-top {
            border-top-color: initial;
            border-bottom-color: initial;
        }
    }
    @media (min-width: 992px) {
        .navbar-expand-lg .offcanvas {
            background-color: transparent;
            border-right-color: initial;
            border-left-color: initial;
        }
        .navbar-expand-lg .offcanvas-bottom,
        .navbar-expand-lg .offcanvas-top {
            border-top-color: initial;
            border-bottom-color: initial;
        }
    }
    @media (min-width: 1200px) {
        .navbar-expand-xl .offcanvas {
            background-color: transparent;
            border-right-color: initial;
            border-left-color: initial;
        }
        .navbar-expand-xl .offcanvas-bottom,
        .navbar-expand-xl .offcanvas-top {
            border-top-color: initial;
            border-bottom-color: initial;
        }
    }
    @media (min-width: 1400px) {
        .navbar-expand-xxl .offcanvas {
            background-color: transparent;
            border-right-color: initial;
            border-left-color: initial;
        }
        .navbar-expand-xxl .offcanvas-bottom,
        .navbar-expand-xxl .offcanvas-top {
            border-top-color: initial;
            border-bottom-color: initial;
        }
    }
    .navbar-expand .offcanvas {
        background-color: transparent;
        border-right-color: initial;
        border-left-color: initial;
    }
    .navbar-expand .offcanvas-bottom,
    .navbar-expand .offcanvas-top {
        border-top-color: initial;
        border-bottom-color: initial;
    }
    .navbar-light .navbar-brand {
        color: rgba(232, 230, 227, 0.9);
    }
    .navbar-light .navbar-brand:focus,
    .navbar-light .navbar-brand:hover {
        color: rgba(232, 230, 227, 0.9);
    }
    .navbar-light .navbar-nav .nav-link {
        color: rgba(232, 230, 227, 0.55);
    }
    .navbar-light .navbar-nav .nav-link:focus,
    .navbar-light .navbar-nav .nav-link:hover {
        color: rgba(232, 230, 227, 0.7);
    }
    .navbar-light .navbar-nav .nav-link.disabled {
        color: rgba(232, 230, 227, 0.3);
    }
    .navbar-light .navbar-nav .nav-link.active,
    .navbar-light .navbar-nav .show > .nav-link {
        color: rgba(232, 230, 227, 0.9);
    }
    .navbar-light .navbar-toggler {
        color: rgba(232, 230, 227, 0.55);
        border-color: rgba(140, 130, 115, 0.1);
    }
    .navbar-light .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    .navbar-light .navbar-text {
        color: rgba(232, 230, 227, 0.55);
    }
    .navbar-light .navbar-text a,
    .navbar-light .navbar-text a:focus,
    .navbar-light .navbar-text a:hover {
        color: rgba(232, 230, 227, 0.9);
    }
    .navbar-dark .navbar-brand {
        color: rgb(232, 230, 227);
    }
    .navbar-dark .navbar-brand:focus,
    .navbar-dark .navbar-brand:hover {
        color: rgb(232, 230, 227);
    }
    .navbar-dark .navbar-nav .nav-link {
        color: rgba(232, 230, 227, 0.55);
    }
    .navbar-dark .navbar-nav .nav-link:focus,
    .navbar-dark .navbar-nav .nav-link:hover {
        color: rgba(232, 230, 227, 0.75);
    }
    .navbar-dark .navbar-nav .nav-link.disabled {
        color: rgba(232, 230, 227, 0.25);
    }
    .navbar-dark .navbar-nav .nav-link.active,
    .navbar-dark .navbar-nav .show > .nav-link {
        color: rgb(232, 230, 227);
    }
    .navbar-dark .navbar-toggler {
        color: rgba(232, 230, 227, 0.55);
        border-color: rgba(48, 52, 54, 0.1);
    }
    .navbar-dark .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
    .navbar-dark .navbar-text {
        color: rgba(232, 230, 227, 0.55);
    }
    .navbar-dark .navbar-text a,
    .navbar-dark .navbar-text a:focus,
    .navbar-dark .navbar-text a:hover {
        color: rgb(232, 230, 227);
    }
    .card {
        background-color: rgb(24, 26, 27);
        border-color: rgba(140, 130, 115, 0.13);
    }
    .card > .list-group {
        border-top-color: inherit;
        border-bottom-color: inherit;
    }
    .card > .card-header + .list-group,
    .card > .list-group + .card-footer {
        border-top-color: initial;
    }
    .card-header {
        background-color: rgba(0, 0, 0, 0.03);
        border-bottom-color: rgba(140, 130, 115, 0.13);
    }
    .card-footer {
        background-color: rgba(0, 0, 0, 0.03);
        border-top-color: rgba(140, 130, 115, 0.13);
    }
    .card-header-tabs {
        border-bottom-color: initial;
    }
    @media (min-width: 576px) {
        .card-group > .card + .card {
            border-left-color: initial;
        }
    }
    .accordion-button {
        color: rgb(209, 205, 199);
        background-color: rgb(24, 26, 27);
        border-color: initial;
    }
    .accordion-button:not(.collapsed) {
        color: rgb(70, 160, 245);
        background-color: rgb(31, 33, 35);
        box-shadow: rgba(0, 0, 0, 0.13) 0px -1px 0px inset;
    }
    .accordion-button:not(.collapsed)::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    }
    .accordion-button::after {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    }
    .accordion-button:focus {
        border-color: rgb(1, 57, 137);
        outline-color: initial;
        box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
    }
    .accordion-item {
        background-color: rgb(24, 26, 27);
        border-color: rgba(140, 130, 115, 0.13);
    }
    .accordion-item:not(:first-of-type) {
        border-top-color: initial;
    }
    .accordion-flush .accordion-item {
        border-right-color: initial;
        border-left-color: initial;
    }
    .accordion-flush .accordion-item:first-child {
        border-top-color: initial;
    }
    .accordion-flush .accordion-item:last-child {
        border-bottom-color: initial;
    }
    .breadcrumb {
        list-style-image: initial;
    }
    .breadcrumb-item + .breadcrumb-item::before {
        color: rgb(158, 150, 137);
    }
    .breadcrumb-item.active {
        color: rgb(158, 150, 137);
    }
    .pagination {
        list-style-image: initial;
    }
    .page-link {
        color: rgb(35, 148, 253);
        text-decoration-color: initial;
        background-color: rgb(24, 26, 27);
        border-color: rgb(56, 61, 63);
    }
    .page-link:hover {
        color: rgb(85, 169, 247);
        background-color: rgb(35, 38, 39);
        border-color: rgb(56, 61, 63);
    }
    .page-link:focus {
        color: rgb(85, 169, 247);
        background-color: rgb(35, 38, 39);
        outline-color: initial;
        box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
    }
    .page-item.active .page-link {
        color: rgb(232, 230, 227);
        background-color: rgb(2, 80, 196);
        border-color: rgb(1, 71, 174);
    }
    .page-item.disabled .page-link {
        color: rgb(158, 150, 137);
        background-color: rgb(24, 26, 27);
        border-color: rgb(56, 61, 63);
    }
    .badge {
        color: rgb(232, 230, 227);
    }
    .alert {
        border-color: transparent;
    }
    .alert-heading {
        color: inherit;
    }
    .alert-primary {
        color: rgb(115, 184, 248);
        background-color: rgb(38, 41, 42);
        border-color: rgb(2, 52, 123);
    }
    .alert-primary .alert-link {
        color: rgb(133, 193, 249);
    }
    .alert-secondary {
        color: rgb(188, 182, 173);
        background-color: rgb(40, 43, 44);
        border-color: rgb(60, 65, 67);
    }
    .alert-secondary .alert-link {
        color: rgb(197, 192, 184);
    }
    .alert-success {
        color: rgb(202, 197, 190);
        background-color: rgb(32, 61, 51);
        border-color: rgb(46, 88, 69);
    }
    .alert-success .alert-link {
        color: rgb(208, 204, 197);
    }
    .alert-info {
        color: rgb(200, 195, 188);
        background-color: rgb(5, 64, 77);
        border-color: rgb(6, 99, 119);
    }
    .alert-info .alert-link {
        color: rgb(206, 202, 196);
    }
    .alert-warning {
        color: rgb(251, 222, 134);
        background-color: rgb(81, 62, 0);
        border-color: rgb(124, 92, 0);
    }
    .alert-warning .alert-link {
        color: rgb(205, 201, 195);
    }
    .alert-danger {
        color: rgb(223, 122, 131);
        background-color: rgb(67, 12, 17);
        border-color: rgb(106, 17, 26);
    }
    .alert-danger .alert-link {
        color: rgb(227, 140, 147);
    }
    .alert-light {
        color: rgb(169, 162, 151);
        background-color: rgb(25, 27, 28);
        border-color: rgb(34, 34, 69);
    }
    .alert-light .alert-link {
        color: rgb(182, 175, 166);
    }
    .alert-dark {
        color: rgb(218, 215, 210);
        background-color: rgb(49, 53, 55);
        border-color: rgb(66, 72, 75);
    }
    .alert-dark .alert-link {
        color: rgb(221, 218, 213);
    }
    .progress {
        background-color: rgb(35, 38, 39);
    }
    .progress-bar {
        color: rgb(232, 230, 227);
        background-color: rgb(2, 80, 196);
    }
    .progress-bar-striped {
        background-image: linear-gradient(45deg,
        rgba(24, 26, 27, 0.15) 25%,
        rgba(0, 0, 0, 0) 25%,
        rgba(0, 0, 0, 0) 50%,
        rgba(24, 26, 27, 0.15) 50%,
        rgba(24, 26, 27, 0.15) 75%,
        rgba(0, 0, 0, 0) 75%,
        rgba(0, 0, 0, 0));
    }
    .list-group-item-action {
        color: rgb(181, 175, 166);
    }
    .list-group-item-action:focus,
    .list-group-item-action:hover {
        color: rgb(181, 175, 166);
        text-decoration-color: initial;
        background-color: rgb(27, 30, 31);
    }
    .list-group-item-action:active {
        color: rgb(209, 205, 199);
        background-color: rgb(35, 38, 39);
    }
    .list-group-item {
        color: rgb(209, 205, 199);
        text-decoration-color: initial;
        background-color: rgb(24, 26, 27);
        border-color: rgba(140, 130, 115, 0.13);
    }
    .list-group-item.disabled,
    .list-group-item:disabled {
        color: rgb(158, 150, 137);
        background-color: rgb(24, 26, 27);
    }
    .list-group-item.active {
        color: rgb(232, 230, 227);
        background-color: rgb(2, 80, 196);
        border-color: rgb(1, 71, 174);
    }
    .list-group-item-primary {
        color: rgb(115, 184, 248);
        background-color: rgb(38, 41, 42);
    }
    .list-group-item-primary.list-group-item-action:focus,
    .list-group-item-primary.list-group-item-action:hover {
        color: rgb(115, 184, 248);
        background-color: rgb(51, 55, 57);
    }
    .list-group-item-primary.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(6, 53, 122);
        border-color: rgb(10, 85, 197);
    }
    .list-group-item-secondary {
        color: rgb(188, 182, 173);
        background-color: rgb(40, 43, 44);
    }
    .list-group-item-secondary.list-group-item-action:focus,
    .list-group-item-secondary.list-group-item-action:hover {
        color: rgb(188, 182, 173);
        background-color: rgb(53, 57, 59);
    }
    .list-group-item-secondary.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(53, 57, 59);
        border-color: rgb(117, 109, 96);
    }
    .list-group-item-success {
        color: rgb(202, 197, 190);
        background-color: rgb(32, 61, 51);
    }
    .list-group-item-success.list-group-item-action:focus,
    .list-group-item-success.list-group-item-action:hover {
        color: rgb(202, 197, 190);
        background-color: rgb(49, 70, 63);
    }
    .list-group-item-success.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(12, 65, 40);
        border-color: rgb(124, 115, 102);
    }
    .list-group-item-info {
        color: rgb(200, 195, 188);
        background-color: rgb(5, 64, 77);
    }
    .list-group-item-info.list-group-item-action:focus,
    .list-group-item-info.list-group-item-action:hover {
        color: rgb(200, 195, 188);
        background-color: rgb(32, 70, 78);
    }
    .list-group-item-info.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(4, 65, 77);
        border-color: rgb(123, 115, 101);
    }
    .list-group-item-warning {
        color: rgb(251, 222, 134);
        background-color: rgb(81, 62, 0);
    }
    .list-group-item-warning.list-group-item-action:focus,
    .list-group-item-warning.list-group-item-action:hover {
        color: rgb(251, 222, 134);
        background-color: rgb(80, 67, 28);
    }
    .list-group-item-warning.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(82, 62, 2);
        border-color: rgb(217, 164, 6);
    }
    .list-group-item-danger {
        color: rgb(223, 122, 131);
        background-color: rgb(67, 12, 17);
    }
    .list-group-item-danger.list-group-item-action:focus,
    .list-group-item-danger.list-group-item-action:hover {
        color: rgb(223, 122, 131);
        background-color: rgb(70, 37, 39);
    }
    .list-group-item-danger.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(106, 26, 33);
        border-color: rgb(166, 40, 51);
    }
    .list-group-item-light {
        color: rgb(169, 162, 151);
        background-color: rgb(25, 27, 28);
    }
    .list-group-item-light.list-group-item-action:focus,
    .list-group-item-light.list-group-item-action:hover {
        color: rgb(169, 162, 151);
        background-color: rgb(39, 42, 44);
    }
    .list-group-item-light.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(75, 81, 84);
        border-color: rgb(107, 100, 88);
    }
    .list-group-item-dark {
        color: rgb(218, 215, 210);
        background-color: rgb(49, 53, 55);
    }
    .list-group-item-dark.list-group-item-action:focus,
    .list-group-item-dark.list-group-item-action:hover {
        color: rgb(218, 215, 210);
        background-color: rgb(60, 65, 68);
    }
    .list-group-item-dark.list-group-item-action.active {
        color: rgb(232, 230, 227);
        background-color: rgb(17, 18, 19);
        border-color: rgb(133, 123, 109);
    }
    .btn-close {
        color: rgb(232, 230, 227);
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCI+PGRlZnM+PGZpbHRlciBpZD0iZGFya3JlYWRlci1pbWFnZS1maWx0ZXIiPjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwLjI0OSAtMC42MTQgLTAuNjcyIDAuMDAwIDEuMDM1IC0wLjY0NiAwLjI4OCAtMC42NjQgMC4wMDAgMS4wMjAgLTAuNjM2IC0wLjYwOSAwLjI1MCAwLjAwMCAwLjk5NCAwLjAwMCAwLjAwMCAwLjAwMCAxLjAwMCAwLjAwMCIgLz48L2ZpbHRlcj48L2RlZnM+PGltYWdlIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWx0ZXI9InVybCgjZGFya3JlYWRlci1pbWFnZS1maWx0ZXIpIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPSclMjMwMDAnJTNlJTNjcGF0aCBkPSdNLjI5My4yOTNhMSAxIDAgMDExLjQxNCAwTDggNi41ODYgMTQuMjkzLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDkuNDE0IDhsNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMOCA5LjQxNGwtNi4yOTMgNi4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRMNi41ODYgOCAuMjkzIDEuNzA3YTEgMSAwIDAxMC0xLjQxNHonLyUzZSUzYy9zdmclM2UiIC8+PC9zdmc+");
        background-color: transparent;
        border-color: initial;
    }
    .btn-close:hover {
        color: rgb(232, 230, 227);
        text-decoration-color: initial;
    }
    .btn-close:focus {
        outline-color: initial;
        box-shadow: rgba(2, 80, 196, 0.25) 0px 0px 0px 0.25rem;
    }
    .toast {
        background-color: rgba(24, 26, 27, 0.85);
        border-color: rgba(140, 130, 115, 0.1);
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem;
    }
    .toast-header {
        color: rgb(158, 150, 137);
        background-color: rgba(24, 26, 27, 0.85);
        border-bottom-color: rgba(140, 130, 115, 0.05);
    }
    .modal {
        outline-color: initial;
    }
    .modal-content {
        background-color: rgb(24, 26, 27);
        border-color: rgba(140, 130, 115, 0.2);
        outline-color: initial;
    }
    .modal-backdrop {
        background-color: rgb(0, 0, 0);
    }
    .modal-header {
        border-bottom-color: rgb(56, 61, 63);
    }
    .modal-footer {
        border-top-color: rgb(56, 61, 63);
    }
    .modal-fullscreen .modal-content {
        border-color: initial;
    }
    @media (max-width: 575.98px) {
        .modal-fullscreen-sm-down .modal-content {
            border-color: initial;
        }
    }
    @media (max-width: 767.98px) {
        .modal-fullscreen-md-down .modal-content {
            border-color: initial;
        }
    }
    @media (max-width: 991.98px) {
        .modal-fullscreen-lg-down .modal-content {
            border-color: initial;
        }
    }
    @media (max-width: 1199.98px) {
        .modal-fullscreen-xl-down .modal-content {
            border-color: initial;
        }
    }
    @media (max-width: 1399.98px) {
        .modal-fullscreen-xxl-down .modal-content {
            border-color: initial; 
        }
    }
    .tooltip {
        text-decoration-color: initial; text-shadow: none; 
    }
    .tooltip .tooltip-arrow::before {
        border-color: transparent; 
    }
    .bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow::before,
    .bs-tooltip-top .tooltip-arrow::before {
        border-top-color: rgb(140, 130, 115); 
    }
    .bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow::before,
    .bs-tooltip-end .tooltip-arrow::before {
        border-right-color: rgb(140, 130, 115); 
    }
    .bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow::before,
    .bs-tooltip-bottom .tooltip-arrow::before {
        border-bottom-color: rgb(140, 130, 115); 
    }
    .bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow::before,
    .bs-tooltip-start .tooltip-arrow::before {
        border-left-color: rgb(140, 130, 115);
    }
    .tooltip-inner {
        color: rgb(232, 230, 227);
        background-color: rgb(0, 0, 0);
    }
    .popover {
        text-decoration-color: initial;
        text-shadow: none;
        background-color: rgb(24, 26, 27);
        border-color: rgba(140, 130, 115, 0.2); 
    }
    .popover .popover-arrow::after, .popover .popover-arrow::before {
        border-color: transparent; 
    }
    .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::before,
    .bs-popover-top > .popover-arrow::before {
        border-top-color: rgba(140, 130, 115, 0.25); 
    }
    .bs-popover-auto[data-popper-placement^="top"] > .popover-arrow::after,
    .bs-popover-top > .popover-arrow::after {
        border-top-color: rgb(48, 52, 54); 
    }
    .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::before,
    .bs-popover-end > .popover-arrow::before {
        border-right-color: rgba(140, 130, 115, 0.25); 
    }
    .bs-popover-auto[data-popper-placement^="right"] > .popover-arrow::after,
    .bs-popover-end > .popover-arrow::after {
        border-right-color: rgb(48, 52, 54); 
    }
    .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::before,
    .bs-popover-bottom > .popover-arrow::before {
        border-bottom-color: rgba(140, 130, 115, 0.25); 
    }
    .bs-popover-auto[data-popper-placement^="bottom"] > .popover-arrow::after,
    .bs-popover-bottom > .popover-arrow::after {
        border-bottom-color: rgb(48, 52, 54); 
    }
    .bs-popover-auto[data-popper-placement^="bottom"] .popover-header::before,
    .bs-popover-bottom .popover-header::before {
        border-bottom-color: rgb(52, 57, 59); 
    }
    .bs-popover-auto[data-popper-placement^="left"] > .popover-arrow::before,
    .bs-popover-start > .popover-arrow::before {
        border-left-color: rgba(140, 130, 115, 0.25); 
    }
    .bs-popover-auto[data-popper-placement^="left"] > .popover-arrow::after,
    .bs-popover-start > .popover-arrow::after {
        border-left-color: rgb(48, 52, 54);
    }
    .popover-header {
        background-color: rgb(32, 35, 37);
        border-bottom-color: rgba(140, 130, 115, 0.2);
    }
    .popover-body {
        color: rgb(209, 205, 199);
    }
    .carousel-control-next,
    .carousel-control-prev {
        color: rgb(232, 230, 227);
        background-image: initial;
        background-color: initial;
        border-color: initial;
    }
    .carousel-control-next:focus,
    .carousel-control-next:hover,
    .carousel-control-prev:focus,
    .carousel-control-prev:hover {
        color: rgb(232, 230, 227);
        text-decoration-color: initial;
        outline-color: initial;
    }
    .carousel-control-prev-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
    }
    .carousel-control-next-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    }
    .carousel-indicators {
        list-style-image: initial;
    }
    .carousel-indicators [data-bs-target] {
        background-color: rgb(24, 26, 27);
        border-right-color: initial;
        border-left-color: initial;
        border-top-color: transparent;
        border-bottom-color: transparent;
    }
    .carousel-caption {
        color: rgb(232, 230, 227);
    }
    .carousel-dark .carousel-indicators [data-bs-target] {
        background-color: rgb(0, 0, 0);
    }
    .carousel-dark .carousel-caption {
        color: rgb(232, 230, 227);
    }
    .spinner-border {
        border-color: currentcolor transparent currentcolor currentcolor;
    }
    .spinner-grow {
        background-color: currentcolor;
    }
    .offcanvas {
        background-color: rgb(24, 26, 27);
        outline-color: initial;
    }
    .offcanvas-backdrop {
        background-color: rgb(0, 0, 0);
    }
    .offcanvas-start {
        border-right-color: rgba(140, 130, 115, 0.2);
    }
    .offcanvas-end {
        border-left-color: rgba(140, 130, 115, 0.2);
    }
    .offcanvas-top {
        border-bottom-color: rgba(140, 130, 115, 0.2);
    }
    .offcanvas-bottom {
        border-top-color: rgba(140, 130, 115, 0.2);
    }
    .placeholder {
        background-color: currentcolor;
    }
    .link-primary {
        color: rgb(35, 148, 253);
    }
    .link-primary:focus,
    .link-primary:hover {
        color: rgb(85, 169, 247);
    }
    .link-secondary {
        color: rgb(158, 150, 137);
    }
    .link-secondary:focus,
    .link-secondary:hover {
        color: rgb(173, 166, 156);
    }
    .link-success {
        color: rgb(117, 230, 178);
    }
    .link-success:focus,
    .link-success:hover {
        color: rgb(136, 233, 188);
    }
    .link-info {
        color: rgb(39, 209, 243);
    }
    .link-info:focus,
    .link-info:hover {
        color: rgb(71, 215, 244);
    }
    .link-warning {
        color: rgb(255, 199, 30);
    }
    .link-warning:focus,
    .link-warning:hover {
        color: rgb(255, 207, 65);
    }
    .link-danger {
        color: rgb(223, 70, 85);
    }
    .link-danger:focus,
    .link-danger:hover {
        color: rgb(216, 91, 103);
    }
    .link-light {
        color: rgb(228, 226, 222);
    }
    .link-light:focus,
    .link-light:hover {
        color: rgb(229, 227, 223);
    }
    .link-dark {
        color: rgb(209, 205, 199);
    }
    .link-dark:focus,
    .link-dark:hover {
        color: rgb(213, 210, 204);
    }
    .ratio-1x1 {
        --bs-aspect-ratio: 100%;
    }
    .ratio-4x3 {
        --bs-aspect-ratio: 75%;
    }
    .ratio-16x9 {
        --bs-aspect-ratio: 56.25%;
    }
    .ratio-21x9 {
        --bs-aspect-ratio: 42.8571%;
    }
    .visually-hidden,
    .visually-hidden-focusable:not(:focus):not(:focus-within) {
        border-color: initial !important;
    }
    .vr {
        background-color: currentcolor;
    }
    .shadow {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem !important;
    }
    .shadow-sm {
        box-shadow: rgba(0, 0, 0, 0.07) 0px 0.125rem 0.25rem !important;
    }
    .shadow-lg {
        box-shadow: rgba(0, 0, 0, 0.18) 0px 1rem 3rem !important;
    }
    .shadow-none {
        box-shadow: none !important;
    }
    .border {
        border-color: rgb(56, 61, 63) !important;
    }
    .border-0 {
        border-color: initial !important;
    }
    .border-top {
        border-top-color: rgb(56, 61, 63) !important;
    }
    .border-top-0 {
        border-top-color: initial !important;
    }
    .border-end {
        border-right-color: rgb(56, 61, 63) !important;
    }
    .border-end-0 {
        border-right-color: initial !important;
    }
    .border-bottom {
        border-bottom-color: rgb(56, 61, 63) !important;
    }
    .border-bottom-0 {
        border-bottom-color: initial !important;
    }
    .border-start {
        border-left-color: rgb(56, 61, 63) !important;
    }
    .border-start-0 {
        border-left-color: initial !important;
    }
    .border-primary {
        border-color: rgb(1, 71, 174) !important;
    }
    .border-secondary {
        border-color: rgb(102, 94, 83) !important;
    }
    .border-success {
        border-color: rgb(32, 175, 109) !important;
    }
    .border-info {
        border-color: rgb(9, 143, 170) !important;
    }
    .border-warning {
        border-color: rgb(176, 132, 0) !important;
    }
    .border-danger {
        border-color: rgb(148, 26, 37) !important;
    }
    .border-light {
        border-color: rgb(50, 54, 56) !important;
    }
    .border-dark {
        border-color: rgb(128, 119, 105) !important;
    }
    .border-white {
        border-color: rgb(48, 52, 54) !important;
    }
    .text-decoration-none {
        text-decoration-color: initial !important;
    }
    .text-decoration-underline {
        text-decoration-color: initial !important;
    }
    .text-decoration-line-through {
        text-decoration-color: initial !important;
    }
    .text-primary {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(35, 148, 253) !important;
    }
    .text-secondary {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(158, 150, 137) !important;
    }
    .text-success {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(117, 230, 178) !important;
    }
    .text-info {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(39, 209, 243) !important;
    }
    .text-warning {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(255, 199, 30) !important;
    }
    .text-danger {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(223, 70, 85) !important;
    }
    .text-light {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(228, 226, 222) !important;
    }
    .text-dark {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(209, 205, 199) !important;
    }
    .text-black {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(232, 230, 227) !important;
    }
    .text-white {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(232, 230, 227) !important;
    }
    .text-body {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(209, 205, 199) !important;
    }
    .text-muted {
        --darkreader-text--bs-text-opacity: 1;
        color: rgb(158, 150, 137) !important;
    }
    .text-black-50 {
        --darkreader-text--bs-text-opacity: 1;
        color: rgba(232, 230, 227, 0.5) !important;
    }
    .text-white-50 {
        --darkreader-text--bs-text-opacity: 1;
        color: rgba(232, 230, 227, 0.5) !important;
    }
    .text-reset {
        --darkreader-text--bs-text-opacity: 1;
        color: inherit !important;
    }
    .text-opacity-25 {
        --darkreader-text--bs-text-opacity: 0.25;
    }
    .text-opacity-50 {
        --darkreader-text--bs-text-opacity: 0.5;
    }
    .text-opacity-75 {
        --darkreader-text--bs-text-opacity: 0.75;
    }
    .text-opacity-100 {
        --darkreader-text--bs-text-opacity: 1;
    }
    .bg-primary {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: rgb(2, 80, 196) !important;
    }
    .bg-secondary {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: rgb(88, 95, 99) !important;
    }
    .bg-success {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: rgb(20, 108, 67) !important;
    }
    .bg-info {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: rgb(10, 162, 192) !important;
    }
    .bg-warning {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: rgb(200, 150, 0) !important;
    }
    .bg-danger {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: rgb(165, 29, 42) !important;
    }
    .bg-light {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: rgb(27, 30, 31) !important;
    }
    .bg-dark {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: rgb(28, 30, 31) !important;
    }
    .bg-black {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: rgb(0, 0, 0) !important;
    }
    .bg-white {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: rgb(24, 26, 27) !important;
    }
    .bg-body {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: rgb(24, 26, 27) !important;
    }
    .bg-transparent {
        --darkreader-bg--bs-bg-opacity: 1;
        background-color: transparent !important;
    }
    .bg-opacity-10 {
        --darkreader-bg--bs-bg-opacity: 0.1;
    }
    .bg-opacity-25 {
        --darkreader-bg--bs-bg-opacity: 0.25;
    }
    .bg-opacity-50 {
        --darkreader-bg--bs-bg-opacity: 0.5;
    }
    .bg-opacity-75 {
        --darkreader-bg--bs-bg-opacity: 0.75;
    }
    .bg-opacity-100 {
        --darkreader-bg--bs-bg-opacity: 1;
    }
    .bg-gradient {
        background-image: var(--darkreader-bgimg--bs-gradient) !important;
    }
    
    .card {
        border-color: rgb(140, 130, 115);
    }

    /* Override Style */
    .vimvixen-hint {
        background-color: #7b5300 !important;
        border-color: #d8b013 !important;
        color: #f3e8c8 !important;
    }
    ::placeholder {
        opacity: 0.5 !important;
    }
    a[href="https://coinmarketcap.com/"] > svg[width="94"][height="16"] > path {
        fill: var(--darkreader-neutral-text) !important;
    }
    #edge-translate-panel-body,
    .MuiTypography-body1 {
        color: var(--darkreader-neutral-text) !important;
    }
    gr-main-header {
        background-color: #0f3a48 !important;
    }
    embed[type="application/pdf"] { filter: invert(100%) contrast(90%); }

`

export default darkstyles