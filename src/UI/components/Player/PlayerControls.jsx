import { useRef, useContext, useState, useEffect } from "react";
import { PlayerContext } from "../../../context/PlayerProvider";
import { formatTime } from "../../../helpers/formatTime";
import { getSong } from "../../../helpers/getSong";

export const PlayerControls = () => {
    const audioRef = useRef({ current: { currentTime: 0, duration: 0 } });

    const [paused, setPaused] = useState(true)
    const [timePlaying, setTimePlaying] = useState({ current: 0, duration: 0 })

    const { track , setTrack } = useContext(PlayerContext);
    const [r, g, b] = track.colors;

    const playSvg = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.27368C5 3.56682 6.82609 2.48151 8.32538 3.2973L20.687 10.0235C22.2531 10.8756 22.2531 13.124 20.687 13.9762L8.32538 20.7024C6.82609 21.5181 5 20.4328 5 18.726V5.27368Z" /></svg>;
    const pauseSvg = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.74609 3C4.7796 3 3.99609 3.7835 3.99609 4.75V19.25C3.99609 20.2165 4.7796 21 5.74609 21H9.24609C10.2126 21 10.9961 20.2165 10.9961 19.25V4.75C10.9961 3.7835 10.2126 3 9.24609 3H5.74609Z" /><path d="M14.7461 3C13.7796 3 12.9961 3.7835 12.9961 4.75V19.25C12.9961 20.2165 13.7796 21 14.7461 21H18.2461C19.2126 21 19.9961 20.2165 19.9961 19.25V4.75C19.9961 3.7835 19.2126 3 18.2461 3H14.7461Z" /></svg>

    const handlePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setPaused(audioRef.current?.paused);
    }

    const handleTimeUpdate = ({ target }) => {
        setTimePlaying({
            current: target.currentTime,
            duration: isNaN(target.duration) ? 0 : target.duration,
        })
    }

    const handleFullSong = () => {
        document.location.assign(track.link)
    }

    const handleSongLoad = () => {
        if(!track) return;
        if (!track.preview && track.id) {
            const fetchSong = async () => {
                const song = await getSong(track.id);
                song.colors = track.colors;
                console.log(song);
                setTrack(song)
            }
            return fetchSong();
        }
        audioRef.current.pause();
        setPaused(audioRef.current?.paused);
        audioRef.current.load();
        setTimePlaying({ current: 0, duration: 30 })
        audioRef.current.play();
        setPaused(false);
    }

    useEffect(() => {
        handleSongLoad();
    }, [track])

    return (
        <>
            <div className="playerInfo">
                <div className='playerData'>
                    <div className='actualSongData'>
                        <p className='actualSongName'>{track.title}</p>
                        <p className='actualSongArtist'>{track.artist.name}</p>
                    </div>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8199 5.57912L11.9992 6.40163L11.1759 5.57838C9.07688 3.47931 5.67361 3.47931 3.57455 5.57838C1.47548 7.67744 1.47548 11.0807 3.57455 13.1798L11.4699 21.0751C11.7628 21.368 12.2377 21.368 12.5306 21.0751L20.432 13.1783C22.5264 11.0723 22.53 7.67857 20.4306 5.57912C18.3277 3.47623 14.9228 3.47623 12.8199 5.57912Z" /></svg>
                </div>
                <div id='progressBar'>
                    <div id='progress' style={{ width: `${timePlaying.current * 100 / timePlaying.duration}%` }}>
                        <div id='progressHandle'></div>
                    </div>
                </div>
                <div className='duration'>
                    <p id='timeProgress'>{formatTime(timePlaying.current)}</p>
                    <p id='time'>{formatTime(timePlaying.duration)}</p>
                </div>
            </div>
            <div className='playerControls' style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`, }}>
                <audio ref={audioRef} src={track.preview} onTimeUpdate={handleTimeUpdate} />
                <button className='borderControl'>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7123 2.28878L14.6251 2.21113C14.2326 1.90052 13.6607 1.92641 13.2981 2.28878L13.2204 2.37594C12.9096 2.76818 12.9355 3.33963 13.2981 3.702L14.597 4.99899L8.99921 4.99919L8.75859 5.00325C5.00445 5.12998 2 8.21112 2 11.9935C2 13.4382 2.43833 14.7806 3.18863 15.8918C3.37024 16.1432 3.666 16.3068 4 16.3068C4.55228 16.3068 5 15.8594 5 15.3075C5 15.0914 4.93132 14.8912 4.81525 14.7288L4.68008 14.5107C4.24775 13.7716 4 12.9114 4 11.9935C4 9.23444 6.23822 6.99779 8.99921 6.99779L14.595 6.99758L13.2981 8.29497L13.2204 8.38213C12.9096 8.77438 12.9355 9.34582 13.2981 9.7082C13.6886 10.0984 14.3218 10.0984 14.7123 9.7082L17.7175 6.7051L17.7952 6.61794C18.106 6.2257 18.0801 5.65425 17.7175 5.29188L14.7123 2.28878ZM20.7865 8.06013C20.6034 7.82751 20.3191 7.67811 20 7.67811C19.4477 7.67811 19 8.12551 19 8.67741C19 8.88559 19.0637 9.0789 19.1717 9.23841C19.6952 10.0282 20 10.9753 20 11.9935C20 14.7525 17.7618 16.9892 15.0008 16.9892L9.415 16.9886L10.7087 15.6972L10.7923 15.6025C11.0733 15.2408 11.0713 14.7307 10.7864 14.3712L10.7087 14.284L10.6139 14.2004C10.252 13.9196 9.7415 13.9216 9.38169 14.2063L9.29447 14.284L6.28926 17.2871L6.20562 17.3818C5.92465 17.7435 5.92663 18.2536 6.21156 18.6132L6.28926 18.7003L9.29447 21.7034L9.38867 21.7865C9.78097 22.0913 10.3482 22.0636 10.7087 21.7034C11.0713 21.341 11.0972 20.7696 10.7864 20.3773L10.7087 20.2902L9.405 18.9872L15.0008 18.9878L15.2414 18.9837C18.9956 18.857 22 15.7759 22 11.9935C22 10.5336 21.5524 9.17809 20.7868 8.05666L20.7865 8.06013Z" /></svg>
                </button>
                <button>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 20C2.75 20.5523 3.19772 21 3.75 21C4.30228 21 4.75 20.5523 4.75 20L4.75 4C4.75 3.44772 4.30229 3 3.75 3C3.19772 3 2.75 3.44772 2.75 4V20Z" /><path d="M20.75 19.0526C20.75 20.4774 19.1383 21.305 17.9803 20.4748L7.51062 12.9682C6.50574 12.2477 6.54467 10.7407 7.5854 10.073L18.0551 3.35665C19.2198 2.60946 20.75 3.44583 20.75 4.82961L20.75 19.0526Z" /></svg>
                </button>
                <button onClick={handlePlayPause}>
                    {!paused ? pauseSvg : playSvg}
                </button>
                <button>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 4C21 3.44772 20.5523 3 20 3C19.4477 3 19 3.44772 19 4V20C19 20.5523 19.4477 21 20 21C20.5523 21 21 20.5523 21 20V4Z" /><path d="M3 4.94743C3 3.5226 4.61175 2.69498 5.7697 3.52521L16.2394 11.0318C17.2443 11.7523 17.2053 13.2593 16.1646 13.927L5.69492 20.6434C4.53019 21.3905 3 20.5542 3 19.1704V4.94743Z" /></svg>
                </button>
                <button className='borderControl'>
                    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M32,72H55.1a64,64,0,0,1,52,26.8l41.8,58.4a64,64,0,0,0,52,26.8H232" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polyline points="208 48 232 72 208 96" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polyline points="208 160 232 184 208 208" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M147.7,100.5l1.2-1.7a64,64,0,0,1,52-26.8H232" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M32,184H55.1a64,64,0,0,0,52-26.8l1.2-1.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                </button>
            </div>
            <div className='fullSong' onClick={handleFullSong} style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`, }}>
                Escuchar completa en Deezer
            </div>
        </>
    )
}
