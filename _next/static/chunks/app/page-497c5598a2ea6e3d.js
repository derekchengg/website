(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5401:(e,t,a)=>{Promise.resolve().then(a.bind(a,5503))},5503:(e,t,a)=>{"use strict";a.d(t,{default:()=>A});var s=a(5155),i=a(2115),l=a(5565),n=a(7725),r=a(2104),o=a(7113);function c(){let{setTheme:e,theme:t,systemTheme:a}=(0,o.D)(),[l,c]=i.useState(!1);if(i.useEffect(()=>{c(!0)},[]),!l)return null;let d="dark"===t?a:t;return(0,s.jsxs)("button",{onClick:()=>e("dark"===d?"light":"dark"),className:"absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800",type:"button","aria-label":"Toggle theme",children:["dark"===d?(0,s.jsx)(n.A,{className:"h-6 w-6 text-yellow-500"}):(0,s.jsx)(r.A,{className:"h-6 w-6 text-gray-800"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}var d=a(5683),C=a(742),u=a(3463),m=a(9795);function p(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,m.QP)((0,u.$)(t))}let h=i.memo(e=>{let{card:t,index:a,hovered:i,setHovered:n,cursorPosition:r}=e;return(0,s.jsxs)("div",{onMouseEnter:()=>n(a),onMouseLeave:()=>n(null),className:p("rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-20 w-20 m-1 transition-all duration-300 ease-out group",null!==i&&i!==a&&"blur-sm scale-[0.98]"),children:[(0,s.jsx)(l.default,{src:t.src,alt:t.title,fill:!0,className:"object-cover absolute inset-0"}),(0,s.jsx)("div",{className:p("absolute inset-0 bg-black/50 flex items-end py-1 px-1 transition-opacity duration-300",i===a?"opacity-100":"opacity-0"),children:(0,s.jsx)("div",{className:"text-lg md:text-xs text-center font-small bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200",children:t.title})}),(0,s.jsx)(d.N,{children:i===a&&(0,s.jsx)(C.P.div,{className:"absolute top-0 left-0 w-20 h-20 bg-gray-200 dark:bg-neutral-800 rounded-full pointer-events-none",style:{translateX:r.x-40,translateY:r.y-40},initial:{scale:0,opacity:0},animate:{scale:1,opacity:.3},exit:{scale:0,opacity:0},transition:{duration:.2}})})]})});function x(e){let{cards:t}=e,[a,l]=(0,i.useState)(null),[n,r]=(0,i.useState)({x:0,y:0});return(0,i.useEffect)(()=>{let e=e=>{r({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),(0,s.jsx)("div",{className:"flex flex-wrap justify-center items-center gap-2",children:t.map((e,t)=>(0,s.jsx)(h,{card:e,index:t,hovered:a,setHovered:l,cursorPosition:n},e.title))})}h.displayName="Card";var g=a(7396);let f=e=>{let{children:t,title:a,href:l,className:n,containerClassName:r,animate:o=!0}=e,[c,d]=(0,i.useState)("translate(-50%,-50%) rotateX(0deg)");return(0,s.jsxs)(g.default,{className:p("relative group/pin z-50 pb-10 cursor-pointer inline-block",r),onMouseEnter:()=>{o&&d("translate(-50%,-50%) rotateX(40deg) scale(0.8)")},onMouseLeave:()=>{o&&d("translate(-50%,-50%) rotateX(0deg) scale(1)")},href:l||"/",children:[(0,s.jsx)("div",{style:{perspective:"1000px",transform:o?"rotateX(70deg) translateZ(0deg)":"none"},className:"absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",children:(0,s.jsx)("div",{className:"absolute left-1/2 top-1/2 p-[2px] group transition-all duration-700",children:(0,s.jsxs)(C.P.div,{style:{transform:o?c:"none",transition:"transform 0.7s ease-out"},className:"relative rounded-2xl bg-zinc-900",children:[(0,s.jsx)("div",{className:"absolute inset-0 rounded-2xl bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb190,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff90,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc41490,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb90,#141316)]"}),(0,s.jsx)("div",{className:"absolute inset-[1px] rounded-xl bg-zinc-950/95"}),(0,s.jsx)("div",{className:p("relative z-50 p-4 backdrop-blur-sm",n),children:t})]})})}),(0,s.jsx)(v,{title:a,animate:o})]})},v=e=>{let{title:t,animate:a}=e;return(0,s.jsx)(C.P.div,{className:"pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500",children:(0,s.jsxs)("div",{className:"w-full h-full -mt-7 flex-none inset-0",children:[(0,s.jsx)("div",{className:"absolute top-0 inset-x-0 flex justify-center",children:(0,s.jsx)("div",{className:"relative flex space-x-2 mt-5 items-center z-10 rounded-full bg-zinc-950/90 py-0.5 px-4 ring-1 ring-white/10",children:(0,s.jsx)("span",{className:"relative z-20 text-white text-xs font-bold inline-block py-0.5",children:t})})}),(0,s.jsx)("div",{style:{perspective:"1000px",transform:a?"rotateX(70deg) translateZ(0)":"none"},className:"absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",children:a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C.P.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:0},className:"absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"}),(0,s.jsx)(C.P.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:2},className:"absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"}),(0,s.jsx)(C.P.div,{initial:{opacity:0,scale:0,x:"-50%",y:"-50%"},animate:{opacity:[0,1,.5,0],scale:1,z:0},transition:{duration:6,repeat:1/0,delay:4},className:"absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"})]})}),a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(C.P.div,{className:"absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]"}),(0,s.jsx)(C.P.div,{className:"absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40"}),(0,s.jsx)(C.P.div,{className:"absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"}),(0,s.jsx)(C.P.div,{className:"absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40"})]})]})})},b=[{title:"JavaScript",src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},{title:"TypeScript",src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},{title:"React",src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{title:"CSS",src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},{title:"HTML",src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},{title:"C",src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"},{title:"Python",src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"}],y=[{key:"1",title:"Terminal Chat",linkTitle:"derekchengg/Terminal-Chat",href:"https://github.com/derekchengg/Terminal-Chat",image:"./images/terminal-chat.png",description:"A C-based chat app using sockets and threads for communication between Linux machines."},{key:"2",title:"Sudoku Vocab",linkTitle:"derekchengg/Sudoku-Vocab",href:"https://github.com/derekchengg/Sudoku-Vocab",image:"./images/sudoku.png",description:"A Sudoku-style language game using word pairs for vocabulary learning through grid-solving."},{key:"3",title:"Personal Discord Bot",linkTitle:"derekchengg/KavixBot",href:"https://github.com/derekchengg/KavixBot",image:"./images/discordbot.png",description:"A Discord bot with commands for events, customization, message logging, and info retrieval."},{key:"4",title:"Personal Website",linkTitle:"derekchengg.github.io",href:"https://github.com/derekchengg/derekchengg.github.io",image:"./images/website.png",description:"Virtual Hub where I showcase my projects, skills, experiences, and interests."},{key:"5",title:"Transcript Summarizer",linkTitle:"derekchengg/Transcript-Summarizer",href:"https://github.com/derekchengg/Transcript-Summarizer",image:"./images/youtubetranscriptsum.png",description:"A web app using AI to summarize YouTube transcripts, track word counts, and more."}],j=[{text:"Hi,"},{text:"I'm"},{text:"Derek.",className:"text-blue-500 dark:text-blue-500"}],w=e=>{let{children:t,className:a,svgOptions:i}=e;return(0,s.jsxs)("div",{className:p("h-[20rem] w-full",a),children:[(0,s.jsx)(N,{svgOptions:i}),t]})},k={initial:{strokeDashoffset:800,strokeDasharray:"50 800"},animate:{strokeDashoffset:0,strokeDasharray:"20 800",opacity:[0,1,1,0]}},N=e=>{let{svgOptions:t}=e,a=["M720 450C720 450 742.459 440.315 755.249 425.626C768.039 410.937 778.88 418.741 789.478 401.499C800.076 384.258 817.06 389.269 826.741 380.436C836.423 371.603 851.957 364.826 863.182 356.242C874.408 347.657 877.993 342.678 898.867 333.214C919.741 323.75 923.618 319.88 934.875 310.177C946.133 300.474 960.784 300.837 970.584 287.701C980.384 274.564 993.538 273.334 1004.85 263.087C1016.15 252.84 1026.42 250.801 1038.22 242.1C1050.02 233.399 1065.19 230.418 1074.63 215.721C1084.07 201.024 1085.49 209.128 1112.65 194.884C1139.8 180.64 1132.49 178.205 1146.43 170.636C1160.37 163.066 1168.97 158.613 1181.46 147.982C1193.95 137.35 1191.16 131.382 1217.55 125.645C1243.93 119.907 1234.19 118.899 1254.53 100.846C1274.86 82.7922 1275.12 92.8914 1290.37 76.09C1305.62 59.2886 1313.91 62.1868 1323.19 56.7536C1332.48 51.3204 1347.93 42.8082 1361.95 32.1468C1375.96 21.4855 1374.06 25.168 1397.08 10.1863C1420.09 -4.79534 1421.41 -3.16992 1431.52 -15.0078","M720 450C720 450 741.044 435.759 753.062 410.636C765.079 385.514 770.541 386.148 782.73 370.489C794.918 354.83 799.378 353.188 811.338 332.597C823.298 312.005 825.578 306.419 843.707 295.493C861.837 284.568 856.194 273.248 877.376 256.48C898.558 239.713 887.536 227.843 909.648 214.958C931.759 202.073 925.133 188.092 941.063 177.621C956.994 167.151 952.171 154.663 971.197 135.041C990.222 115.418 990.785 109.375 999.488 96.1291C1008.19 82.8827 1011.4 82.2181 1032.65 61.8861C1053.9 41.5541 1045.74 48.0281 1064.01 19.5798C1082.29 -8.86844 1077.21 -3.89415 1093.7 -19.66C1110.18 -35.4258 1105.91 -46.1146 1127.68 -60.2834C1149.46 -74.4523 1144.37 -72.1024 1154.18 -97.6802C1163.99 -123.258 1165.6 -111.332 1186.21 -135.809C1206.81 -160.285 1203.29 -160.861 1220.31 -177.633C1237.33 -194.406 1236.97 -204.408 1250.42 -214.196","M720 450C720 450 712.336 437.768 690.248 407.156C668.161 376.544 672.543 394.253 665.951 365.784C659.358 337.316 647.903 347.461 636.929 323.197C625.956 298.933 626.831 303.639 609.939 281.01C593.048 258.381 598.7 255.282 582.342 242.504C565.985 229.726 566.053 217.66 559.169 197.116C552.284 176.572 549.348 171.846 529.347 156.529C509.345 141.211 522.053 134.054 505.192 115.653C488.33 97.2527 482.671 82.5627 473.599 70.7833C464.527 59.0039 464.784 50.2169 447 32.0721C429.215 13.9272 436.29 0.858563 423.534 -12.6868C410.777 -26.2322 407.424 -44.0808 394.364 -56.4916C381.303 -68.9024 373.709 -72.6804 365.591 -96.1992C357.473 -119.718 358.364 -111.509 338.222 -136.495C318.08 -161.481 322.797 -149.499 315.32 -181.761C307.843 -214.023 294.563 -202.561 285.795 -223.25C277.026 -243.94 275.199 -244.055 258.602 -263.871","M720 450C720 450 738.983 448.651 790.209 446.852C841.436 445.052 816.31 441.421 861.866 437.296C907.422 433.172 886.273 437.037 930.656 436.651C975.04 436.264 951.399 432.343 1001.57 425.74C1051.73 419.138 1020.72 425.208 1072.85 424.127C1124.97 423.047 1114.39 420.097 1140.02 414.426C1165.65 408.754 1173.1 412.143 1214.55 411.063C1256.01 409.983 1242.78 406.182 1285.56 401.536C1328.35 396.889 1304.66 400.796 1354.41 399.573C1404.16 398.35 1381.34 394.315 1428.34 389.376C1475.35 384.438 1445.96 386.509 1497.93 385.313C1549.9 384.117 1534.63 382.499 1567.23 381.48","M720 450C720 450 696.366 458.841 682.407 472.967C668.448 487.093 673.23 487.471 647.919 492.882C622.608 498.293 636.85 499.899 609.016 512.944C581.182 525.989 596.778 528.494 571.937 533.778C547.095 539.062 551.762 548.656 536.862 556.816C521.962 564.975 515.626 563.279 497.589 575.159C479.552 587.04 484.343 590.435 461.111 598.728C437.879 607.021 442.512 605.226 423.603 618.397C404.694 631.569 402.411 629.541 390.805 641.555C379.2 653.568 369.754 658.175 353.238 663.929C336.722 669.683 330.161 674.689 312.831 684.116C295.5 693.543 288.711 698.815 278.229 704.041C267.747 709.267 258.395 712.506 240.378 726.65C222.361 740.795 230.097 738.379 203.447 745.613C176.797 752.847 193.747 752.523 166.401 767.148C139.056 781.774 151.342 783.641 130.156 791.074C108.97 798.507 116.461 802.688 96.0974 808.817C75.7334 814.946 83.8553 819.505 59.4513 830.576C35.0473 841.648 48.2548 847.874 21.8337 853.886C-4.58739 859.898 10.5966 869.102 -16.396 874.524","M720 450C720 450 695.644 482.465 682.699 506.197C669.755 529.929 671.059 521.996 643.673 556.974C616.286 591.951 625.698 590.8 606.938 615.255C588.178 639.71 592.715 642.351 569.76 665.92C546.805 689.49 557.014 687.498 538.136 722.318C519.258 757.137 520.671 760.818 503.256 774.428C485.841 788.038 491.288 790.063 463.484 831.358C435.681 872.653 437.554 867.001 425.147 885.248C412.74 903.495 411.451 911.175 389.505 934.331C367.559 957.486 375.779 966.276 352.213 990.918C328.647 1015.56 341.908 1008.07 316.804 1047.24C291.699 1086.42 301.938 1060.92 276.644 1100.23C251.349 1139.54 259.792 1138.78 243.151 1153.64","M719.974 450C719.974 450 765.293 459.346 789.305 476.402C813.318 493.459 825.526 487.104 865.093 495.586C904.659 504.068 908.361 510.231 943.918 523.51C979.475 536.789 963.13 535.277 1009.79 547.428C1056.45 559.579 1062.34 555.797 1089.82 568.96C1117.31 582.124 1133.96 582.816 1159.12 592.861C1184.28 602.906 1182.84 603.359 1233.48 614.514C1284.12 625.67 1254.63 632.207 1306.33 644.465C1358.04 656.723 1359.27 656.568 1378.67 670.21C1398.07 683.852 1406.16 676.466 1456.34 692.827C1506.51 709.188 1497.73 708.471 1527.54 715.212","M720 450C720 450 727.941 430.821 734.406 379.251C740.87 327.681 742.857 359.402 757.864 309.798C772.871 260.194 761.947 271.093 772.992 244.308C784.036 217.524 777.105 200.533 786.808 175.699C796.511 150.864 797.141 144.333 808.694 107.307C820.247 70.2821 812.404 88.4169 819.202 37.1016C826 -14.2137 829.525 -0.990829 839.341 -30.3874C849.157 -59.784 844.404 -61.5924 855.042 -98.7516C865.68 -135.911 862.018 -144.559 876.924 -167.488C891.83 -190.418 886.075 -213.535 892.87 -237.945C899.664 -262.355 903.01 -255.031 909.701 -305.588C916.393 -356.144 917.232 -330.612 925.531 -374.777","M720 450C720 450 722.468 499.363 726.104 520.449C729.739 541.535 730.644 550.025 738.836 589.07C747.028 628.115 743.766 639.319 746.146 659.812C748.526 680.306 754.006 693.598 757.006 732.469C760.007 771.34 760.322 765.244 763.893 805.195C767.465 845.146 769.92 822.227 773.398 868.469C776.875 914.71 776.207 901.365 778.233 940.19C780.259 979.015 782.53 990.477 787.977 1010.39C793.424 1030.3 791.788 1060.01 797.243 1082.24C802.698 1104.47 801.758 1130.29 808.181 1149.64C814.604 1168.99 813.135 1171.5 818.026 1225.28C822.918 1279.06 820.269 1267.92 822.905 1293.75","M720 450C720 450 737.033 492.46 757.251 515.772C777.468 539.084 768.146 548.687 785.517 570.846C802.887 593.005 814.782 609.698 824.589 634.112C834.395 658.525 838.791 656.702 855.55 695.611C872.31 734.519 875.197 724.854 890.204 764.253C905.21 803.653 899.844 790.872 919.927 820.763C940.01 850.654 939.071 862.583 954.382 886.946C969.693 911.309 968.683 909.254 993.997 945.221C1019.31 981.187 1006.67 964.436 1023.49 1007.61C1040.32 1050.79 1046.15 1038.25 1059.01 1073.05C1071.88 1107.86 1081.39 1096.19 1089.45 1131.96C1097.51 1167.73 1106.52 1162.12 1125.77 1196.89","M720 450C720 450 687.302 455.326 670.489 467.898C653.676 480.47 653.159 476.959 626.58 485.127C600.002 493.295 599.626 495.362 577.94 503.841C556.254 512.319 556.35 507.426 533.958 517.44C511.566 527.454 505.82 526.441 486.464 539.172C467.108 551.904 461.312 546.36 439.357 553.508C417.402 560.657 406.993 567.736 389.393 572.603C371.794 577.47 371.139 583.76 344.54 587.931C317.941 592.102 327.375 593.682 299.411 607.275C271.447 620.868 283.617 615.022 249.868 622.622C216.119 630.223 227.07 630.86 203.77 638.635C180.47 646.41 168.948 652.487 156.407 657.28C143.866 662.073 132.426 669.534 110.894 675.555C89.3615 681.575 90.3234 680.232 61.1669 689.897C32.0105 699.562 34.3696 702.021 15.9011 709.789C-2.56738 717.558 2.38861 719.841 -29.9494 729.462C-62.2873 739.083 -52.5552 738.225 -77.4307 744.286","M720 450C720 450 743.97 465.061 754.884 490.648C765.798 516.235 781.032 501.34 791.376 525.115C801.72 548.889 808.417 538.333 829.306 564.807C850.195 591.281 852.336 582.531 865.086 601.843C877.835 621.155 874.512 621.773 902.383 643.857C930.255 665.94 921.885 655.976 938.025 681.74C954.164 707.505 959.384 709.719 977.273 720.525C995.162 731.33 994.233 731.096 1015.92 757.676C1037.61 784.257 1025.74 768.848 1047.82 795.343C1069.91 821.837 1065.95 815.45 1085.93 834.73C1105.91 854.009 1110.53 848.089 1124.97 869.759C1139.4 891.428 1140.57 881.585 1158.53 911.499C1176.5 941.414 1184.96 933.829 1194.53 948.792C1204.09 963.755 1221.35 973.711 1232.08 986.224C1242.8 998.738 1257.34 1015.61 1269.99 1026.53C1282.63 1037.45 1293.81 1040.91 1307.21 1064.56","M720 450C720 450 718.24 412.717 716.359 397.31C714.478 381.902 713.988 362.237 710.785 344.829C707.582 327.42 708.407 322.274 701.686 292.106C694.965 261.937 699.926 270.857 694.84 240.765C689.753 210.674 693.055 217.076 689.674 184.902C686.293 152.728 686.041 149.091 682.676 133.657C679.311 118.223 682.23 106.005 681.826 80.8297C681.423 55.6545 677.891 60.196 675.66 30.0226C673.429 -0.150848 672.665 -7.94842 668.592 -26.771C664.52 -45.5935 664.724 -43.0755 661.034 -78.7766C657.343 -114.478 658.509 -103.181 653.867 -133.45C649.226 -163.719 650.748 -150.38 647.052 -182.682C643.357 -214.984 646.125 -214.921 645.216 -238.402C644.307 -261.883 640.872 -253.4 637.237 -291.706C633.602 -330.012 634.146 -309.868 630.717 -343.769C627.288 -377.669 628.008 -370.682 626.514 -394.844","M720 450C720 450 730.384 481.55 739.215 507.557C748.047 533.564 751.618 537.619 766.222 562.033C780.825 586.447 774.187 582.307 787.606 618.195C801.025 654.082 793.116 653.536 809.138 678.315C825.16 703.095 815.485 717.073 829.898 735.518C844.311 753.964 845.351 773.196 852.197 786.599C859.042 800.001 862.876 805.65 872.809 845.974C882.742 886.297 885.179 874.677 894.963 903.246C904.747 931.816 911.787 924.243 921.827 961.809C931.867 999.374 927.557 998.784 940.377 1013.59C953.197 1028.4 948.555 1055.77 966.147 1070.54C983.739 1085.31 975.539 1105.69 988.65 1125.69C1001.76 1145.69 1001.82 1141.59 1007.54 1184.37C1013.27 1227.15 1018.98 1198.8 1029.67 1241.58","M720 450C720 450 684.591 447.135 657.288 439.014C629.985 430.894 618.318 435.733 600.698 431.723C583.077 427.714 566.975 425.639 537.839 423.315C508.704 420.991 501.987 418.958 476.29 413.658C450.592 408.359 460.205 410.268 416.97 408.927C373.736 407.586 396.443 401.379 359.262 396.612C322.081 391.844 327.081 393.286 300.224 391.917C273.368 390.547 264.902 385.49 241.279 382.114C217.655 378.739 205.497 378.95 181.98 377.253C158.464 375.556 150.084 369.938 117.474 366.078C84.8644 362.218 81.5401 361.501 58.8734 358.545C36.2067 355.59 33.6442 351.938 -3.92281 346.728C-41.4898 341.519 -18.6466 345.082 -61.4654 341.179C-104.284 337.275 -102.32 338.048 -121.821 332.369","M720 450C720 450 714.384 428.193 708.622 410.693C702.86 393.193 705.531 397.066 703.397 372.66C701.264 348.254 697.8 345.181 691.079 330.466C684.357 315.751 686.929 312.356 683.352 292.664C679.776 272.973 679.079 273.949 674.646 255.07C670.213 236.192 670.622 244.371 665.271 214.561C659.921 184.751 659.864 200.13 653.352 172.377C646.841 144.623 647.767 151.954 644.123 136.021C640.48 120.088 638.183 107.491 636.127 96.8178C634.072 86.1443 632.548 77.5871 626.743 54.0492C620.938 30.5112 622.818 28.9757 618.613 16.577C614.407 4.17831 615.555 -13.1527 608.752 -24.5691C601.95 -35.9855 603.375 -51.0511 599.526 -60.1492C595.678 -69.2472 593.676 -79.3623 587.865 -100.431C582.053 -121.5 584.628 -117.913 578.882 -139.408C573.137 -160.903 576.516 -161.693 571.966 -182.241C567.416 -202.789 567.42 -198.681 562.834 -218.28C558.248 -237.879 555.335 -240.47 552.072 -260.968C548.808 -281.466 547.605 -280.956 541.772 -296.427C535.94 -311.898 537.352 -315.211 535.128 -336.018C532.905 -356.826 531.15 -360.702 524.129 -377.124","M720 450C720 450 711.433 430.82 707.745 409.428C704.056 388.035 704.937 381.711 697.503 370.916C690.069 360.121 691.274 359.999 685.371 334.109C679.469 308.22 677.496 323.883 671.24 294.303C664.984 264.724 667.608 284.849 662.065 258.116C656.522 231.383 656.357 229.024 647.442 216.172C638.527 203.319 640.134 192.925 635.555 178.727C630.976 164.529 630.575 150.179 624.994 139.987C619.413 129.794 615.849 112.779 612.251 103.074C608.654 93.3696 606.942 85.6729 603.041 63.0758C599.14 40.4787 595.242 36.9267 589.533 23.8967C583.823 10.8666 581.18 -2.12401 576.96 -14.8333C572.739 -27.5425 572.696 -37.7703 568.334 -51.3441C563.972 -64.9179 562.14 -67.2124 556.992 -93.299C551.844 -119.386 550.685 -109.743 544.056 -129.801C537.428 -149.859 534.97 -151.977 531.034 -170.076C527.099 -188.175 522.979 -185.119 519.996 -207.061C517.012 -229.004 511.045 -224.126 507.478 -247.077C503.912 -270.029 501.417 -271.033 495.534 -287C489.651 -302.968 491.488 -300.977 484.68 -326.317C477.872 -351.657 476.704 -348.494 472.792 -363.258","M720 450C720 450 723.524 466.673 728.513 497.319C733.503 527.964 731.894 519.823 740.001 542.706C748.108 565.589 744.225 560.598 748.996 588.365C753.766 616.131 756.585 602.096 761.881 636.194C767.178 670.293 768.155 649.089 771.853 679.845C775.551 710.6 775.965 703.738 781.753 724.555C787.54 745.372 787.248 758.418 791.422 773.79C795.596 789.162 798.173 807.631 804.056 819.914C809.938 832.197 806.864 843.07 811.518 865.275C816.171 887.48 816.551 892.1 822.737 912.643C828.922 933.185 830.255 942.089 833.153 956.603C836.052 971.117 839.475 969.242 846.83 1003.98C854.185 1038.71 850.193 1028.86 854.119 1048.67C858.045 1068.48 857.963 1074.39 863.202 1094.94C868.44 1115.49 867.891 1108.03 874.497 1138.67C881.102 1169.31 880.502 1170.72 887.307 1186.56C894.111 1202.4 890.388 1209.75 896.507 1231.25C902.627 1252.76 902.54 1245.39 906.742 1279.23","M720 450C720 450 698.654 436.893 669.785 424.902C640.916 412.91 634.741 410.601 615.568 402.586C596.396 394.571 594.829 395.346 568.66 378.206C542.492 361.067 547.454 359.714 514.087 348.978C480.721 338.242 479.79 334.731 467.646 329.846C455.502 324.96 448.63 312.156 416.039 303.755C383.448 295.354 391.682 293.73 365.021 280.975C338.36 268.219 328.715 267.114 309.809 252.575C290.903 238.036 277.185 246.984 259.529 230.958C241.873 214.931 240.502 224.403 211.912 206.241C183.323 188.078 193.288 190.89 157.03 181.714C120.772 172.538 127.621 170.109 108.253 154.714C88.8857 139.319 75.4927 138.974 56.9647 132.314C38.4366 125.654 33.8997 118.704 4.77584 106.7C-24.348 94.6959 -19.1326 90.266 -46.165 81.9082","M720 450C720 450 711.596 475.85 701.025 516.114C690.455 556.378 697.124 559.466 689.441 579.079C681.758 598.693 679.099 597.524 675.382 642.732C671.665 687.94 663.4 677.024 657.844 700.179C652.288 723.333 651.086 724.914 636.904 764.536C622.723 804.158 631.218 802.853 625.414 827.056C619.611 851.259 613.734 856.28 605.94 892.262C598.146 928.244 595.403 924.314 588.884 957.785C582.364 991.255 583.079 991.176 575.561 1022.63C568.044 1054.08 566.807 1058.45 558.142 1084.32C549.476 1110.2 553.961 1129.13 542.367 1149.25C530.772 1169.37 538.268 1180.37 530.338 1207.27C522.407 1234.17 520.826 1245.53 512.156 1274.2","M720 450C720 450 730.571 424.312 761.424 411.44C792.277 398.569 772.385 393.283 804.069 377.232C835.752 361.182 829.975 361.373 848.987 342.782C867.999 324.192 877.583 330.096 890.892 303.897C904.201 277.698 910.277 282.253 937.396 264.293C964.514 246.333 949.357 246.834 978.7 230.438C1008.04 214.042 990.424 217.952 1021.51 193.853C1052.6 169.753 1054.28 184.725 1065.97 158.075C1077.65 131.425 1087.76 139.068 1111.12 120.345C1134.49 101.622 1124.9 104.858 1151.67 86.3162C1178.43 67.7741 1167.09 66.2676 1197.53 47.2606C1227.96 28.2536 1225.78 23.2186 1239.27 12.9649C1252.76 2.7112 1269.32 -9.47929 1282.88 -28.5587C1296.44 -47.6381 1305.81 -41.3853 1323.82 -62.7027C1341.83 -84.0202 1340.32 -82.3794 1368.98 -98.9326"],i=["#46A5CA","#8C2F2F","#4FAE4D","#D6590C","#811010","#247AFB","#A534A0","#A8A438","#D6590C","#46A29C","#670F6D","#D7C200","#59BBEB","#504F1C","#55BC54","#4D3568","#9F39A5","#363636","#860909","#6A286F","#604483"];return(0,s.jsxs)(C.P.svg,{viewBox:"0 0 1440 900",fill:"none",xmlns:"http://www.w3.org/2000/svg",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},className:"absolute inset-0 w-full h-full",children:[a.map((e,a)=>(0,s.jsx)(C.P.path,{d:e,stroke:i[a],strokeWidth:"2.3",strokeLinecap:"round",variants:k,initial:"initial",animate:"animate",transition:{duration:(null==t?void 0:t.duration)||10,ease:"linear",repeat:1/0,repeatType:"loop",delay:Math.floor(10*Math.random()),repeatDelay:Math.floor(10*Math.random()+2)}},"path-first-".concat(a))),a.map((e,a)=>(0,s.jsx)(C.P.path,{d:e,stroke:i[a],strokeWidth:"2.3",strokeLinecap:"round",variants:k,initial:"initial",animate:"animate",transition:{duration:(null==t?void 0:t.duration)||10,ease:"linear",repeat:1/0,repeatType:"loop",delay:Math.floor(10*Math.random()),repeatDelay:Math.floor(10*Math.random()+2)}},"path-second-".concat(a))),a.map((e,a)=>(0,s.jsx)(C.P.path,{d:e,stroke:i[a],strokeWidth:"2.3",strokeLinecap:"round",variants:k,initial:"initial",animate:"animate",transition:{duration:(null==t?void 0:t.duration)||10,ease:"linear",repeat:1/0,repeatType:"loop",delay:Math.floor(10*Math.random()),repeatDelay:Math.floor(10*Math.random()+2)}},"path-second-".concat(a))),a.map((e,a)=>(0,s.jsx)(C.P.path,{d:e,stroke:i[a],strokeWidth:"2.3",strokeLinecap:"round",variants:k,initial:"initial",animate:"animate",transition:{duration:(null==t?void 0:t.duration)||10,ease:"linear",repeat:1/0,repeatType:"loop",delay:Math.floor(10*Math.random()),repeatDelay:Math.floor(10*Math.random()+2)}},"path-second-".concat(a)))]})},M=e=>{let{words:t,className:a,cursorClassName:i}=e,l=t.map(e=>({...e,text:e.text.split("")}));return(0,s.jsxs)("div",{className:p("flex space-x-1 my-6",a),children:[(0,s.jsxs)(C.P.div,{className:"overflow-hidden pb-2",initial:{width:"0%"},whileInView:{width:"fit-content"},transition:{duration:2,ease:"linear",delay:1},children:[(0,s.jsxs)("div",{className:"text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold",style:{whiteSpace:"nowrap"},children:[(0,s.jsx)("div",{children:l.map((e,t)=>(0,s.jsxs)("div",{className:"inline-block",children:[e.text.map((t,a)=>(0,s.jsx)("span",{className:p("dark:text-white text-black ",e.className),children:t},"char-".concat(a))),"\xa0"]},"word-".concat(t)))})," "]})," "]}),(0,s.jsx)(C.P.span,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,repeat:1/0,repeatType:"reverse"},className:p("block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",i)})]})};var _=a(8975),z=a(3018),S=a(2606),P=a(9214);let T=e=>{let{firstImage:t="",secondImage:a="",className:n,firstImageClassName:r,secondImageClassname:o,initialSliderPercentage:c=50,slideMode:u="hover",showHandlebar:m=!0,autoplay:h=!1,autoplayDuration:x=5e3}=e,[g,f]=(0,i.useState)(c),[v,b]=(0,i.useState)(!1),y=(0,i.useRef)(null),j=(0,i.useRef)(null),w=(0,i.useCallback)(()=>{if(!h)return;let e=Date.now(),t=()=>{let a=(Date.now()-e)%(2*x)/x;f(a<=1?100*a:(2-a)*100),j.current=setTimeout(t,16)};t()},[h,x]),k=(0,i.useCallback)(()=>{j.current&&(clearTimeout(j.current),j.current=null)},[]);(0,i.useEffect)(()=>(w(),()=>k()),[w,k]);let N=(0,i.useCallback)(()=>{"drag"===u&&b(!0)},[u]),M=(0,i.useCallback)(()=>{"drag"===u&&b(!1)},[u]),_=(0,i.useCallback)(e=>{if(y.current&&("hover"===u||"drag"===u&&v)){let t=y.current.getBoundingClientRect(),a=(e-t.left)/t.width*100;requestAnimationFrame(()=>{f(Math.max(0,Math.min(100,a)))})}},[u,v]),z=(0,i.useCallback)(e=>N(),[N]),S=(0,i.useCallback)(()=>M(),[M]),T=(0,i.useCallback)(e=>_(e.clientX),[_]),A=(0,i.useCallback)(e=>{h||N()},[N,h]),D=(0,i.useCallback)(()=>{h||M()},[M,h]),E=(0,i.useCallback)(e=>{h||_(e.touches[0].clientX)},[_,h]);return(0,s.jsxs)("div",{ref:y,className:p("w-[400px] h-[400px] overflow-hidden",n),style:{position:"relative",cursor:"drag"===u?"grab":"col-resize"},onMouseMove:T,onMouseLeave:function(){"hover"===u&&f(c),"drag"===u&&b(!1),w()},onMouseEnter:function(){k()},onMouseDown:z,onMouseUp:S,onTouchStart:A,onTouchEnd:D,onTouchMove:E,children:[(0,s.jsx)(d.N,{initial:!1,children:(0,s.jsxs)(C.P.div,{className:"h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent",style:{left:"".concat(g,"%"),top:"0",zIndex:40},transition:{duration:0},children:[(0,s.jsx)("div",{className:"w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50"}),(0,s.jsx)("div",{className:"w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100"}),(0,s.jsx)("div",{className:"w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]",children:(0,s.jsx)(F,{background:"transparent",minSize:.4,maxSize:1,particleDensity:1200,className:"w-full h-full",particleColor:"#FFFFFF"})}),m&&(0,s.jsx)("div",{className:"h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]",children:(0,s.jsx)(P.A,{className:"h-4 w-4 text-black"})})]})}),(0,s.jsx)("div",{className:"overflow-hidden w-full h-full relative z-20 pointer-events-none",children:(0,s.jsx)(d.N,{initial:!1,children:t?(0,s.jsx)(C.P.div,{className:p("absolute inset-0 z-20 rounded-2xl flex-shrink-0 w-full h-full select-none overflow-hidden",r),style:{clipPath:"inset(0 ".concat(100-g,"% 0 0)")},transition:{duration:0},children:(0,s.jsx)("div",{className:"relative w-full h-full",children:(0,s.jsx)(l.default,{alt:"first image",src:t,fill:!0,className:p("object-cover rounded-2xl",r),draggable:!1})})}):null})}),(0,s.jsx)(d.N,{initial:!1,children:a?(0,s.jsx)("div",{className:"relative w-full h-full",children:(0,s.jsx)(l.default,{fill:!0,className:p("object-cover rounded-2xl",o),alt:"second image",src:a,draggable:!1})}):null})]})},F=i.memo(e=>{let{id:t,className:a,background:l,minSize:n,maxSize:r,speed:o,particleColor:c,particleDensity:d}=e,[u,m]=(0,i.useState)(!1);(0,i.useEffect)(()=>{(0,_.iC)(async e=>{await (0,z.m)(e)}).then(()=>{m(!0)})},[]);let h=(0,S.s)(),x=async e=>{e&&h.start({opacity:1,transition:{duration:1}})},g=(0,i.useId)();return(0,s.jsx)(C.P.div,{animate:h,className:p("opacity-0",a),children:u&&(0,s.jsx)(_.Ay,{id:t||g,className:p("h-full w-full"),particlesLoaded:x,options:{background:{color:{value:l||"#0d47a1"}},fullScreen:{enable:!1,zIndex:1},fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!1,mode:"repulse"},resize:{enable:!0,delay:.5}},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{bounce:{horizontal:{value:1},vertical:{value:1}},collisions:{absorb:{speed:2},bounce:{horizontal:{value:1},vertical:{value:1}},enable:!1,maxSpeed:50,mode:"bounce",overlap:{enable:!0,retries:0}},color:{value:c||"#ffffff",animation:{h:{count:0,enable:!1,speed:1,decay:0,delay:0,sync:!0,offset:0},s:{count:0,enable:!1,speed:1,decay:0,delay:0,sync:!0,offset:0},l:{count:0,enable:!1,speed:1,decay:0,delay:0,sync:!0,offset:0}}},effect:{close:!0,fill:!0,options:{},type:{}},groups:{},move:{angle:{offset:0,value:90},attract:{distance:200,enable:!1,rotate:{x:3e3,y:3e3}},center:{x:50,y:50,mode:"percent",radius:0},decay:0,distance:{},direction:"none",drift:0,enable:!0,gravity:{acceleration:9.81,enable:!1,inverse:!1,maxSpeed:50},path:{clamp:!0,delay:{value:0},enable:!1,options:{}},outModes:{default:"out"},random:!1,size:!1,speed:{min:.1,max:1},spin:{acceleration:0,enable:!1},straight:!1,trail:{enable:!1,length:10,fill:{}},vibrate:!1,warp:!1},number:{density:{enable:!0,width:400,height:400},limit:{mode:"delete",value:0},value:d||120},opacity:{value:{min:.1,max:1},animation:{count:0,enable:!0,speed:o||4,decay:0,delay:0,sync:!1,mode:"auto",startValue:"random",destroy:"none"}},reduceDuplicates:!1,shadow:{blur:0,color:{value:"#000"},enable:!1,offset:{x:0,y:0}},shape:{close:!0,fill:!0,options:{},type:"circle"},size:{value:{min:n||1,max:r||3},animation:{count:0,enable:!1,speed:5,decay:0,delay:0,sync:!1,mode:"auto",startValue:"random",destroy:"none"}},stroke:{width:0},zIndex:{value:0,opacityRate:1,sizeRate:1,velocityRate:1}},detectRetina:!0}})})}),A=()=>(0,s.jsxs)("main",{className:"h-screen w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory",children:[(0,s.jsxs)("section",{id:"landing-section",className:"snap-start min-h-screen w-full flex items-center justify-center relative",children:[(0,s.jsx)(w,{className:"absolute inset-0 w-full h-full",children:(0,s.jsx)("div",{className:"flex flex-col items-center space-y-4",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen",children:[(0,s.jsx)("p",{className:"text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ",children:"Computing Science Student @ Simon Fraser University."}),(0,s.jsx)(M,{words:j}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4",children:[(0,s.jsx)("button",{className:"w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm",children:(0,s.jsx)("a",{href:"#aboutme-section",children:" About Me "})}),(0,s.jsx)("button",{className:"w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm",children:"Portfolio"})]})]})})}),(0,s.jsx)("div",{className:"absolute top-4 right-4 z-50",children:(0,s.jsx)("div",{className:"fixed",children:(0,s.jsx)(c,{})})})]}),(0,s.jsx)("section",{id:"aboutme-section",className:"snap-start min-h-screen w-full flex items-center justify-center",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center px-4 space-y-6",children:[(0,s.jsx)("div",{className:"w-48 h-48 rounded-full overflow-hidden",children:(0,s.jsx)(T,{firstImage:"./images/icon.jpg",secondImage:"./images/bitmoji.png",firstImageClassName:"w-full h-full object-cover",secondImageClassname:"object-cover object-left-top",className:"w-full h-full object-cover",slideMode:"hover"})}),(0,s.jsxs)("div",{className:"py-5 text-center max-w-2xl",children:[(0,s.jsx)("p",{children:"As a Computing Science student at SFU, I'm passionate about exploring both low-level systems programming and modern web development. I enjoy tackling diverse projects that challenge me to learn and grow, from optimizing C programs to building responsive web applications."}),(0,s.jsx)("p",{className:"mt-4",children:"When I'm not coding, you'll find me bouldering, hiking, playing badminton, or enjoying Riot Games' titles and dramas."})]}),(0,s.jsx)(x,{cards:b})]})}),(0,s.jsx)("section",{id:"portfolio-section",className:"snap-start min-h-screen w-full flex items-center justify-center ",children:(0,s.jsx)("div",{className:"w-full h-full flex items-center justify-center p-4",children:(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",children:y.map(e=>(0,s.jsx)(f,{title:e.linkTitle,href:e.href,children:(0,s.jsxs)("div",{className:"flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]",children:[(0,s.jsx)("h3",{className:"max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100",children:e.title}),(0,s.jsx)("div",{className:"text-base !m-0 !p-0 font-normal max-h-24 overflow-hidden",children:(0,s.jsx)("span",{className:"text-slate-500",children:e.description})}),(0,s.jsx)("div",{className:"relative w-full h-[180px] mt-4 rounded-lg overflow-hidden",children:(0,s.jsx)(l.default,{src:e.image,alt:"".concat(e.title," Screenshot"),fill:!0,className:"object-contain p-2",onError:e=>{e.target.src="./api/placeholder/400/320"},priority:"1"===e.key})})]})},e.key))})})})]})}},e=>{var t=t=>e(e.s=t);e.O(0,[117,441,517,358],()=>t(5401)),_N_E=e.O()}]);