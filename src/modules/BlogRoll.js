import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import Image from "../components/Image/Image";
import cn from "classnames";
import "./blog-roll.scss";
import { Button } from "../components/Button/Button";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="articles-wrapper">
        {posts &&
          posts.map(({ node: post }) => (
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
                  <span className="">
                    ~ {post.frontmatter.author || "HOST"}
                  </span>
                </p>
              </header>
              <p className="blog-item__description">
                <Link
                  className="blog-item__description-title"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
                <span className="blog-item__description-text">
                  {post.excerpt}
                </span>
                <Button
                  className="blog-item__description-link"
                  link={post.fields.slug}
                  text="ENTRANCE"
                />
              </p>
            </article>
          ))}
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
                    fluid(maxWidth: 120, quality: 100) {
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
