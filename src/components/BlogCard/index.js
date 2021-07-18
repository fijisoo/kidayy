import React, { useEffect, useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";
import cn from "classnames";

import Image from "../Image";
import { Link } from "gatsby";
import { ButtonWithLeftArrow } from "../Button/ButtonWithLeftArrow";
import { tagsColors, tagsColorsBlurred } from "../../utlis/tagsColors";
import { useResizeObserver } from "../../utlis/hooks/handleElementsSize";
import { Button } from "../Button";

import "./blog-card.scss";

const BlogCard = ({ post, isSocialToggled, mainTag }) => {
  const mainColorBlurred = tagsColorsBlurred[mainTag];
  const mainColor = tagsColors[mainTag];

  const [isCardFlipped, flipCard] = useState(false);
  const [articleHeight, setArticleHeight] = useState(0);
  const articleRef = useRef(null);
  const IFrameRef = useRef(null);

  const [IFrameWidth] = useResizeObserver(IFrameRef);
  const linkAddr = post.fields.slug.replace("/blog", "");

  const leftArrowClick = () => {
    flipCard((el) => !el);
  };
  useEffect(() => {
    if (articleRef.current) {
      setArticleHeight(articleRef.current.clientHeight + 0);
    }
  }, []);

  if (!post.frontmatter.featuredimage && !post.excerpt) {
    const mainColorBlurredTitleBackground = tagsColorsBlurred["angery"];
    return (
      <article
        style={{
          borderColor: mainColorBlurred || mainColorBlurredTitleBackground,
        }}
        className={cn("blog-item", "blog-item-only-title", {
          "blog-item--social-toggled": isSocialToggled,
        })}
      >
        <p className="blog-item__description blog-item__description--only-title">
          <span className="blog-item__description-title">
            {post.frontmatter.title}
          </span>
        </p>
      </article>
    );
  }

  if (!post.excerpt) {
    return (
      <article
        data-mainColor={mainColorBlurred}
        style={{ borderColor: mainColorBlurred }}
        className={cn("blog-item", {
          "blog-item--featured": post.frontmatter.featuredpost,
          "blog-item--social-toggled": isSocialToggled,
          [`blog-item--${mainColorBlurred}`]: isSocialToggled,
        })}
      >
        <Image
          className="blog-item__image blog-item__image--full-size"
          imageInfo={{
            image: post.frontmatter.featuredimage,
            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
          }}
        />
      </article>
    );
  }

  if (!post.frontmatter.externalVideo) {
    return (
      <article
        style={{ borderColor: mainColorBlurred }}
        className={cn("blog-item", "blog-item--with-content", {
          "blog-item--social-toggled": isSocialToggled,
          "blog-item--featured": post.frontmatter.featuredpost,
        })}
        ref={articleRef}
      >
        <header className="blog-item__header">
          {post.frontmatter.featuredimage && (
            <div className="image-wrapper" style={{ ["--color"]: mainColor }}>
              <Image
                className="blog-item__image"
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                }}
              />
            </div>
          )}
          <p className="blog-item__header-meta">
            <span className="">{post.frontmatter.date}</span>
            <span className="">~ {post.frontmatter.author || "HOST"}</span>
          </p>
        </header>
        <p className="blog-item__description">
          <Link className="blog-item__description-title" to={linkAddr}>
            {post.frontmatter.title}
          </Link>
          <span className="blog-item__description-text">{post.excerpt}</span>
          <Button
            className="blog-item__description-link"
            link={linkAddr}
            text="ENTRANCE"
          />
        </p>
      </article>
    );
  }

  return (
    <ReactCardFlip
      containerStyle={{
        minHeight: articleHeight,
        transition: "all 0.2s",
      }}
      cardStyles={{back: {marginBottom: '1px'}}}
      isFlipped={isCardFlipped}
      flipDirection="vertical"
    >
      <article
        style={{ borderColor: mainColorBlurred }}
        className={cn("blog-item", "blog-item--with-content", "blog-item--flipped", {
          "blog-item--social-toggled": isSocialToggled,
          "blog-item--featured": post.frontmatter.featuredpost,
        })}
        ref={articleRef}
      >
        <header className="blog-item__header">
          {post.frontmatter.featuredimage && (
            <div className="image-wrapper" style={{ ["--color"]: mainColor }}>
              <Image
                className="blog-item__image"
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                }}
              />
            </div>
          )}
          <p className="blog-item__header-meta">
            <span className="">{post.frontmatter.date}</span>
            <span className="">~ {post.frontmatter.author || "HOST"}</span>
          </p>
        </header>
        <p className="blog-item__description">
          <Link className="blog-item__description-title" to={linkAddr}>
            {post.frontmatter.title}
          </Link>
          <span className="blog-item__description-text">{post.excerpt}</span>
          <ButtonWithLeftArrow
            className="blog-item__description-link"
            link={linkAddr}
            text="ENTRANCE"
            handleLeftArrowClick={leftArrowClick}
          />
        </p>
      </article>
      <article
        style={{ borderColor: mainColorBlurred }}
        className={cn(
          "blog-item",
          "blog-item--with-content",
          "blog-item--flipped",
          {
            "blog-item--social-toggled": isSocialToggled,
            "blog-item--featured": post.frontmatter.featuredpost,
          }
        )}
      >
        <iframe
          ref={IFrameRef}
          style={{ marginTop: "40px" }}
          height={IFrameWidth / 1.77777}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          type="text/html"
          src={`https://www.youtube.com/embed/${
            post.frontmatter.externalVideo
          }?autoplay=${
            isCardFlipped ? 1 : 0
          }&modestbranding=1&autohide=1&showinfo=0&controls=0`}
        />
        <p className="blog-item__description blog-item__description--flipped">
          <ButtonWithLeftArrow
            className="blog-item__description-link"
            link={linkAddr}
            text="ENTRANCE"
            handleLeftArrowClick={leftArrowClick}
          />
        </p>
      </article>
    </ReactCardFlip>
  );
};

export default BlogCard;
