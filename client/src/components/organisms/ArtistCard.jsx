/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faSoundcloud,
  faBandcamp,
} from "@fortawesome/free-brands-svg-icons";

const ArtistCard = ({ artist }) => {
  const { id, artist_name, image, twitter_link, instagram_link, facebook_link, soundcloud_link, bandcamp_link } = artist

  return (
    <div className="bg-black max-w-sm border border-gray-200 rounded-lg shadow dark:border-purple-500">
      <Link to={`/artists/${id}`} className="block">
        <div className="w-full rounded-t-lg overflow-hidden" >
        <img className="rounded-t-lg" src={`http://localhost:3000/${image}`} alt={artist_name} />
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center ">
          {artist_name}
        </h5>
      </Link>
      <div className="flex space-x-4 text-2xl justify-center my-2">
        {twitter_link && (
          <a
            href={twitter_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Twitter Profile"
            className="text-gray-400 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-300"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
        {instagram_link && (
          <a
            href={instagram_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Twitter Profile"
            className="text-gray-400 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-300"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        )}
        {facebook_link && (
          <a
            href={facebook_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Twitter Profile"
            className="text-gray-400 dark:text-gray-400 hover:text-blue-800 dark:hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        )}
        {soundcloud_link && (
          <a
            href={soundcloud_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Twitter Profile"
            className="text-gray-400 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
          >
            <FontAwesomeIcon icon={faSoundcloud} />
          </a>
        )}
        {bandcamp_link && (
          <a
            href={bandcamp_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Twitter Profile"
            className="text-gray-400 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500"
          >
            <FontAwesomeIcon icon={faBandcamp} />
          </a>
        )}
      </div>
    </div>
  );
}

export default ArtistCard;
