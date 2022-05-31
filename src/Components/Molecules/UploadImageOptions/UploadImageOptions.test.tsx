import React from "react";
import { describe, it } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import UploadImage from "assets/upload.png";
import BoxIcon from "assets/lock-icon.svg";
import ThreeDots from "assets/more.png";
import LockIcon from "assets/Boxplus-icon.svg";
import "@testing-library/jest-dom";
import UploadImageOptions from "./UploadImageOptions";

describe("ImageUploadOptions  Component", () => {
  const test1 = jest.fn();
  const options = [
    {
      src: UploadImage,
      action: test1,
    },
    {
      src: BoxIcon ,
    },
    {
      src:LockIcon ,
    },
    {
      src:ThreeDots ,
    },
  ];
  it("should match snapshot", () => {
    const wrapper = render(<UploadImageOptions options={options} />);

    expect(wrapper).toBeTruthy;
  });
  it("when click on upload button should call the function", () => {
    const wrapper = render(<UploadImageOptions options={options} />);
    const uploadButton = screen.getByTestId("icon0");
    fireEvent.click(uploadButton);
    expect(test1).toBeCalledTimes(1);
  });
});
