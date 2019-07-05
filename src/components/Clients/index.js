import React from 'react'
import { Link } from 'gatsby'
import ContentBox from '../ContentBox.js'
import './style.scss';


class Clients extends React.Component {
  render() {
	const { children } = this.props
    return (
      <div className="clients text-center">
        <ContentBox>
          <p>{this.props.title}</p>
            <div className="logos">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="31">
                  <path d="M 7.545 30.094 L 8.089 26.665 L 6.879 26.637 L 1.102 26.637 L 5.116 1.334 C 5.141 1.174 5.28 1.056 5.443 1.057 L 15.183 1.057 C 18.417 1.057 20.649 1.726 21.814 3.046 C 22.36 3.666 22.708 4.313 22.876 5.025 C 22.965 5.399 23.741 7.1 24 8 C 24.259 8.9 24 9 24 9 C 24.417 9.21 24.209 9.333 24.523 9.677 C 24.991 10.207 25.293 10.88 25.421 11.678 C 25.552 12.499 25.509 13.475 25.293 14.581 C 25.044 15.852 24.641 16.96 24.096 17.866 C 23.616 18.678 22.971 19.381 22.201 19.931 C 21.479 20.441 20.62 20.828 19.649 21.076 C 18.708 21.319 17.635 21.442 16.459 21.442 L 15.701 21.442 C 15.158 21.442 14.632 21.636 14.219 21.984 C 13.806 22.336 13.532 22.821 13.446 23.355 L 13.389 23.663 L 12.429 29.707 L 12.386 29.929 C 12.374 29.999 12.355 30.035 12.325 30.058 C 12.297 30.081 12.262 30.094 12.226 30.094 Z" fill="rgb(37,59,128)"></path>
                  <path d="M 23.883 8 C 23.854 8.184 23.756 8.286 23.719 8.479 C 22.443 14.992 18.078 17.242 12.502 17.242 L 9.663 17.242 C 8.981 17.242 8.407 17.735 8.3 18.403 L 6.847 27.567 L 6.435 30.165 C 6.402 30.374 6.462 30.586 6.6 30.747 C 6.738 30.907 6.94 31 7.152 31 L 12.187 31 C 12.784 31 13.29 30.569 13.384 29.985 L 13.433 29.73 L 14.381 23.749 L 14.442 23.421 C 14.535 22.835 15.043 22.404 15.639 22.404 L 16.392 22.404 C 21.27 22.404 25.089 20.435 26.205 14.737 C 26.671 12.357 26.43 10.369 25.196 8.971 C 24.805 8.539 24.403 8.266 23.883 8 Z" fill="hsl(0, 0%, 32%)"></path>
                  <path d="M 22.591 7.382 C 22.181 7.264 21.763 7.172 21.341 7.106 C 20.508 6.979 19.665 6.918 18.822 6.923 L 11.187 6.923 C 10.587 6.923 10.076 7.358 9.984 7.947 L 8.36 18.173 L 8.313 18.471 C 8.417 17.799 9 17.302 9.685 17.303 L 12.543 17.303 C 18.155 17.303 22.532 15.156 23.84 8.482 C 23.84 8.482 23.971 8.185 24 8 C 23.661 7.823 23.242 7.589 22.878 7.471 C 22.783 7.44 22.687 7.41 22.591 7.382 Z" fill="rgba(33, 33, 33, 1.00)"></path>
                  <path d="M 9.984 7.947 C 10.075 7.357 10.587 6.923 11.187 6.924 L 18.822 6.924 C 19.727 6.924 20.571 6.983 21.341 7.107 C 21.863 7.189 22.377 7.31 22.879 7.471 C 23.258 7.596 23.675 7.83 24 8 C 24.382 5.577 23.932 3.842 22.615 2.348 C 21.162 0.704 18.54 0 15.184 0 L 5.444 0 C 4.758 0 4.174 0.495 4.068 1.17 L 0.01 26.733 C -0.028 26.974 0.042 27.218 0.2 27.403 C 0.359 27.588 0.591 27.695 0.836 27.695 L 6.85 27.695 L 8.36 18.173 Z" fill="rgba(51, 51, 51, 1.00)"></path>
                </svg>
              </div>
              <div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32">
                  <path d="M 8.4 12.912 C 14.666 10.802 15.734 5.308 14.933 0.257 C 14.933 0.075 15.093 -0.055 15.253 0.023 C 21.253 2.861 28 9.084 28 18.459 C 28 25.645 22.294 32 14 32 C 5.146 32 0 25.828 0 18.459 C 0 14.162 3.12 9.735 6.48 7.859 C 6.552 7.81 6.644 7.804 6.722 7.842 C 6.8 7.878 6.851 7.956 6.853 8.042 C 6.933 9.005 7.2 11.453 8.294 12.885 C 8.325 12.906 8.362 12.915 8.4 12.912 Z" fill="rgb(51,51,51)"></path>
                </svg>
              </div>
              <div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                  <g transform="translate(1.08 0.007)">
                    <path d="M 21.814 14.649 C 22.039 14.622 22.254 14.621 22.452 14.649 C 22.566 14.385 22.586 13.929 22.483 13.432 C 22.33 12.695 22.123 12.248 21.695 12.318 C 21.267 12.387 21.251 12.922 21.404 13.659 C 21.49 14.075 21.643 14.429 21.814 14.649" fill="rgba(51, 51, 51, 1.00)"></path>
                    <path d="M 18.14 15.233 C 18.446 15.368 18.634 15.458 18.708 15.38 C 18.755 15.331 18.741 15.237 18.668 15.117 C 18.517 14.868 18.206 14.616 17.876 14.475 C 17.201 14.182 16.397 14.28 15.776 14.729 C 15.571 14.88 15.377 15.09 15.405 15.217 C 15.414 15.258 15.444 15.289 15.516 15.299 C 15.685 15.318 16.276 15.018 16.956 14.976 C 17.436 14.946 17.833 15.097 18.14 15.233" fill="rgba(51, 51, 51, 1.00)"></path>
                    <path d="M 17.524 15.587 C 17.125 15.65 16.905 15.783 16.763 15.906 C 16.643 16.012 16.568 16.129 16.569 16.212 C 16.569 16.251 16.586 16.274 16.6 16.285 C 16.618 16.301 16.639 16.31 16.665 16.31 C 16.755 16.31 16.957 16.229 16.957 16.229 C 17.512 16.028 17.878 16.053 18.241 16.094 C 18.442 16.117 18.536 16.13 18.58 16.06 C 18.593 16.04 18.609 15.997 18.569 15.932 C 18.476 15.779 18.073 15.521 17.524 15.587" fill="rgba(51, 51, 51, 1.00)"></path>
                    <path d="M 20.573 16.886 C 20.844 17.021 21.142 16.968 21.239 16.769 C 21.336 16.57 21.196 16.3 20.925 16.166 C 20.654 16.032 20.356 16.085 20.259 16.284 C 20.162 16.483 20.302 16.752 20.573 16.886" fill="rgba(51, 51, 51, 1.00)"></path>
                    <path d="M 22.314 15.354 C 22.094 15.35 21.912 15.594 21.907 15.898 C 21.902 16.201 22.076 16.451 22.296 16.455 C 22.516 16.458 22.698 16.215 22.704 15.911 C 22.709 15.607 22.535 15.358 22.314 15.354" fill="rgba(51, 51, 51, 1.00)"></path>
                    <path d="M 7.536 20.834 C 7.482 20.765 7.365 20.792 7.305 20.806 C 7.244 20.82 7.175 20.837 7.099 20.835 C 6.938 20.832 6.801 20.762 6.724 20.643 C 6.623 20.488 6.629 20.257 6.74 19.992 C 6.755 19.957 6.772 19.917 6.791 19.874 C 6.968 19.475 7.263 18.808 6.932 18.172 C 6.682 17.693 6.255 17.392 5.786 17.333 C 5.316 17.273 4.832 17.448 4.524 17.791 C 4.037 18.332 3.961 19.068 4.055 19.328 C 4.09 19.423 4.143 19.449 4.183 19.455 C 4.265 19.466 4.388 19.405 4.465 19.197 C 4.47 19.182 4.477 19.159 4.487 19.13 C 4.521 19.02 4.584 18.815 4.689 18.651 C 4.814 18.453 5.006 18.318 5.24 18.268 C 5.474 18.217 5.713 18.262 5.914 18.394 C 6.255 18.619 6.386 19.04 6.24 19.441 C 6.165 19.649 6.043 20.046 6.07 20.372 C 6.124 21.033 6.528 21.298 6.89 21.326 C 7.242 21.339 7.488 21.14 7.551 20.995 C 7.587 20.909 7.556 20.856 7.536 20.834" fill="rgba(51, 51, 51, 1.00)"></path>
                    <path d="M 10.885 8.706 C 12.034 7.369 13.448 6.206 14.715 5.553 C 14.759 5.531 14.806 5.579 14.782 5.622 C 14.681 5.806 14.487 6.198 14.426 6.496 C 14.416 6.543 14.467 6.578 14.506 6.551 C 15.294 6.01 16.665 5.43 17.868 5.356 C 17.919 5.352 17.944 5.419 17.903 5.451 C 17.72 5.592 17.52 5.788 17.374 5.986 C 17.349 6.019 17.373 6.068 17.414 6.068 C 18.259 6.074 19.449 6.372 20.225 6.81 C 20.278 6.84 20.24 6.942 20.182 6.929 C 19.008 6.657 17.086 6.452 15.09 6.942 C 13.307 7.38 11.947 8.056 10.955 8.783 C 10.905 8.82 10.844 8.753 10.885 8.706 Z M 21.345 22.224 C 21.379 22.21 21.403 22.18 21.398 22.132 C 21.394 22.084 21.351 22.049 21.304 22.054 C 21.304 22.054 18.852 22.42 16.536 21.566 C 16.788 20.74 17.459 21.038 18.473 21.121 C 20.3 21.23 21.938 20.961 23.149 20.612 C 24.198 20.308 25.576 19.71 26.646 18.86 C 27.007 19.658 27.134 20.537 27.134 20.537 C 27.134 20.537 27.427 20.495 27.647 20.632 C 27.868 20.768 28.029 21.053 27.919 21.788 C 27.694 23.161 27.114 24.275 26.14 25.3 C 25.548 25.943 24.828 26.502 24.004 26.908 C 23.567 27.14 23.101 27.34 22.61 27.502 C 18.938 28.71 15.18 27.382 13.968 24.53 C 13.872 24.316 13.79 24.092 13.725 23.857 C 13.209 21.978 13.647 19.723 15.018 18.304 C 15.018 18.304 15.017 18.304 15.017 18.304 C 15.102 18.213 15.188 18.085 15.188 17.973 C 15.188 17.861 15.117 17.743 15.056 17.659 C 14.577 16.959 12.917 15.766 13.25 13.456 C 13.489 11.797 14.93 10.629 16.273 10.698 C 16.386 10.704 16.5 10.711 16.613 10.718 C 17.195 10.753 17.703 10.828 18.182 10.848 C 18.984 10.883 19.705 10.766 20.559 10.049 C 20.847 9.807 21.078 9.597 21.469 9.531 C 21.51 9.524 21.608 9.485 21.816 9.496 C 22.025 9.508 22.223 9.565 22.401 9.685 C 23.086 10.144 23.183 11.255 23.219 12.068 C 23.239 12.532 23.295 13.655 23.314 13.978 C 23.357 14.715 23.55 14.819 23.939 14.948 C 24.158 15.02 24.361 15.074 24.66 15.159 C 25.567 15.415 26.104 15.675 26.443 16.009 C 26.645 16.218 26.738 16.44 26.767 16.651 C 26.874 17.436 26.162 18.406 24.277 19.288 C 22.216 20.251 19.716 20.495 17.989 20.301 C 17.856 20.287 17.385 20.233 17.384 20.232 C 16.002 20.045 15.214 21.844 16.043 23.076 C 16.577 23.87 18.033 24.387 19.49 24.387 C 22.829 24.387 25.396 22.951 26.351 21.711 C 26.379 21.674 26.38 21.672 26.427 21.601 C 26.474 21.53 26.435 21.49 26.377 21.531 C 25.597 22.068 22.132 24.203 18.426 23.561 C 18.426 23.561 17.891 23.453 17.564 23.325 C 17.237 23.197 16.554 22.88 16.471 22.174 C 19.462 23.105 21.345 22.224 21.345 22.224 Z M 4.916 15.065 C 3.876 15.269 2.959 15.863 2.399 16.683 C 2.064 16.401 1.439 15.856 1.329 15.644 C 0.434 13.932 2.306 10.604 3.614 8.725 C 6.845 4.08 11.907 0.564 14.25 1.202 C 14.631 1.31 15.892 2.784 15.892 2.784 C 15.892 2.784 13.55 4.093 11.378 5.917 C 8.452 8.187 6.241 11.486 4.916 15.065 Z M 6.664 22.92 C 6.507 22.947 6.346 22.958 6.184 22.954 C 4.619 22.912 2.929 21.493 2.761 19.81 C 2.575 17.949 3.519 16.517 5.19 16.178 C 5.389 16.137 5.631 16.114 5.891 16.128 C 6.827 16.179 8.207 16.903 8.522 18.958 C 8.801 20.777 8.358 22.629 6.664 22.92 Z M 27.645 18.869 C 27.525 18.482 27.401 18.209 27.401 18.209 C 27.882 17.483 27.891 16.834 27.827 16.466 C 27.759 16.01 27.57 15.622 27.191 15.221 C 26.811 14.819 26.034 14.408 24.943 14.099 C 24.818 14.064 24.407 13.95 24.37 13.939 C 24.368 13.915 24.334 12.421 24.316 12.006 C 24.297 11.592 24.262 10.945 24.063 10.307 C 23.825 9.444 23.411 8.689 22.894 8.206 C 24.32 6.717 25.211 5.077 25.208 3.67 C 25.204 0.965 21.905 0.146 17.839 1.842 C 17.835 1.843 16.984 2.207 16.978 2.21 C 16.974 2.206 15.421 0.671 15.397 0.65 C 10.762 -3.422 -3.732 12.804 0.902 16.745 L 1.915 17.609 C 1.652 18.294 1.525 18.839 1.633 19.924 C 1.742 21.008 2.343 22.089 3.197 22.851 C 4.052 23.614 5.176 24.097 6.266 24.096 C 8.069 28.281 12.189 30.849 17.02 30.993 C 22.202 31.148 26.552 28.699 28.375 24.3 C 28.494 23.991 29 22.606 29 21.372 C 29 20.137 28.307 19.626 27.866 19.626 C 27.853 19.578 27.765 19.257 27.645 18.869 Z" fill="rgba(51, 51, 51, 1.00)"></path>
                  </g>
                </svg>
              </div>
              <div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                  <path d="M 2 2 L 15 2 L 15 15 L 2 15 Z M 17 2 L 30 2 L 30 15 L 17 15 Z M 2 17 L 15 17 L 15 30 L 2 30 Z M 17 17 L 30 17 L 30 30 L 17 30 Z" fill="rgba(51, 51, 51, 1.00)"></path>
                </svg>
              </div>
              <div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32">
                  <path d="M 13.529 1.056 C 12.762 1.056 12.604 1.195 12.355 1.483 C 12.253 1.476 12.15 1.473 12.048 1.474 C 11.458 1.474 10.7 1.564 10.054 2.012 C 9.43 2.439 9.133 3.196 9.466 3.749 C 9.466 3.749 9.689 3.41 10.423 3.41 C 10.526 3.41 10.64 3.421 10.762 3.432 C 11.776 3.556 12.526 4.109 12.435 5.571 C 12.354 7.031 11.826 8.66 9.665 8.679 C 9.665 8.679 9.387 8.679 9.09 8.651 C 8.084 8.537 7.768 7.882 7.768 7.882 C 7.768 7.882 8.637 7.637 8.645 6.493 C 8.637 5.715 7.984 5.003 7.041 4.715 C 6.715 4.62 6.378 4.573 6.04 4.576 C 4.928 4.576 3.68 5.058 2.839 6.198 C 0.931 8.81 0.776 12.618 1.241 16.16 C 1.709 19.709 3.88 22.996 3.944 23.086 C 3.99 23.149 4.031 23.183 4.078 23.183 C 4.106 23.181 4.133 23.17 4.153 23.15 C 5.09 22.206 5.985 20.917 6.367 20.055 C 6.776 20.393 6.562 21.113 6.338 21.881 C 6.124 22.667 5.604 23.71 5.416 24.046 C 5.234 24.375 4.991 24.757 5.318 24.957 C 5.357 24.98 5.4 24.991 5.444 24.99 C 5.865 24.99 6.854 24.23 7.957 22.704 C 9.192 20.988 9.819 19.464 9.819 19.464 C 9.909 19.485 10.061 19.644 10.036 20.076 C 10.019 20.514 9.584 22.147 8.737 23.667 C 7.881 25.186 7.09 26.136 6.93 26.352 C 6.832 26.477 6.916 26.555 6.979 26.606 C 7.042 26.65 8.556 28.116 10.756 29.355 C 13.363 30.795 14.519 31.054 14.519 31.054 C 14.519 31.054 15.672 30.802 18.279 29.363 C 20.478 28.122 21.999 26.649 22.055 26.599 C 22.119 26.554 22.2 26.484 22.104 26.346 C 21.954 26.14 21.16 25.185 20.306 23.666 C 19.461 22.157 19.01 20.513 19.003 20.08 C 18.986 19.644 19.128 19.499 19.214 19.463 C 19.214 19.463 19.848 20.996 21.083 22.703 C 22.192 24.231 23.171 24.989 23.594 24.989 C 23.639 24.99 23.684 24.979 23.725 24.956 C 24.042 24.756 23.806 24.368 23.619 24.043 C 23.446 23.709 22.919 22.673 22.695 21.88 C 22.48 21.103 22.257 20.384 22.674 20.054 C 23.057 20.916 23.945 22.212 24.885 23.142 C 24.906 23.166 24.935 23.181 24.966 23.182 C 25.008 23.182 25.052 23.149 25.091 23.09 C 25.16 22.995 27.334 19.713 27.799 16.159 C 28.265 12.61 28.111 8.81 26.201 6.197 C 25.365 5.055 24.108 4.569 22.989 4.569 C 22.64 4.569 22.306 4.616 22.001 4.707 C 21.051 5.003 20.4 5.722 20.405 6.492 C 20.405 7.636 21.279 7.881 21.279 7.881 C 21.279 7.881 20.987 8.52 19.945 8.65 C 19.758 8.674 19.57 8.686 19.381 8.686 C 18.598 8.686 17.938 8.428 17.329 7.537 C 16.74 6.68 16.759 4.914 16.725 4.325 C 16.698 3.728 16.575 2.388 15.969 1.841 C 15.365 1.28 14.63 1.092 13.712 1.054 C 13.645 1.056 13.585 1.056 13.529 1.056" fill="#333333"></path>
                </svg>
              </div>
              <div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="33">
                  <path d="M 25.166 2.001 L 5.834 2.001 C 3.176 2.001 1 4.176 1 6.835 L 1 26.167 C 1 28.825 3.176 31 5.834 31 L 25.166 31 C 27.824 31 30 28.825 30 26.168 L 30 6.835 C 30 4.175 27.824 2 25.166 2 M 25 24.42 C 24.997 25.292 24.29 25.998 23.417 26 L 7.583 26 C 6.71 25.998 6.003 25.292 6 24.42 L 6 8.583 C 6.003 7.71 6.71 7.003 7.583 7 L 23.417 7 C 24.288 7 25 7.713 25 8.583 L 25 24.42 Z M 20 19.999 C 20 20.551 19.55 21 19.001 21 L 11.999 21 C 11.449 21 11 20.551 11 19.999 L 11 13 C 11 12.449 11.449 12 11.999 12 L 19 12 C 19.549 12 19.999 12.449 19.999 12.999 L 19.999 20 Z" fill="rgba(51, 51, 51, 1.00)"></path>
                </svg>
              </div>
              <div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32">
                  <path d="M 20.135 16.145 L 25.674 6.563 L 28.35 16.145 L 25.674 25.725 Z M 17.435 17.701 L 22.975 27.282 L 13.327 24.806 L 6.356 17.701 L 17.435 17.701 Z M 22.973 5.006 L 17.435 14.588 L 6.356 14.588 L 13.327 7.483 L 22.974 5.006 Z M 30.881 12.884 L 27.502 0.29 L 14.888 3.666 L 13.021 6.954 L 9.233 6.927 L 0 16.146 L 9.233 25.364 L 9.233 25.364 L 13.02 25.336 L 14.89 28.624 L 27.502 31.999 L 30.881 19.406 L 28.962 16.145 L 30.881 12.884" fill="#333333"></path>
                </svg>
              </div>
              <div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                  <path d="M 27 17.494 C 26.994 18.042 26.548 18.483 26 18.483 C 25.452 18.483 25.006 18.042 25 17.494 L 25 8.5 C 25.006 7.952 25.452 7.511 26 7.511 C 26.548 7.511 26.994 7.952 27 8.5 Z M 26.651 23.753 C 26.496 23.886 22.792 26.994 16 26.994 C 9.208 26.994 5.504 23.885 5.349 23.753 C 4.93 23.394 4.881 22.762 5.241 22.343 C 5.599 21.924 6.229 21.875 6.649 22.233 C 6.707 22.282 10.015 24.994 16 24.994 C 22.06 24.994 25.317 22.262 25.349 22.235 C 25.768 21.875 26.4 21.924 26.759 22.343 C 27.119 22.762 27.07 23.394 26.651 23.753 Z M 5 8.5 C 5.006 7.952 5.452 7.511 6 7.511 C 6.548 7.511 6.994 7.952 7 8.5 L 7 17.494 C 6.994 18.042 6.548 18.483 6 18.483 C 5.452 18.483 5.006 18.042 5 17.494 Z M 10 6.5 C 10.008 5.954 10.454 5.515 11 5.515 C 11.546 5.515 11.992 5.954 12 6.5 L 12 19.859 C 11.992 20.406 11.546 20.844 11 20.844 C 10.454 20.844 10.008 20.406 10 19.859 L 10 6.5 Z M 15 5.994 C 15 5.729 15.105 5.474 15.293 5.287 C 15.48 5.099 15.735 4.994 16 4.994 C 16.265 4.994 16.52 5.099 16.707 5.287 C 16.895 5.474 17 5.729 17 5.994 L 17 20.494 C 16.994 21.042 16.548 21.483 16 21.483 C 15.452 21.483 15.006 21.042 15 20.494 Z M 20 6.5 C 20.008 5.954 20.454 5.515 21 5.515 C 21.546 5.515 21.992 5.954 22 6.5 L 22 19.859 C 21.992 20.406 21.546 20.844 21 20.844 C 20.454 20.844 20.008 20.406 20 19.859 L 20 6.5 Z M 27.25 1 L 4.75 1 C 2.679 1 1 2.679 1 4.75 L 1 27.25 C 1 29.321 2.679 31 4.75 31 L 27.25 31 C 29.321 31 31 29.321 31 27.25 L 31 4.75 C 31 2.679 29.321 1 27.25 1 Z" fill="rgba(51, 51, 51, 1.00)"></path>
                </svg>
              </div>
              <div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                  <path d="M 20.768 14.103 L 22.197 0 L 30 0.851 L 27.891 21.665 L 23.439 32 L 3.968 27.696 L 2 18.213 L 13.059 15.782 L 10.647 3.89 L 18.331 2.213 Z M 22.589 19.792 C 22.27 19.257 21.737 18.962 21.072 18.99 C 20.698 18.99 20.352 19.337 20.138 19.605 C 19.979 19.792 19.872 20.032 19.846 20.273 C 19.765 20.728 19.765 21.423 20.352 21.718 C 21.231 22.145 22.083 22.065 22.43 21.477 C 22.75 20.915 22.91 20.327 22.589 19.792 Z M 16.793 18.987 C 16.687 18.543 16.186 18.238 15.896 18.098 C 15.749 18.022 15.585 17.984 15.42 17.987 C 14.971 17.987 14.153 18.098 13.969 18.821 C 13.757 19.819 14.021 20.597 14.654 20.819 C 15.314 21.041 15.896 21.097 16.344 20.653 C 16.793 20.208 16.951 19.654 16.793 18.987 Z" fill="rgb(51,51,51)"></path>
                </svg>
              </div>
              <div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                  <path d="M 6 0 L 13 0 L 13 31 L 6 32 Z M 19 0 L 26 0 L 26 32 L 19 31 Z" fill="hsl(0, 0%, 13%)"></path>
                  <path d="M 6 0 L 13 0 L 26 32 L 19 31 Z" fill="#333"></path>
                </svg>
              </div>
            </div>
        </ContentBox>
      </div>
    )
  }
}

export default Clients
