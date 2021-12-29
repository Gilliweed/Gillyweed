import React from "react";
import Link from "@mui/material/Link";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  LinkedIn,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Art = (props) => {
  return (
    <div className="pt-4">
      <div className="max-w-3xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="/#">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="grid gird-rows-2 p-2 border-bottom">
          <div className="cols-end text-black-500 text-3xl p-3">
            <h3>Tips For Business Success 2017: Why To Online</h3>
          </div>
          <div className="flex flex-row p-2 ml-2.5 space-x-4 text-gray-500">
            <h4>Posted By Admin</h4>
            <h4>on 29 December</h4>
            <h4>Tag : Climate , Carbon</h4>
          </div>
        </div>
        <div className="p-4 border-bottom">
          <h2 className="pb-2 text-black text-xl ">What its Mean</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex. Commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
          <h4>Our</h4>
        </div>
        <div className="p-4 border-bottom">
          <h2 className="pb-2 text-black text-2xl ">Causes</h2>
          <h3 className="pb-2 text-black text-xl pt-3">Cause 1</h3>
          <p className="ml-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex. Commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
          <h3 className="pb-2 text-black text-xl pt-4">Cause 2</h3>
          <p className="ml-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex. Commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
        </div>
        <div className="p-4 border-bottom">
          <h2 className="pb-2 text-black text-2xl ">Solutions</h2>
          <h3 className="pb-2 text-black text-xl pt-3">Solution 1</h3>
          <p className="ml-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex. Commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
          <h3 className="pb-2 text-black text-xl pt-4">Solution 2</h3>
          <p className="ml-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex. Commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </p>
        </div>
      </div>
      <diV className="p-4 border-bottom">
        <div className="flex flex-row">
          <h3 className="text-xl text-black-100 mr-3 mt-1 ">Share :</h3>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="3B5888">
              <LinkedIn />
            </SocialIcon>
          </SocialContainer>
          <div className="flex flex-row">
            <h3 className="text-xl text-black-100 ml-5 mr-3 mt-1">Tags:</h3>
            <button className="border-1 border-gray-200 px-2 rounded-full text-gray-500 hover:bg-red-500 hover:text-white">
              Climate
            </button>
            <button className="border-1 border-gray-200 px-2 rounded-full text-gray-500 ml-3 hover:bg-red-500 hover:text-white">
              Awareness
            </button>
          </div>
        </div>
      </diV>
    </div>
  );
};

export default Art;
