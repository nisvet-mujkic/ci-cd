import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Note from "./Note";

/**
 * @jest-environment node || jsdom
 */

test("renders content", () => {
  const note = {
    content: "Hello thedre!",
  };

  render(<Note content={note.content} />);

  const element = screen.getByText("Hello there!");
  expect(element).toBeDefined();
});
