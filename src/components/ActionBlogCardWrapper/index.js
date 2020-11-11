import React, { useEffect, useState } from "react";
import { TagCircle } from "../TagCircle";
import Doot from "../../img/doot.svg";
import cn from "classnames";
import { navigate } from "gatsby";
import { tagsColors, tagsColorsBlurred } from "../../utlis/tagsColors";

import "./action-blog-card.scss";

const ActionBlogCard = ({
  component: Component,
  withDoot,
  withHashTags,
  tags,
}) => {
  const [socialToggled, setSocialToggled] = useState(false);
  const [hoveredTag, setHoveredTag] = useState("");

  const handleDootToggle = () => {
    setSocialToggled((prevState) => !prevState);
  };

  const handleCircleClick = (tag) => {
    navigate(`/tags/${tag}`);
  };

  const handleCircleHover = (tag) => {
    setHoveredTag(tag);
  };

  const handleCircleLeave = () => {
    setHoveredTag("");
  };

  return (
    <div className="action-blog-card-block">
      <div className="action-blog-card">
        <div className="action-blog-card__hashtags">
          {withHashTags && (
            <div className="action-blog-card__hashtags-content">
              {tags.map((tag) => (
                <div className="action-blog-card__hashtags-content-item">
                  <TagCircle
                    color={tagsColors[tag]}
                    tag={tag}
                    handleHover={handleCircleHover}
                    handleLeave={handleCircleLeave}
                    handleClick={() => handleCircleClick(tag)}
                  />
                </div>
              ))}
              {hoveredTag && (
                <div className="action-blog-card__hashtags-content-active-tag">
                  #{hoveredTag}
                </div>
              )}
            </div>
          )}
          <Component
            isSocialToggled={socialToggled}
            mainColor={tagsColorsBlurred[tags[0]]}
          />
        </div>
        {withDoot && (
          <div
            className={cn("action-blog-card__doot", {
              "action-blog-card__doot--active": socialToggled,
            })}
          >
            <Doot onClick={handleDootToggle} />
            {/*{socialToggled && (*/}
            {/*  <div className="action-blog-card__doot-social">*/}
            {/*    <p>F</p>*/}
            {/*    <p>T</p>*/}
            {/*  </div>*/}
            {/*)}*/}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionBlogCard;
