import React from 'react';
import styled, { keyframes } from 'styled-components';

import { zIndexArtworkMainDecor } from './../../../styles/designTokens';

function TailArtwork(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="147" height="136" viewBox="0 0 147 136" {...props}>
      <path
        fill="currentColor"
        d="M2.147 128.216c2.323-14.595 9.986-59.07 74.224-54.098 12.278-2.778 35.634-5.292 37.578-25.845 1.556-16.462-5.112-29.28-10.567-34.117-3.346-6.325-.7-8.462 2.298-11.878 21.144 19.691 26.624 25.904 33.073 42.894s17.703 60.679-46.431 71.443c-35.423 5.945-58.363-23.173-90.175 11.601z"
      />
      <path
        fill="#fff"
        d="M88.994 112.924c-.544-.888-1.544-1.658-2.464-2.391l.007.08c-3.426-2.359-7.844-4.092-12.109-5.653a383.553 383.553 0 0 0-5.49-1.949l.016-.006s12.764-7.962 11.665-11.999c-1.158-4.252-16.998-4.666-16.998-4.666s9.742-8.392 8.809-11.949c-.918-.237-30.909-2.883-52.691 14.863l.021.002C.444 106.125 2.257 129.701 1.96 135.335c4.666-6.999 18.388-21.992 33.997-20.665 0 0 21.799 3.65 23.359 3.955 1.813.354 3.755.437 5.618.565 1.12.077 2.242.124 3.364.172.715.031 1.949.297 2.56.115.001-.029-.015-.049-.039-.064 1.467.257 2.921.546 2.467.59.829.018 1.576-.182 2.406-.131-2.306-.157-4.641-.508-6.899-.909 2.178.142 4.312.545 6.483.689 2.22.147 4.089-.206 6.225-.433-.869.243-1.822.344-2.764.427.531.296 2.639-.226 3.18-.342 1.032-.221 2.111-.501 3.023-.88-.186.149.709-.122.829-.184.024-.012 1.558-.412 1.573-.71.003-.055-.524.111-.406.068 1.019-.614 1.917-1.433 2.431-2.14l-.184.168c-.043.024.001-.099.014-.179.456-.444-.056-2.283-.203-2.523zm-1.073 3.41c-.318-.216.675-.937.227-1.162-.14-.07-.923.564-.975.597.145-.094.309-.167.495-.218.712.417-4.094 1.933-4.411 2.048-.484.176-.999.286-1.603.383-.244.039-2.393.531-2.595.426.048.025-2.042.203-2.284.207-.815.013-2.296.115-2.949-.335 2.521.183 5.44.053 8.165-.639 1.892-.48 4.607-1.335 5.557-2.614 1.115-1.501-1.586-3.256-3.168-4.181-3.062-1.792-6.69-3.165-10.254-4.428 2.694.819 5.344 1.55 7.84 2.631 2.432 1.053 5.281 2.304 6.481 4.133-.13-.345.565.77.603.958.025.121-.055 1.412-.141 1.406a.378.378 0 0 0 .201-.04c-.241.287-.981.958-1.189.828z"
      />
      <path
        fill="#222"
        d="M143.555 50.102c-3.039-9.864-8.222-19.069-14.63-27.128-6.105-7.679-13.331-14.439-21.03-20.49-.84-.66-1.617-1.253-2.634-2.032-1.01-.774-2.603-.553-3.336.668-.835 1.391-.023 2.883 1.222 3.726.502.34 1.406 1.086 1.971 1.534.87.687 1.723 1.39 2.573 2.104 3.691 3.107 7.186 6.397 10.67 9.735 3.3 3.161 6.642 6.581 9.246 10.343 2.441 3.528 4.742 6.825 6.499 10.768a112.922 112.922 0 0 1 2.349 5.666c.15.394 1.825 4.361 1.767 4.596.146-.156-.098-.942-.316-1.553 4.045 10.921 5.666 23.57 1.577 34.708-1.734 4.725-4.422 8.722-7.719 12.165a44.64 44.64 0 0 1-3.566 3.331c-2.803 2.36-5.896 4.435-9.123 6.296-.054.029-.107.058-.162.086l.002.007a81.163 81.163 0 0 1-3.002 1.659c-5.724 3.018-12.063 5.571-18.413 6.839.506-.119 1.006-.265 1.509-.404-13.42 3.256-27.363.993-40.749-1.275-14.137-2.4-28.93-4.643-42.095 2.621-2.291 1.265-4.453 2.767-6.486 4.412a47.079 47.079 0 0 0-3.338 2.974c-.51.503-1.132 1.652-1.737 1.924-.065-1.55.153-3.148.52-4.732a.644.644 0 0 1-.201.207c2.828-12.58 10.456-24.232 20.908-31.914 4.983-3.532 8.304-5.146 13.579-7.063 2.648-.962 5.547-2.08 8.345-2.515 3.97-.619 8.015-1.098 12.08-1.366 7.101-.473 14.106-.068 21.17-1.162 4.303-.666 8.593-1.615 12.706-3.076.241-.085.483-.17.721-.262l.33-.126c.383-.145.765-.295 1.146-.451l.247-.1c.037-.017.075-.031.112-.048.5-.211.993-.432 1.479-.663 1.132-.534 2.233-1.115 3.348-1.706.724-.387 1.428-.765 2.114-1.224.479-.32 1.132-1.05 1.615-1.312a.92.92 0 0 0-.139.078c.972-.68 1.9-1.458 2.74-2.277-.116.112-.228.231-.34.343a24.246 24.246 0 0 0 2.352-2.444c.122-.146 1.067-1.04 1.214-1.295a2.16 2.16 0 0 1-.173.343c1.414-1.992 2.522-4.225 3.331-6.526-2.512 6.914-8.127 11.832-14.762 14.705 5.69-2.913 10.898-6.88 13.665-12.805 2.797-5.989 2.39-12.267 1.533-18.627a32.65 32.65 0 0 1 .816 8.015c.51-1.108.068-3.168-.048-4.32-.15-1.523-.364-3.063-.69-4.555-.653-3.001-1.526-5.986-2.655-8.841a.274.274 0 0 0 .136.126c.095-.428-.387-1.231-.54-1.638a27.146 27.146 0 0 0-.221-.585c0-.003-.003-.003-.003-.003-.221-.585-.452-1.166-.68-1.747-.34-.863-.738-2.543-1.482-3.182.133.163.347.925.513 1.468a162.08 162.08 0 0 0-.636-1.248c-.205-.395-.422-.783-.632-1.175-.641-.834-1.125-1.754-1.734-2.612a36.086 36.086 0 0 0-.688-.933c.253.563.419.998.352 1.035-.462.265-2.05-3.151-2.672-3.015-.082.017.466 1.162.931 2.101-.051-.143-.071-.258-.037-.313 0 .119 1.166 1.944 1.258 2.111a74.146 74.146 0 0 1 2.24 4.477c1.115 2.458 1.822 5.122 2.78 7.645.595 1.57 1.241 3.103 1.458 4.834.163 1.305.561 2.672.734 4.089.105.863.187 1.734.275 2.597.031.268-.034 1.465.194 1.659-.044.731.085 3.294.068 3.555a26.092 26.092 0 0 1-.775 4.857c-.336 1.275-.751 2.58-1.349 3.759a8.228 8.228 0 0 1-.299.489c-.211.441-.447.884-.72 1.344-.156.263-.36.432-.582.526-.165.203-.286.322-.32.285-.044-.047.369-1.352.382-1.438-.021.002-.485 1.24-.485 1.24a20.176 20.176 0 0 1-6.176 6.197c.316-.302.547-.656 1.023-1.027a28.82 28.82 0 0 1-1.937 1.38c-.51.336-1.254.608-1.655 1.067.085-.071.445-.228.557-.279-.724.48-1.49.919-2.28 1.329l.008.003-.157.077a31.535 31.535 0 0 1-2.388 1.094c-.161.066-.318.138-.48.202l-.008-.008c-1.524.59-3.302 1.117-6.266 1.844v-.002a62.966 62.966 0 0 1-3.356.803c-3.783.792-7.624 1.299-11.472 1.615-.857.071-1.71.129-2.566.173.095 0 .187.003.279.003-.422.034-.843.065-1.268.099a1.65 1.65 0 0 1 .309-.068c-2.549.129-5.099.18-7.651.252-1.482.041-2.954.054-4.429.177-.67.054-2.305.422-2.716.35-.129.014-1.315.01-1.383.095.075-.095.7-.129.704-.245 0-.041-1.975.183-2.107.194-2.067.139-4.076.612-6.095 1.061-4.66 1.044-9.704 2.407-13.865 4.84 2.158-1.292 4.48-2.447 6.87-3.226.265-.085 1.183-.476 2.033-.806-1.768.517-3.518 1.077-5.228 1.781-1.118.466-2.213.999-3.321 1.479-.241.105-2.005 1.122-2.192.976 0-.003.425-.282.476-.316-2.166.71-4.288 2.004-6.263 3.433-1.184.963-3.511 2.729-5.227 4.143l.011.001c-2.006 1.696-3.98 3.528-5.568 5.561-2.243 2.872-4.599 5.558-6.54 8.664a58.061 58.061 0 0 0-2.74 4.912c-.139.286-1.812 4.229-1.679 4.239.146.014.53-.863.748-1.387a83.068 83.068 0 0 0-1.679 4.392c.065-.238.228-.826.146-.863-.36-.19-1.778 6.023-2.216 6.309 0 0 .088-1.152.088-1.173-.88 2.791-1.234 5.908-1.312 8.821-.027 1.156.177 2.342.211 3.508.02.663.037 1.322.054 1.985.014.377-.041.816.031 1.186.003.034.252 1.009.36.836a212.042 212.042 0 0 1 3.382-4.021c.568-.653 1.122-1.319 1.706-1.958.156-.166 1.465-1.366 1.523-1.468 0 .095-.411.7-.605.945 3.246-3.6 7.023-6.445 11.237-8.841 2.284-1.298 4.698-2.267 7.176-3.131.867-.303 1.666-.581 2.577-.755.347-.068 2.933-.183 2.961-.218a.917.917 0 0 0-.112.166c-6.984.954-13.432 3.836-18.927 8.414C7.281 126.507 1.006 134.02 0 135.828c5.755-6.904 11.295-13.753 19.586-17.723 9.246-4.426 19.474-3.736 29.321-2.189 9.993 1.567 19.953 3.739 30.123 3.511 1.04-.024 2.172-.228 3.199-.122.581.061 1.173.248 1.764.313 2.104.228 4.246.224 6.36.129a61.93 61.93 0 0 0 7.546-.835c2.646-.503 5.935-1.086 10.164-2.473v-.001c2.821-.954 6.763-2.459 9.432-3.784a64.978 64.978 0 0 0 2.886-1.523c.019-.01.36-.226.745-.47l1.112-.703.009.082c3.813-2.197 8.852-6.057 13.351-11.058 4.594-5.204 8.071-11.327 9.814-18.235 2.569-10.186 1.192-20.737-1.857-30.645z"
      />
    </svg>
  );
}

const tailAnimation = keyframes`
  0% { transform: rotate(0deg)}
  50% { transform: rotate(8deg)}
  100% { transform: rotate(0deg)}
`;

const Tail = styled(TailArtwork)`
  position: absolute;
  top: 3.8rem;
  left: 16.8rem;
  color: ${props => props.theme.primaryColor};
  z-index: ${zIndexArtworkMainDecor};
  transform-origin: 10.4rem 0.2rem;
  animation: ${tailAnimation} 5s ease-in-out infinite;
`;

export default Tail;
