/* eslint-disable no-unused-vars */
// ReleaseCard.jsx
import React from 'react'
import Button from '../atoms/Button'
import '../atoms/Button.css'
import { PropTypes } from 'prop-types'
import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'

function ReleaseCard({ title, artist, bandcampLink, coverImage, audioSrc }) {
    return (
        <div className="max-w-sm w-full  mx-auto text-center border text-white rounded-lg shadow bg-black border-gray-700">
            <h3 className="text-xl font-bold mt-2">{title}</h3>
            <h3 className="text-lg lg:h-auto sm:h-min font-bold mt-2">
                {artist}
            </h3>
            <img src={coverImage} alt={title} className="w-full" />
            <Player trackList={[{ url: audioSrc, title: title }]} />

            <div className="pb-4">
                <Button
                    href={bandcampLink}
                    onClick={() => {}}
                    className="btn w-16 justify-center btn-buy !p-1"
                >
                    BUY
                </Button>
            </div>
        </div>
    )
}

ReleaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    audioSrc: PropTypes.string.isRequired,
}

export default ReleaseCard
