import React from "react";
import BlogCard from "../../components/BlogCard";
import ActionBlogCard from "../../components/ActionBlogCardWrapper";

import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "./blog-roll.scss";
import FBPost from "../../components/BlogCard/fb-post";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;

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
                    <FBPost
                      post={post}
                      {...props}
                    />
                  ) : (
                    <BlogCard post={post} {...props} />
                  );
                }}
              />
            );
          })}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
