import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";
import { SocialIcon } from "react-social-icons";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata; // { author, social }
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong>. {author.summary}
        {` `}
        {/* {
          <SocialIcon
            url="https://github.com/zamudio"
            style={{ height: 25, width: 25, textDecoration: "none" }}
          />
        }
        {
          <SocialIcon
            url="https://www.linkedin.com/in/michael-zamudio-878672197/"
            style={{ height: 25, width: 25, textDecoration: "none" }}
          />
        } */}
      </p>
    </div>
  );
};

export default Bio;
