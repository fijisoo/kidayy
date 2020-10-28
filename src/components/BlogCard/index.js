import React from "react";
import Image from "../Image/Image";
import { Link } from "gatsby";
import { Button } from "../Button/Button";
import cn from "classnames";

import './blog-card.scss';

const BlogCard = ({post}) => {

  if(!post.excerpt){
    return <article
        className={cn("blog-item", {
          "blog-item--featured": post.frontmatter.featuredpost,
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
  }

  return (
      <article
          className={cn("blog-item", {
            "blog-item--featured": post.frontmatter.featuredpost,
          })}
      >
        <header className="blog-item__header">
          {post.frontmatter.featuredimage && (
              <div className="image-wrapper">
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
          <Link className="blog-item__description-title" to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
          <span className="blog-item__description-text">{post.excerpt}</span>
          <Button
              className="blog-item__description-link"
              link={post.fields.slug}
              text="ENTRANCE"
          />
        </p>
      </article>
  );
}

export default BlogCard;
