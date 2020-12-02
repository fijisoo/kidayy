import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../modules/Layout";
import CmsContent, { HTMLContent } from "../components/CmsContent";
import "./styles/blog-post.scss";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || CmsContent;

  return (
    <section className="blog-post-wrapper">
      {helmet || ""}
      <div className="blog-post">
        <div className="blog-post__content">
          <h1 className="blog-post__content-header">{title}</h1>
          {description && (
            <p className="blog-post__content-description">[{description}]</p>
          )}
          <PostContent content={content} className="blog-post__content-cms" />
          {tags && tags.length ? (
            <div
              className="blog-post__content-tags"
              style={{ marginTop: `4rem` }}
            >
              <h4 className="blog-post__content-tags-header">Tags</h4>
              <ul className="blog-post__content-tags-contener">
                {tags.map((tag) => (
                  <li className="blog-post__content-tags-contener-item" key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
