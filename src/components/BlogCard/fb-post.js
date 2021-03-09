import React, { useEffect } from "react";
import cn from "classnames";

import "./blog-card.scss";
import { tagsColors, tagsColorsBlurred } from "../../utlis/tagsColors";

const FBPost = ({
  width = 500,
  dataShowText = false,
  mainTag,
  isSocialToggled,
  post,
}) => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);
  const mainColorBlurred = tagsColorsBlurred[mainTag];
  const mainColorBlurredTitleBackground = tagsColorsBlurred["angery"];
  return (
    <article
      style={
        {
          // borderColor: mainColorBlurred || mainColorBlurredTitleBackground,
        }
      }
      className={cn("blog-item", "blog-item-only-title", {
        "blog-item--social-toggled": isSocialToggled,
      })}
    >
      <div
        className="fb-video"
        data-href={post.frontmatter.description}
        data-width={width}
        data-show-text={dataShowText}
      />
    </article>
  );
};

export default FBPost;
