import { postsFixture } from "@/pages/api/fixtures/posts.fixture";
import Content from "@/pages/content";
import { render, screen } from "@testing-library/react";

describe("Content page", () => {
  const componentTestId = "content-post-list";
  const posts = postsFixture;
  it("Should render correctly", () => {
    render(<Content posts={posts.items} />);
    expect(screen.findByTestId(componentTestId)).toBeTruthy();
  });
});
