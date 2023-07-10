import { useState, useContext, useEffect } from 'react'
import './Player.css'
import { PlayerControls } from './Player/PlayerControls'
import { PlayerContext } from '../../context/PlayerProvider';

export const Player = () => {
	const { track } = useContext(PlayerContext);

	console.log(track);

	const [r, g, b] = track.colors;
	return (
		<>
			<div
				className='backPlayer'
				style={
					{
						backgroundImage: `url('${track.album.cover_big}')`,
						backgroundSize: `cover`,
						backgroundPosition: 'center',
					}
				}
			>

			</div>
			<div
				className="player"
				style={
					{
						backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`,
						backdropFilter: 'blur(10px)'
					}
				}
			>
				<div className="playerHeader flex center-y">
					<button>
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.7268 3.68664C13.106 3.28513 13.088 2.65222 12.6865 2.273C12.2849 1.89378 11.652 1.91185 11.2728 2.31337L2.77251 11.3134C2.40853 11.6987 2.40851 12.3012 2.77246 12.6866L11.2728 21.688C11.652 22.0896 12.2849 22.1077 12.6864 21.7285C13.0879 21.3493 13.1061 20.7164 12.7269 20.3149L4.87497 12.0001L12.7268 3.68664Z" /></svg>
					</button>
					<p>NOW PLAYING</p>
					<button>
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8Z" /><path d="M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z" /><path d="M10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18Z" /></svg>
					</button>
				</div>
				<img src={track.album.cover_big} alt="" />


				<PlayerControls />

			</div >
		</>
	)
}
