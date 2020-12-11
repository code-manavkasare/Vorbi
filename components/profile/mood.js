import Svg, {Path, G, Defs, ClipPath, Rect, Line} from 'react-native-svg';
import {View} from 'react-native';
import React from 'react';

const Happy = ({size}) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 231 231" fill="none" >
            <Path d="M67.1066 217.409C31.6266 203.575 12.2738 175.658 3.58991 140.825C-6.58269 99.5683 5.07858 62.2643 35.8445 33.1128C68.0991 2.47912 107.301 -7.89682 149.976 6.18481C249.717 36.5715 256.168 172.2 169.825 215.68C168.088 216.421 165.855 216.915 163.87 217.409C157.916 202.587 161.389 188.752 169.825 176.647C184.712 155.154 183.471 134.649 169.577 113.897C164.863 106.98 162.63 100.062 164.118 91.9098C170.321 90.4276 174.787 86.9689 175.532 80.5457C176.028 76.3459 173.795 71.158 169.825 70.6639C159.901 69.1816 161.141 62.7584 161.637 56.0881C162.382 43.2417 155.931 34.8422 144.27 30.6424C124.917 23.7251 110.278 29.9012 102.339 49.1708C99.6093 56.0881 97.1282 57.8175 90.1811 54.3588C81.0009 49.912 71.3245 48.4297 62.6406 56.3352C50.9793 66.9582 53.4605 79.3105 69.5878 92.1569C68.3472 99.8153 66.6104 107.227 61.8963 113.897C47.0095 134.649 47.2577 155.154 61.4001 176.647C69.3396 188.505 73.0613 202.587 67.1066 217.409Z" fill="#F3E6D4"/>
            <Path d="M67.1069 217.409C72.8135 202.587 69.0918 188.752 61.1522 176.4C46.7617 154.907 46.5136 134.402 61.6484 113.65C66.3626 106.98 68.0994 99.5683 69.3399 91.9099C101.098 91.9099 132.609 91.6628 164.367 91.6628C162.878 99.8154 165.111 106.733 169.825 113.65C183.72 134.402 184.96 155.154 170.073 176.4C161.638 188.505 158.164 202.587 164.119 217.409C131.616 234.456 99.3615 234.456 67.1069 217.409ZM144.27 143.296C144.27 141.566 144.022 139.837 144.518 138.355C153.202 122.791 132.112 107.227 119.707 119.579C115.489 123.532 113.752 120.567 110.527 118.344C96.136 107.474 78.0238 126.99 90.4295 140.331C96.136 146.754 103.083 147.248 110.278 142.801C112.511 141.566 114.248 137.119 117.226 140.084C125.909 148.483 135.09 144.284 144.27 143.296C143.277 149.719 138.067 151.448 133.105 153.424C116.977 160.095 98.1209 155.895 85.4672 142.801C79.7606 136.872 74.054 132.178 66.6107 139.096C59.6635 145.766 62.889 152.436 68.3475 158.365C82.4899 174.176 100.602 181.094 121.443 179.611C140.548 178.376 156.675 170.965 166.6 153.671C169.825 147.989 169.825 142.554 164.367 138.355C155.931 131.684 150.721 137.86 144.27 143.296Z" fill="#91D0CC"/>
            <Path d="M164.118 91.6628C132.36 91.6628 100.85 91.9099 69.0914 91.9099C53.2122 79.0635 50.7311 66.7111 62.1442 56.0882C70.8281 48.1827 80.5045 49.4179 89.6847 54.1118C96.8799 57.5704 99.1129 55.8411 101.842 48.9238C110.03 29.6542 124.668 23.4781 144.021 30.3954C155.683 34.5951 162.133 42.9947 161.389 55.8411C161.141 62.5114 159.9 68.9346 169.577 70.4168C173.547 70.9109 175.78 76.3459 175.283 80.2987C174.787 86.7219 170.321 90.1805 164.118 91.6628Z" fill="#5AC4BC"/>
            <Path d="M144.269 143.295C150.72 137.86 156.179 131.684 164.367 138.107C169.825 142.307 169.825 147.742 166.6 153.424C156.675 170.717 140.548 178.129 121.443 179.364C100.602 180.599 82.4895 173.682 68.3471 158.118C62.8886 151.942 59.4151 145.272 66.6103 138.848C74.0537 131.931 79.7603 136.625 85.4668 142.554C98.1206 155.648 116.977 159.847 133.104 153.177C137.819 151.448 143.277 149.718 144.269 143.295ZM72.565 144.283C75.7905 161.577 101.346 173.929 127.646 169.976C144.766 167.259 156.923 157.377 157.171 145.766C131.368 173.682 101.594 171.211 72.565 144.283Z" fill="#EBA474"/>
            <Path d="M144.27 143.295C135.089 144.531 125.909 148.73 117.722 140.331C114.744 137.366 113.007 141.813 110.774 143.048C103.331 147.495 96.6321 147.001 90.9255 140.578C78.5199 127.237 96.384 107.721 111.023 118.591C114 120.567 115.985 123.779 120.203 119.826C132.608 107.474 153.45 123.038 145.014 138.601C143.773 139.837 144.27 141.813 144.27 143.295ZM139.307 130.696C139.059 120.073 122.436 119.826 122.188 130.202C121.195 141.319 139.307 141.813 139.307 130.696ZM109.782 130.202C109.534 119.085 91.6699 120.567 93.1585 131.437C93.9029 141.566 110.774 141.072 109.782 130.202Z" fill="#E4E6E1"/>
            <Path d="M72.5625 144.283C101.592 171.211 131.365 173.682 157.169 145.766C156.673 157.377 144.763 167.506 127.643 169.976C101.344 173.929 75.788 161.577 72.5625 144.283Z" fill="#695148"/>
            <Path d="M109.78 130.202C110.524 141.072 93.9007 141.813 93.1563 131.437C91.9158 120.32 109.532 118.838 109.78 130.202Z" fill="#594B49"/>
        </Svg>  
    )
}

const Sad = ({size}) => {
    return(
        <Svg width={size} height={size} viewBox="0 0 229 230" fill="none" >
            <G clip-Path="url(#clip0)">
            <Path d="M66.6996 217.401C31.3738 203.566 12.1052 175.65 3.45907 140.816C-6.6693 99.5597 4.94127 62.2558 35.5734 33.1043C67.6878 2.47058 106.719 -7.90536 149.209 6.17627C248.516 36.5629 254.939 172.191 168.971 215.671C167.242 216.413 165.019 216.907 163.043 217.401C157.114 202.578 160.572 188.743 168.971 176.638C183.793 155.145 182.558 134.64 168.724 113.888C164.031 106.971 161.808 100.054 163.29 91.9013C169.466 90.419 173.912 86.9604 174.653 80.5372C175.147 76.3374 172.924 71.1494 168.971 70.6553C159.09 69.173 160.325 62.7498 160.819 56.0796C161.56 43.2332 155.138 34.8336 143.527 30.6338C124.258 23.7165 109.683 29.8927 101.778 49.1623C99.061 56.0796 96.5907 57.8089 89.6737 54.3503C80.5335 49.9034 70.8992 48.4212 62.253 56.3266C50.6425 66.9496 53.1128 79.3019 69.17 92.1483C67.9348 99.8068 66.2056 107.218 61.5119 113.888C46.6899 134.64 46.937 155.145 61.0179 176.638C68.9229 188.496 72.6284 202.578 66.6996 217.401Z" fill="#F3E6D4"/>
            <Path d="M66.7 217.401C72.3817 202.578 68.6762 188.743 60.7712 176.391C46.4432 154.898 46.1962 134.393 61.2652 113.641C65.9589 106.971 67.6881 99.5598 68.9233 91.9013C100.544 91.9013 131.917 91.6543 163.537 91.6543C162.055 99.8068 164.278 106.724 168.972 113.641C182.806 134.393 184.041 155.145 169.219 176.391C160.82 188.496 157.361 202.578 163.29 217.401C130.929 234.447 98.8143 234.447 66.7 217.401ZM143.28 144.522C142.539 144.769 142.045 145.263 141.304 145.51C141.057 145.016 140.81 144.275 140.563 143.781C140.563 142.052 142.786 139.828 143.527 138.593C152.174 123.029 131.176 107.465 118.824 119.818C114.624 123.77 112.895 120.806 109.684 118.582C95.3559 107.712 77.3224 127.229 89.6741 140.569C95.3559 146.993 102.273 147.487 109.437 143.04C111.66 141.805 113.389 137.358 116.354 140.322C124.506 148.475 131.176 144.769 140.069 143.781C140.316 144.769 140.563 145.51 140.81 145.51C142.292 145.51 143.774 144.028 143.28 144.522C143.28 144.522 143.033 144.769 140.563 143.781L143.28 144.522Z" fill="#91D0CC"/>
            <Path d="M163.289 91.6543C131.668 91.6543 100.295 91.9013 68.675 91.9013C52.8648 79.0549 50.3945 66.7026 61.758 56.0796C70.4042 48.1741 80.0385 49.4094 89.1787 54.1032C96.3427 57.5619 98.566 55.8326 101.283 48.9153C109.435 29.6457 124.01 23.4695 143.279 30.3868C154.89 34.5866 161.312 42.9862 160.571 55.8326C160.324 62.5028 159.089 68.926 168.724 70.4083C172.676 70.9024 174.899 76.3374 174.405 80.2901C173.911 86.7133 169.465 90.172 163.289 91.6543Z" fill="#5AC4BC"/>
            <Path d="M86.7069 171.944C80.2841 177.379 74.8493 183.555 66.6972 177.132C61.2625 172.932 61.2625 167.497 64.4739 161.815C74.3553 144.522 90.4124 137.111 109.434 135.876C130.185 134.64 148.218 141.558 162.299 157.121C167.734 163.298 171.192 169.968 164.028 176.391C156.617 183.308 150.936 178.615 145.254 172.685C132.655 159.592 113.881 155.392 97.8234 162.062C92.8828 163.792 87.448 165.521 86.7069 171.944ZM157.853 170.956C154.641 153.663 129.197 141.311 103.011 145.263C85.9658 147.981 73.8612 157.863 73.6142 169.474C99.3056 141.558 128.95 143.781 157.853 170.956Z" fill="#EBA474"/>
            <Path d="M143.527 143.287C134.387 144.522 125.247 148.722 117.095 140.322C114.13 137.358 112.401 141.805 110.178 143.04C102.767 147.487 96.097 146.993 90.4152 140.569C78.0635 127.229 95.85 107.712 110.425 118.582C113.389 120.559 115.366 123.77 119.565 119.817C131.917 107.465 152.668 123.029 144.269 138.593C143.033 139.828 143.527 141.805 143.527 143.287ZM138.587 130.687C138.34 120.064 121.788 119.817 121.541 130.193C120.553 141.31 138.587 141.805 138.587 130.687ZM109.19 130.193C108.943 119.076 91.1563 120.559 92.6385 131.429C93.3796 141.557 110.178 141.063 109.19 130.193Z" fill="#E4E6E1"/>
            <Path d="M162.053 173.92C131.174 143.781 99.5535 141.31 72.1328 172.438C72.6269 159.345 85.2256 148.228 103.506 145.263C131.421 140.569 158.595 154.651 162.053 173.92Z" fill="#695148"/>
            <Path d="M138.587 130.687C138.587 141.804 120.801 141.31 121.542 130.193C121.542 119.817 138.34 119.817 138.587 130.687Z" fill="#5F514F"/>
            <Path d="M109.188 130.193C109.929 141.063 93.3776 141.805 92.6365 131.429C91.4013 120.312 108.941 118.829 109.188 130.193Z" fill="#594B49"/>
            </G>
            <Defs>
            <ClipPath id="clip0">
            <Rect width="229" height="230" fill="white"/>
            </ClipPath>
            </Defs>
        </Svg>
    )                                                                                                               
}
const Neutral = ({size}) => {
    return(<Svg width={size} height={size} viewBox="0 0 231 236" fill="none" >
    <Path d="M67.1155 222.117C31.6308 208.236 12.0273 179.463 3.59038 143.875C-6.58356 101.724 5.07926 63.6127 35.8492 33.8299C68.1081 2.53281 107.315 -8.06783 150.244 6.31875C249.998 37.3635 256.45 175.929 170.096 220.351C168.359 221.108 166.125 221.613 164.14 222.117C158.185 206.974 161.659 192.84 170.096 180.472C184.984 158.514 183.744 137.565 169.848 116.363C165.133 109.296 162.9 102.229 164.388 93.9002C170.592 92.3858 175.059 88.8523 175.803 82.29C176.299 77.9993 174.066 72.6989 170.096 72.1941C160.17 70.6798 161.411 64.1175 161.907 57.3028C162.651 44.1782 156.2 35.5967 144.537 31.306C125.181 24.2389 110.541 30.5488 102.6 50.2357C99.8707 57.3028 97.3892 59.0695 90.4412 55.536C81.2598 50.9929 71.5821 49.4785 62.8971 57.5552C50.738 68.1558 53.2194 80.7756 69.3488 93.9002C68.1081 101.725 66.3711 109.296 61.6563 116.111C46.7676 137.312 47.0158 158.261 61.16 180.22C69.3488 192.587 73.071 206.974 67.1155 222.117Z" fill="#F3E6D4"/>
    <Path d="M67.115 222.119C72.8223 206.976 69.1002 192.841 61.1595 180.222C46.7671 158.263 46.519 137.314 61.6558 116.113C66.3706 109.298 68.1076 101.726 69.3483 93.9021C101.111 93.9021 132.625 93.6497 164.388 93.6497C162.899 101.979 165.132 109.046 169.847 116.113C183.743 137.314 184.984 158.515 170.095 180.222C161.658 192.589 158.184 206.976 164.14 222.119C131.881 239.535 99.3738 239.535 67.115 222.119ZM144.288 147.662C143.544 147.915 143.047 148.42 142.303 148.672C142.055 148.167 141.807 147.41 141.559 146.905C141.559 145.138 143.792 142.867 144.536 141.605C153.221 125.704 132.129 109.803 119.722 122.423C115.503 126.461 113.766 123.432 110.54 121.161C96.148 110.055 78.0334 129.995 90.4406 143.624C96.148 150.186 103.096 150.691 110.292 146.148C112.526 144.886 114.263 140.343 117.24 143.372C125.429 151.701 132.129 147.915 141.062 146.905C141.31 147.915 141.559 148.672 141.807 148.672C143.047 148.672 144.784 147.158 144.288 147.662C144.288 147.662 144.04 147.915 141.559 146.905Z" fill="#91D0CC"/>
    <Path d="M164.14 93.6495C132.377 93.6495 100.863 93.9019 69.1003 93.9019C53.219 80.7773 50.7375 68.1575 62.4003 57.3045C71.0854 49.2278 80.7631 50.4898 89.9444 55.2853C97.1407 58.8189 99.3739 57.0521 102.104 49.985C110.044 30.2981 124.685 23.9882 144.04 31.0553C155.703 35.346 162.155 43.9275 161.41 57.0521C161.162 63.8668 159.921 70.4291 169.599 71.9435C173.569 72.4483 175.803 78.001 175.306 82.0393C175.058 88.6016 170.343 92.1352 164.14 93.6495Z" fill="#5AC4BC"/>
    <Path d="M144.289 146.4C135.108 147.662 125.926 151.953 117.737 143.372C114.76 140.343 113.023 144.886 110.789 146.148C103.345 150.691 96.6451 150.186 90.9378 143.624C78.5305 129.995 96.397 110.055 111.038 121.161C114.015 123.18 116 126.461 120.219 122.423C132.626 109.803 153.47 125.704 145.033 141.605C143.793 142.867 144.289 144.886 144.289 146.4ZM139.326 133.528C139.078 122.675 122.452 122.423 122.204 133.023C121.211 144.381 139.326 144.886 139.326 133.528ZM110.045 133.023C109.797 121.666 91.9304 123.18 93.4192 134.285C94.1637 144.634 110.789 144.129 110.045 133.023Z" fill="#E4E6E1"/>
    <Path d="M139.326 133.528C139.326 144.886 121.46 144.381 122.204 133.023C122.204 122.422 139.078 122.422 139.326 133.528Z" fill="#5F514F"/>
    <Path d="M110.045 133.023C110.79 144.129 94.1638 144.886 93.4194 134.285C91.9305 122.928 109.549 121.413 110.045 133.023Z" fill="#594B49"/>
    <Line x1="85.6465" y1="165.511" x2="147.646" y2="165.511" stroke="#EBA474" strokeWidth="15" strokeLinecap="round"/>
    <Line x1="94.6465" y1="164.511" x2="140.646" y2="164.511" stroke="#5F514F" strokeWidth="5" strokeLinecap="round"/>
    </Svg>
    )
}

 const Surprise = ({size}) => {
    return(
<Svg width={size} height={size} viewBox="0 0 231 236" fill="none" >
<Path d="M67.969 222.107C32.4843 208.225 12.8808 179.452 4.4439 143.864C-5.73005 101.714 5.93277 63.6022 36.7028 33.8194C68.9616 2.52231 108.169 -8.07833 151.098 6.30825C250.852 37.353 257.304 175.918 170.949 220.34C169.212 221.097 166.979 221.602 164.994 222.107C159.038 206.963 162.512 192.829 170.949 180.462C185.838 158.503 184.597 137.554 170.701 116.353C165.986 109.286 163.753 102.219 165.242 93.8897C171.446 92.3753 175.912 88.8418 176.657 82.2795C177.153 77.9888 174.92 72.6884 170.949 72.1836C161.023 70.6693 162.264 64.107 162.76 57.2923C163.505 44.1677 157.053 35.5862 145.39 31.2955C126.035 24.2284 111.394 30.5383 103.454 50.2252C100.724 57.2923 98.2427 59.059 91.2947 55.5255C82.1133 50.9824 72.4357 49.468 63.7506 57.5447C51.5915 68.1453 54.0729 80.7651 70.2023 93.8897C68.9616 101.714 67.2246 109.286 62.5099 116.101C47.6212 137.302 47.8693 158.251 62.0136 180.209C70.2023 192.577 73.9245 206.963 67.969 222.107Z" fill="#F3E6D4"/>
<Path d="M67.9685 222.109C73.6758 206.965 69.9537 192.831 62.013 180.211C47.6206 158.253 47.3725 137.304 62.5093 116.102C67.2241 109.288 68.9611 101.716 70.2018 93.8916C101.964 93.8916 133.479 93.6392 165.241 93.6392C163.753 101.968 165.986 109.035 170.701 116.102C184.597 137.304 185.837 158.505 170.949 180.211C162.512 192.578 159.038 206.965 164.993 222.109C132.734 239.524 100.227 239.524 67.9685 222.109ZM145.142 147.652C144.397 147.904 143.901 148.409 143.156 148.662C142.908 148.157 142.66 147.4 142.412 146.895C142.412 145.128 144.645 142.856 145.39 141.594C154.075 125.693 132.983 109.793 120.575 122.412C116.357 126.451 114.62 123.422 111.394 121.15C97.0015 110.045 78.8869 129.984 91.2941 143.614C97.0015 150.176 103.95 150.681 111.146 146.138C113.379 144.876 115.116 140.332 118.094 143.361C126.283 151.69 132.983 147.904 141.916 146.895C142.164 147.904 142.412 148.662 142.66 148.662C143.901 148.662 145.638 147.147 145.142 147.652C145.142 147.652 144.893 147.904 142.412 146.895L145.142 147.652Z" fill="#91D0CC"/>
<Path d="M164.993 93.639C133.231 93.639 101.716 93.8914 69.9538 93.8914C54.0725 80.7668 51.591 68.147 63.2538 57.294C71.9389 49.2173 81.6166 50.4793 90.798 55.2748C97.9942 58.8084 100.227 57.0416 102.957 49.9745C110.898 30.2876 125.538 23.9777 144.894 31.0448C156.556 35.3355 163.008 43.917 162.264 57.0416C162.016 63.8563 160.775 70.4186 170.453 71.933C174.423 72.4378 176.656 77.9905 176.16 82.0288C175.912 88.5911 171.197 92.1247 164.993 93.639Z" fill="#5AC4BC"/>
<Path d="M145.142 146.39C135.961 147.652 126.78 151.943 118.591 143.361C115.613 140.332 113.876 144.875 111.643 146.137C104.199 150.681 97.4986 150.176 91.7913 143.613C79.384 129.984 97.2505 110.045 111.891 121.15C114.869 123.169 116.854 126.451 121.072 122.412C133.48 109.792 154.324 125.693 145.887 141.594C144.646 142.856 145.142 144.875 145.142 146.39ZM140.18 133.518C139.931 122.665 123.306 122.412 123.058 133.013C122.065 144.371 140.18 144.875 140.18 133.518ZM110.898 133.013C110.65 121.655 92.7839 123.169 94.2727 134.275C95.0172 144.623 111.643 144.118 110.898 133.013Z" fill="#E4E6E1"/>
<Path d="M140.18 133.517C140.18 144.875 122.313 144.37 123.058 133.013C123.058 122.412 139.932 122.412 140.18 133.517Z" fill="#5F514F"/>
<Path d="M110.899 133.013C111.643 144.118 95.0173 144.876 94.2729 134.275C92.784 122.917 110.402 121.403 110.899 133.013Z" fill="#594B49"/>
<Line x1="99" y1="171" x2="136" y2="171" stroke="#EBA474" strokeWidth="40" strokeLinecap="round"/>
<Path d="M108.5 170.5H129" stroke="#5F514F" strokeWidth="30" strokeLinecap="round"/>
</Svg>

    )
}

const Mood =({mood,size})=>{
    return (
      <View style={{marginLeft:10}}>
        {mood == 'happy' && <Happy size={size}/>}
        {mood == 'sad' && <Sad size={size} />}
        {mood == 'surprised' && <Surprise size={size} />}
        {mood == 'neutral' && <Neutral size={size} />}
      </View>
    );
}
export default Mood;