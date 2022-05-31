/* eslint-disable no-undef */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import UploadDialogueBox from "./UploadDialogueBox";

describe("ImageUploadProgress Component", () => {
  it("should match snapshot", () => {
    const test1 = jest.fn();
    const wrapper = render(
      <UploadDialogueBox progress={1} imageName={"a"} onClose={test1} />,
    );
    const closeButton = screen.getByTestId("close");
    fireEvent.click(closeButton);
    expect(test1).toBeCalledTimes(1);
    expect(wrapper).toBeTruthy;
    
  });
});
