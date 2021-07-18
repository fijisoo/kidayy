import React from "react";
import BlogCard from "../../components/BlogCard";
import ActionBlogCard from "../../components/ActionBlogCardWrapper";

import PropTypes from "prop-types";
import "./blog-roll.scss";
import FBPost from "../../components/BlogCard/fb-post";

export const BlogRollComponent = (props) => {
  const { data } = props;

  if (!data) {
    return null;
  }

  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="articles-wrapper">
      {posts &&
        posts.map(({ node: post }) => {
          return (
            <ActionBlogCard
              tags={post?.frontmatter?.tags || []}
              withDoot={false} // TODO beta
              withHashTags={false} // TODO beta
              component={(props) => {
                return post?.frontmatter?.tags.includes("facebook") ? (
                  <FBPost post={post} {...props} />
                ) : (
                  <BlogCard post={post} {...props} />
                );
              }}
            />
          );
        })}
    </div>
  );
};

BlogRollComponent.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
