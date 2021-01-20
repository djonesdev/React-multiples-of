import React from "react";
import renderer from "react-test-renderer";
import Card from "../Card";

test("Card renders correctly with callback props", () => {
    const mockFunc = jest.fn()
  const component = renderer.create(
    <Card onClick={mockFunc} page="http://www.facebook.com">
      <p>Some Test Content</p>
    </Card>
  );

  //Checks render
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Checks callback was called
  tree.props.onClick();
  expect(mockFunc).toBeCalledTimes(1)
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
