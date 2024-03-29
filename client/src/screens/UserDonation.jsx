import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const UserDonation = () => {
  const [donationHistory, setDonationHistory] = useState([]);

  const fetchUserDonationHistory = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const res = await axios.get("/api/payment/user-donation-history", config);
      const data = await res.data;

      setDonationHistory(data.donations);
    } catch (error) {
      console.log("Error in fetching Lists : ", error);
    }
  };

  useEffect(() => {
    fetchUserDonationHistory();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="max-w-[1080px] flex lg:flex-row md:flex-row sm:flex-col mx-auto">
        <div className="relative mt-8 mx-auto flex flex-col mb-4 gap-y-6 flex-grow border-spacing-[7px] ">
          <h3 className="flex flex-col font-poppins mx-auto text-4xl text-center">
            Your<span className="text-orange-600">Donation</span> History
          </h3>
          <table className="table-auto flex-grow h-fit w-full mx-4 shadow-md rounded-sm font-poppins  border-spacing-[5px] border-separate border">
            <thead>
              <tr>
                <th className="border border-y-orange-200">Charity Name</th>
                <th className="border border-y-orange-200">Amount</th>
                <th className="border border-y-orange-200">Date</th>
              </tr>
            </thead>
            <tbody>
              {donationHistory.map((d, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <td className="border border-y-orange-200">{d.paidTo}</td>
                    <td className="border border-y-orange-200">
                      Rs. {d.amount}/-
                    </td>
                    <td className="border border-y-orange-200">
                      {d.timestamp}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <svg
          className="w-1/2 md:block lg:block sm:hidden"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 1000 1000"
          viewBox="0 0 1000 1000"
          id="dog-thinking-about-bone"
        >
          <path
            fill="none"
            stroke="#cecece"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="m455.718 501.475 138.961 114.187a18.73 18.73 0 0 0 23.783 0v0c9.119-7.493 9.119-21.45 0-28.943L468.51 463.5a20.148 20.148 0 0 0-25.582 0L292.974 586.719c-9.119 7.493-9.119 21.45 0 28.943h0a18.73 18.73 0 0 0 23.783 0l138.961-114.187z"
          ></path>
          <path
            fill="none"
            stroke="#cecece"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="m455.718 501.475-114.21 93.85 9.875 189.048h208.671l9.875-189.049z"
          ></path>
          <path
            fill="none"
            stroke="#cecece"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M455.718 623.169h0c-40.666 0-72.608 27.341-71.383 60.038l3.791 101.166h135.182l3.791-101.166c1.227-32.697-30.715-60.038-71.381-60.038zM434.959 590.018c1.911 4.391 6.983 6.385 11.427 4.6 2.836-1.139 5.998-1.776 9.333-1.776s6.497.637 9.333 1.776c4.444 1.785 9.516-.208 11.427-4.6a16.75 16.75 0 0 0 1.406-6.713c0-10.561-9.924-19.123-22.166-19.123s-22.166 8.562-22.166 19.123c0 2.363.497 4.625 1.406 6.713z"
          ></path>
          <ellipse
            cx="429.078"
            cy="555.63"
            fill="none"
            stroke="#cecece"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            rx="7.777"
            ry="6.606"
            transform="rotate(-38.128 429.107 555.66)"
          ></ellipse>
          <ellipse
            cx="455.718"
            cy="546.614"
            fill="none"
            stroke="#cecece"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            rx="10.214"
            ry="6.928"
          ></ellipse>
          <ellipse
            cx="479.972"
            cy="558.331"
            fill="none"
            stroke="#cecece"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            rx="6.606"
            ry="7.777"
            transform="rotate(-51.872 479.98 558.348)"
          ></ellipse>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M188.5 784.221H200"
          ></path>
          <path
            fill="#d1d1d1"
            d="M495.165 625.844c2.893-17.421 9.771-37.354 18.033-54.088-11.358 18.56-21.65 45.086-25.367 67.466-5.664 34.105-3.831 65.429 4.884 85.317l5.22-18.824c-6.86-19.916-7.941-48.732-2.77-79.871z"
          ></path>
          <path
            fill="#01d392"
            d="M255.4 454.223c-28.605-1.969-29.605 31.031-24.605 53.031 2 12-11 19-16.884 28.16-2.543 4.014-4.761 8.724-6.008 14.671-3.283 15.911 6.054 29.432 7.588 43.94.383 3.627.279 7.316-.632 11.12-1.064 4.108-3.064 8.108-5.064 12.108-16 18-42 39-24 63a76.5 76.5 0 0 0 10.805 11.211c31.195 26.789 78.195 24.789 114.195 7.789 13-7 26-17 29-32 2-16-5-31-15.656-41.572a80.957 80.957 0 0 0-10.336-9.673c-2.642-3.96-4.191-7.765-4.964-11.464-1.934-9.248.977-17.837 3.756-26.523 1.389-4.343 2.746-8.711 3.447-13.197 3.753-22.57-18.247-36.57-30.247-52.57-5-7-3-16-1-24 4-19-11-35-28.933-34.029"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M259.897 548.906c-4.551 21.674-5.576 43.011-4.952 64.327.156 5.329 13.851 94.021 5.128 132.829-.171 5.64-.171 8.859-.171 8.859M274.795 632.754l-14.881 21.5"
          ></path>
          <path
            fill="#f7bf46"
            d="M283.818 787.221h-46.046c-.573 0-1.07-.394-1.202-.951l-11.775-49.849h72L285.02 786.27a1.235 1.235 0 0 1-1.202.951z"
          ></path>
          <path
            fill="none"
            stroke="#f7bf46"
            stroke-miterlimit="10"
            d="M232.02 764.006h57.55M232.866 767.588h55.858"
            opacity=".68"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M503.406 772.987v11"
          ></path>
          <ellipse
            cx="190.346"
            cy="589.204"
            fill="#01d392"
            rx="10.654"
            ry="17.449"
          ></ellipse>
          <path
            fill="#01d392"
            d="M789.36 670.232h13.997v13.997H789.36z"
            transform="rotate(45.001 796.37 677.225)"
          ></path>
          <path
            fill="#01d392"
            d="M725.134 382.986h9.001v9.001h-9.001z"
            transform="rotate(45.001 729.643 387.48)"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            d="M227.104 256.264v14.312M227.104 288.73v14.313M206.848 267.959l12.395 7.156M234.965 284.192l12.395 7.156M206.848 291.348l12.395-7.156M234.965 275.115l12.395-7.156M853.139 317.391v9.933M853.139 339.924v9.933M839.081 325.507l8.602 4.967M858.595 336.774l8.602 4.967M839.081 341.741l8.602-4.967M858.595 330.474l8.602-4.967"
          ></path>
          <circle cx="776.544" cy="464.767" r="15.135" fill="#f7bf46"></circle>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3"
            d="M776.544 442.811v12.117M776.544 474.606v12.117M757.528 453.788l10.495 6.059M785.065 469.687l10.495 6.059M757.528 476.403l10.495-6.716M785.065 459.847l10.495-6.059"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="4"
            d="M550.5 140.906v14.667M557.833 148.239h-14.666M889.667 655.122v14.667M897 662.455h-14.667M375.167 396.016v9M379.667 400.516h-9"
          ></path>
          <path
            fill="#f7bf46"
            d="M328.346 468.385h10.025v10.025h-10.025z"
            transform="rotate(45.001 333.366 473.396)"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="4"
            d="M112.147 431.231h26.324M147.471 431.231h10.128M126.775 443.987h29.256M684.183 555.094h26.324M719.507 555.094h10.128M698.811 565.85h29.255"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M765 784.221h41.256M221 784.221h82.667"
          ></path>
          <circle cx="700.47" cy="192.653" r="51.747" fill="#f7bf46"></circle>
          <circle cx="752.218" cy="151.65" r="51.747" fill="#f7bf46"></circle>
          <circle cx="823.935" cy="170.209" r="47.223" fill="#f7bf46"></circle>
          <circle cx="752.218" cy="221.976" r="51.534" fill="#f7bf46"></circle>
          <circle cx="807" cy="221.976" r="34.288" fill="#f7bf46"></circle>
          <path
            fill="#f7bf46"
            d="M698.804 327.625c0 7.825-1.956 12.491-9.781 12.491s-14.168-2.989-14.168-10.814 4.15-14.77 11.975-14.77c7.824 0 11.974 5.268 11.974 13.093zM726.923 288.73c0 11.752-2.938 18.76-14.69 18.76s-21.279-4.49-21.279-16.242 9.527-21.279 21.279-21.279 14.69 7.009 14.69 18.761z"
          ></path>
          <path
            fill="#fff"
            d="M717.039 640.193c.209 2.67.319 5.367.319 8.091 0 55.929-44.995 101.269-100.5 101.269-46.624 0-85.828-31.994-97.181-75.381 4.091 52.146 47.379 93.177 100.181 93.177 55.505 0 100.5-45.339 100.5-101.269 0-8.948-1.157-17.623-3.319-25.887z"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M717.039 640.193c.209 2.67.319 5.367.319 8.091 0 55.929-44.995 101.269-100.5 101.269-46.624 0-85.828-31.994-97.181-75.381 4.091 52.146 47.379 93.177 100.181 93.177 55.505 0 100.5-45.339 100.5-101.269 0-8.948-1.157-17.623-3.319-25.887z"
          ></path>
          <path
            fill="#fff"
            d="M541.328 549.247c-16.966-7.56-46.587 48.378-53.496 89.974-5.664 34.105-3.831 65.429 4.884 85.317l48.612-175.291z"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M541.328 549.247c-16.966-7.56-46.587 48.378-53.496 89.974-5.664 34.105-3.831 65.429 4.884 85.317l48.612-175.291z"
          ></path>
          <path
            fill="#fff"
            d="M593.709 549.247c16.966-7.56 46.587 48.378 53.495 89.974 5.664 34.105 3.831 65.429-4.884 85.317l-48.611-175.291z"
          ></path>
          <path
            fill="#d1d1d1"
            d="M639.871 625.844c-2.893-17.421-9.771-37.354-18.034-54.088 11.358 18.56 21.65 45.086 25.367 67.466 5.664 34.105 3.831 65.429-4.884 85.317l-5.22-18.824c6.861-19.916 7.942-48.732 2.771-79.871z"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M593.709 549.247c16.966-7.56 46.587 48.378 53.495 89.974 5.664 34.105 3.831 65.429-4.884 85.317l-48.611-175.291z"
          ></path>
          <path
            fill="#fff"
            d="M645.292 732c-1.071-16.632-44.293-196.779-56.041-205.779h-42.833c-11.748 9-54.97 189.147-56.041 205.779-1.331 20.665-8.133 52.221 31.188 52.221h92.541c39.319 0 32.517-31.556 31.186-52.221z"
          ></path>
          <path
            fill="#d1d1d1"
            d="M495.174 706.524s-3.069 26.393 11.667 36.129c11.592 7.659 21.776 10.766 40.923 14.309 10.254 1.898 21.487 2.691 21.487 2.691l1.25 23.708-81.405.625s-1.395-33.331.588-43.332c1.983-10.001 2.997-26.592 5.49-34.13z"
          ></path>
          <path
            fill="#d1d1d1"
            d="M641.36 706.524s3.069 26.393-11.667 36.129c-11.592 7.659-21.776 10.766-40.923 14.309-10.254 1.898-21.487 2.691-21.487 2.691l-1.25 23.708 81.405.625s1.395-33.331-.588-43.332c-1.983-10.001-2.997-26.592-5.49-34.13z"
          ></path>
          <path
            fill="#f7bf46"
            d="M603.644 562.529c-2.53-.684-4.933-1.057-7.037-1.057-12.15 0-21.943 6.47-21.943 21.524 0 15.054 21.943 32.991 34.093 32.991 3.285 0 6.398-.898 9.198-2.497-4.871-18.498-9.819-36.294-14.311-50.961zM511.126 692.088c13.518 0 24.477-13.282 24.477-29.667 0-15.738-10.112-28.606-22.89-29.598-4.985 19.603-9.681 39.05-13.47 55.534 3.519 2.373 7.569 3.731 11.883 3.731z"
          ></path>
          <path
            fill="#d1d1d1"
            d="M543.388 530.533s7.112 5.704 23.446 5.704c13.167 0 24.815-5.704 24.815-5.704l-.968-3.919-46.505-.039-.788 3.958z"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M645.292 732c-1.071-16.632-44.293-196.779-56.041-205.779h-42.833c-11.748 9-54.97 189.147-56.041 205.779-1.331 20.665-8.133 52.221 31.188 52.221h92.541c39.319 0 32.517-31.556 31.186-52.221z"
          ></path>
          <path
            fill="#fff"
            d="M642.957 454.222c-1.929-19.533-11.455-68.772-22.262-103.316-17.249-55.138-37.393-69.51-49.078-70.953-1.244-.154-3.782-.24-3.782-.24s-2.538.035-3.782.188c-11.685 1.443-31.829 15.736-49.078 70.875-10.806 34.544-20.333 83.917-22.262 103.45-4.34 43.957 16.816 68.285 44.161 71.76 7.821.994 23.221 1 30.961 1 7.74 0 23.14-.006 30.961-1 27.345-3.475 48.501-27.807 44.161-71.764z"
          ></path>
          <ellipse
            cx="567.835"
            cy="479.636"
            fill="#d1d1d1"
            rx="18.923"
            ry="14.854"
          ></ellipse>
          <path
            fill="#d1d1d1"
            d="M550.5 285.487s-9 33.895-27.833 43.698c4.771-10.814 11.3-23.698 11.3-23.698s11.2-18.5 16.533-20zM571.617 279.953s24.383 42.033 44.741 58.085c0 0-4.608-29.802-9.108-38.802s-26.517-22.066-35.633-19.283z"
          ></path>
          <path
            fill="#f7bf46"
            d="M519.81 441.344c39.326-16.94 62.783-50.226 52.393-74.347-7.281-16.904-29.26-24.805-55.292-22.199a319.58 319.58 0 0 0-1.937 5.978c-10.006 31.986-18.91 76.669-21.706 98.621 8.659-1.553 17.624-4.212 26.542-8.053z"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M624.138 487.056c-11.151 16.252-35.666 27.343-61.814 27.343-24.157 0-38.714-14.241-47.244-31.85"
          ></path>
          <ellipse
            cx="567.835"
            cy="477.023"
            fill="#00354c"
            rx="23.659"
            ry="12.241"
          ></ellipse>
          <path
            fill="#fff"
            d="M697.882 777.892c-15.204-14.311-44.369-21.358-72.931-19.212-24.446 1.837-42.506 10.099-49.624 21.079-1.225 1.889.283 4.448 2.618 4.448l115.45.014c4.634.001 7.301-3.681 4.487-6.329z"
          ></path>
          <path
            fill="#d1d1d1"
            d="M697.072 777.656a3.03 3.03 0 0 1-1.092.206l-115.45.014c-1.379 0-2.578-.331-3.516-.859-.326.29-.656.578-.971.874-2.814 2.648-.147 6.33 4.486 6.329l115.45-.014c2.335 0 3.843-2.559 2.618-4.448a25.804 25.804 0 0 0-1.525-2.102z"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M697.882 777.892c-15.204-14.311-44.369-21.358-72.931-19.212-24.446 1.837-42.506 10.099-49.624 21.079-1.225 1.889.283 4.448 2.618 4.448l115.45.014c4.634.001 7.301-3.681 4.487-6.329zM635.406 772.987v11"
          ></path>
          <path
            fill="#fff"
            d="M441.043 777.892c15.204-14.311 44.369-21.358 72.931-19.212 24.446 1.837 42.506 10.099 49.624 21.079 1.225 1.889-.283 4.448-2.618 4.448l-115.45.014c-4.634.001-7.301-3.681-4.487-6.329z"
          ></path>
          <path
            fill="#d1d1d1"
            d="M562.072 777.656a3.03 3.03 0 0 1-1.092.206l-115.45.014c-1.379 0-2.578-.331-3.516-.859-.326.29-.656.578-.971.874-2.814 2.648-.147 6.33 4.486 6.329l115.45-.014c2.335 0 3.843-2.559 2.618-4.448a25.804 25.804 0 0 0-1.525-2.102z"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M441.043 777.892c15.204-14.311 44.369-21.358 72.931-19.212 24.446 1.837 42.506 10.099 49.624 21.079 1.225 1.889-.283 4.448-2.618 4.448l-115.45.014c-4.634.001-7.301-3.681-4.487-6.329zM642.957 454.222c-1.929-19.533-11.455-68.772-22.262-103.316-17.249-55.138-37.393-69.51-49.078-70.953-1.244-.154-3.782-.24-3.782-.24s-2.538.035-3.782.188c-11.685 1.443-31.829 15.736-49.078 70.875-10.806 34.544-20.333 83.917-22.262 103.45-4.34 43.957 16.816 68.285 44.161 71.76 7.821.994 23.221 1 30.961 1 7.74 0 23.14-.006 30.961-1 27.345-3.475 48.501-27.807 44.161-71.764z"
          ></path>
          <path
            fill="#fff"
            d="M569.797 279.466s34.869-7.419 44.514-2.935c9.893 4.599 27.821 39.659 20.418 53.4-11.339 21.045-44.53-54.916-64.932-50.465z"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M569.797 279.466s34.869-7.419 44.514-2.935c9.893 4.599 27.821 39.659 20.418 53.4-11.339 21.045-44.53-54.916-64.932-50.465z"
          ></path>
          <path
            fill="#fff"
            d="m504.261 285.791 48.324-1.385s-44.798 48.154-65.468 58.564c-20.67 10.408.452-57.311 17.144-57.179z"
          ></path>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="m504.261 285.791 48.324-1.385s-44.798 48.154-65.468 58.564c-20.67 10.408.452-57.311 17.144-57.179z"
          ></path>
          <ellipse
            cx="548.672"
            cy="387.487"
            fill="#00354c"
            rx="5.037"
            ry="6.5"
          ></ellipse>
          <ellipse
            cx="590.922"
            cy="387.487"
            fill="#00354c"
            rx="5.037"
            ry="6.5"
          ></ellipse>
          <path
            fill="none"
            stroke="#00354c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="6"
            d="M392.333 784.221H739"
          ></path>
          <path
            fill="#f7bf46"
            d="M668.182 346.959c0 5.588-1.397 8.921-6.985 8.921s-10.119-2.135-10.119-7.723 4.53-10.119 10.119-10.119 6.985 3.333 6.985 8.921z"
          ></path>
          <path
            fill="#f6f6f4"
            d="M804.841 188.022a9.22 9.22 0 0 0 2.103-6.965c-.46-4.246-6.194-6.327-8.611-6.758-3.182-.567-9.862 2.325-9.862 7.79v.025c.004 1.304-.997 2.385-2.301 2.385h-45.467c-1.288 0-2.307-1.054-2.297-2.342.009-1.197-.228-2.456-.813-3.761-1.33-2.966-4.568-3.402-7.462-3.735-5.026-.58-10.253 1.948-10.253 7.427 0 2.263.814 4.332 2.163 5.938a2.95 2.95 0 0 1-.004 3.827 9.22 9.22 0 0 0-2.103 6.965c.46 4.246 4.459 5.98 8.263 6.401 5.009.555 10.209-1.967 10.209-7.432v-.025c-.004-1.304.997-2.385 2.301-2.385h45.467a2.304 2.304 0 0 1 2.297 2.34c-.01 1.205.231 2.472.826 3.786 1.341 2.96 5.983 3.738 7.821 4.071 3.187.578 9.881-2.317 9.881-7.788a9.197 9.197 0 0 0-2.163-5.938 2.95 2.95 0 0 1 .005-3.826z"
          ></path>
        </svg>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UserDonation;
